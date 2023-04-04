import React, { useRef, useEffect, useState } from 'react';
import * as poseDetection from '@mediapipe/pose';
import * as CameraUtils from '@mediapipe/camera_utils';
import drawingUtils from '@mediapipe/drawing_utils';

import getChecKeypoint from '../utils/CheckPositionSingleton';
import PositionCanvas from './PositionCanvas';

function Camera(props) {
  const videoRef = useRef();
  const canvasRef = useRef();

  const canvasCtxRef = useRef();
  const poseRef = useRef();
  const [init, setInit] = useState(false);
  const [init2, setInit2] = useState(false);
  const [isValidPosition, setIsValidPosition] = useState(false);

  const style = {
    video: {
      position: 'absolute',
      width: props.width,
      height: props.height,
      objectFit: 'cover',
      left: 0,
    },
    canvas: {
      position: 'absolute',
      width: props.width,
      height: props.height,
      left: 0,
    },
  };
  const options = {
    modelComplexity: 1,
    enableSegmentation: true,
    smoothLandmarks: true,
    minDetectionConfidence: 0.5,
    minTrackingConfidence: 0.5,
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = 640;
    canvas.height = 480;
    canvasCtxRef.current = canvas.getContext('2d');
    const pose = new poseDetection.Pose({
      locateFile: (file) => {
        console.log('file', file);
        return `${file}`;
      },
    });
    const checkKeypoint = getChecKeypoint({ width: 640, height: 480 });

    pose.setOptions(options);
    // console.log("init",pose);
    pose.onResults((results) => {
      const { poseLandmarks: keypoints } = results;

      if (keypoints) {
        const isInSafe = checkKeypoint.checkPosition({ keypoints });
        setIsValidPosition(isInSafe);
        const canvasCtx = canvasCtxRef.current;
        canvasCtx.save();
        canvasCtx.clearRect(
          0,
          0,
          canvasRef.current.width,
          canvasRef.current.height
        );
        drawingUtils.drawConnectors(
          canvasCtx,
          keypoints,
          poseDetection.POSE_CONNECTIONS,
          { visibilityMin: 0.65, color: 'white' }
        );
        drawingUtils.drawLandmarks(
          canvasCtx,
          Object.values(poseDetection.POSE_LANDMARKS_LEFT).map(
            (index) => keypoints[index]
          ),
          { visibilityMin: 0.65, color: 'white', fillColor: 'rgb(255,138,0)' }
        );
        drawingUtils.drawLandmarks(
          canvasCtx,
          Object.values(poseDetection.POSE_LANDMARKS_RIGHT).map(
            (index) => keypoints[index]
          ),
          { visibilityMin: 0.65, color: 'white', fillColor: 'rgb(0,217,231)' }
        );
        drawingUtils.drawLandmarks(
          canvasCtx,
          Object.values(poseDetection.POSE_LANDMARKS_NEUTRAL).map(
            (index) => keypoints[index]
          ),
          { visibilityMin: 0.65, color: 'white', fillColor: 'white' }
        );
        canvasCtx.restore();
      }

      // console.log("resules",results);
      // canvas.width = 640;
      // canvas.height = 480;
      // canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);
      // poseDetection.draw.drawConnectors(
      //   canvas.getContext('2d'),
      //   results.poseLandmarks,
      //   poseDetection.POSE_CONNECTIONS,
      //   { color: '#00FF00', lineWidth: 2 }
      // );
      // poseDetection.draw.drawLandmarks(
      //   canvas.getContext('2d'),
      //   results.poseLandmarks,
      //   { color: '#FF0000', lineWidth: 2 }
      // );
    });
    setInit(true);
    poseRef.current = pose;
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    const pose = poseRef.current;
    const canvasCtx = canvasCtxRef.current;

    if (video && canvasCtx && pose && !init2 && init) {
      const camera = new CameraUtils.Camera(video, {
        onFrame: async () => {
          await pose.send({ image: video });
        },
        width: 640,
        height: 480,
      });
      camera.start();
      setInit2(true);
    }
  }, [videoRef, canvasCtxRef, poseRef, init]);

  return (
    <div className='PoseEstimation'>
      <video ref={videoRef} className='Video' style={style.video} playsInline />
      <canvas ref={canvasRef} className='Canvas' style={style.canvas} />
      <PositionCanvas isVisible={true} isValidPosition={isValidPosition} />
    </div>
  );
}

export default Camera;

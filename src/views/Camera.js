import React, { useRef, useEffect, useState } from 'react';
import * as poseDetection from '@mediapipe/pose';
import * as CameraUtils from '@mediapipe/camera_utils';

import getChecKeypoint from '../utils/CheckPositionSingleton';
import PositionCanvas from './PositionCanvas';
import KeypointsCanvas from './KeypointsCanvas';

function Camera(props) {
  const { showCamera, onResult } = props;
  const videoRef = useRef();
  // const canvasRef = useRef();

  // const canvasCtxRef = useRef();
  const poseRef = useRef();
  const [keypoints, setKeypoints] = useState();
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

      onResult(keypoints);

      if (keypoints) {
        setKeypoints(keypoints);
        const isInSafe = checkKeypoint.checkPosition({ keypoints });
        setIsValidPosition(isInSafe);
      }
    });
    setInit(true);
    poseRef.current = pose;
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    const pose = poseRef.current;

    if (video && pose && !init2 && init) {
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
  }, [videoRef, poseRef, init]);

  return (
    <div
      className='PoseEstimation'
      style={{ display: showCamera ? 'block' : 'none' }}
    >
      <video ref={videoRef} className='Video' style={style.video} playsInline />
      {/* <canvas ref={canvasRef} className='Canvas' style={style.canvas} /> */}
      <KeypointsCanvas isVisible={true} keypoints={keypoints} />
      <PositionCanvas isVisible={true} isValidPosition={isValidPosition} />
    </div>
  );
}

export default Camera;

import React, { useRef, useEffect, useState } from 'react';
import * as poseDetection from '@mediapipe/pose';
import * as CameraUtils from '@mediapipe/camera_utils';

const Camera = () => {
  const videoRef = useRef();
  const canvasRef = useRef();
  const poseRef = useRef();
  const [init, setInit] = useState(false);
  const [init2, setInit2] = useState(false);

  const style = {
    video: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      left:0,
    },
    canvas: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      left:0,
    }
  }
  const options = {
    modelComplexity: 1,
    enableSegmentation: true,
    smoothLandmarks: true,
    minDetectionConfidence: 0.5,
    minTrackingConfidence: 0.5
  };

  useEffect(() => {
    const pose = new poseDetection.Pose({
      locateFile: (file) => {
        console.log("file",file);
        return `https://cdn.jsdelivr.net/npm/@mediapipe/pose@${poseDetection.VERSION}/${file}`;
      }
    });
    pose.setOptions(options)
    console.log("init",pose);
    pose.onResults((results) => {
      console.log("resules",results);
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
    console.log("init");
    poseRef.current = pose;

  }, []);

  useEffect(() => {

    const video = videoRef.current;
    const canvas = canvasRef.current;
    const pose = poseRef.current;

    if (video && canvas && pose && !init2 && init) {
      const camera = new CameraUtils.Camera(video, {
        onFrame: async () => {
          init && console.log("start frame", video);
          init && await pose.send({ image: video });
          init && console.log("end frame");
        },
        width: 640,
        height: 480
      });
      camera.start();
      setInit2(true)
      console.log("init camera",pose);
    }
  }, [videoRef, canvasRef, poseRef,init]);

  return (
    <div className="PoseEstimation" >
      <video ref={videoRef} className="Video" style={style.video} playsInline />
      <canvas ref={canvasRef} className="Canvas"  style={style.canvas}/>
    </div>
  );
};

export default Camera;
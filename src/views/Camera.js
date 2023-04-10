import React, { useRef, useEffect, useState, memo } from 'react';
import * as poseDetection from '@mediapipe/pose';
import * as CameraUtils from '@mediapipe/camera_utils';

import PositionCanvas from './PositionCanvas';
import KeypointsCanvas from './KeypointsCanvas';

function Camera(props) {
  const { showCamera, onResult } = props;
  const videoRef = useRef();

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

    pose.setOptions(options);
    pose.onResults((results) => {
      const { poseLandmarks: keypoints } = results;

      if (keypoints) {
        onResult(keypoints);
        setKeypoints(keypoints);
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
      <KeypointsCanvas isVisible={true} keypoints={keypoints} />
      <PositionCanvas isVisible={true} isValidPosition={isValidPosition} />
    </div>
  );
}

export default memo(Camera);

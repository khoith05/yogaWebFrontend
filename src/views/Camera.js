import React, { useRef, useEffect, useState, memo } from 'react';
import * as poseDetection from '@mediapipe/pose';
import * as CameraUtils from '@mediapipe/camera_utils';
import PositionCanvas from './PositionCanvas';
import KeypointsCanvas from './KeypointsCanvas';
import getHeightBaseOnRatio from '../utils/getHeightBaseOnRatio';
import { useResizeDetector } from 'react-resize-detector';

const style = {
  position: 'absolute',
  left: 0,
};

function Camera(props) {
  const { showCamera, onResult, showVirtualPose } = props;
  const { width, ref: wrapperRef } = useResizeDetector();
  // const width = get(wrapperRef, 'current.offsetWidth');
  const videoRef = useRef();

  const poseRef = useRef();
  const [keypoints, setKeypoints] = useState();
  const [size, setSize] = useState({ height: 0, width: 0 });
  const cameraRef = useRef();

  const options = {
    modelComplexity: 1,
    enableSegmentation: true,
    smoothLandmarks: true,
    minDetectionConfidence: 0.5,
    minTrackingConfidence: 0.5,
  };

  // init Pose detection
  useEffect(() => {
    const pose = new poseDetection.Pose({
      locateFile: (file) => {
        console.log('file', file);
        return `${file}`;
      },
    });

    pose.setOptions(options);
    poseRef.current = pose;
  }, []);

  // init camera
  useEffect(() => {
    if (!width) return;
    const video = videoRef.current;
    const pose = poseRef.current;
    console.log('width', width);
    const fixedWidth = Math.floor(width);
    const height = getHeightBaseOnRatio(fixedWidth);

    setSize({
      height,
      width: fixedWidth,
    });

    if (video && pose) {
      const camera = new CameraUtils.Camera(video, {
        onFrame: async () => {
          await pose.send({ image: video });
        },
        width: fixedWidth,
        height,
      });
      camera.start();
      cameraRef.current = camera;
    }
  }, [videoRef, poseRef, width]);

  // start stop camera
  useEffect(() => {
    const camera = cameraRef.current;
    if (camera) {
      if (showCamera) {
        camera.start();
      } else {
        camera.stop();
      }
    }
  }, [showCamera, cameraRef]);

  // change onResult function
  useEffect(() => {
    const pose = poseRef.current;
    console.log('onresult change here');
    pose &&
      pose.onResults((results) => {
        const { poseLandmarks: keypoints } = results;

        if (keypoints) {
          onResult({ keypoints, width: Math.floor(width) });
          setKeypoints(keypoints);
        }
      });
  }, [onResult, poseRef, width]);

  return (
    <div ref={wrapperRef} className='d-flex justify-content-center'>
      <div
        className='PoseEstimation'
        style={{
          display: showCamera ? 'block' : 'none',
          width: 'fit-content',
          position: 'relative',
        }}
      >
        <video
          ref={videoRef}
          className='Video'
          height={size.height}
          width={size.width}
          playsInline
        />
        <KeypointsCanvas
          isVisible={true}
          style={style}
          keypoints={keypoints}
          height={size.height}
          width={size.width}
        />
        <PositionCanvas
          isVisible={showVirtualPose}
          isValidPosition={!showVirtualPose}
          style={style}
          height={size.height}
          width={size.width}
        />
      </div>
    </div>
  );
}

export default memo(Camera);

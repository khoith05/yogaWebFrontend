import React, { useRef, useEffect, useState, memo } from 'react';
import * as poseDetection from '@mediapipe/pose';
import * as CameraUtils from '@mediapipe/camera_utils';
import PositionCanvas from './PositionCanvas';
import KeypointsCanvas from './KeypointsCanvas';
import getSizeBaseOnRatio from '../utils/getSizeBaseOnRatio';
import { useResizeDetector } from 'react-resize-detector';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const style = {
  position: 'absolute',
  left: 0,
};

function Camera(props) {
  const {
    showCamera,
    onResult,
    showVirtualPose,
    isValidPosition,
    posePoint,
    showPoint,
  } = props;
  const { width: rWidth, ref: wrapperRef } = useResizeDetector();
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
    if (!rWidth) return;
    const { width, height } = getSizeBaseOnRatio(rWidth);
    const video = videoRef.current;
    const pose = poseRef.current;
    // console.log('width', width);
    // const fixedWidth = Math.floor(width);
    // const height = getHeightBaseOnRatio(fixedWidth);
    // let newHeight = height;
    // let newWidth = fixedWidth;

    // if (height > window.innerHeight) {
    //   newHeight = Math.floor(innerHeight);
    //   newWidth = getWidthBaseOnRatio;
    // }
    // setSize({
    //   height,
    //   width: fixedWidth,
    // });

    setSize({
      height,
      width,
    });

    if (video && pose) {
      const camera = new CameraUtils.Camera(video, {
        onFrame: async () => {
          await pose.send({ image: video });
        },
        facingMode: 'environment',
        width,
        height,
      });
      camera.start();
      cameraRef.current = camera;
    }
  }, [videoRef, poseRef, rWidth]);

  // start stop camera
  // useEffect(() => {
  //   const camera = cameraRef.current;
  //   if (camera) {
  //     if (showCamera) {
  //       camera.start();
  //     } else {
  //       camera.stop();
  //     }
  //   }
  // }, [showCamera, cameraRef]);

  // change onResult function
  useEffect(() => {
    const pose = poseRef.current;
    console.log('onresult change here');
    pose &&
      pose.onResults((results) => {
        const { poseLandmarks: keypoints } = results;

        if (keypoints) {
          onResult({ keypoints, width: size.width });
          setKeypoints(keypoints);
        }
      });
  }, [onResult, poseRef, size]);

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
          className='Video flip'
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
          isValidPosition={isValidPosition}
          style={style}
          height={size.height}
          width={size.width}
        />
        {/* TODO : style this maybe */}
        {showPoint && (
          <div
            style={{
              position: 'absolute',
              right: '8px',
              bottom: '16px',
              width: size.width * 0.2,
            }}
          >
            <CircularProgressbar
              value={posePoint}
              text={`${posePoint}%`}
              strokeWidth={10}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default memo(Camera);

import React, { useRef, useEffect, useState, memo } from "react";
import * as poseDetection from "@mediapipe/pose";
import * as CameraUtils from "@mediapipe/camera_utils";
import PositionCanvas from "./PositionCanvas";
import KeypointsCanvas from "./KeypointsCanvas";

import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const style = {
  position: "absolute",
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
    width,
    height,
  } = props;
  // const width = get(wrapperRef, 'current.offsetWidth');
  const videoRef = useRef();

  const poseRef = useRef();
  const [keypoints, setKeypoints] = useState();
  const cameraRef = useRef();

  const options = {
    modelComplexity: 2,
    enableSegmentation: false,
    smoothLandmarks: true,
    minDetectionConfidence: 0.4,
    minTrackingConfidence: 0.4,
  };

  // init Pose detection
  useEffect(() => {
    const pose = new poseDetection.Pose({
      locateFile: (file) => {
        console.log("file", file);
        return `${process.env.PUBLIC_URL}/${file}`;
      },
    });

    pose.setOptions(options);
    poseRef.current = pose;
  }, []);

  // init camera
  useEffect(() => {
    const video = videoRef.current;
    const pose = poseRef.current;

    if (video && pose && width) {
      const camera = new CameraUtils.Camera(video, {
        onFrame: async () => {
          await pose.send({ image: video });
        },
        facingMode: "user",
        width,
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
    console.log("onresult change here");
    pose &&
      pose.onResults((results) => {
        const { poseLandmarks: keypoints } = results;

        if (keypoints) {
          onResult({ keypoints, width });
          setKeypoints(keypoints);
        }
      });
  }, [onResult, poseRef, width]);

  return (
    <>
      <video
        ref={videoRef}
        className="flip"
        height={height}
        width={width}
        playsInline
      />
      <KeypointsCanvas
        isVisible={true}
        style={style}
        keypoints={keypoints}
        height={height}
        width={width}
      />
      <PositionCanvas
        isVisible={showVirtualPose}
        isValidPosition={isValidPosition}
        style={style}
        height={height}
        width={width}
      />
      {/* TODO : style this maybe */}
      {showPoint && (
        <div
          style={{
            position: "absolute",
            right: "8px",
            bottom: "16px",
            width: width * 0.2,
          }}
        >
          <CircularProgressbar
            value={posePoint}
            text={`${posePoint}%`}
            strokeWidth={10}
          />
        </div>
      )}
    </>
  );
}

export default memo(Camera);

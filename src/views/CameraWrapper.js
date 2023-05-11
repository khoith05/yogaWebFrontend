import { useEffect, useState, useCallback } from "react";
import Camera from "./Camera";
import YogaVideo from "./YogaVideo";
import checkPosition from "../utils/checkPosition";
import checkPose from "../utils/checkPoseAngles";
import throttleCalculatePosePoint from "../utils/calculatePosePoint";
import {
  CHECK_POSITION_TIMEOUT_KEY,
  CHECK_POSE_STAGE_ONE_TIME_OUT_KEY,
  CHECK_POSE_STAGE_TWO_TIME_OUT_KEY,
  CHECK_POSE_STAGE_ZERO_TIME_OUT_KEY,
  HANDLE_NEXT_POSE_THROTTLE_KEY,
} from "../utils/constant";
import {
  setTimeoutWithKey,
  stopExcute,
  clearAllTimeout,
} from "../utils/setTimeoutWithKey";
import { useDispatch } from "react-redux";

import { addPoint, nextPose, startExercise, endExercise } from "../store/pose";

import getSizeBaseOnRatio from "../utils/getSizeBaseOnRatio";
import { useResizeDetector } from "react-resize-detector";
import {
  startAudio,
  endAudio,
  keepPoseAudio,
  nextPoseAudio,
} from "../utils/positionAudio";
import throttleWithKey from "../utils/throttleWithKey";
import { clearAudioQueue } from "../utils/audio";

function CameraWrapper({ poses, setEndExercise }) {
  const dispatch = useDispatch();
  const [shouldCheckPosition, setShouldcheckPosition] = useState(true);
  const [shouldCheckPose, setShouldCheckPose] = useState(false);
  const [currentPose, setCurrentPose] = useState(null);
  const [checkPoseStage, setCheckPoseStage] = useState(0);
  const [isValidPosition, setIsValidPosition] = useState(false);
  const [posePoint, setPosePoint] = useState(0);
  const [size, setSize] = useState({ height: 0, width: 0 });

  const { width: rWidth, ref: wrapperRef } = useResizeDetector();
  useEffect(() => {
    return () => {
      clearAudioQueue();
      clearAllTimeout();
    };
  }, []);

  useEffect(() => {
    if (!rWidth) return;
    const { width, height } = getSizeBaseOnRatio(rWidth);
    setSize({
      height,
      width,
    });
  }, [rWidth]);

  useEffect(() => {
    wrapperRef.current && window.scrollTo(0, wrapperRef.current.offsetTop);
  }, [wrapperRef]);

  const handleNextPose = useCallback(
    throttleWithKey({
      key: HANDLE_NEXT_POSE_THROTTLE_KEY,
      callback: () => {
        if (!currentPose) {
          setCurrentPose(poses[0]);
          dispatch(startExercise());
          startAudio();
          return;
        }

        if (currentPose.index >= poses.length - 1) {
          dispatch(endExercise());
          endAudio();
          setEndExercise();
          return;
        }
        setCurrentPose(poses[currentPose.index + 1]);
        dispatch(nextPose());
        nextPoseAudio();
      },
      time: 200,
    }),
    [currentPose, poses]
  );

  const handleCheckPosition = useCallback(
    ({ keypoints }) => {
      // setTimeoutWithKey({
      //   key: CHECK_POSITION_TIMEOUT_KEY,
      //   callback: () => {
      //     setShouldcheckPosition(false);
      //     handleNextPose();
      //     console.log("POSITION CHECK DONE");
      //   },
      //   time: 1000,
      // });
      // checkPosition({ width: size.width, keypoints });
      const validPosition = checkPosition({ width: size.width, keypoints });
      setIsValidPosition(validPosition);
      if (validPosition) {
        setTimeoutWithKey({
          key: CHECK_POSITION_TIMEOUT_KEY,
          callback: () => {
            setShouldcheckPosition(false);
            handleNextPose();
            console.log("POSITION CHECK DONE");
          },
          time: 5000,
        });
      } else {
        stopExcute({ key: CHECK_POSITION_TIMEOUT_KEY });
      }
    },
    [size, handleNextPose]
  );

  const handleCheckPose = useCallback(
    ({ keypoints }) => {
      switch (checkPoseStage) {
        case 0:
          setTimeoutWithKey({
            key: CHECK_POSE_STAGE_ZERO_TIME_OUT_KEY,
            callback: () => {
              setCheckPoseStage(1);
            },
            time: 5000,
          });
          break;
        case 1:
          setTimeoutWithKey({
            key: CHECK_POSE_STAGE_ONE_TIME_OUT_KEY,
            callback: () => {
              setShouldCheckPose(false);
              handleNextPose();
              setCheckPoseStage(0);
            },
            time: 60000,
          });

          // check Pose valid and throw pose error
          if (
            checkPose({
              angleList: currentPose.angleList,
              keypoints,
            })
          ) {
            // setShouldCheckPose(false);
            console.log("GO TO STAGE TWO");
            setCheckPoseStage(2);
            keepPoseAudio();
            stopExcute({ key: CHECK_POSE_STAGE_ONE_TIME_OUT_KEY });
          }
          break;
        case 2:
          setTimeoutWithKey({
            key: CHECK_POSE_STAGE_TWO_TIME_OUT_KEY,
            callback: () => {
              setShouldCheckPose(false);
              setCheckPoseStage(0);
              handleNextPose();
              console.log("DONE THIS POSE");
            },
            time: currentPose.duration * 1000,
          });

          throttleCalculatePosePoint({
            angleList: currentPose.angleList,
            keypoints,
            callback: (point) => {
              dispatch(addPoint({ point }));
              setPosePoint(point);
            },
          });
          break;
        default:
          break;
      }
    },
    [checkPoseStage, currentPose, handleNextPose]
  );

  const handleVideoEnded = () => setShouldCheckPose(true);

  const handlePoseResult = useCallback(
    ({ keypoints }) => {
      if (!size.width) return;

      return shouldCheckPosition
        ? handleCheckPosition({ keypoints })
        : handleCheckPose({ keypoints });
    },
    [shouldCheckPosition, size, handleCheckPosition, handleCheckPose]
  );

  return (
    <div ref={wrapperRef} className="d-flex justify-content-center pt-4">
      <div style={{ position: "relative", width: "fit-content" }}>
        <Camera
          showCamera={shouldCheckPose || shouldCheckPosition}
          showVirtualPose={shouldCheckPosition}
          isValidPosition={isValidPosition}
          onResult={handlePoseResult}
          posePoint={posePoint}
          showPoint={checkPoseStage === 2}
          width={size.width}
          height={size.height}
        />

        {currentPose && (
          <YogaVideo
            key={currentPose.index}
            onFinish={handleVideoEnded}
            url={currentPose.videoUrl}
            showVideo={!(shouldCheckPose || shouldCheckPosition)}
            size={size}
          />
        )}
      </div>
    </div>
  );
}

export default CameraWrapper;

import { useEffect, useState, useCallback } from 'react';
import Camera from './Camera';
import YogaVideo from './YogaVideo';
import { poseList } from '../utils/constant';
import checkPosition from '../utils/checkPosition';
import checkPose from '../utils/checkPoseAngles';
import throttleCalculatePosePoint from '../utils/calculatePosePoint';
import {
  CHECK_POSITION_TIMEOUT_KEY,
  CHECK_POSE_STAGE_ONE_TIME_OUT_KEY,
  CHECK_POSE_STAGE_TWO_TIME_OUT_KEY,
} from '../utils/constant';
import { setTimeoutWithKey, stopExcute } from '../utils/setTimeoutWithKey';
import { useDispatch, useSelector } from 'react-redux';

import { addPoint, nextPose, setNumberOfPose } from '../store/pose';

function CameraWrapper() {
  const dispatch = useDispatch();
  const [shouldCheckPosition, setShouldcheckPosition] = useState(true);
  const [shouldCheckPose, setShouldCheckPose] = useState(false);
  const [currentPose, setCurrentPose] = useState(poseList[0]);
  const [shouldCheckPoseStageTwo, setShouldCheckPoseStageTwo] = useState(false);
  const [isValidPosition, setIsValidPosition] = useState(false);
  const [posePoint, setPosePoint] = useState(0);

  const handleCheckPosition = useCallback(
    ({ width, keypoints }) => {
      const validPosition = checkPosition({ width, keypoints });
      setIsValidPosition(validPosition);
      if (validPosition) {
        setTimeoutWithKey({
          key: CHECK_POSITION_TIMEOUT_KEY,
          callback: () => {
            setShouldcheckPosition(false);
            console.log('POSITION CHECK DONE');
          },
          time: 5000,
        });
      } else {
        stopExcute({ key: CHECK_POSITION_TIMEOUT_KEY });
      }
    },
    [isValidPosition]
  );

  const handleCheckPose = useCallback(
    ({ keypoints }) => {
      if (shouldCheckPoseStageTwo) {
        setTimeoutWithKey({
          key: CHECK_POSE_STAGE_TWO_TIME_OUT_KEY,
          callback: () => {
            setShouldCheckPose(false);
            console.log('DONE THIS POSE');
          },
          time: 700000000,
        });
        throttleCalculatePosePoint({
          angleList: currentPose.angleList,
          keypoints,
          callback: (point) => {
            dispatch(addPoint({ point }));
            setPosePoint(point);

            console.log(
              '🚀 ~ file: CameraWrapper.js:67 ~ CameraWrapper ~ point:',
              point
            );
          },
        });
      } else {
        setTimeoutWithKey({
          key: CHECK_POSE_STAGE_ONE_TIME_OUT_KEY,
          callback: () => {
            setShouldCheckPose(false);
            console.log('SKIP THIS POSE');
          },
          time: 10000000,
        });
        // setTimeoutWithKey({
        //   key: CHECK_POSE_TIMEOUT_KEY,
        //   callback: () => {
        //     setShouldCheckPose(false);
        //     console.log('SKIP THIS POSE');
        //   },
        //   time: 7000,
        // });
        // check Pose valid and throw pose error
        const isValidPose = checkPose({
          angleList: currentPose.angleList,
          keypoints,
        });
        if (true) {
          // setShouldCheckPose(false);
          console.log('GO TO STAGE TWO');
          setShouldCheckPoseStageTwo(true);
          stopExcute({ key: CHECK_POSE_STAGE_ONE_TIME_OUT_KEY });
        }
      }
    },
    [shouldCheckPoseStageTwo]
  );
  const handleVideoEnded = () => {
    setShouldCheckPose(true);
    handleNextPose();
  };

  const handleNextPose = useCallback(() => {
    if (!currentPose) {
      setCurrentPose(poseList[0]);
      dispatch(nextPose());
      return;
    }

    if (currentPose.index >= poseList.length - 1) {
      // TODO end exercise
      return;
    }
    setCurrentPose(poseList[currentPose.index + 1]);
    dispatch(nextPose());
  }, [currentPose]);

  const handlePoseResult = useCallback(
    shouldCheckPosition ? handleCheckPosition : handleCheckPose,
    [shouldCheckPosition, handleCheckPose, handleCheckPosition]
  );
  useEffect(() => {
    dispatch(setNumberOfPose(poseList.length));
  }, []);

  useEffect(() => {
    if (!(shouldCheckPose || shouldCheckPosition)) {
      handleNextPose();
    }
  }, [shouldCheckPose]);

  return (
    <>
      <Camera
        showCamera={shouldCheckPose || shouldCheckPosition}
        showVirtualPose={shouldCheckPosition}
        isValidPosition={isValidPosition}
        onResult={handlePoseResult}
        posePoint={posePoint}
        showPoint={shouldCheckPoseStageTwo}
      />

      {currentPose && (
        <YogaVideo
          key={currentPose.index}
          onFinish={handleVideoEnded}
          url={currentPose.url}
          showVideo={!(shouldCheckPose || shouldCheckPosition)}
        />
      )}
    </>
  );
}

export default CameraWrapper;

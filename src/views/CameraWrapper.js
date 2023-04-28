import { useEffect, useState, useCallback } from 'react';
import Camera from './Camera';
import YogaVideo from './YogaVideo';
import { poseList } from '../utils/constant';
import checkPosition from '../utils/checkPosition';
import checkPose from '../utils/checkPoseAngles';
import calculatePosePoint from '../utils/calculatePosePoint';
import {
  CHECK_POSE_TIMEOUT_KEY,
  CHECK_POSITION_TIMEOUT_KEY,
  CHECK_POSE_STAGE_ONE_TIME_OUT_KEY,
  CHECK_POSE_STAGE_TWO_TIME_OUT_KEY,
  POSE_ERROR_NOTI_INTERVAL,
} from '../utils/constant';
import { setTimeoutWithKey, stopExcute } from '../utils/setTimeoutWithKey';

function CameraWrapper() {
  const [shouldCheckPosition, setShouldcheckPosition] = useState(true);
  const [shouldCheckPose, setShouldCheckPose] = useState(false);
  const [currentPose, setCurrentPose] = useState(poseList[0]);
  const [shouldCheckPoseStageTwo, setShouldCheckPoseStageTwo] = useState(false);

  const handleCheckPosition = useCallback(({ width, keypoints }) => {
    setTimeoutWithKey({
      key: CHECK_POSITION_TIMEOUT_KEY,
      callback: () => {
        setShouldcheckPosition(false);
        console.log('SKIP POSITION CHECK');
      },
      time: 1000,
    });
    const isValidPosition = checkPosition({ width, keypoints });
    if (isValidPosition) {
      setShouldcheckPosition(false);
      stopExcute({ key: CHECK_POSITION_TIMEOUT_KEY });
    }
  }, []);

  const handleCheckPose = useCallback(
    ({ keypoints }) => {
      console.log(shouldCheckPoseStageTwo);
      if (shouldCheckPoseStageTwo) {
        setTimeoutWithKey({
          key: CHECK_POSE_STAGE_TWO_TIME_OUT_KEY,
          callback: () => {
            setShouldCheckPose(false);
            console.log('DONE THIS POSE');
          },
          time: 700000000,
        });
        const point = calculatePosePoint({
          angleList: currentPose.angleList,
          keypoints,
        });
        console.log(
          '🚀 ~ file: CameraWrapper.js:53 ~ handleCheckPose ~ point:',
          point
        );
      } else {
        setTimeoutWithKey({
          key: CHECK_POSE_STAGE_ONE_TIME_OUT_KEY,
          callback: () => {
            setShouldCheckPose(false);
            console.log('SKIP THIS POSE');
          },
          time: 10000,
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
      return;
    }

    if (currentPose.index >= poseList.length - 1) {
      // TODO end exercise
      return;
    }
    setCurrentPose(poseList[currentPose.index + 1]);
  }, [currentPose]);

  const handlePoseResult = useCallback(
    shouldCheckPosition ? handleCheckPosition : handleCheckPose,
    [shouldCheckPosition, shouldCheckPoseStageTwo]
  );

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
        onResult={handlePoseResult}
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

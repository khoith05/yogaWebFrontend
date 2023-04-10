import { useEffect, useState, useCallback } from 'react';
import Camera from './Camera';
import YogaVideo from './YogaVideo';
import { poseList } from '../utils/constant';
import checkPosition from '../utils/checkPosition';
import checkPose from '../utils/CheckPose';

function CameraWrapper() {
  const [shouldCheckPosition, setShouldcheckPosition] = useState(false);
  const [shouldCheckPose, setShouldCheckPose] = useState(false);
  const [currentPose, setCurrentPose] = useState(poseList[0]);

  const handleCheckPosition = useCallback(({ width, keypoints }) => {
    const isValidPosition = checkPosition({ width, keypoints });
    isValidPosition && setShouldcheckPosition(false);
  }, []);

  const handleCheckPose = useCallback(({ keypoints }) => {
    const isValidPose = checkPose({
      angleList: currentPose.angleList,
      keypoints,
    });
    isValidPose && setShouldCheckPose(false);
  }, []);
  const handleVideoEnded = () => {
    setShouldCheckPose(true);
    handleNextPose();
  };

  const handleNextPose = () => {
    if (!currentPose) {
      setCurrentPose(poseList[0]);
      return;
    }

    if (currentPose.index >= poseList.length - 1) {
      // TODO end exercise
      return;
    }
    setCurrentPose(poseList[currentPose.index + 1]);
  };

  const handlePoseResult = useCallback(
    shouldCheckPosition ? handleCheckPosition : handleCheckPose,
    [shouldCheckPosition]
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
        onResult={handlePoseResult}
      />
      {currentPose && (
        <YogaVideo
          onFinish={handleVideoEnded}
          url={currentPose.url}
          showVideo={!(shouldCheckPose || shouldCheckPosition)}
        />
      )}
    </>
  );
}

export default CameraWrapper;

import { useEffect, useState, useCallback } from 'react';
import Camera from './Camera';
import YogaVideo from './YogaVideo';
import { poseList } from '../utils/constant';

// const poseList = [
//   {
//     index: 0, // order
//     pose: {}, // angleList
//     url: '', // video url
//   },
// ];

function CameraWrapper() {
  const [positionCheck, setPositionCheck] = useState(false);
  const [poseCheck, setPoseCheck] = useState(false);
  const [currentPose, setCurrentPose] = useState(poseList[0]);

  const checkPosition = () => {};

  const checkPose = () => {
    console.log('🚀 ~ file: CameraWrapper.js:26 ~ checkPos ~ a:');
    setPoseCheck(false);
  };
  const handleVideoEnded = () => {
    setPoseCheck(true);
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
    positionCheck ? checkPosition : checkPose,
    [positionCheck]
  );

  useEffect(() => {
    if (!(poseCheck || positionCheck)) {
      handleNextPose();
    }
  }, [poseCheck]);

  return (
    <>
      <Camera
        showCamera={poseCheck || positionCheck}
        onResult={handlePoseResult}
      />
      {currentPose && (
        <YogaVideo
          key={currentPose.index}
          onFinish={handleVideoEnded}
          url={currentPose.url}
          showVideo={!(poseCheck || positionCheck)}
        />
      )}
    </>
  );
}

export default CameraWrapper;

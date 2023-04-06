import { useEffect, useState } from 'react';
import Camera from './Camera';
import YogaVideo from './YogaVideo';

const poseList = [
  {
    index: 0, // order
    pose: {}, // angleList
    url: '', // video url
  },
];

const checkPosition = () => {};

const checkPose = () => {};

let handlePoseResult = () => {};

function CameraWrapper() {
  const [positionChecked, setPositionChecked] = useState(false);
  const [showCamera, setShowCamera] = useState(false);
  const [currentPose, setCurrentPose] = useState(poseList[0]);
  const handleVideoEnded = () => {
    setShowCamera(true);
  };
  const handleYogaPoseEnded = () => {
    if (currentPose.index >= poseList.length) {
      // TODO end exercise
      return;
    }
    setShowCamera(false);
    setCurrentPose(poseList[currentPose.index + 1]);
  };

  useEffect(() => {
    handlePoseResult = positionChecked ? checkPose : checkPosition;
  }, [positionChecked]);

  return (
    <div>
      <Camera
        showCamera={showCamera}
        onResult={positionChecked ? checkPose : checkPosition}
      />
      <YogaVideo onFinish={handleVideoEnded} url={currentPose.url} />
    </div>
  );
}

export default CameraWrapper;

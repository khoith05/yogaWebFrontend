import { ANGLE_LIST } from './constant.js';
import isValidAngle from './isValidAngle.js';
import getAngle from './getAngle.js';

class CheckPose {
  constructor(self, pose) {
    self.pose = pose;
  }
  isPoseValid({ keypoints }) {
    const angleValidList = Object.entries(ANGLE_LIST).map(([key, value]) => {
      const { basePoint, adjacentPoint1, adjacentPoint2 } = value;
      const angle = getAngle({
        basePoint: keypoints[basePoint],
        adjacentPoint1: keypoints[adjacentPoint1],
        adjacentPoint2: keypoints[adjacentPoint2],
      });
      return isValidAngle(this.pose[key], angle);
    });

    return angleValidList.some((valid) => !valid);
  }
}

export default CheckPose;

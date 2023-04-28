import { ANGLE_LIST } from './constant.js';
import calculateAngle from './calculateAngle.js';
import getPoint from './getPoint.js';
import { throttle, get, sum } from 'lodash';

function calculatePosePoint({ angleList, keypoints }) {
  const posePointSum = Object.entries(ANGLE_LIST).reduce(
    (sumPoint, [key, value]) => {
      const { basePoint, adjacentPoint1, adjacentPoint2 } = value;

      if (!get(keypoints, `${basePoint}.visibility`)) return sumPoint;

      const angle = calculateAngle({
        basePoint: keypoints[basePoint],
        adjacentPoint1: keypoints[adjacentPoint1],
        adjacentPoint2: keypoints[adjacentPoint2],
      });

      const diffAngle = Math.abs(angleList[key] - angle);

      return sumPoint + getPoint(diffAngle);
    },
    0
  );

  return posePointSum / 10;
}

const throttleCalculatePosePoint = throttle(calculatePosePoint, 500);

export default throttleCalculatePosePoint;

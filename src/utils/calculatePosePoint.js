import { ANGLE_LIST } from './constant.js';
import calculateAngle from './calculateAngle.js';
import getPoint from './getPoint.js';
import { throttle, get } from 'lodash';

function calculatePosePoint({ angleList, keypoints, callback }) {
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

  const point = Math.floor(posePointSum / 10);
  callback(point);
  return point;
}

const throttleCalculatePosePoint = throttle(calculatePosePoint, 500);

export default throttleCalculatePosePoint;

import {
  ANGLE_LIST,
  CALCULATE_POSE_POINt_THROTTLE_KEY,
  LIMIT_ANGLE_LIST,
} from "./constant.js";
import { calculateAngle, calculateAngleLimit } from "./calculateAngle.js";
import getPoint from "./getPoint.js";
import { get } from "lodash";
import throttleWithKey from "./throttleWithKey.js";

function calculatePosePoint({ angleList, keypoints, callback }) {
  const posePointSum = Object.entries(ANGLE_LIST).reduce(
    (sumPoint, [key, value]) => {
      const { basePoint, adjacentPoint1, adjacentPoint2 } = value;

      const visibility = get(keypoints, `${basePoint}.visibility`, 0);

      if (visibility < 0.3) return sumPoint;

      const getAngleFunc = LIMIT_ANGLE_LIST[key]
        ? calculateAngleLimit
        : calculateAngle;

      const angle = getAngleFunc({
        basePoint: keypoints[basePoint],
        adjacentPoint1: keypoints[adjacentPoint1],
        adjacentPoint2: keypoints[adjacentPoint2],
      });

      const diffAngle = Math.abs(angleList[key] - angle);

      return sumPoint + getPoint(diffAngle);
    },
    0
  );

  const point = Math.floor(posePointSum);
  callback(point);
  return point;
}

const throttleCalculatePosePoint = throttleWithKey({
  key: CALCULATE_POSE_POINt_THROTTLE_KEY,
  callback: calculatePosePoint,
  time: 100,
});

export default throttleCalculatePosePoint;

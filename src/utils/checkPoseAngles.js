import { ANGLE_LIST, ANGLE_THRESHOLD } from "./constant.js";
import isValidAngle from "./isValidAngle.js";
import calculateAngle from "./calculateAngle.js";
import { setTimeoutWithKey } from "./setTimeoutWithKey.js";
import getPoint from "./getPoint.js";
import { sum } from "lodash";

const temporarySkipAngles = {};

function checkPoseAngles({ angleList, keypoints }) {
  const anglePointList = Object.entries(ANGLE_LIST).map(([key, value]) => {
    const { basePoint, adjacentPoint1, adjacentPoint2 } = value;

    const angle = calculateAngle({
      basePoint: keypoints[basePoint],
      adjacentPoint1: keypoints[adjacentPoint1],
      adjacentPoint2: keypoints[adjacentPoint2],
    });

    const diffAngle = Math.abs(angleList[key] - angle);

    const point = getPoint(diffAngle);

    if (point !== ANGLE_THRESHOLD && !temporarySkipAngles[key]) {
      errorNoti({ angle: key, isBigger: !!(angle - angleList[key] > 0) });
      temporarySkipAngles[key] = key;
      setTimeoutWithKey({
        key,
        callback: () => {
          temporarySkipAngles[key] = undefined;
        },
        time: 5000,
      });
    }
    return point;
  });

  return sum(anglePointList) >= 70;
}

function errorNoti({ angle, isBigger }) {
  console.log(
    "error here ~ angle",
    angle,
    isBigger ? "is bigger than standard" : " is smaller than standard"
  );
}

// function getAngleDifferenceList({ angleList, keypoints }) {
//   const angleDifferenceList = Object.entries(ANGLE_LIST).map(([key, value]) => {
//     const { basePoint, adjacentPoint1, adjacentPoint2 } = value;
//     const angle = getAngle({
//       basePoint: keypoints[basePoint],
//       adjacentPoint1: keypoints[adjacentPoint1],
//       adjacentPoint2: keypoints[adjacentPoint2],
//     });
//     return Math.abs(angleList[key] - angle);
//   });

//   return angleValidList.every(Boolean);
// }

export default checkPoseAngles;

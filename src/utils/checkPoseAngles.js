import { ANGLE_LIST } from './constant.js';
import isValidAngle from './isValidAngle.js';
import getAngle from './getAngle.js';
import { setTimeoutWithKey } from './setTimeoutWithKey.js';
import { ANGLE_THRESHOLD } from './constant.js';

const temporarySkipAngles = {};

function checkPoseAngles({ angleList, keypoints }) {
  const angleValidList = Object.entries(ANGLE_LIST).map(([key, value]) => {
    if (temporarySkipAngles[key]) return;

    const { basePoint, adjacentPoint1, adjacentPoint2 } = value;

    const angle = getAngle({
      basePoint: keypoints[basePoint],
      adjacentPoint1: keypoints[adjacentPoint1],
      adjacentPoint2: keypoints[adjacentPoint2],
    });

    const isValid = isValidAngle(angleList[key], angle);

    if (!isValid) {
      errorNoti({ key, isBiger: !!(angle - angleList[key]) });
      temporarySkipAngles[key] = key;
      setTimeoutWithKey({
        key,
        callback: () => {
          temporarySkipAngles[key] = undefined;
        },
        time: 1500,
      });
    }
  });

  return angleValidList.every(Boolean);
}

function errorNoti() {
  console.log('test run here');
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

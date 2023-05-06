import {
  ANGLE_LIST,
  ANGLE_THRESHOLD,
  ANGLE_AUDIO,
  POSE_ERROR_AUDIO,
} from "./constant.js";
import calculateAngle from "./calculateAngle.js";
import { setTimeoutWithKey } from "./setTimeoutWithKey.js";
import getPoint from "./getPoint.js";
import { sum, get } from "lodash";
import addToPlayAudiosQueue from "./audio.js";
import { backToCameraAudio } from "./positionAudio.js";

const temporarySkipAngles = {};

function checkPoseAngles({ angleList, keypoints }) {
  if (!checkPoseVisible(keypoints)) return false;
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
      errorNoti({ angle: key, diff: angle - angleList[key] });
      temporarySkipAngles[key] = key;
      setTimeoutWithKey({
        key,
        callback: () => {
          temporarySkipAngles[key] = undefined;
        },
        time: 6000,
      });
    }
    return point;
  });

  return sum(anglePointList) >= 70;
}

function checkPoseVisible(keypoint) {
  const isPoseVisible = Object.values(ANGLE_LIST).reduce(
    (visible, { basePoint }) =>
      visible && get(keypoint, `${basePoint}.visibility`, 0) > 0.3,
    true
  );
  !isPoseVisible && backToCameraAudio();
  return isPoseVisible;
}

function errorNoti({ angle, diff }) {
  const isBigger = diff > 0;
  const roundedDiff = Math.ceil(Math.abs(diff) / 10) * 10;
  console.log(
    "ANGLE_AUDIO[roundedDiff]",
    ANGLE_AUDIO[roundedDiff],
    roundedDiff
  );
  addToPlayAudiosQueue({
    srcOne: POSE_ERROR_AUDIO[angle][+isBigger],
    srcTwo: ANGLE_AUDIO[roundedDiff] || ANGLE_AUDIO[90],
  });
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

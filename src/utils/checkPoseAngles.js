import {
  ANGLE_LIST,
  MAX_POINT_PER_ANGLE,
  ANGLE_AUDIO,
  POSE_ERROR_AUDIO,
} from "./constant.js";
import { calculateAngle, calculateAngleLimit } from "./calculateAngle.js";
import { setTimeoutWithKey } from "./setTimeoutWithKey.js";
import getPoint from "./getPoint.js";
import { sum, get } from "lodash";
import addToPlayAudiosQueue, { clearAudioWithKey } from "./audio.js";
import { backToCameraAudio } from "./positionAudio.js";

const temporarySkipAngles = { C: true, D: true };

function checkPoseAngles({ angleList, keypoints }) {
  if (!checkPoseVisible(keypoints)) return false;
  const anglePointList = Object.entries(ANGLE_LIST).map(([key, value]) => {
    const { basePoint, adjacentPoint1, adjacentPoint2 } = value;

    const angle = calculateAngle({
      basePoint: keypoints[basePoint],
      adjacentPoint1: keypoints[adjacentPoint1],
      adjacentPoint2: keypoints[adjacentPoint2],
    });

    key === "E" && console.log(key, ":", angle);

    const diffAngle = Math.abs(angleList[key] - angle);

    const point = getPoint(diffAngle);

    if (point === 0 && !temporarySkipAngles[key]) {
      errorNoti({ key, diff: angle - angleList[key] });
      temporarySkipAngles[key] = key;
      setTimeoutWithKey({
        key,
        callback: () => {
          temporarySkipAngles[key] = undefined;
        },
        time: 5000,
      });
    }
    if (point === MAX_POINT_PER_ANGLE) {
      clearAudioWithKey(key);
    }
    return point;
  });

  return sum(anglePointList) >= 70;
}

function checkPoseVisible(keypoint) {
  const isPoseVisible = Object.values(ANGLE_LIST).map(
    (visible, { basePoint }) =>
      visible || get(keypoint, `${basePoint}.visibility`, 0) > 0.3,
    false
  );
  backToCameraAudio(isPoseVisible);
  return isPoseVisible;
}

function errorNoti({ key, diff }) {
  const isBigger = diff > 0;
  const roundedDiff = Math.ceil(Math.abs(diff) / 10) * 10;

  addToPlayAudiosQueue({
    key,
    clearSameKey: true,
    src: [POSE_ERROR_AUDIO[key][+isBigger], ANGLE_AUDIO[roundedDiff]],
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

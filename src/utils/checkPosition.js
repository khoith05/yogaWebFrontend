/* eslint-disable camelcase */
import get from "lodash/get";
import calculateCenterPosition from "./calculateCenterPosition";

import { tooFarAudio, tooNearAudio, toCenterAudio } from "./positionAudio";
import { clearAudioQueue } from "./audio";

function checkPosition({ width, keypoints }) {
  const isPersonInCenter = checkPersonInCenter({ width, keypoints });
  const { isNotTooHigh, isNotTooSmall } = checkPersonSize({ width, keypoints });
  if (!isPersonInCenter) {
    toCenterAudio();
  } else {
    !isNotTooHigh && tooFarAudio();
    !isNotTooSmall && tooNearAudio();
  }
  const isValidPosition = isPersonInCenter && isNotTooHigh && isNotTooSmall;
  isValidPosition && clearAudioQueue();
  return isValidPosition;
}

function checkPersonInCenter({ width, keypoints }) {
  // TODO: only check keypoint of necessary point and check threshold of visibility, not check hand , too sensitive

  const [centerWidthStart, centerWidthEnd] = calculateCenterPosition(width);
  const pointValidList = keypoints.map(({ visibility, x }) => {
    return (
      visibility >= 0.3 &&
      x * width > centerWidthStart &&
      x * width < centerWidthEnd
    );
  });

  const isInCenter = pointValidList.every(Boolean);

  return isInCenter;
}

function checkPersonSize({ keypoints }) {
  const y_leftEye = get(keypoints, "2.y", 0);
  const y_leftAnkle = get(keypoints, "27.y", 0);

  const personHeightTemp = y_leftAnkle - y_leftEye;

  const isNotTooHigh = y_leftEye - personHeightTemp * 0.5 > 0;

  const isNotTooSmall = personHeightTemp > 0.5;

  return { isNotTooHigh, isNotTooSmall };
}
export default checkPosition;

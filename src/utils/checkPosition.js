/* eslint-disable camelcase */
import get from 'lodash/get';
import calculateSafePosition from './calculateSafePosition';
import calculateCenterPosition from './calculateCenterPosition';
import { getHeightBaseOnRatio } from './getSizeBaseOnRatio';

function checkPosition({ width, keypoints }) {
  const isPersonInCenter = checkPersonInCenter({ width, keypoints });
  isPersonInCenter &&
    console.log(
      '🚀 ~ file: checkPosition.js:9 ~ checkPosition ~ isPersonInCenter:',
      isPersonInCenter
    );
  const isPersonSizeValid = checkPersonSize({ width, keypoints });
  isPersonSizeValid &&
    console.log(
      '🚀 ~ file: checkPosition.js:11 ~ checkPosition ~ isPersonSizeValid:',
      isPersonSizeValid
    );
  const a = isPersonInCenter && isPersonSizeValid;

  return a;
}

function checkPersonInCenter({ width, keypoints }) {
  // TODO: only check keypoint of necessary point and check threshold of visibility, not check hand , too sensitive

  const [centerWidthStart, centerWidthEnd] = calculateCenterPosition(width);
  const pointValidList = keypoints.map(({ visibility, x }) => {
    return (
      visibility >= 0.5 &&
      x * width > centerWidthStart &&
      x * width < centerWidthEnd
    );
  });

  const a = pointValidList.every(Boolean);
  return a;
}

function isKeypointInSafePosition({ x, y, width }) {
  const { x_topLeft, y_topLeft, x_bottomRight, y_bottomRight } =
    calculateSafePosition(width);
  const a =
    x_topLeft <= x &&
    x_bottomRight >= x &&
    y_topLeft <= y &&
    y_bottomRight >= y;
  return a;
}

function checkPersonSize({ keypoints }) {
  const y_leftEye = get(keypoints, '2.y', 0);
  const y_leftAnkle = get(keypoints, '27.y', 0);

  const personHeightTemp = y_leftAnkle - y_leftEye;

  const isNotTooHigh = y_leftEye - personHeightTemp * 0.5 > 0;

  const isNotTooSmall = personHeightTemp > 0.5;

  return isNotTooHigh && isNotTooSmall;
}
// function checkPersonSizeTooBig({ keypoints }) {
//   // const { y_bottomRight, y_topLeft, height } = calculateSafePosition(width);

//   // const safeHeight = Math.abs(y_bottomRight - y_topLeft);

//   const y_leftEye = get(keypoints, '2.y', 0);
//   const y_leftAnkle = get(keypoints, '27.y', 0);

//   const personHeightTemp = y_leftAnkle - y_leftEye;

//   return y_leftEye - personHeightTemp * 0.5 < 0;
// }
export default checkPosition;

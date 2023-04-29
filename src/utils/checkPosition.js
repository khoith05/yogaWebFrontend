/* eslint-disable camelcase */
import get from 'lodash/get';
import calculateSafePosition from './calculateSafePosition';
import { SAFE_MIN_HEIGHT_PERCENT } from './constant';
import calculateCenterPosition from './calculateCenterPosition';

function checkPosition({ width, keypoints }) {
  const isPersonInCenter = checkPersonInCenter({ width, keypoints });
  const isPersonTooSmall = checkPersonSizeTooSmall({ width, keypoints });
  const isPersonTooBig = checkPersonSizeTooBig({ keypoints });
  const a = isPersonInCenter && isPersonTooSmall && isPersonTooBig;
  // console.log(
  //   '🚀 ~ file: checkPosition.js:46 ~ CheckKeypoint ~ checkPosition ~ isSizeValid:',
  //   isSizeValid
  // );
  // console.log(
  //   '🚀 ~ file: checkPosition.js:46 ~ CheckKeypoint ~ checkPosition ~ isKtpsValid:',
  //   isKtpsValid
  // );

  return a;
}

function checkPersonInCenter({ width, keypoints }) {
  // TODO: only check keypoint of necessary point and check threshold of visibility, not check hand , too sensitive

  const [centerWidthStart, centerWidthEnd] = calculateCenterPosition(width);
  const pointValidList = keypoints.map(
    ({ visibility, x }) =>
      visibility && x > centerWidthStart && x < centerWidthEnd
  );

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

function checkPersonSizeTooSmall({ width, keypoints }) {
  const { y_bottomRight, y_topLeft, height } = calculateSafePosition(width);

  const safeHeight = Math.abs(y_bottomRight - y_topLeft);

  const y_leftEye = get(keypoints, '2.y', 0);
  const y_leftAnkle = get(keypoints, '27.y', 0);

  const personHeightTemp = y_leftAnkle - y_leftEye;

  return personHeightTemp * height >= safeHeight * SAFE_MIN_HEIGHT_PERCENT;
}
function checkPersonSizeTooBig({ keypoints }) {
  // const { y_bottomRight, y_topLeft, height } = calculateSafePosition(width);

  // const safeHeight = Math.abs(y_bottomRight - y_topLeft);

  const y_leftEye = get(keypoints, '2.y', 0);
  const y_leftAnkle = get(keypoints, '27.y', 0);

  const personHeightTemp = y_leftAnkle - y_leftEye;

  return y_leftEye - personHeightTemp * 0.5 < 0;
}
export default checkPosition;

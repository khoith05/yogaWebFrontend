/* eslint-disable camelcase */
import get from 'lodash/get';
import calculateSafePosition from './calculateSafePosition';
import { SAFE_MIN_HEIGHT_PERCENT } from './constant';

// function getSafePositionTransform2({ width, height, safePosition }) {
//   const { x_topLeft, y_topLeft, x_bottomRight, y_bottomRight } = safePosition;

//   return {
//     x_topLeft: x_topLeft / width,
//     y_topLeft: y_topLeft / height,
//     x_bottomRight: x_bottomRight / width,
//     y_bottomRight: y_bottomRight / height,
//   };
// }

// class CheckKeypoint {
//   constructor({ width = 640, height = 480 }) {
//     this.width = width;
//     this.height = height;
//     this.safePosition = this.detectSafePosition();
//   }

//   isSameSize({ width, height }) {
//     return this.width === width && this.height === height;
//   }

//   getSafePositionTransform() {
//     const { x_topLeft, y_topLeft, x_bottomRight, y_bottomRight } =
//       this.safePosition;

//     return {
//       x: x_topLeft,
//       y: y_topLeft,
//       w: x_bottomRight - x_topLeft,
//       h: y_bottomRight - y_topLeft,
//     };
//   }

//   getSafePositionTransform2() {
//     const { width, height } = this;
//     const { x_topLeft, y_topLeft, x_bottomRight, y_bottomRight } =
//       this.safePosition;

//     return {
//       x_topLeft: x_topLeft / width,
//       y_topLeft: y_topLeft / height,
//       x_bottomRight: x_bottomRight / width,
//       y_bottomRight: y_bottomRight / height,
//     };
//   }

//   detectSafePosition() {
//     const { height, width } = this;

//     const safeHeight = height * SAFE_HEIGHT_PERCENT;
//     const safeWidth = safeHeight / RATIO_BETWEEN_HEIGHT_WIDTH;

//     return {
//       x_topLeft: (width - safeWidth) / 2,
//       y_topLeft: (height - safeHeight) / 2 + safeHeight * LOWER_HEIGHT_PERCENT,
//       x_bottomRight: (width + safeWidth) / 2,
//       y_bottomRight:
//         (height + safeHeight) / 2 + safeHeight * LOWER_HEIGHT_PERCENT,
//     };
//   }
//   checkPosition({ keypoints }) {
//     const isKtpsValid = this.checkAllKptsInsideAndVisible({ keypoints });
//     const isSizeValid = this.checkPersonSizeTooSmall({ keypoints });
//     const a = isKtpsValid && isSizeValid;
//     console.log(
//       '🚀 ~ file: checkPosition.js:46 ~ CheckKeypoint ~ checkPosition ~ isSizeValid:',
//       isSizeValid
//     );
//     // console.log(
//     //   '🚀 ~ file: checkPosition.js:46 ~ CheckKeypoint ~ checkPosition ~ isKtpsValid:',
//     //   isKtpsValid
//     // );

//     return a;
//   }

//   checkPersonSizeTooSmall({ keypoints }) {
//     const { h: safeHeight } = this.getSafePositionTransform();

//     const y_leftEye = get(keypoints, '2.y', 0);
//     const y_leftAnkle = get(keypoints, '27.y', 0);

//     const personHeightTemp = y_leftAnkle - y_leftEye;

//     return (
//       personHeightTemp * this.height >= safeHeight * SAFE_MIN_HEIGHT_PERCENT
//     );
//   }

//   checkAllKptsInsideAndVisible({ keypoints }) {
//     // TODO: only check keypoint of necessary point and check threshold of visibility, not check hand , too sensitive
//     const { width, height, safePosition } = this;
//     const safePosition2 = getSafePositionTransform2({
//       width,
//       height,
//       safePosition,
//     });

//     const anyPointOutside = keypoints.map(({ visibility, x, y }) => {
//       if (visibility) {
//         return !isKeypointInSafePosition({ x, y, safePosition: safePosition2 });
//       }
//       return true;
//     });

//     const a = !anyPointOutside.some(Boolean);
//     return a;
//   }
// }

function checkPosition({ width, keypoints }) {
  const isKtpsValid = checkAllKptsInsideAndVisible({ width, keypoints });
  const isSizeValid = checkPersonSizeTooSmall({ width, keypoints });
  const a = isKtpsValid && isSizeValid;
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

function checkAllKptsInsideAndVisible({ width, keypoints }) {
  // TODO: only check keypoint of necessary point and check threshold of visibility, not check hand , too sensitive

  const anyPointOutside = keypoints.map(({ visibility, x, y }) => {
    if (visibility) {
      return !isKeypointInSafePosition({ x, y, width });
    }
    return true;
  });

  const a = !anyPointOutside.some(Boolean);
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

export default checkPosition;

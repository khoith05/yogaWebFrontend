import {
  SAFE_HEIGHT_PERCENT,
  LOWER_HEIGHT_PERCENT,
  RATIO_BETWEEN_HEIGHT_WIDTH,
  VIEW_RATIO,
} from './constant';

let safePosition = null;

function calculateSafePosition(width) {
  if (safePosition && safePosition.width === width) {
    return safePosition;
  }
  const height = width / VIEW_RATIO;
  const safeHeight = height * SAFE_HEIGHT_PERCENT;
  const safeWidth = safeHeight / RATIO_BETWEEN_HEIGHT_WIDTH;

  safePosition = {
    x_topLeft: (width - safeWidth) / 2,
    y_topLeft: (height - safeHeight) / 2 + safeHeight * LOWER_HEIGHT_PERCENT,
    x_bottomRight: (width + safeWidth) / 2,
    y_bottomRight:
      (height + safeHeight) / 2 + safeHeight * LOWER_HEIGHT_PERCENT,
    height,
    width,
  };

  return safePosition;
}

export default calculateSafePosition;

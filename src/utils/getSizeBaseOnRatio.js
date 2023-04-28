import { VIEW_RATIO } from './constant';
export function getHeightBaseOnRatio(width) {
  return Math.floor(width / VIEW_RATIO);
}

export function getWidthBaseOnRatio(height) {
  return Math.floor(height * VIEW_RATIO);
}

export default function getSizeBaseOnRatio(width) {
  const tempHeight = getHeightBaseOnRatio(width);

  if (tempHeight > window.innerHeight * 0.9) {
    const newWidth = getWidthBaseOnRatio(window.innerHeight * 0.9);
    return {
      height: Math.floor(window.innerHeight * 0.9),
      width: newWidth,
    };
  }
  return {
    height: tempHeight,
    width: Math.floor(width),
  };
}

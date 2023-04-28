import { VIEW_RATIO } from './constant';
export default function getHeightBaseOnRatio(width) {
  return Math.floor(width / VIEW_RATIO);
}

import { VIEW_RATIO } from './constant';
export default function getHeightBaseOnRatio(width) {
  return width / VIEW_RATIO;
}

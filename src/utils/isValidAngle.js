import { ANGLE_THRESHOLD } from './constant.js';

export default function isValidAngle(baseAngle, angle) {
  return Math.abs(baseAngle - angle) < ANGLE_THRESHOLD;
}

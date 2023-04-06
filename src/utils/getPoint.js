import {
  ANGLE_THRESHOLD,
  PUNISHMENT_COEFFICIENT,
  MAX_POINT_PER_ANGLE,
} from './constant';
export default function getPoint(deltaAngle) {
  if (deltaAngle < ANGLE_THRESHOLD) return MAX_POINT_PER_ANGLE;
  return (
    (2 - (deltaAngle * PUNISHMENT_COEFFICIENT) / ANGLE_THRESHOLD) *
    MAX_POINT_PER_ANGLE
  );
}
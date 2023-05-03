export const ANGLE_THRESHOLD = 15;
export const PUNISHMENT_COEFFICIENT = 1;
export const MAX_POINT_PER_ANGLE = 10;
export const ANGLE_LIST = {
  A: {
    basePoint: 14,
    adjacentPoint1: 12,
    adjacentPoint2: 16,
  },
  B: {
    basePoint: 13,
    adjacentPoint1: 15,
    adjacentPoint2: 11,
  },
  C: {
    basePoint: 12,
    adjacentPoint1: 14,
    adjacentPoint2: 11,
  },
  D: {
    basePoint: 11,
    adjacentPoint1: 12,
    adjacentPoint2: 13,
  },
  E: {
    basePoint: 12,
    adjacentPoint1: 14,
    adjacentPoint2: 24,
  },
  F: {
    basePoint: 11,
    adjacentPoint1: 23,
    adjacentPoint2: 13,
  },
  G: {
    basePoint: 24,
    adjacentPoint1: 12,
    adjacentPoint2: 26,
  },
  H: {
    basePoint: 23,
    adjacentPoint1: 25,
    adjacentPoint2: 11,
  },
  I: {
    basePoint: 26,
    adjacentPoint1: 24,
    adjacentPoint2: 28,
  },
  J: {
    basePoint: 25,
    adjacentPoint1: 27,
    adjacentPoint2: 23,
  },
};

export const ANGLE_LABEL = {
  A: 'A',
  B: 'B',
  C: 'C',
  D: 'D',
  E: 'E',
  F: 'F',
  G: 'G',
  H: 'H',
  I: 'I',
  J: 'J',
};
export const VIEW_RATIO = 16 / 9; // width / height

export const SAFE_HEIGHT_PERCENT = 0.6;
export const RATIO_BETWEEN_HEIGHT_WIDTH = 2.35;
export const SAFE_MIN_HEIGHT_PERCENT = 0.5;
export const LOWER_HEIGHT_PERCENT = 0.2;

export const CHECK_POSITION_TIMEOUT_KEY = 'CHECK_POSITION_TIMEOUT_KEY';
export const CHECK_POSE_TIMEOUT_KEY = 'CHECK_POSE_TIMEOUT_KEY';
export const CHECK_POSE_STAGE_TWO_TIME_OUT_KEY =
  'CHECK_POSE_STAGE_TWO_TIME_OUT_KEY';
export const CHECK_POSE_STAGE_ONE_TIME_OUT_KEY =
  'CHECK_POSE_STAGE_ONE_TIME_OUT_KEY';

export const POSE_ERROR_NOTI_INTERVAL = 'POSE_ERROR_NOTI_INTERVAL';

//will be removed
export const poseList = [
  {
    index: 0, // order
    name: 'warrior2',
    angleList: {
      A: 173.4995185,
      B: 175.776702,
      C: 177.8896579,
      D: 177.9935256,
      E: 97.06969613,
      F: 93.95660732,
      G: 98.39760698,
      H: 131.0887923,
      I: 247,
      J: 190,
    }, // angleList
    url: 'https://res.cloudinary.com/uploaderkhoith/video/upload/v1680939086/Countdown_5_Seconds_HD_theo75.mp4', // video url
    imageUrl:
      'https://cdn.lessons.com/assets/images/content/lessons-warrior-ii-yoga-pose.jpeg',
  },
  {
    index: 1, // order
    name: 'tree',
    angleList: {
      A: 160.9636589,
      B: 155.6343737,
      C: 87.15650871,
      D: 98.35404323,
      E: 173.7948635,
      F: 173.6831577,
      G: 178.5355273,
      H: 130.326657,
      I: 176.3402205,
      J: 33.52708996,
    }, // angleList
    url: 'https://res.cloudinary.com/uploaderkhoith/video/upload/v1681028177/Countdown_5_Seconds_HD_tw4chf.mp4', // video url
    imageUrl:
      'https://cdn.lessons.com/assets/images/content/lessons-warrior-ii-yoga-pose.jpeg',
  },
  {
    index: 2, // order
    name: 'Goddess',
    angleList: {
      A: 91.90709952,
      B: 97.20618786,
      C: 171.1844296,
      D: 170.8239646,
      E: 86.27849997,
      F: 87.26892464,
      G: 97.12468162,
      H: 100.0927167,
      I: 108.1762357,
      J: 107.4044223,
    }, // angleList
    url: 'https://res.cloudinary.com/uploaderkhoith/video/upload/v1680939086/Countdown_5_Seconds_HD_theo75.mp4', // video url
    imageUrl:
      'https://cdn.lessons.com/assets/images/content/lessons-warrior-ii-yoga-pose.jpeg',
  },
  {
    index: 3, // order
    name: 'warrior2',
    angleList: {
      A: 173.4995185,
      B: 175.776702,
      C: 177.8896579,
      D: 177.9935256,
      E: 97.06969613,
      F: 93.95660732,
      G: 98.39760698,
      H: 131.0887923,
      I: 113.0293731,
      J: 169.7554321,
    }, // angleList
    url: 'https://res.cloudinary.com/uploaderkhoith/video/upload/v1680939086/Countdown_5_Seconds_HD_theo75.mp4', // video url
    imageUrl:
      'https://cdn.lessons.com/assets/images/content/lessons-warrior-ii-yoga-pose.jpeg',
  },
  {
    index: 4, // order
    name: 'tree',
    angleList: {
      A: 160.9636589,
      B: 155.6343737,
      C: 87.15650871,
      D: 98.35404323,
      E: 173.7948635,
      F: 173.6831577,
      G: 178.5355273,
      H: 130.326657,
      I: 176.3402205,
      J: 33.52708996,
    }, // angleList
    url: 'https://res.cloudinary.com/uploaderkhoith/video/upload/v1680939086/Countdown_5_Seconds_HD_theo75.mp4', // video url
    imageUrl:
      'https://cdn.lessons.com/assets/images/content/lessons-warrior-ii-yoga-pose.jpeg',
  },
  {
    index: 5, // order
    name: 'goddess',
    angleList: {
      A: 91.90709952,
      B: 97.20618786,
      C: 171.1844296,
      D: 170.8239646,
      E: 86.27849997,
      F: 87.26892464,
      G: 97.12468162,
      H: 100.0927167,
      I: 108.1762357,
      J: 107.4044223,
    }, // angleList
    url: 'https://res.cloudinary.com/uploaderkhoith/video/upload/v1680939086/Countdown_5_Seconds_HD_theo75.mp4', // video url
    imageUrl:
      'https://cdn.lessons.com/assets/images/content/lessons-warrior-ii-yoga-pose.jpeg',
  },
];

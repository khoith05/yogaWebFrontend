export const ANGLE_THRESHOLD = 15;
export const PUNISHMENT_COEFFICIENT = 1;
export const MAX_POINT_PER_ANGLE = 10;
//* A is right, B is left
export const ANGLE_LIST = {
  B: {
    basePoint: 14,
    adjacentPoint1: 12,
    adjacentPoint2: 16,
  },
  A: {
    basePoint: 13,
    adjacentPoint1: 15,
    adjacentPoint2: 11,
  },
  D: {
    basePoint: 12,
    adjacentPoint1: 14,
    adjacentPoint2: 11,
  },
  C: {
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
  H: {
    basePoint: 24,
    adjacentPoint1: 12,
    adjacentPoint2: 26,
  },
  G: {
    basePoint: 23,
    adjacentPoint1: 25,
    adjacentPoint2: 11,
  },
  J: {
    basePoint: 26,
    adjacentPoint1: 24,
    adjacentPoint2: 28,
  },
  I: {
    basePoint: 25,
    adjacentPoint1: 27,
    adjacentPoint2: 23,
  },
};

export const ANGLE_LABEL = {
  A: "A",
  B: "B",
  C: "C",
  D: "D",
  E: "E",
  F: "F",
  G: "G",
  H: "H",
  I: "I",
  J: "J",
};
export const VIEW_RATIO = 16 / 9; //* width / height

export const SAFE_HEIGHT_PERCENT = 0.6;
export const RATIO_BETWEEN_HEIGHT_WIDTH = 2.35;
export const SAFE_MIN_HEIGHT_PERCENT = 0.5;
export const LOWER_HEIGHT_PERCENT = 0.2;

export const CHECK_POSITION_TIMEOUT_KEY = "CHECK_POSITION_TIMEOUT_KEY";
export const CHECK_POSE_TIMEOUT_KEY = "CHECK_POSE_TIMEOUT_KEY";
export const CHECK_POSE_STAGE_TWO_TIME_OUT_KEY =
  "CHECK_POSE_STAGE_TWO_TIME_OUT_KEY";
export const CHECK_POSE_STAGE_ONE_TIME_OUT_KEY =
  "CHECK_POSE_STAGE_ONE_TIME_OUT_KEY";
export const CHECK_POSE_STAGE_ZERO_TIME_OUT_KEY =
  "CHECK_POSE_STAGE_ZERO_TIME_OUT_KEY";

export const POSE_ERROR_NOTI_INTERVAL = "POSE_ERROR_NOTI_INTERVAL";

export const POSE_LANDMARKS_LEFT = [27, 13, 23, 25, 11, 15];

export const POSE_LANDMARKS_RIGHT = [28, 14, 24, 26, 12, 16];

export const POSE_CONNECTIONS = [
  [11, 12],
  [11, 13],
  [13, 15],
  [12, 14],
  [14, 16],
  [11, 23],
  [12, 24],
  [23, 24],
  [23, 25],
  [24, 26],
  [25, 27],
  [26, 28],
];

export const GET_EXERCISE_DETAIL_LOADING = "GET_EXERCISE_DETAIL_LOADING";

export const ANGLE_AUDIO = {
  [10]: "https://res.cloudinary.com/djedlqygu/video/upload/v1683211417/Voice/10do_u9jtth.mp3",
  [20]: "https://res.cloudinary.com/djedlqygu/video/upload/v1683211418/Voice/20do_gkmgfi.mp3",
  [30]: "https://res.cloudinary.com/djedlqygu/video/upload/v1683211418/Voice/30do_pcynvn.mp3",
  [40]: "https://res.cloudinary.com/djedlqygu/video/upload/v1683211418/Voice/40do_aglwss.mp3",
  [50]: "https://res.cloudinary.com/djedlqygu/video/upload/v1683211418/Voice/50do_ivlrk8.mp3",
  [60]: "https://res.cloudinary.com/djedlqygu/video/upload/v1683211418/Voice/60do_prfxoa.mp3",
  [70]: "https://res.cloudinary.com/djedlqygu/video/upload/v1683211419/Voice/70do_ijs7wo.mp3",
  [80]: "https://res.cloudinary.com/djedlqygu/video/upload/v1683211418/Voice/80do_gtpxpb.mp3",
  [90]: "https://res.cloudinary.com/djedlqygu/video/upload/v1683211419/Voice/90do_ivftho.mp3",
};
//* [smallerAudio, biggerAudio]
export const POSE_ERROR_AUDIO = {
  A: [
    "https://res.cloudinary.com/djedlqygu/video/upload/v1683211416/Voice/mokhuyatayphairathem_hmrgqi.mp3",
    "https://res.cloudinary.com/djedlqygu/video/upload/v1683211416/Voice/mokhuyatayphairathem_hmrgqi.mp3",
  ],
  B: [
    "https://res.cloudinary.com/djedlqygu/video/upload/v1683211416/Voice/mokhuyataytrairathem_bh7kff.mp3",
    "https://res.cloudinary.com/djedlqygu/video/upload/v1683211415/Voice/khepkhuitaytraithem_cwfzin.mp3",
  ],
  C: [
    "https://res.cloudinary.com/djedlqygu/video/upload/v1683211416/Voice/mocanhtayphaisovoithannguoithem_yvqlch.mp3",
    "https://res.cloudinary.com/djedlqygu/video/upload/v1683211415/Voice/khepcanhtayphaisovoithannguoithem_ho9btn.mp3",
  ],
  D: [
    "https://res.cloudinary.com/djedlqygu/video/upload/v1683211416/Voice/mocanhtaytraisovoithannguoithem_vztceh.mp3",
    "https://res.cloudinary.com/djedlqygu/video/upload/v1683211416/Voice/khepcanhtaytraisovoithannguoithem_yam4ed.mp3",
  ],
  E: [
    "https://res.cloudinary.com/djedlqygu/video/upload/v1683211416/Voice/mocanhtayphaisovoithannguoithem_yvqlch.mp3",
    "https://res.cloudinary.com/djedlqygu/video/upload/v1683211415/Voice/khepcanhtayphaisovoithannguoithem_ho9btn.mp3",
  ],
  F: [
    "https://res.cloudinary.com/djedlqygu/video/upload/v1683211416/Voice/mocanhtaytraisovoithannguoithem_vztceh.mp3",
    "https://res.cloudinary.com/djedlqygu/video/upload/v1683211416/Voice/khepcanhtaytraisovoithannguoithem_yam4ed.mp3",
  ],
  G: [
    "https://res.cloudinary.com/djedlqygu/video/upload/v1683211416/Voice/morongbapduiphaivathannguoithem_js6ru6.mp3",
    "https://res.cloudinary.com/djedlqygu/video/upload/v1683211417/Voice/thunhoduiphaivathannguoithem_b3cke9.mp3",
  ],
  H: [
    "https://res.cloudinary.com/djedlqygu/video/upload/v1683211416/Voice/morongbapduitraivathannguoithem_kcrmpu.mp3																							",
    "https://res.cloudinary.com/djedlqygu/video/upload/v1683211417/Voice/thunhoduitraivathannguoithem_c18ooe.mp3",
  ],
  I: [
    "https://res.cloudinary.com/djedlqygu/video/upload/v1683211417/Voice/thunhobapduivabapchanphaithem_vdy9uf.mp3",
    "https://res.cloudinary.com/djedlqygu/video/upload/v1683211417/Voice/morongbapduivabapchanphaithem_urodi2.mp3",
  ],
  J: [
    "https://res.cloudinary.com/djedlqygu/video/upload/v1683211417/Voice/thunhobapduivabapchantraithem_djg1or.mp3",
    "https://res.cloudinary.com/djedlqygu/video/upload/v1683211417/Voice/morongbapduivabapchantraithem_tx1s0x.mp3",
  ],
};

//will be removed
export const poseList = [
  {
    index: 0, // order
    name: "warrior2",
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
    url: "https://res.cloudinary.com/djedlqygu/video/upload/v1681293744/YOGA/Mountain%20Pose%20Arms%20Shoulder%20Level%20Left/06_quick_stretching_sequence_mountain_pose_arms_shoulder_level_left_1_zfvnuo.mp4", // video url
    imageUrl:
      "https://cdn.lessons.com/assets/images/content/lessons-warrior-ii-yoga-pose.jpeg",
    duration: 5,
  },
  {
    index: 1, // order
    name: "tree",
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
    url: "https://res.cloudinary.com/uploaderkhoith/video/upload/v1681028177/Countdown_5_Seconds_HD_tw4chf.mp4", // video url
    imageUrl:
      "https://cdn.lessons.com/assets/images/content/lessons-warrior-ii-yoga-pose.jpeg",
    duration: 5,
  },
  {
    index: 2, // order
    name: "Goddess",
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
    url: "https://res.cloudinary.com/djedlqygu/video/upload/v1681293744/YOGA/Mountain%20Pose%20Arms%20Shoulder%20Level%20Left/06_quick_stretching_sequence_mountain_pose_arms_shoulder_level_left_1_zfvnuo.mp4", // video url
    imageUrl:
      "https://cdn.lessons.com/assets/images/content/lessons-warrior-ii-yoga-pose.jpeg",
    duration: 5,
  },
  {
    index: 3, // order
    name: "warrior2",
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
    url: "https://res.cloudinary.com/djedlqygu/video/upload/v1681293744/YOGA/Mountain%20Pose%20Arms%20Shoulder%20Level%20Left/06_quick_stretching_sequence_mountain_pose_arms_shoulder_level_left_1_zfvnuo.mp4", // video url
    imageUrl:
      "https://cdn.lessons.com/assets/images/content/lessons-warrior-ii-yoga-pose.jpeg",
    duration: 5,
  },
  {
    index: 4, // order
    name: "tree",
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
    url: "https://res.cloudinary.com/djedlqygu/video/upload/v1681293744/YOGA/Mountain%20Pose%20Arms%20Shoulder%20Level%20Left/06_quick_stretching_sequence_mountain_pose_arms_shoulder_level_left_1_zfvnuo.mp4", // video url
    imageUrl:
      "https://cdn.lessons.com/assets/images/content/lessons-warrior-ii-yoga-pose.jpeg",
    duration: 5,
  },
  {
    index: 5, // order
    name: "goddess",
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
    url: "https://res.cloudinary.com/djedlqygu/video/upload/v1681293744/YOGA/Mountain%20Pose%20Arms%20Shoulder%20Level%20Left/06_quick_stretching_sequence_mountain_pose_arms_shoulder_level_left_1_zfvnuo.mp4", // video url
    imageUrl:
      "https://cdn.lessons.com/assets/images/content/lessons-warrior-ii-yoga-pose.jpeg",
    duration: 5,
  },
];

export const ANGLE_THRESHOLD = 15;
export const PUNISHMENT_COEFFICIENT = 1;
export const MAX_POINT_PER_ANGLE = 10;
//* A is left, B is right
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
  F: {
    basePoint: 12,
    adjacentPoint1: 14,
    adjacentPoint2: 24,
  },
  E: {
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

export const LIMIT_ANGLE_LIST = {
  A: true,
  B: true,
  I: true,
  J: true,
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

export const HANDLE_NEXT_POSE_THROTTLE_KEY =
  "CHECK_POSE_STAGE_ZERO_TIME_OUT_KEY";

export const CALCULATE_POSE_POINt_THROTTLE_KEY =
  "CALCULATE_POSE_POINt_THROTTLE_KEY";

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

export const GET_EXERCISES_LOADING = "GET_EXERCISES_LOADING";

export const SIGNIN_LOADING = "SIGNIN_LOADING";

export const SIGNUP_LOADING = "SIGNUP_LOADING";

export const GET_RESULTS_LOADING = "GET_RESULTS_LOADING";

export const GET_RESULT_LOADING = "GET_RESULT_LOADING";

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
  [100]:
    "https://res.cloudinary.com/djedlqygu/video/upload/v1683514801/Voice/100do_du3hpm.mp3",
  [110]:
    "https://res.cloudinary.com/djedlqygu/video/upload/v1683514801/Voice/110do_j06mdh.mp3",
  [120]:
    "https://res.cloudinary.com/djedlqygu/video/upload/v1683474049/Voice/120do_djarif.mp3",
  [130]:
    "https://res.cloudinary.com/djedlqygu/video/upload/v1683514918/130do_wwpcl0.mp3",
  [140]:
    "https://res.cloudinary.com/djedlqygu/video/upload/v1683474048/Voice/140do_d7pwkt.mp3",
  [150]:
    "https://res.cloudinary.com/djedlqygu/video/upload/v1683514801/Voice/150do_awpqjb.mp3",
  [160]:
    "https://res.cloudinary.com/djedlqygu/video/upload/v1683474048/Voice/160do_rftxt4.mp3",
  [170]:
    "https://res.cloudinary.com/djedlqygu/video/upload/v1683474049/Voice/170do_opygd1.mp3",
  [180]:
    "https://res.cloudinary.com/djedlqygu/video/upload/v1683474048/Voice/180do_l9ssfy.mp3",
  [190]:
    "https://res.cloudinary.com/djedlqygu/video/upload/v1683474048/Voice/190do_kytghz.mp3",
  [200]:
    "https://res.cloudinary.com/djedlqygu/video/upload/v1683474048/Voice/200do_torcrv.mp3",
  [210]:
    "https://res.cloudinary.com/djedlqygu/video/upload/v1683474049/Voice/210do_llde5e.mp3",
  [220]:
    "https://res.cloudinary.com/djedlqygu/video/upload/v1683474049/Voice/220do_qhxnsz.mp3",
  [230]:
    "https://res.cloudinary.com/djedlqygu/video/upload/v1683514801/Voice/230do_ik3xsx.mp3",
  [240]:
    "https://res.cloudinary.com/djedlqygu/video/upload/v1683474049/Voice/240do_pdw7d7.mp3",
  [250]:
    "https://res.cloudinary.com/djedlqygu/video/upload/v1683474049/Voice/250do_vzxukt.mp3",
  [260]:
    "https://res.cloudinary.com/djedlqygu/video/upload/v1683474050/Voice/260do_yqmm2t.mp3",
  [270]:
    "https://res.cloudinary.com/djedlqygu/video/upload/v1683474050/Voice/270do_wx6mbt.mp3",
  [280]:
    "https://res.cloudinary.com/djedlqygu/video/upload/v1683474050/Voice/280do_nyz1vp.mp3",
  [290]:
    "https://res.cloudinary.com/djedlqygu/video/upload/v1683474050/Voice/290do_muyjve.mp3",
  [300]:
    "https://res.cloudinary.com/djedlqygu/video/upload/v1683474050/Voice/300do_ooe0cv.mp3",
  [310]:
    "https://res.cloudinary.com/djedlqygu/video/upload/v1683474050/Voice/310_bjz42y.mp3",
  [320]:
    "https://res.cloudinary.com/djedlqygu/video/upload/v1683474050/Voice/320do_ksc4m8.mp3",
  [330]:
    "https://res.cloudinary.com/djedlqygu/video/upload/v1683474050/Voice/330do_z85b3e.mp3",
  [340]:
    "https://res.cloudinary.com/djedlqygu/video/upload/v1683474050/Voice/340do_hlhbxt.mp3",
  [350]:
    "https://res.cloudinary.com/djedlqygu/video/upload/v1683474050/Voice/350do_wkwrcx.mp3",
  [360]:
    "https://res.cloudinary.com/djedlqygu/video/upload/v1683474051/Voice/360do_oa6n1q.mp3",
};
//* [smallerAudio, biggerAudio]
export const POSE_ERROR_AUDIO = {
  B: [
    "https://res.cloudinary.com/djedlqygu/video/upload/v1683211416/Voice/mokhuyatayphairathem_hmrgqi.mp3",
    "https://res.cloudinary.com/djedlqygu/video/upload/v1683211416/Voice/mokhuyatayphairathem_hmrgqi.mp3",
  ],
  A: [
    "https://res.cloudinary.com/djedlqygu/video/upload/v1683211416/Voice/mokhuyataytrairathem_bh7kff.mp3",
    "https://res.cloudinary.com/djedlqygu/video/upload/v1683211415/Voice/khepkhuitaytraithem_cwfzin.mp3",
  ],
  D: [
    "https://res.cloudinary.com/djedlqygu/video/upload/v1683211416/Voice/mocanhtayphaisovoithannguoithem_yvqlch.mp3",
    "https://res.cloudinary.com/djedlqygu/video/upload/v1683211415/Voice/khepcanhtayphaisovoithannguoithem_ho9btn.mp3",
  ],
  C: [
    "https://res.cloudinary.com/djedlqygu/video/upload/v1683211416/Voice/mocanhtaytraisovoithannguoithem_vztceh.mp3",
    "https://res.cloudinary.com/djedlqygu/video/upload/v1683211416/Voice/khepcanhtaytraisovoithannguoithem_yam4ed.mp3",
  ],
  F: [
    "https://res.cloudinary.com/djedlqygu/video/upload/v1683211416/Voice/mocanhtayphaisovoithannguoithem_yvqlch.mp3",
    "https://res.cloudinary.com/djedlqygu/video/upload/v1683211415/Voice/khepcanhtayphaisovoithannguoithem_ho9btn.mp3",
  ],
  E: [
    "https://res.cloudinary.com/djedlqygu/video/upload/v1683211416/Voice/mocanhtaytraisovoithannguoithem_vztceh.mp3",
    "https://res.cloudinary.com/djedlqygu/video/upload/v1683211416/Voice/khepcanhtaytraisovoithannguoithem_yam4ed.mp3",
  ],
  H: [
    "https://res.cloudinary.com/djedlqygu/video/upload/v1683211416/Voice/morongbapduiphaivathannguoithem_js6ru6.mp3",
    "https://res.cloudinary.com/djedlqygu/video/upload/v1683211417/Voice/thunhoduiphaivathannguoithem_b3cke9.mp3",
  ],
  G: [
    "https://res.cloudinary.com/djedlqygu/video/upload/v1683211416/Voice/morongbapduitraivathannguoithem_kcrmpu.mp3																							",
    "https://res.cloudinary.com/djedlqygu/video/upload/v1683211417/Voice/thunhoduitraivathannguoithem_c18ooe.mp3",
  ],
  J: [
    "https://res.cloudinary.com/djedlqygu/video/upload/v1683211417/Voice/thunhobapduivabapchanphaithem_vdy9uf.mp3",
    "https://res.cloudinary.com/djedlqygu/video/upload/v1683211417/Voice/morongbapduivabapchanphaithem_urodi2.mp3",
  ],
  I: [
    "https://res.cloudinary.com/djedlqygu/video/upload/v1683211417/Voice/thunhobapduivabapchantraithem_djg1or.mp3",
    "https://res.cloudinary.com/djedlqygu/video/upload/v1683211417/Voice/morongbapduivabapchantraithem_tx1s0x.mp3",
  ],
};

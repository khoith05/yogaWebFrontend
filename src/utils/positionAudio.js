import addToPlayAudiosQueue, { clearAudioWithKey } from "./audio";
import { throttle } from "lodash";

const TOO_FAR_AUDIO =
  "https://res.cloudinary.com/djedlqygu/video/upload/v1683211419/Voice/bandungquagancamerahaytienlaiganhon_dmenbg.mp3";
const TOO_NEAR_AUDIO =
  "https://res.cloudinary.com/djedlqygu/video/upload/v1683211419/Voice/bandungquagancamerahayluiraxa_usqx1a.mp3";
const TO_CENTER_AUDIO =
  "https://res.cloudinary.com/djedlqygu/video/upload/v1683211420/Voice/haydungvaovitrikhunghinh_xm46dn.mp3";
const BACK_TO_CAMERA_AUDIO =
  "https://res.cloudinary.com/djedlqygu/video/upload/v1683211419/Voice/haydungvaogiuacamera_lmcfi0.mp3";

const START_AUDIO =
  "https://res.cloudinary.com/djedlqygu/video/upload/v1683211420/Voice/batdau_piodqe.mp3";

const KEEP_POSE_AUDIO =
  "https://res.cloudinary.com/djedlqygu/video/upload/v1683211420/Voice/giunguyentuthe_kky0ba.mp3";

const NEXT_POSE_AUDIO =
  "https://res.cloudinary.com/djedlqygu/video/upload/v1683211419/Voice/dongtactieptheo_r5bhln.mp3";

const END_AUDIO =
  "https://res.cloudinary.com/djedlqygu/video/upload/v1683211420/Voice/ketthuc_hrqvwg.mp3";

const tooFarAudioThrottle = throttle(
  () => addToPlayAudiosQueue({ srcOne: TOO_FAR_AUDIO, key: TOO_FAR_AUDIO }),
  6000
);

const tooNearAudioThrottle = throttle(() => {
  addToPlayAudiosQueue({ srcOne: TOO_NEAR_AUDIO, key: TOO_NEAR_AUDIO });
}, 6000);

const toCenterAudioThrottle = throttle(
  () => addToPlayAudiosQueue({ srcOne: TO_CENTER_AUDIO, key: TO_CENTER_AUDIO }),
  6000
);

const backToCameraAudioThrottle = throttle(
  () =>
    addToPlayAudiosQueue({
      srcOne: BACK_TO_CAMERA_AUDIO,
      clearQueue: true,
      key: BACK_TO_CAMERA_AUDIO,
    }),
  6000
);

export const tooFarAudio = (isNotTooSmall) => {
  isNotTooSmall ? clearAudioWithKey(TOO_FAR_AUDIO) : tooFarAudioThrottle();
};

export const tooNearAudio = (isNotTooHigh) => {
  isNotTooHigh ? clearAudioWithKey(TOO_NEAR_AUDIO) : tooNearAudioThrottle();
};

export const toCenterAudio = (isPersonInCenter) => {
  isPersonInCenter
    ? clearAudioWithKey(TO_CENTER_AUDIO)
    : toCenterAudioThrottle();
};

export const backToCameraAudio = (isPoseVisible) => {
  isPoseVisible
    ? clearAudioWithKey(BACK_TO_CAMERA_AUDIO)
    : backToCameraAudioThrottle();
};

export const startAudio = () =>
  addToPlayAudiosQueue({ srcOne: START_AUDIO, clearQueue: true });

export const endAudio = () =>
  addToPlayAudiosQueue({ srcOne: END_AUDIO, clearQueue: true });

export const nextPoseAudio = () =>
  addToPlayAudiosQueue({ srcOne: NEXT_POSE_AUDIO, clearQueue: true });

export const keepPoseAudio = () =>
  addToPlayAudiosQueue({ srcOne: KEEP_POSE_AUDIO, clearQueue: true });

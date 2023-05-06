import addToPlayAudiosQueue from "./audio";
import { debounce, throttle } from "lodash";

const TOO_FAR_AUDIO =
  "https://res.cloudinary.com/djedlqygu/video/upload/v1683211419/Voice/bandungquagancamerahaytienlaiganhon_dmenbg.mp3";
const TOO_NEAR_AUDIO =
  "https://res.cloudinary.com/djedlqygu/video/upload/v1683211419/Voice/bandungquagancamerahayluiraxa_usqx1a.mp3";
const TO_CENTER_AUDIO =
  "https://res.cloudinary.com/djedlqygu/video/upload/v1683211420/Voice/haydungvaovitrikhunghinh_xm46dn.mp3";
const BACK_TO_CAMERA_AUDIO =
  "https://res.cloudinary.com/djedlqygu/video/upload/v1683211419/Voice/haydungvaogiuacamera_lmcfi0.mp3";

export const tooFarAudio = throttle(
  () => addToPlayAudiosQueue({ srcOne: TOO_FAR_AUDIO }),
  10000
);

export const tooNearAudio = throttle(
  () => addToPlayAudiosQueue({ srcOne: TOO_NEAR_AUDIO }),
  10000
);

export const toCenterAudio = throttle(
  () => addToPlayAudiosQueue({ srcOne: TO_CENTER_AUDIO }),
  10000
);

export const backToCameraAudio = throttle(
  () => addToPlayAudiosQueue({ srcOne: BACK_TO_CAMERA_AUDIO }),
  10000
);

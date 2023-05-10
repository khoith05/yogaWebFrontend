import * as asyncUtil from "async";
import { Howl } from "howler";

let playingAudio = undefined;

const audioQueue = asyncUtil.queue(async ({ task }, cb) => {
  await task();
  cb();
});

export function getPlayAudiosCallback(src = []) {
  if (src.length === 2) {
    return playTwoAudio(src);
  }

  return playOneAudio(src);
}

function playOneAudio(src) {
  const audio = new Howl({ src, preload: true });
  return async () =>
    await new Promise((res) => {
      const stopPlaying = () => {
        playingAudio = undefined;
        res();
      };
      audio.once("end", stopPlaying);
      audio.once("stop", stopPlaying);
      playingAudio = audio;
      audio.play();
    });
}

function playTwoAudio([src1, src2]) {
  const audio1 = new Howl({ src: src1, preload: true });
  const audio2 = new Howl({ src: src2, preload: true });
  return async () =>
    await new Promise((res) => {
      const stopPlaying = () => {
        playingAudio = undefined;
        res();
      };
      playingAudio = audio1;
      audio1.play();
      audio1.once("end", () => {
        playingAudio = audio2;
        audio2.play();
      });
      audio1.once("stop", stopPlaying);

      audio2.once("end", stopPlaying);
      audio2.once("stop", stopPlaying);
    });
}

export function clearAudioQueue() {
  audioQueue.remove(() => {
    return true;
  });
  if (playingAudio) {
    playingAudio.stop();
  }
}

export function clearAudioWithKey(keyToClear) {
  audioQueue.remove(({ key }) => {
    return key === keyToClear;
  });
}

export default function addToPlayAudiosQueue({
  key = "",
  src,
  cb = () => {},
  clearQueue = false,
  clearSameKey = false,
}) {
  clearQueue && clearAudioQueue();
  if (clearQueue) {
    clearAudioQueue();
  } else if (clearSameKey && key) {
    clearAudioWithKey(key);
  }

  audioQueue.push(
    {
      task: getPlayAudiosCallback(src),
      key,
    },
    cb
  );
  !audioQueue.started && audioQueue.drain();
}

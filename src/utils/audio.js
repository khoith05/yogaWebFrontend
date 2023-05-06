import * as asyncUtil from "async";

let playingAudio = undefined;
let resolve = undefined;

const audioQueue = asyncUtil.queue(async ({ task }, cb) => {
  await task();
  await new Promise((res) => setTimeout(res, 1000));
  cb();
});

export async function playAudios(srcOne, srcTwo = "") {
  const audioOne = new Audio(srcOne);
  if (srcTwo) {
    const audioTwo = new Audio(srcTwo);
    audioTwo.preload = true;
    await playAudio(audioOne);
    if (audioOne.forcestop) return;
    await playAudio(audioTwo);
    return;
  }
  await playAudio(audioOne);
}

function playAudio(audio) {
  return new Promise((res) => {
    playingAudio = audio;
    resolve = res;
    audio.play();
    audio.onended = () => {
      playingAudio = undefined;
      resolve = undefined;
      res();
    };
  });
}

export function clearAudioQueue() {
  audioQueue.remove(() => {
    return true;
  });
  if (playingAudio && resolve) {
    playingAudio.pause();
    playAudio.forcestop = true;
    resolve();
    playingAudio = undefined;
    resolve = undefined;
  }
}

function clearAudioWithKey(keyToClear) {
  audioQueue.remove(({ key }) => {
    return key === keyToClear;
  });
}

export default function addToPlayAudiosQueue({
  key = "",
  srcOne,
  srcTwo = "",
  cb = () => {},
  clearQueue = false,
}) {
  clearQueue && clearAudioQueue();
  if (clearQueue) {
    clearAudioQueue();
  } else if (key) {
    clearAudioWithKey(key);
  }
  audioQueue.push(
    {
      task: () => playAudios(srcOne, srcTwo),
      key,
    },
    cb
  );
  !audioQueue.started && audioQueue.drain();
}

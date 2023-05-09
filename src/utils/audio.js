import * as asyncUtil from "async";

let playingAudio = undefined;
let resolve = undefined;
let forceStop = false;

const audioQueue = asyncUtil.queue(async ({ task }, cb) => {
  await task();
  cb();
});

export async function playAudios(srcOne, srcTwo = "") {
  const audioOne = new Audio(srcOne);
  if (srcTwo) {
    const audioTwo = new Audio(srcTwo);
    await playAudio(audioOne);
    if (forceStop) {
      forceStop = false;
      return;
    }
    await playAudio(audioTwo);
    if (forceStop) {
      forceStop = false;
    }
    return;
  }
  await playAudio(audioOne);
  if (forceStop) {
    forceStop = false;
  }
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
    forceStop = true;
    playingAudio = undefined;
    resolve();
    resolve = undefined;
  }
}

export function clearAudioWithKey(keyToClear) {
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
      task: () => playAudios(srcOne, srcTwo),
      key,
    },
    cb
  );
  !audioQueue.started && audioQueue.drain();
}

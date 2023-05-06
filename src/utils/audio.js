import * as asyncUtil from "async";

let playingAudio = undefined;
let resolve = undefined;

const audioQueue = asyncUtil.queue(async (task, cb) => {
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
    if (audioOne.paused) return;
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
    resolve();
    playingAudio = undefined;
    resolve = undefined;
  }
}

export default function addToPlayAudiosQueue({
  srcOne,
  srcTwo = "",
  cb = () => {},
  clearQueue = false,
}) {
  clearQueue && clearAudioQueue();
  audioQueue.push(() => playAudios(srcOne, srcTwo), cb);
  !audioQueue.started && audioQueue.drain();
}

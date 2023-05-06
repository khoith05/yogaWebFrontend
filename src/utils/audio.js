import * as asyncUtil from "async";

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
    await playAudio(audioTwo);
    return;
  }
  await playAudio(audioOne);
}

function playAudio(audio) {
  return new Promise((res) => {
    audio.play();
    audio.onended = res;
  });
}

export default function addToPlayAudiosQueue({
  srcOne,
  srcTwo = "",
  cb = () => {},
  clearQueue = false,
}) {
  console.log("🚀 ~ file: audio.js:34 ~ srcOne:", srcOne);
  clearQueue && audioQueue.remove(() => true);
  audioQueue.push(() => playAudios(srcOne, srcTwo), cb);
  !audioQueue.started && audioQueue.drain();
}

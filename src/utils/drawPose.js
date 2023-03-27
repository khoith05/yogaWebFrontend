import getChecKeypoint from './CheckPositionSingleton';
export default function drawPose({ canvas, isValidPosition }) {
  const canvasCtx = canvas.getContext('2d');

  const image = new Image();
  image.src = isValidPosition ? '/pose_green.png' : '/pose_red.png';
  image.onload = function () {
    const { x, y, h } = getChecKeypoint().getSafePositionTransform();
    const scaleFactor = h / image.height;
    const imgWidth = image.width * scaleFactor;
    const imgHeight = h;
    canvasCtx.clearRect(x, y, imgWidth, imgHeight);
    canvasCtx.drawImage(image, x, y, imgWidth, imgHeight);
  };
}

export function drawSafeRect({ canvas }) {
  const canvasCtx = canvas.getContext('2d');
  const { x, y, w, h } = getChecKeypoint().getSafePositionTransform();
  console.log(
    '🚀 ~ file: drawPose.js:20 ~ drawSafeRect ~ x, y, w, h:',
    x,
    y,
    w,
    h
  );
  canvasCtx.beginPath();
  canvasCtx.rect(x - 1, y - 1, w + 2, h + 2);
  canvasCtx.stroke();
}

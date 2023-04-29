import calculateSafePosition from './calculateSafePosition';

export default function drawPose({ canvas, isValidPosition }) {
  const canvasCtx = canvas.getContext('2d');
  canvasCtx.clearRect(0, 0, canvas.width, canvas.height);

  const image = new Image();
  image.src = isValidPosition ? '/pose_green.png' : '/pose_red.png';
  image.onload = function () {
    const { x_topLeft, y_topLeft, y_bottomRight } = calculateSafePosition(
      canvas.width
    );
    const height = Math.abs(y_bottomRight - y_topLeft);
    const scaleFactor = height / image.height;
    const imgWidth = image.width * scaleFactor;
    canvasCtx.clearRect(x_topLeft, y_topLeft, imgWidth, height);
    canvasCtx.drawImage(image, x_topLeft, y_topLeft, imgWidth, height);
  };
  //draw around
  canvasCtx.clearRect(0, 0, canvas.width, canvas.height);

  canvasCtx.fillStyle = isValidPosition
    ? 'rgba(0, 255, 0, 0.4)'
    : 'rgba(255, 0, 0, 0.4)';
  canvasCtx.fillRect(0, 0, canvas.width, canvas.height);
  canvasCtx.clearRect(
    canvas.width * 0.15,
    canvas.height * 0.05,
    canvas.width * 0.7,
    canvas.height * 0.9
  );
}

export function drawSafeRect({ canvas }) {
  const canvasCtx = canvas.getContext('2d');
  const { x_topLeft, x_bottomRight, y_topLeft, y_bottomRight } =
    calculateSafePosition(canvas.width);

  const width = Math.abs(x_topLeft - x_bottomRight);
  const height = Math.abs(y_bottomRight - y_topLeft);
  canvasCtx.beginPath();
  canvasCtx.rect(x_topLeft - 1, y_topLeft - 1, width + 2, height + 2);
  canvasCtx.stroke();
}

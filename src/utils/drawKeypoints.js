import drawingUtils from '@mediapipe/drawing_utils';
import {
  POSE_LANDMARKS_LEFT,
  POSE_LANDMARKS_RIGHT,
  POSE_CONNECTIONS,
  POSE_LANDMARKS_NEUTRAL,
} from '@mediapipe/pose';

export default function drawKeypoints({ canvas, keypoints }) {
  if (!keypoints) return;
  const canvasCtx = canvas.getContext('2d');
  canvasCtx.save();
  canvasCtx.clearRect(0, 0, canvas.width, canvas.height);
  drawingUtils.drawConnectors(canvasCtx, keypoints, POSE_CONNECTIONS, {
    visibilityMin: 0.65,
    color: 'white',
  });
  drawingUtils.drawLandmarks(
    canvasCtx,
    Object.values(POSE_LANDMARKS_LEFT).map((index) => keypoints[index]),
    { visibilityMin: 0.65, color: 'white', fillColor: 'rgb(255,138,0)' }
  );
  drawingUtils.drawLandmarks(
    canvasCtx,
    Object.values(POSE_LANDMARKS_RIGHT).map((index) => keypoints[index]),
    { visibilityMin: 0.65, color: 'white', fillColor: 'rgb(0,217,231)' }
  );
  drawingUtils.drawLandmarks(
    canvasCtx,
    Object.values(POSE_LANDMARKS_NEUTRAL).map((index) => keypoints[index]),
    { visibilityMin: 0.65, color: 'white', fillColor: 'white' }
  );
  canvasCtx.restore();
}

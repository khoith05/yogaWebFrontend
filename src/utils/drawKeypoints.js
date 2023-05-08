import drawingUtils from "@mediapipe/drawing_utils";
import {
  POSE_LANDMARKS_LEFT,
  POSE_LANDMARKS_RIGHT,
  POSE_CONNECTIONS,
} from "./constant";

export default function drawKeypoints({ canvas, keypoints }) {
  if (!keypoints) return;
  const canvasCtx = canvas.getContext("2d");
  canvasCtx.save();
  canvasCtx.clearRect(0, 0, canvas.width, canvas.height);

  drawingUtils.drawConnectors(canvasCtx, keypoints, POSE_CONNECTIONS, {
    visibilityMin: 0.5,
    color: "white",
    lineWidth: 2,
  });
  drawingUtils.drawLandmarks(
    canvasCtx,
    POSE_LANDMARKS_LEFT.map((index) => keypoints[index]),
    {
      visibilityMin: 0.5,
      color: "white",
      fillColor: "rgb(255,138,0)",
      lineWidth: 0,
      radius: 5,
    }
  );
  drawingUtils.drawLandmarks(
    canvasCtx,
    POSE_LANDMARKS_RIGHT.map((index) => keypoints[index]),
    {
      visibilityMin: 0.5,
      color: "white",
      fillColor: "rgb(0,217,231)",
      lineWidth: 0,
      radius: 5,
    }
  );
  canvasCtx.restore();
}

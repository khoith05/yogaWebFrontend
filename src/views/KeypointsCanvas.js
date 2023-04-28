import { useRef, useEffect } from 'react';
import drawKeypoints from '../utils/drawKeypoints';
function KeypointsCanvas(props) {
  const { isVisible, keypoints, style, width, height } = props;

  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = width;
    canvas.height = height;
  }, [width, height]);

  useEffect(() => {
    const canvas = canvasRef.current;
    drawKeypoints({ canvas, keypoints });
  }, [keypoints]);

  if (isVisible) {
    return <canvas ref={canvasRef} style={style} />;
  }
  return <></>;
}

export default KeypointsCanvas;

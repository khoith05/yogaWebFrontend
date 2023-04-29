import { useRef, useEffect } from 'react';
import drawKeypoints from '../utils/drawKeypoints';
function KeypointsCanvas(props) {
  const { isVisible, keypoints, style, width, height } = props;

  if (!isVisible) return <></>;

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

  return <canvas ref={canvasRef} style={style} />;
}

export default KeypointsCanvas;

import { useRef, useEffect } from 'react';
import drawPose, { drawSafeRect } from './../utils/drawPose';

function PositionCanvas(props) {
  const { isVisible, isValidPosition, style, width, height } = props;

  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = width;
    canvas.height = height;
  }, [width, height]);

  useEffect(() => {
    const canvas = canvasRef.current;
    drawPose({ canvas, isValidPosition });
    drawSafeRect({ canvas });
  }, [isValidPosition, width]);

  if (!isVisible) return <></>;

  return <canvas ref={canvasRef} style={style} />;
}

export default PositionCanvas;

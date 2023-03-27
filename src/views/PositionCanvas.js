import { useRef, useEffect } from 'react';
import drawPose, { drawSafeRect } from './../utils/drawPose';

function PositionCanvas(props) {
  const { isVisible, isValidPosition, canvasStyle } = props;

  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = 640;
    canvas.height = 480;
    drawPose({ canvas, isValidPosition });
    drawSafeRect({ canvas });
  }, [isValidPosition]);

  const style = {
    position: 'absolute',
    left: 0,
    height: '480px',
    width: '640px',
    ...canvasStyle,
  };
  if (isVisible) {
    return <canvas ref={canvasRef} style={style} />;
  }
  return <></>;
}

export default PositionCanvas;

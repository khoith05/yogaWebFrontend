import { useRef, useEffect } from 'react';
import drawKeypoints from '../utils/drawKeypoints';
function KeypointsCanvas(props) {
  const { isVisible, keypoints, canvasStyle } = props;

  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = 640;
    canvas.height = 480;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    drawKeypoints({ canvas, keypoints });
  }, [keypoints]);

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

export default KeypointsCanvas;

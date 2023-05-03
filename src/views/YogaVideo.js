import { memo } from 'react';
function YogaVideo(props) {
  const { url, onFinish, style, showVideo } = props;
  const overwriteStyle = {
    ...style,
    display: showVideo ? 'block' : 'none',
  };
  const handleVideoEnd = () => {
    onFinish();
  };
  return (
    <video
      className='camera-element'
      src={url}
      style={overwriteStyle}
      autoPlay
      muted
      controls={false}
      onEnded={handleVideoEnd}
      preload='auto'
    />
  );
}

export default memo(YogaVideo);

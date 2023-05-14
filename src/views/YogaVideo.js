import { memo } from "react";

function YogaVideo(props) {
  const { url, onFinish, size, showVideo } = props;

  const handleVideoEnd = () => {
    onFinish();
  };

  const transitionStyles = {
    width: size.width * 0.3,
    height: size.height * 0.3,
  };

  const style = showVideo ? size : transitionStyles;

  return (
    <video
      className="camera-element pose-video"
      key={url}
      src={url}
      style={style}
      autoPlay
      muted
      controls={false}
      onEnded={handleVideoEnd}
      preload="auto"
    />
  );
}

export default memo(YogaVideo);

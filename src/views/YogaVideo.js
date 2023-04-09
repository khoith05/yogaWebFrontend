function YogaVideo(props) {
  const { url, onFinish, className = 'w-100', style, showVideo } = props;
  const overwriteStyle = {
    ...style,
    display: showVideo ? 'block' : 'none',
  };
  const handleVideoEnd = () => {
    onFinish();
  };
  return (
    <video
      className={className}
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

export default YogaVideo;

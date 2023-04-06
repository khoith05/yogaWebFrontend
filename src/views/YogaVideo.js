function YogaVideo(props) {
  const { url, onFisnish, className = 'w-100' } = props;
  const handleVideoEnd = () => {
    onFisnish();
  };
  return (
    <video className={className} autoPlay loop muted onEnded={handleVideoEnd}>
      <source src={url} type='video/mp4' allowFullScreen />
    </video>
  );
}

export default YogaVideo;

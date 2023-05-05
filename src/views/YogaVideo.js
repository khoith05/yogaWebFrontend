import { memo } from "react";
import { Transition } from "react-transition-group";
import { useRef } from "react";

function YogaVideo(props) {
  const { url, onFinish, size, showVideo } = props;
  const nodeRef = useRef(null);

  const handleVideoEnd = () => {
    onFinish();
  };

  const transitionStyles = {
    entering: {
      width: size.width * 0.3,
      height: size.height * 0.3,
    },
    entered: {
      width: size.width * 0.3,
      height: size.height * 0.3,
    },
  };

  return (
    <Transition
      nodeRef={nodeRef}
      in={!showVideo}
      timeout={{ appear: 0, enter: 500 }}
      exit={false}
    >
      {(state) => (
        <video
          className="camera-element pose-image"
          src={url}
          style={{ ...size, ...transitionStyles[state] }}
          autoPlay
          muted
          controls={false}
          onEnded={handleVideoEnd}
          preload="auto"
        />
      )}
    </Transition>
  );
}

export default memo(YogaVideo);

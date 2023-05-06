import { Transition } from 'react-transition-group';
import { useRef } from 'react';

function AnimatedImage(props) {
  const { shouldShow, style, src, width } = props;
  const nodeRef = useRef(null);
  const transitionStyles = {
    entering: {
      width: width * 0.3,
      visibility: 'visible',
    },
    entered: {
      width: width * 0.3,
      visibility: 'visible',
    },
  };
  return (
    <Transition
      nodeRef={nodeRef}
      in={shouldShow}
      timeout={{ appear: 0, enter: 1500 }}
      exit={false}
    >
      {(state) => (
        <img
          src={src}
          className='camera-element pose-image'
          style={{ ...style, ...transitionStyles[state] }}
        />
      )}
    </Transition>
  );
}

export default AnimatedImage;

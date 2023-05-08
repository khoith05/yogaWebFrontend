import CameraWrapper from './CameraWrapper';
import { Container } from 'react-bootstrap';
function ExerciseView() {
  const style = {
    container: {
      minHeight: '1000px',
    },
    camera: {},
  };
  return (
    <Container fluid style={style.container}>
      <CameraWrapper />
    </Container>
  );
}

export default ExerciseView;

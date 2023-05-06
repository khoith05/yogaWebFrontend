import CameraWrapper from './CameraWrapper';
import Camera from './Camera';
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
      <CameraWrapper
      // style={style.camera}
      // className='mx-3 my-auto'
      // width={'640px'}
      // height={'480px'}
      />
    </Container>
  );
}

export default ExerciseView;

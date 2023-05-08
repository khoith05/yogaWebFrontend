import { useEffect, useRef, useState } from "react";
import CameraWrapper from "./CameraWrapper";
import { Container } from "react-bootstrap";
import LoadingWrapper from "./LoadingWrapper";
import { GET_EXERCISE_DETAIL_LOADING } from "../utils/constant";
import { useParams } from "react-router-dom";
import getExerciseDetail from "../service/getExerciseDetail";
import ExercisePage from "./ExercisePage";

const style = {
  container: {
    minHeight: "1000px",
  },
};

function ExerciseView() {
  const [start, setStart] = useState(false);

  const [exercise, setExercise] = useState({});
  const params = useParams();

  const onStartClick = () => setStart(true);

  useEffect(() => {
    getExerciseDetail(params.excerciseId).then((data) => setExercise(data));
  }, []);

  return (
    <LoadingWrapper loadingKeys={[GET_EXERCISE_DETAIL_LOADING]}>
      {start ? (
        <Container fluid style={style.container}>
          <CameraWrapper poses={poses.current} />
        </Container>
      ) : (
        <ExercisePage onStartClick={onStartClick} exercise={exercise} />
      )}
    </LoadingWrapper>
  );
}

export default ExerciseView;

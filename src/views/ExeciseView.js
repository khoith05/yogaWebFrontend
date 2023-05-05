import { useEffect, useRef, useState } from "react";
import CameraWrapper from "./CameraWrapper";
import { Container } from "react-bootstrap";
import ExerciseDetail from "./ExerciseDetail";
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
  const poses = useRef();
  const params = useParams();

  const onStartClick = () => setStart(true);

  useEffect(() => {
    getExerciseDetail(params.excerciseId).then(
      (data) => (poses.current = data.poses)
    );
  });

  return (
    <Container fluid style={style.container}>
      <LoadingWrapper loadingKeys={[GET_EXERCISE_DETAIL_LOADING]}>
        {start ? (
          <CameraWrapper poses={poses.current} />
        ) : (
          <ExercisePage onStartClick={onStartClick} />
        )}
      </LoadingWrapper>
    </Container>
  );
}

export default ExerciseView;

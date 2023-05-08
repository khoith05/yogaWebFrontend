import { useEffect, useRef, useState } from "react";
import CameraWrapper from "./CameraWrapper";
import { Container } from "react-bootstrap";
import LoadingWrapper from "./LoadingWrapper";
import { GET_EXERCISE_DETAIL_LOADING } from "../utils/constant";
import { useParams } from "react-router-dom";
import getExerciseDetail from "../service/getExerciseDetail";
import ExercisePage from "./ExercisePage";

const style = {
  height: "100vh",
};

function ExerciseView() {
  const [start, setStart] = useState(false);
  const mainRef = useRef(null);

  const [exercise, setExercise] = useState({});
  const params = useParams();

  const onStartClick = () => setStart(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    getExerciseDetail(params.excerciseId).then((data) => setExercise(data));
  }, []);

  return (
    <div ref={mainRef} className="main-bg">
      <LoadingWrapper loadingKeys={[GET_EXERCISE_DETAIL_LOADING]} style={style}>
        {start ? (
          <Container fluid>
            <CameraWrapper poses={exercise.poses} />
          </Container>
        ) : (
          <ExercisePage onStartClick={onStartClick} exercise={exercise} />
        )}
      </LoadingWrapper>
    </div>
  );
}

export default ExerciseView;

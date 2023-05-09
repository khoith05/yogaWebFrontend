import { useEffect, useRef, useState } from "react";
import CameraWrapper from "./CameraWrapper";
import { Container } from "react-bootstrap";
import LoadingWrapper from "./LoadingWrapper";
import { GET_EXERCISE_DETAIL_LOADING } from "../utils/constant";
import { useParams } from "react-router-dom";
import getExerciseDetail from "../service/getExerciseDetail";
import ExercisePage from "./ExercisePage";
import Result from "./Result";

const style = {
  height: "100vh",
};

function ExerciseView() {
  const [start, setStart] = useState(false);
  const [end, setEnd] = useState(false);
  const mainRef = useRef(null);

  const [exercise, setExercise] = useState({});
  const params = useParams();

  const onStart = () => setStart(true);

  const onEnd = () => setEnd(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    getExerciseDetail(params.excerciseId).then((data) => setExercise(data));
  }, []);

  const content = () => {
    if (end) {
      return <Result />;
    } else if (start) {
      return (
        <Container fluid>
          <CameraWrapper poses={exercise.poses} setEndExercise={onEnd} />
        </Container>
      );
    } else {
      return <ExercisePage onStartClick={onStart} exercise={exercise} />;
    }
  };

  return (
    <div ref={mainRef} className="main-bg">
      <LoadingWrapper loadingKeys={[GET_EXERCISE_DETAIL_LOADING]} style={style}>
        {content()}
      </LoadingWrapper>
    </div>
  );
}

export default ExerciseView;

import { useEffect, useState } from "react";
import CameraWrapper from "./CameraWrapper";
import { Container } from "react-bootstrap";
import LoadingWrapper from "./LoadingWrapper";
import { GET_EXERCISE_DETAIL_LOADING } from "../utils/constant";
import { useParams } from "react-router-dom";
import getExerciseDetail from "../service/getExerciseDetail";
import ExercisePage from "./ExercisePage";
import { setExercise as setExerciseToStore } from "../store/pose";
import { useDispatch } from "react-redux";
import ResultWrapper from "./ResultWrapper";

const style = {
  height: "100vh",
};

function ExerciseView() {
  const [start, setStart] = useState(false);
  const [end, setEnd] = useState(false);
  const dispatch = useDispatch();

  const [exercise, setExercise] = useState({});
  const params = useParams();

  const onStart = () => setStart(true);

  const onEnd = () => setEnd(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    getExerciseDetail(params.excerciseId).then((data) => {
      setExercise(data);
      dispatch(setExerciseToStore(data));
    });
  }, []);

  const content = () => {
    if (end) {
      return <ResultWrapper />;
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
    <div className="main-bg">
      <LoadingWrapper loadingKeys={[GET_EXERCISE_DETAIL_LOADING]} style={style}>
        {content()}
      </LoadingWrapper>
    </div>
  );
}

export default ExerciseView;

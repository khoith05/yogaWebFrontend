import Result from "./Result";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import millisToMinutesAndSeconds from "./../utils/millisToMinutesAndSeconds";
import getResult from "../service/getResult";
import { useParams } from "react-router-dom";
import LoadingWrapper from "./LoadingWrapper";
import { GET_RESULT_LOADING } from "../utils/constant";

const style = {
  height: "100vh",
};

function ResultWrapper() {
  const [exercise, setExercise] = useState(null);
  const isLogin = useSelector((state) => state.user.isLogin);
  const params = useParams();

  useEffect(() => {
    if (isLogin) {
      getResult({ id: params.resultId }).then((res) => {
        if (!res) return;
        const { name, time, poses, point } = res;
        setExercise({
          name,
          time: millisToMinutesAndSeconds(time),
          poses,
          point,
        });
      });
    }
  }, [isLogin, params]);

  return (
    <div className="main-bg ">
      <LoadingWrapper loadingKeys={[GET_RESULT_LOADING]} style={style}>
        {exercise && <Result {...exercise} />}
      </LoadingWrapper>
    </div>
  );
}

export default ResultWrapper;

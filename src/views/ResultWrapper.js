import Result from "./Result";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import selectResult from "../utils/getExerciseResult";
import millisToMinutesAndSeconds from "./../utils/millisToMinutesAndSeconds";
import saveResult from "../service/saveResutl";
import { mean } from "lodash";

function ResultWrapper() {
  const { time, poses } = useSelector(selectResult);
  const { name, id } = useSelector((state) => state.pose.exercise);
  const timeFormatted = millisToMinutesAndSeconds(time);
  const isLogin = useSelector((state) => state.user.isLogin);
  const totalPoint = Math.round(mean(poses.map(({ point }) => point)));

  useEffect(() => {
    saveResult({ exerciseId: id, point: totalPoint, time, poses });
  }, [isLogin]);

  return (
    <Result time={timeFormatted} name={name} poses={poses} point={totalPoint} />
  );
}

export default ResultWrapper;

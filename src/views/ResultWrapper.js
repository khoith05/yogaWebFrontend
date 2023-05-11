import Result from "./Result";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import selectResult from "../utils/getExerciseResult";

function ResultWrapper() {
  const { time, poses } = useSelector(selectResult);
  const { name } = useSelector((state) => state.pose.exercise);
  const isLogin = useSelector((state) => state.user.isLogin);

  return <Result time={time} name={name} poses={poses} />;
}

export default ResultWrapper;

import { createSelector } from "@reduxjs/toolkit";
import millisToMinutesAndSeconds from "./millisToMinutesAndSeconds";
import { get, mean } from "lodash";

const getExerciseResult = (state) => {
  const { startTime, endTime, currentPoseListPoint, exercise } = state.pose;

  const poses = get(exercise, "poses", []);
  const posesWithPoint = poses.map(({ name, imageUrl }, index) => {
    return {
      name,
      imageUrl,
      point: mean(currentPoseListPoint[index]),
    };
  });
  const time = millisToMinutesAndSeconds(endTime - startTime);
  return {
    time,
    poses: posesWithPoint,
  };
};

export default createSelector(getExerciseResult, (loading) => loading);

import { createSlice, createSelector } from "@reduxjs/toolkit";
import { mean, get } from "lodash";

const poseSlice = createSlice({
  name: "pose",
  initialState: {
    startTime: null,
    endTime: null,
    currentPoseListPoint: [],
    currentPoseIndex: 0,
    exercise: {},
  },
  reducers: {
    nextPose: (state) => {
      const { exercise, currentPoseIndex } = state;
      const length = get(exercise, "poses.length", 0);
      if (currentPoseIndex + 1 < length) {
        state.currentPoseIndex++;
      }
    },
    addPoint: (state, action) => {
      const { point } = action.payload;
      state.currentPoseListPoint[state.currentPoseIndex].push(point);
    },
    startExercise(state) {
      const length = get(state.exercise, "poses.length", 0);
      state.startTime = +new Date();
      state.currentPoseListPoint = Array(length).fill([]);
      state.currentPoseIndex = 0;
    },
    endExercise(state) {
      state.endTime = +new Date();
    },
    setExercise(state, action) {
      state.exercise = action.payload;
    },
  },
});

const getExerciseResult = (state) => {
  const { startTime, endTime, currentPoseListPoint } = state.pose;
  const points = currentPoseListPoint.map((pointList) => mean(pointList));
  const time = endTime - startTime;
  return {
    time,
    points,
  };
};

export const selectResult = createSelector(
  getExerciseResult,
  (loading) => loading
);

export const {
  addPoint,
  nextPose,
  setNumberOfPose,
  startExercise,
  endExercise,
  setExercise,
} = poseSlice.actions;

export default poseSlice.reducer;

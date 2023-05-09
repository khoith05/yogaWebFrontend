import { createSlice, createSelector } from "@reduxjs/toolkit";
import { mean } from "lodash";

const poseSlice = createSlice({
  name: "pose",
  initialState: {
    startTime: null,
    endTime: null,
    currentPoseListPoint: [],
    currentPoseIndex: 0,
    numberOfPose: 0,
    poses: [],
  },
  reducers: {
    nextPose: (state) => {
      const { poses, currentPoseIndex } = state;
      if (currentPoseIndex + 1 < poses.length) {
        state.currentPoseIndex++;
      }
    },
    addPoint: (state, action) => {
      const { point } = action.payload;
      state.currentPoseListPoint[state.currentPoseIndex].push(point);
    },
    startExercise(state, action) {
      state.startTime = +new Date();
      state.poses = action.payload;
      state.currentPoseListPoint = Array(state.poses.length).fill([]);
      state.currentPoseIndex = 0;
    },
    endExercise(state) {
      state.endTime = +new Date();
    },
  },
});

const getExerciseResult = (state) => {
  const { startTime, endTime, currentPoseListPoint } = state.pose;
  const points = currentPoseListPoint.map((pointList) => mean(pointList));
  const time = Math.round((startTime - endTime) / 1000);
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
} = poseSlice.actions;

export default poseSlice.reducer;

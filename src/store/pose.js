import { createSlice } from "@reduxjs/toolkit";
import { get } from "lodash";

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
      if (state.currentPoseListPoint[currentPoseIndex].length === 0) {
        state.currentPoseListPoint[currentPoseIndex] = [0];
      }
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
      if (state.currentPoseListPoint[state.currentPoseIndex].length === 0) {
        state.currentPoseListPoint[state.currentPoseIndex] = [0];
      }
    },
    setExercise(state, action) {
      state.exercise = action.payload;
    },
  },
});

export const {
  addPoint,
  nextPose,
  setNumberOfPose,
  startExercise,
  endExercise,
  setExercise,
} = poseSlice.actions;

export default poseSlice.reducer;

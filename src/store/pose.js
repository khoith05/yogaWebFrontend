import { createSlice, configureStore } from '@reduxjs/toolkit';

const poseSlice = createSlice({
  name: 'counter',
  initialState: {
    currentPoseListPoint: [],
    currentPoseIndex: -1,
    numberOfPose: 0,
  },
  reducers: {
    nextPose: (state) => {
      const { numberOfPose, currentPoseIndex } = state;
      if (currentPoseIndex + 1 < numberOfPose) {
        state.currentPoseIndex++;
        state.currentPoseListPoint.push([]);
      }
    },
    addPoint: (state, action) => {
      const { point } = action.payload;
      if (!state.currentPoseListPoint[state.currentPoseIndex]) {
        state.currentPoseListPoint[state.currentPoseIndex] = [];
      }
      state.currentPoseListPoint[state.currentPoseIndex].push(point);
    },
    setNumberOfPose: (state, action) => {
      state.numberOfPose = action.payload;
    },
  },
});

export const { addPoint, nextPose, setNumberOfPose } = poseSlice.actions;

export default poseSlice.reducer;

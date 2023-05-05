import { createSlice, createSelector } from "@reduxjs/toolkit";

const loadingSlice = createSlice({
  name: "loading",
  initialState: {},
  reducers: {
    toggleLoading(state, action) {
      const { key, loading } = action.payload;
      state[key] = loading;
    },
  },
});

const getLoadingState = (state, loadingKeys) => {
  const loadingState = state.loading;

  return loadingKeys.reduce(
    (isLoading, key) => isLoading && loadingState[key],
    true
  );
};

export const { toggleLoading } = loadingSlice.actions;

export const selectIsLoading = createSelector(getLoadingState, (a) => a);

export default loadingSlice.reducer;

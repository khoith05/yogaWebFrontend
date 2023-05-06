import { createSlice } from '@reduxjs/toolkit';

const loadingSlice = createSlice({
  name: 'counter',
  initialState: {},
  reducers: {
    toggleLoading(state, action) {
      const { key, loading } = action.payload;
      state[key] = loading;
    },
  },
});

export const { incremented, decremented } = loadingSlice.actions;

export default loadingSlice.reducer;

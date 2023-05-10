import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    username: undefined,
    email: undefined,
  },
  reducers: {
    setUser(state, action) {
      const { username, email } = action.payload;
      state.username = username;
      state.email = email;
    },
    signOut(state) {
      state.username = undefined;
      state.email = undefined;
    },
  },
});

export const { setUser, signOut } = userSlice.actions;

export default userSlice.reducer;

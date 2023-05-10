import { createSlice } from "@reduxjs/toolkit";
import store from "./index";

const userSlice = createSlice({
  name: "user",
  initialState: {
    username: undefined,
    email: undefined,
    isLogin: false,
  },
  reducers: {
    initState(state, action) {
      const { isLogin, username, email } = action.payload;
      state.username = username;
      state.email = email;
      state.isLogin = isLogin;
    },
    setUser(state, action) {
      const { username, email } = action.payload;
      state.username = username;
      state.email = email;
      state.isLogin = true;
    },
    signOut(state) {
      state.username = undefined;
      state.email = undefined;
      state.isLogin = false;
    },
  },
});

const savedState = localStorage.getItem("counter");
if (savedState) {
  store.dispatch(counterSlice.actions.initState(JSON.parse(savedState)));
}

export const { setUser, signOut, initState } = userSlice.actions;

export default userSlice.reducer;

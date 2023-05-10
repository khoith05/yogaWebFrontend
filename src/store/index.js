import { configureStore } from "@reduxjs/toolkit";
import counter from "./counter";
import pose from "./pose";
import loading from "./loading";
import user from "./user";

const reducer = {
  counter,
  pose,
  loading,
  user,
};

const store = configureStore({
  reducer,
});

store.subscribe(() => {
  const state = store.getState();
  localStorage.setItem("user", JSON.stringify(state.user));
});

export default store;

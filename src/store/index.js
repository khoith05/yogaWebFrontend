import { configureStore } from "@reduxjs/toolkit";
import counter from "./counter";
import pose from "./pose";
import loading from "./loading";

const reducer = {
  counter,
  pose,
  loading,
};

const store = configureStore({
  reducer,
});

export default store;

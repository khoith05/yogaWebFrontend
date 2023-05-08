import { configureStore } from '@reduxjs/toolkit';
import counter from './counter';
import pose from './pose';

const reducer = {
  counter,
  pose,
};

const store = configureStore({
  reducer,
});

export default store;

import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import developerReducer from '../features/devs/devSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    developer: developerReducer,
  },
});

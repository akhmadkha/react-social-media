import { configureStore } from '@reduxjs/toolkit';
import post_reducer from './reducer/post_reducer';

export const store = configureStore({
  reducer: {
    post: post_reducer
  },
});

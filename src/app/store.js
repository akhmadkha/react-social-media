import { configureStore } from '@reduxjs/toolkit';
import comment_reducer from './reducer/comment_reducer';
import post_reducer from './reducer/post_reducer';

export const store = configureStore({
  reducer: {
    post: post_reducer,
    comment: comment_reducer
  },
});

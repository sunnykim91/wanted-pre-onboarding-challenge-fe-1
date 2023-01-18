import { configureStore } from '@reduxjs/toolkit';
import todosSlice from './slice/todoSlice';
import authSlice from './slice/authSlice';

const store = configureStore({
  reducer: {
    todosSlice,
    authSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;

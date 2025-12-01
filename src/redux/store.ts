
import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './slices/userSlice';
import policiesReducer from './slices/policySlice';

export const store = configureStore({
  reducer: {
    users: usersReducer,
    policies: policiesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

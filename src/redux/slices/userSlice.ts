
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type User from '../../types/user';
import users from '../../data/user';

interface UsersState {
  allUsers: User[];
}

const initialState: UsersState = {
  allUsers: users,
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setAllUsers(state, action: PayloadAction<User[]>) {
      state.allUsers = action.payload;
    },
    addUser(state, action: PayloadAction<User>) {
      state.allUsers.push(action.payload);
    },
    updateUser(state, action: PayloadAction<User>) {
      const index = state.allUsers.findIndex(user => user.id === action.payload.id);
      if (index !== -1) {
        state.allUsers[index] = action.payload;
      }
    },
    deleteUser(state, action: PayloadAction<number>) {
      state.allUsers = state.allUsers.filter(user => user.id !== action.payload);
    },
  },
});

export const { setAllUsers, addUser, updateUser, deleteUser } = usersSlice.actions;
export default usersSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

export const userSlise = createSlice({
  name: 'user',
  initialState: { user: [] },
  reducers: {
    addUser: (state, { payload }) => {
      state.users.push(payload);
    },
    deleteUser: (state, { payload }) => {
      state.users.filter(({ id }) => id !== payload);
    },
  },
});
export const { addUser } = userSlise.actions;
export const userReducer = userSlise.reducer;

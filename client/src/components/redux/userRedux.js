// In your redux/userSlice.js or userReducer.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentUser: null, // Make sure this is properly initialized
  isFetching: false,
  error: false,
};

const userSlice = createSlice({
  name: 'USER',
  initialState,
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
    },
    loginFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    logout: (state) => {
      state.currentUser = null;
    },
  },
});

export const { loginStart, loginSuccess, loginFailure, logout } = userSlice.actions;
export default userSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

type AuthSliceType = {
  isLoggedIn: boolean;
};

const initialState: AuthSliceType = {
  isLoggedIn: false
};

const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    test: (state) => {
      state.isLoggedIn = !state.isLoggedIn;
    }
  }
});

export type {
  AuthSliceType
};

export default AuthSlice.actions;

export const AuthSliceReducer = AuthSlice.reducer;
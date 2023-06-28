import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: "",
  password: "",
  showError: false,
  rememberMe: false,
  showPassword: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUsername: (state, action) => {
      state.username = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    setShowError: (state, action) => {
      state.showError = action.payload;
    },
    setRememberMe: (state, action) => {
      state.rememberMe = action.payload;
    },
    setShowPassword: (state, action) => {
      state.showPassword = action.payload;
    },
  },
});

export const {
  setUsername,
  setPassword,
  setShowError,
  setRememberMe,
  setShowPassword,
} = authSlice.actions;

export default authSlice.reducer;

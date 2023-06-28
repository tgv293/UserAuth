import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  step: 1,
  email: "",
  password: "",
  rePassword: "",
  otp: "",
  showPassword: false,
  showRePassword: false,
  emailError: "",
  passwordError: "",
  rePasswordError: "",
  isOTPValid: false,
};

const forgotPassSlice = createSlice({
  name: "forgotPass",
  initialState,
  reducers: {
    setStep: (state, action) => {
      state.step = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    setRePassword: (state, action) => {
      state.rePassword = action.payload;
    },
    setOTP: (state, action) => {
      state.otp = action.payload;
    },
    setShowPassword: (state, action) => {
      state.showPassword = action.payload;
    },
    setShowRePassword: (state, action) => {
      state.showRePassword = action.payload;
    },
    setEmailError: (state, action) => {
      state.emailError = action.payload;
    },
    setPasswordError: (state, action) => {
      state.passwordError = action.payload;
    },
    setRePasswordError: (state, action) => {
      state.rePasswordError = action.payload;
    },
    setIsOTPValid: (state, action) => {
      state.isOTPValid = action.payload;
    },
  },
});

export const {
  setStep,
  setEmail,
  setPassword,
  setRePassword,
  setOTP,
  setShowPassword,
  setShowRePassword,
  setEmailError,
  setPasswordError,
  setRePasswordError,
  setIsOTPValid,
} = forgotPassSlice.actions;

export default forgotPassSlice.reducer;

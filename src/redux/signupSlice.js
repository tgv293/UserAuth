import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  step: 1,
  firstName: "",
  lastName: "",
  username: "",
  email: "",
  dateOfBirth: "",
  phoneNumber: "",
  address: "",
  password: "",
  rePassword: "",
  isChecked: false,
  firstNameError: "",
  lastNameError: "",
  emailError: "",
  phoneNumberError: "",
  nextButtonDisabled: true,
  passwordError: "",
  rePasswordError: "",
  showPassword: false,
  showRePassword: false,
  isFocused: false,
  currentDate: new Date().toISOString().split("T")[0],
};

const signUpSlice = createSlice({
  name: "signup",
  initialState,
  reducers: {
    setStep: (state, action) => {
      state.step = action.payload;
    },
    setFirstName: (state, action) => {
      state.firstName = action.payload;
    },
    setLastName: (state, action) => {
      state.lastName = action.payload;
    },
    setUsername: (state, action) => {
      state.username = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setDateOfBirth: (state, action) => {
      state.dateOfBirth = action.payload;
    },
    setPhoneNumber: (state, action) => {
      state.phoneNumber = action.payload;
    },
    setAddress: (state, action) => {
      state.address = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    setRePassword: (state, action) => {
      state.rePassword = action.payload;
    },
    setIsChecked: (state, action) => {
      state.isChecked = action.payload;
    },
    setFirstNameError: (state, action) => {
      state.firstNameError = action.payload;
    },
    setLastNameError: (state, action) => {
      state.lastNameError = action.payload;
    },
    setEmailError: (state, action) => {
      state.emailError = action.payload;
    },
    setPhoneNumberError: (state, action) => {
      state.phoneNumberError = action.payload;
    },
    setNextButtonDisabled: (state, action) => {
      state.nextButtonDisabled = action.payload;
    },
    setPasswordError: (state, action) => {
      state.passwordError = action.payload;
    },
    setRePasswordError: (state, action) => {
      state.rePasswordError = action.payload;
    },
    setShowPassword: (state, action) => {
      state.showPassword = action.payload;
    },
    setShowRePassword: (state, action) => {
      state.showRePassword = action.payload;
    },
    setIsFocused: (state, action) => {
      state.isFocused = action.payload;
    },
    setCurrentDate: (state, action) => {
      state.currentDate = action.payload;
    },
  },
});

export const {
  setStep,
  setFirstName,
  setLastName,
  setUsername,
  setEmail,
  setDateOfBirth,
  setPhoneNumber,
  setAddress,
  setPassword,
  setRePassword,
  setIsChecked,
  setFirstNameError,
  setLastNameError,
  setEmailError,
  setPhoneNumberError,
  setNextButtonDisabled,
  setPasswordError,
  setRePasswordError,
  setShowPassword,
  setShowRePassword,
  setIsFocused,
  setCurrentDate,
} = signUpSlice.actions;

export default signUpSlice.reducer;

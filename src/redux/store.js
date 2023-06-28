import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import signupReducer from "./signupSlice";
import forgotPassReducer from "./forgotPassSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    signup: signupReducer,
    forgotPass: forgotPassReducer,
  },
});

export default store;

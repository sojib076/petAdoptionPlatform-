import { configureStore } from "@reduxjs/toolkit";
import loadingReducer from "../features/loading/loadingSlice";
import userLoginSlice from "./User/userLoginSlice";

const store = configureStore({
  reducer: {
    loading: loadingReducer,
    userLogin: userLoginSlice,
  },
  
});

export default store;

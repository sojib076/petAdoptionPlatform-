import { configureStore } from "@reduxjs/toolkit";
import loadingReducer from "../features/loading/loadingSlice";

const store = configureStore({
  reducer: {
    loading: loadingReducer,
    // Other reducers here
  },
});

export default store;

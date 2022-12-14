import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./state/user";
import singleUserReducer from "./state/singleUser";

const store = configureStore({
  reducer: {
    user: userReducer,
    singleUser: singleUserReducer
  },
});

export default store;

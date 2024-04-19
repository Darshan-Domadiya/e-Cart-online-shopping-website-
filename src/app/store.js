import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/UserSlice";
import countReducer from "./features/CartCountSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    cartCount: countReducer,
  },
});

export default store;

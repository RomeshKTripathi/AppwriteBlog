import { configureStore } from "@reduxjs/toolkit";
import reducers from "./LocalAuthenticationSlice";
const store = configureStore({
  reducer: {
    user: reducers,
  },
});
export default store;

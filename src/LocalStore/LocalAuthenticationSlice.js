import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: false,
  userData: null,
};

const authentication = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    storeLogin: (state, action) => {
      state.status = true;
      state.userData = action.payload;
      console.log("Store logged in !");
    },
    storeLogout: (state, action) => {
      console.log("Store logged out");
      state.status = false;
      state.userData = null;
    },
  },
});

export default authentication.reducer;

export const { storeLogin, storeLogout } = authentication.actions;

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
      console.log("trying Store Login");
      state.status = true;
      state.userData = action.payload.userData;
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

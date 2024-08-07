import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userData: null,
    loggedIn: false,
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        storeLogin: (state, action) => {
            state.userData = action.payload;
            state.loggedIn = true;
        },
        storeLogout: (state) => {
            state.userData = null;
            state.loggedIn = false;
        },
    },
});

export const { storeLogin, storeLogout } = userSlice.actions;
export default userSlice.reducer;

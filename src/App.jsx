import React, { useEffect } from "react";
import Header from "./components/Header/Header";
import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authentication as auth } from "./appwrite/Authentication";
import { storeLogin } from "./store/userSlice";

function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        auth.currentUser()
            .then((user) => {
                dispatch(storeLogin(user));
            })
            .catch((err) => {});
    }, []);
    return (
        <div className="px-5 pb-5">
            <Header />
            <Outlet />
        </div>
    );
}

export default App;

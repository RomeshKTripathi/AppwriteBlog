import React, { useEffect } from "react";
import Header from "./components/Header/Header";
import { Outlet } from "react-router-dom";
import useInit from "./hooks/useInit";

function App() {
    const { error } = useInit();

    useEffect(() => {
        if (error) createToast(error, "error", 5000);
    }, [error]);

    return (
        <>
            <div className="relative px-5 pb-5">
                <Header />
                <Outlet />
            </div>
        </>
    );
}

export default App;

import React from "react";
import Navigation from "./Navigation";
import { Outlet } from "react-router-dom";

function Admin() {
    return (
        <div className="w-screen h-screen flex">
            <div className="w-56 min-h-screen bg-[#3B3F44] text-white">
                <Navigation />
            </div>
            <div className="w-full  overflow-y-auto">
                <Outlet />
            </div>
        </div>
    );
}

export default Admin;

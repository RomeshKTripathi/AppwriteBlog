import React from "react";
import { RotateLoader } from "react-spinners";

const Loading = ({ color }) => {
    return (
        <div className="w-full h-screen flex justify-center items-center fixed top-0">
            <RotateLoader color={color ?? "#f43f5e"} />
        </div>
    );
};

export default Loading;

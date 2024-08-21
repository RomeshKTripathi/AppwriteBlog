import React from "react";
import { CrossIcon } from "../../assets/Icons";

function Error({ error }) {
    return (
        <div className="absolute min-w-72 max-w-72 -top-44 bg-red-500/10 border border-red-800 text-red-950 rounded-md p-2 pt-6">
            <CrossIcon style={"absolute top-1 right-1 cursor-pointer"} />
            <p>{error}</p>
        </div>
    );
}

export default Error;

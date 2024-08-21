import React, { useState } from "react";
import { CrossIcon } from "../assets/Icons";

const positions = {
    "top-right": "",
    "top-left": "",
    "bottom-right": "",
    "bottom-left": "",
};

function useToast(position = "top-right") {
    const [toastList, setToastList] = useState([]);
    const createToast = (message, type, duration, animation) => {
        setToastList((prev) => [
            ...prev,
            <Toast {...{ message, type, duration, animation }} />,
        ]);
    };
    return { toastList, createToast };
}

export default useToast;

// Toast Component

const animate = {
    SLIDE: "slide",
    POP: "pop",
    FADE: "fade",
};

const TYPE = {
    error: "bg-neutral-700",
    warning: "bg-amber-500",
    success: "bg-green-600",
    information: "bg-sky-600",
};
function Toast({
    message,
    animation = "SLIDE",
    type = "information",
    duration,
}) {
    const [remove, setRemove] = useState(false);

    const instantClose = () => {
        clearTimeout(timeoutRef);
        setRemove(true);
    };
    const timeoutRef = setTimeout(() => {
        setRemove(true);
    }, duration ?? 10000);

    return remove ? null : (
        <div
            className={`top-4 px-4 py-2 min-w-44 w-fit my-4  text-white font-semibold left-4 rounded-sm ${
                TYPE[type] ? TYPE[type] : TYPE.information
            } flex gap-4 ${animate[animation] ? animate[animation] : "slide"}`}
        >
            <span className="">
                {message ??
                    " Example toast message this is example toast message"}
            </span>
            <span
                onClick={instantClose}
                className="block ml-auto cursor-pointer"
            >
                <CrossIcon />
            </span>
        </div>
    );
}

export { useToast };

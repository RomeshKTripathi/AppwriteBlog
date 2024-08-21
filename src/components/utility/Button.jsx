import React from "react";

function Button({ text, style, type, loading = false }) {
    return (
        <button
            disabled={loading}
            type={type}
            className={`block w-full outline-none border-[2px] border-black rounded-full px-5 py-1 cursor-pointer duration-100 font-semibold text-lg ${style}`}
        >
            {loading ? <span className="loader mx-3"></span> : text}
        </button>
    );
}

export default Button;

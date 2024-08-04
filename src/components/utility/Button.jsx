import React from "react";

function Button({ text, style, type }) {
  return (
    <button
      type={type}
      className={`block w-full outline-none border-[2px] border-black rounded-full px-5 py-1 cursor-pointer duration-100 font-semibold text-lg ${style}`}
    >
      {text}
    </button>
  );
}

export default Button;

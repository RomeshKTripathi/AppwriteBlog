import React from "react";

function Logo({ style }) {
  return (
    <div
      className={`text-black font-semibold select-none cursor-pointer ${
        style ?? "text-xl"
      }`}
    >
      Op
      <span className="underline underline-offset-4 ">
        en<span className="font-bold ">BOX</span>
      </span>
    </div>
  );
}

export default Logo;

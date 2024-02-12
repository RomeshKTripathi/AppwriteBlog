import React, { useState } from "react";
import { vision, visionLocked } from "../assets";

const Input = (
  { label, className = "", type = "text", placeholder = "", ...props },
  ref
) => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <div className="w-full mt-2 relative">
      {label && <label className="text-teal-800  font-semibold">{label}</label>}
      <input
        type={passwordVisible ? "text" : type}
        className={`outline-none border  rounded border-gray-500 w-full bg-transparent  p-1 ${className}`}
        placeholder={placeholder}
        {...props}
        ref={ref}
      />
      {type === "password" ? (
        <div className="absolute bottom-1.5 right-1">
          <img
            onClick={() => {
              setPasswordVisible((visibility) => !visibility);
            }}
            className="w-5 cursor-pointer"
            src={passwordVisible ? visionLocked : vision}
            alt="eye opened"
          />
        </div>
      ) : null}
    </div>
  );
};

export default React.forwardRef(Input);

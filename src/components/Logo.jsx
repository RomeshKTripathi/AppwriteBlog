import React from "react";
import { useNavigate } from "react-router-dom";

const Logo = ({ clickable = true, className = "" }) => {
  const navigate = useNavigate();
  return (
    <span
      onClick={() => {
        if (clickable) navigate("/");
      }}
      className={`font-bold ${
        clickable ? "cursor-pointer" : "cursor-default"
      } ${className}
       `}
    >
      Blog<span className="text-rose-500">Project</span>
    </span>
  );
};

export default Logo;

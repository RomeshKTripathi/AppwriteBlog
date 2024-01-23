import React from "react";
import { useNavigate } from "react-router-dom";

const LoginButton = () => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate("/login")}
      className="font-bold text-neutral-900 hover:text-teal-800 max-md:text-teal-700 max-md:font-semibold"
    >
      Login
    </button>
  );
};

export default LoginButton;

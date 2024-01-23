import React from "react";
import { useNavigate } from "react-router-dom";

const SignupButton = () => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate("/signup")}
      className={`px-4  py-1.5  bg-rose-500 border border-rose-500 text-gray-100 font-semibold mx-2 hover:bg-transparent hover:text-rose-500 duration-200 rounded-full max-md:p-0 max-md:m-0 max-md:bg-transparent max-md:border-none max-md:text-rose-500`}
    >
      Signup
    </button>
  );
};

export default SignupButton;

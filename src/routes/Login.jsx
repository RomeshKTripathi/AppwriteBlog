import React from "react";
import LoginForm from "../components/utility/LoginForm";
import Logo from "../components/utility/Logo";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="w-full my-40 flex justify-center">
      <div className="w-80 ">
        <span className="font-semibold text-4xl text-center block my-2">
          Welcome Back !
        </span>
        <span className="block text-center font-medium my-2 ">
          <span className="text-blue-900 underline hover:no-underline cursor-pointer">
            <Link to="/signin"> Signin</Link>
          </span>{" "}
          to get the most out of <Logo style={"text-sm  inline-block"} />
        </span>
        <LoginForm />
      </div>
    </div>
  );
}

export default Login;

import React from "react";
import { Link } from "react-router-dom";
import SigninForm from "../components/utility/SigninForm";

function Signin() {
    return (
        <div className="w-full my-40 flex justify-center">
            <div className="w-80 ">
                <span className="font-semibold text-4xl text-center block my-2">
                    Welcome!
                </span>
                <span className="block text-center font-medium my-2 ">
                    <span className="text-blue-900 underline hover:no-underline cursor-pointer">
                        <Link to="/login">Login</Link>
                    </span>{" "}
                    if already have an account.
                </span>
                <SigninForm />
            </div>
        </div>
    );
}

export default Signin;

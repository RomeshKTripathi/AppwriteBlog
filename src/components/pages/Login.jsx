import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Logo, Input } from "../ComponentIndex";

const Login = () => {
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const { handleSubmit, register } = useForm();

  const userLogin = (formData) => {
    setError("");

    // Appwrite Signup && Store Signup code here

    console.log(formData);
    navigate("/");
  };

  return (
    <div className="w-96 max-sm:w-full rounded-md max-sm:rounded-none p-7 max-sm:p-4 border-teal-100  bg-gradient-to-br from-rose-50 to-teal-50 mx-auto my-7 ">
      <div className="flex items-center justify-between *:cursor-default">
        <Logo clickable={false} className="opacity-40 max-sm:hidden" />
        <p className="text-3xl text-rose-500 font-bold">
          Log<span className="text-teal-500">in</span>
        </p>
      </div>

      <form onSubmit={handleSubmit(userLogin)}>
        <Input
          id="2"
          type="email"
          placeholder="Enter Your Email"
          label="Email"
          className={"text-teal-500-500"}
          autoComplete="off"
          {...register("email", {
            required: true,
          })}
        />
        <Input
          id="3"
          type="password"
          placeholder="Enter Your Password"
          label="Password"
          className={"text-teal-500-500"}
          autoComplete="off"
          {...register("password", {
            required: true,
          })}
        />
        <p className="text-teal-500 text-sm pt-4">
          Don't have an Account,{" "}
          <span
            onClick={() => {
              navigate("/signup");
            }}
            className="font-semibold text-rose-500 cursor-pointer hover:underline"
          >
            Create Account
          </span>{" "}
          here
        </p>
        <Input
          type="submit"
          placeholder="Login"
          className="cursor-pointer font-semibold text-rose-800 border-rose-500 hover:bg-rose-500 max-sm:w-28 mt-4 block mx-auto rounded-full hover:text-white duration-100"
        />
        <p className="text-rose-600 text-sm">{error}</p>
      </form>
    </div>
  );
};

export default Login;

import React, { useState } from "react";
import { Logo, Input } from "../ComponentIndex";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { authentication as auth } from "../../appwrite/AppwriteAuthentication";
import { useDispatch, useSelector } from "react-redux";
import { storeLogin } from "../../LocalStore/LocalAuthenticationSlice";
const Signup = () => {
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { handleSubmit, register } = useForm();

  const createAccount = async (formData) => {
    setError("");
    try {
      const userData = await auth.createAccount(formData);
      if (userData) {
        const userDetails = await auth.getCurrentUser();
        if (userDetails) {
          dispatch(storeLogin(userDetails));
          navigate("/");
        }
      }
    } catch (error) {
      setError(error.message);
    }
    // Appwrite Signup && Store Signup code here
  };

  return (
    <div className="w-96 max-sm:w-full rounded-md max-sm:rounded-none p-7 max-sm:p-4 border-teal-100  bg-gradient-to-br from-rose-50 to-teal-50 mx-auto my-7 ">
      <div className="flex items-center justify-between *:cursor-default">
        <Logo clickable={false} className="opacity-40 max-sm:hidden" />
        <p className="text-3xl text-rose-500 font-bold">
          Sign<span className="text-teal-500">Up</span>
        </p>
      </div>

      <form onSubmit={handleSubmit(createAccount)}>
        <Input
          id="1"
          type="text"
          placeholder="Enter Full Name"
          label="Full Name"
          className={"text-teal-500-500"}
          autoComplete="off"
          {...register("name", {
            required: true,
          })}
        />
        <Input
          id="2"
          type="email"
          placeholder="Enter Your Email"
          label="Your Email"
          className={"text-teal-500-500"}
          autoComplete="off"
          {...register("email", {
            required: true,
          })}
        />
        <Input
          id="3"
          type="password"
          placeholder="Create Password"
          label="Create Password"
          className={"text-teal-500-500"}
          autoComplete="off"
          {...register("password", {
            required: true,
          })}
        />
        <p className="text-teal-500 text-sm pt-4">
          Already have an Account,{" "}
          <span
            onClick={() => {
              navigate("/login");
            }}
            className="font-semibold text-rose-500 cursor-pointer hover:underline"
          >
            Login
          </span>{" "}
          here
        </p>
        <Input
          type="submit"
          placeholder="Submit"
          className="cursor-pointer font-semibold text-rose-800 border-rose-500 hover:bg-rose-500 max-sm:w-28 mt-4 block mx-auto rounded-full hover:text-white duration-100"
        />
        <p className="text-rose-600 text-sm">{error}</p>
      </form>
    </div>
  );
};

export default Signup;

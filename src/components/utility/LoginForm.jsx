import React from "react";
import { useForm } from "react-hook-form";
import { LockIcon, UserIcon } from "../../assets/Icons";
import { Link } from "react-router-dom";
import Button from "../utility/Button";

function LoginForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <form className="my-2 p-4" onSubmit={handleSubmit(onSubmit)}>
      <div
        className={`w-full bg-neutral-200 rounded-md p-3 flex *:self-center ${
          errors.email
            ? "outline outline-1 outline-red-600 bg-red-50 *:placeholder:text-red-500/50"
            : ""
        }`}
      >
        <UserIcon style={errors.email ? "text-red-600" : "text-neutral-600"} />
        <input
          autoComplete="off"
          className="h-8 w-full bg-transparent pl-2 outline-none "
          placeholder="Enter Your Email "
          {...register("email", { required: true })}
        />
      </div>
      <div
        className={`w-full bg-neutral-200 rounded-md p-3 my-4 flex *:self-center ${
          errors.password
            ? "outline outline-1 outline-red-600 bg-red-50 *:placeholder:text-red-500/50"
            : ""
        }`}
      >
        <LockIcon
          style={errors.password ? "text-red-600" : "text-neutral-600"}
        />
        <input
          autoComplete="off"
          className="h-8 w-full bg-transparent pl-2 outline-none "
          placeholder="Enter Your Password "
          type="password"
          {...register("password", { required: true })}
        />
      </div>
      <div className="flex justify-between *:self-center">
        <div className="flex *:self-center *:cursor-pointer">
          <input
            type="checkbox"
            name=""
            id="remember"
            {...register("remember")}
          />
          <label className="ml-1 font-thin text-sm" htmlFor="remember">
            Remember me
          </label>
        </div>
        <Link to="/reset-password">
          <span className="text-sm font-thin underline">Forgot password</span>
        </Link>
      </div>
      <Button
        text="Login"
        type={"submit"}
        style={"rounded-md text-center my-2 py-2 text-xl"}
      />
    </form>
  );
}

export default LoginForm;

import React from "react";
import { useForm } from "react-hook-form";
import { LockIcon, UserIcon, MailIcon } from "../../assets/Icons";
import { Link } from "react-router-dom";
import Button from "../utility/Button";
import Input from "./Input";

function SigninForm() {
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
      <Input
        {...{
          Icon: UserIcon,
          error: errors.firstname,
          register: register,
          type: "text",
          name: "firstname",
          placeholder: "Firstname",
          validationObject: { required: true },
        }}
      />
      <Input
        {...{
          Icon: UserIcon,
          error: errors.lastname,
          register: register,
          type: "text",
          name: "lastname",
          placeholder: "Lastname",
          validationObject: { required: true },
        }}
      />
      <Input
        {...{
          Icon: MailIcon,
          error: errors.email,
          register: register,
          type: "email",
          name: "email",
          placeholder: "Enter your email",
          validationObject: { required: true },
        }}
      />
      <Input
        {...{
          Icon: LockIcon,
          error: errors.password,
          register: register,
          type: "password",
          name: "password",
          placeholder: "Create Password",
          validationObject: { required: true },
        }}
      />
      <div className="flex *:self-center *:cursor-pointer">
        <input
          type="checkbox"
          name=""
          id="accept-terms"
          {...register("accept-terms")}
        />
        <label className="ml-1 font-thin text-sm" htmlFor="accept-terms">
          Accept terms & conditions
        </label>
      </div>
      <Button
        text="Register"
        type={"submit"}
        style={"rounded-md text-center my-2 py-2 text-xl"}
      />
    </form>
  );
}

export default SigninForm;

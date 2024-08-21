import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { LockIcon, UserIcon } from "../../assets/Icons";
import { Link } from "react-router-dom";
import Button from "../utility/Button";
import Input from "./Input";
import { useLogin } from "../../hooks/useLogin";
import useToast from "../../hooks/useToast";

function LoginForm() {
    const { loggingIn, login, error } = useLogin();
    const { toastList, createToast } = useToast();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    useEffect(() => {
        if (error) createToast(error, "error", 10000);
    }, [error]);
    return (
        <>
            <form className="relative my-2 p-4" onSubmit={handleSubmit(login)}>
                <Input
                    {...{
                        Icon: UserIcon,
                        error: errors.email,
                        register,
                        type: "text",
                        name: "email",
                        placeholder: "Enter Email",
                        validationObject: { required: true },
                    }}
                />
                <Input
                    {...{
                        Icon: LockIcon,
                        error: errors.password,
                        register,
                        type: "password",
                        name: "password",
                        placeholder: "Enter Password",
                        validationObject: { required: true },
                    }}
                />
                <div className="flex justify-between *:self-center">
                    <div className="flex *:self-center *:cursor-pointer">
                        <input
                            type="checkbox"
                            name=""
                            id="remember"
                            {...register("remember")}
                        />
                        <label
                            className="ml-1 font-thin text-sm"
                            htmlFor="remember"
                        >
                            Remember me
                        </label>
                    </div>
                    <Link to="/reset-password">
                        <span className="text-sm font-thin underline">
                            Forgot password
                        </span>
                    </Link>
                </div>
                <Button
                    text="Login"
                    loading={loggingIn}
                    type={"submit"}
                    style={"rounded-md text-center my-2 py-2 text-xl"}
                />
            </form>
            <div className="absolute top-14 max-w-96 left-5 z-[999]">
                {toastList.map((item, index) => item)}
            </div>
        </>
    );
}

export default LoginForm;

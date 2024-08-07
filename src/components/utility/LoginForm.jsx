import React from "react";
import { useForm } from "react-hook-form";
import { LockIcon, UserIcon } from "../../assets/Icons";
import { Link, useNavigate } from "react-router-dom";
import Button from "../utility/Button";
import Input from "./Input";
import { authentication as auth } from "../../appwrite/Authentication";
import { storeLogin } from "../../store/userSlice";
import { useDispatch } from "react-redux";

function LoginForm() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        auth.login(data)
            .then((data) => {
                dispatch(storeLogin(data));
                navigate("/");
            })
            .catch((err) => {
                console.log(err);
            });
    };
    return (
        <form className="my-2 p-4" onSubmit={handleSubmit(onSubmit)}>
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
                type={"submit"}
                style={"rounded-md text-center my-2 py-2 text-xl"}
            />
        </form>
    );
}

export default LoginForm;

import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { LockIcon, UserIcon, MailIcon, CrossIcon } from "../../assets/Icons";
import Button from "../utility/Button";
import Input from "./Input";
import { authentication as auth } from "../../appwrite/Authentication";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { storeLogin } from "../../store/userSlice";

function SigninForm() {
    // Hooks
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const errorRef = useRef();
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    // Handlers
    const onSubmit = (data) => {
        const dataObj = {
            name: data.firstname + " " + data.lastname,
            email: data.email,
            password: data.password,
        };
        auth.register(dataObj)
            .then((result) => {
                console.log(result);
                dispatch(storeLogin(result));
                navigate("/");
            })
            .catch((err) => {
                setError(err);
                errorRef.current = setTimeout(() => {
                    setError("");
                }, 5000);
            });
    };

    // JSX
    return (
        <>
            <form
                className=" relative my-2 p-4"
                onSubmit={handleSubmit(onSubmit)}
            >
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
                    <label
                        className="ml-1 font-thin text-sm"
                        htmlFor="accept-terms"
                    >
                        Accept terms & conditions
                    </label>
                </div>
                <Button
                    text="Register"
                    type={"submit"}
                    style={"rounded-md text-center my-2 py-2 text-xl"}
                />
            </form>
        </>
    );
}

export default SigninForm;

import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { LockIcon, UserIcon, MailIcon } from "../../assets/Icons";
import Button from "../utility/Button";
import Input from "./Input";
import { useSignin } from "../../hooks/useSignin";
import useToast from "../../hooks/useToast";

function SigninForm() {
    const { signingIn, signin, signinError } = useSignin();
    const { toastList, createToast } = useToast();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    useEffect(() => {
        if (signinError) createToast(signinError, "error", 5000);
    }, [signinError]);
    return (
        <>
            <form className=" relative p-4" onSubmit={handleSubmit(signin)}>
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
                    loading={signingIn}
                    text="Register"
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

export default SigninForm;

import { useEffect, useState } from "react";
import { authentication } from "../appwrite/Authentication";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { storeLogin } from "../store/userSlice";
function useSignin() {
    const [signingIn, setSigningIn] = useState(false);
    const [signinError, setSigningInError] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const loggedIn = useSelector((state) => state.user.loggedIn);

    const signin = (data) => {
        setSigningIn(true);
        const dataObj = {
            name: data.firstname + " " + data.lastname,
            email: data.email,
            password: data.password,
        };
        authentication
            .register(dataObj)
            .then((result) => {
                dispatch(storeLogin(result));
                navigate("/");
            })
            .catch((err) => {
                console.log(err);

                setSigningInError(err);
            })
            .finally(() => {
                setSigningIn(false);
            });
    };

    useEffect(() => {
        if (loggedIn) navigate("/");
    }, [loggedIn]);

    return { signingIn, signinError, signin };
}

export { useSignin };

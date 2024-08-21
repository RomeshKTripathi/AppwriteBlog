import { useState, useEffect } from "react";
import { storeLogin } from "../store/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { authentication } from "../appwrite/Authentication";
import { useNavigate } from "react-router-dom";

function useLogin() {
    const [loggingIn, setLoggingIn] = useState(false);
    const [error, setError] = useState("");
    const loggedIn = useSelector((state) => state.user.loggedIn);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const login = (data) => {
        setLoggingIn(true);
        authentication
            .login(data)
            .then((data) => {
                dispatch(storeLogin(data));
                navigate("/");
            })
            .catch((err) => {
                setError(err);
                setTimeout(() => {
                    setError("");
                }, 1000);
            })
            .finally(() => {
                setLoggingIn(false);
            });
    };

    useEffect(() => {
        if (loggedIn) navigate("/");
    }, [loggedIn]);

    return { loggingIn, error, login };
}

export { useLogin };

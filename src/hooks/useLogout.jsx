import { authentication } from "../appwrite/Authentication";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { storeLogout } from "../store/userSlice";

function useLogout() {
    const [loggingOut, setLoggingOut] = useState(false);
    const [logoutError, setLogoutError] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const loggedIn = useSelector((state) => state.user.loggedIn);
    const logout = () => {
        setLoggingOut(true);

        authentication
            .logout()
            .then(() => {
                dispatch(storeLogout());
            })
            .catch((err) => {
                setLogoutError(err);
            })
            .finally(() => {
                setLoggingOut(false);
            });
    };

    useEffect(() => {
        if (!loggedIn) {
            navigate("./");
        }
    }, [loggedIn]);

    return { loggingOut, logoutError, logout };
}

export default useLogout;

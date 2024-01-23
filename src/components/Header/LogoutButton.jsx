import React from "react";
import { authentication } from "../../appwrite/AppwriteAuthentication";
import { storeLogout } from "../../LocalStore/LocalAuthenticationSlice";
import { useDispatch } from "react-redux";
const LogoutButton = () => {
  const dispatch = useDispatch();
  const logoutSession = async () => {
    await authentication.appwriteLogout();
    dispatch(storeLogout());
  };
  return (
    <button
      onClick={() => {
        logoutSession();
      }}
      className={`px-4 py-1.5  border border-teal-500 text-teal-800 font-semibold mx-2 hover:bg-teal-200  duration-200 rounded-full max-md:p-0 max-md:border-none max-md:m-0 max-md:text-rose-600 max-md:hover:bg-transparent`}
    >
      Logout
    </button>
  );
};

export default LogoutButton;

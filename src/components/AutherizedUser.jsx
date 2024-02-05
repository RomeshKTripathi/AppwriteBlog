import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";

const AutherizedUser = ({ children }) => {
  const [loader, setLoader] = useState(true);
  const navigate = useNavigate();
  const userData = useSelector((state) => state.user.userData);
  useEffect(() => {
    if (!userData) {
      navigate("/");
    } else setLoader(false);
  });
  return loader ? <Loading /> : <>{children}</>;
};

export default AutherizedUser;

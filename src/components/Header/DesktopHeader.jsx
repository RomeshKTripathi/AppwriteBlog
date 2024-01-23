import React from "react";
import Logo from "../Logo";
import { useSelector } from "react-redux";
import SignupButton from "./SignupButton";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import { useNavigate } from "react-router-dom";

const DesktopHeader = ({ links }) => {
  const status = useSelector((state) => state.user.status);
  const navigate = useNavigate();

  return (
    <header className="block max-md:hidden sticky ">
      <div className="sticky flex justify-between items-center p-3 bg-gradient-to-r from-rose-100 to-teal-100 backdrop-blur-sm">
        <Logo />

        <ul className="flex ">
          {links.map(
            (link) =>
              link.active && (
                <li
                  key={link.title}
                  onClick={() => {
                    navigate(link.url);
                  }}
                  className=" cursor-pointer font-semibold  mr-5 hover:text-rose-500 rounded duration-75"
                >
                  {link.title}
                </li>
              )
          )}
        </ul>
        {!status && (
          <div>
            <LoginButton />
            <SignupButton />
          </div>
        )}
        {status && (
          <div>
            <LogoutButton />
          </div>
        )}
      </div>
    </header>
  );
};

export default DesktopHeader;

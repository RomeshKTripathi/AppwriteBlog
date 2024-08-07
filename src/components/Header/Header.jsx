import React from "react";
import Logo from "../utility/Logo";
import Button from "../utility/Button";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import Profile from "./Profile";

const links = [
    {
        text: "Home",
        link: "/",
    },
    {
        text: "Tags",
        link: "/tags",
    },
    {
        text: "About",
        link: "/about",
    },
];

function Header() {
    return (
        <div className="w-full py-4 flex justify-between z-50 bg-white *:self-center mb-5 sticky top-0">
            <NavLink to="/">
                <Logo />
            </NavLink>
            <div className="flex mr-auto ml-10 gap-4 font-semibold text-lg">
                {links.map((linkObject) => (
                    <span
                        key={linkObject.text}
                        className={` cursor-pointer duration-150 `}
                    >
                        <NavLink
                            to={linkObject.link}
                            className={({ isActive }) =>
                                `${isActive ? "font-bold" : ""}`
                            }
                        >
                            {linkObject.text}
                        </NavLink>
                    </span>
                ))}
            </div>
            {!useSelector((state) => state.user.loggedIn) ? (
                <Link to="/login">
                    <Button text={"Login"} />
                </Link>
            ) : (
                <Profile />
            )}
        </div>
    );
}

export default Header;

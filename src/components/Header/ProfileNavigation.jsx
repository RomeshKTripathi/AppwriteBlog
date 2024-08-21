import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import useLogout from "../../hooks/useLogout";

const profileNavLinks = [
    {
        id: 1,
        text: "Dashboard",
        path: "../admin",
    },
    {
        id: 2,
        text: "Write a post",
        path: "",
    },
    {
        id: 3,
        text: "Settings",
        path: "",
    },
    {
        id: 4,
        text: "help",
        path: "",
    },
];
function ProfileNavigation({ onMouseLeave }) {
    const userData = useSelector((state) => state.user.userData);
    const { loggingOut, logout } = useLogout();

    return (
        <div
            onMouseLeave={onMouseLeave}
            className="absolute bg-white rounded-md w-44 top-16 shadow-sm right-0 border "
        >
            <div className="py-2 px-4 border-b *:block">
                <span className="font-bold cursor-pointer">
                    {userData.name}
                </span>
                <span className="truncate cursor-pointer text-neutral-500 text-sm">
                    {userData.email}
                </span>
            </div>
            <div className="py-2 px-4">
                {profileNavLinks.map((item) => (
                    <Link key={item.id} to={item.path}>
                        <div className="hover:font-semibold cursor-pointer">
                            {item.text}
                        </div>
                    </Link>
                ))}
                <div
                    className="hover:font-semibold cursor-pointer "
                    onClick={logout}
                >
                    <span className={`${loggingOut ? "ml-4 loader" : ""}`}>
                        {loggingOut ? "" : "Logout"}
                    </span>
                </div>
            </div>
        </div>
    );
}

export default React.memo(ProfileNavigation);

import React from "react";
import { storeLogout } from "../../store/userSlice";
import { useDispatch } from "react-redux";
import { authentication as auth } from "../../appwrite/Authentication";

const profileNavLinks = [
    {
        text: "Dashboard",
        path: "/Dashboard",
    },
    {
        text: "Write a post",
        path: "",
    },
    {
        text: "Settings",
        path: "",
    },
    {
        text: "help",
        path: "",
    },
];
function ProfileNavigation({ onMouseLeave }) {
    const dispatch = useDispatch();

    const handleSignout = () => {
        try {
            auth.logout().then(() => {
                dispatch(storeLogout());
            });
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div
            onMouseLeave={onMouseLeave}
            className="absolute bg-white rounded-md w-44 top-16 shadow-sm right-0 border "
        >
            <div className="py-2 px-4 border-b *:block">
                <span className="font-bold cursor-pointer">Arthur Black</span>
                <span className="truncate cursor-pointer text-neutral-500">
                    @arthurblack
                </span>
            </div>
            <div className="py-2 px-4">
                {profileNavLinks.map((item) => (
                    <div
                        className="hover:font-semibold cursor-pointer"
                        key={item.text}
                    >
                        {item.text}
                    </div>
                ))}
                <div
                    className="hover:font-semibold cursor-pointer "
                    onClick={handleSignout}
                >
                    Signout
                </div>
            </div>
        </div>
    );
}

export default ProfileNavigation;

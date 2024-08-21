import React from "react";
import Logo from "../../components/utility/Logo";
import {
    AllPostIcon,
    DashboardIcon,
    ProfileIcon,
    ResourceIcon,
    SettingsIcon,
    SupportIcon,
    WritePostIcon,
} from "../../assets/Icons";
import { Link } from "react-router-dom";

const navLinks = [
    {
        id: 1,
        link: "Dashboard",
        to: "./",
        Icon: DashboardIcon,
    },
    {
        id: 2,
        link: "Profile",
        to: "./profile",
        Icon: ProfileIcon,
    },
    {
        id: 3,
        link: "Write a Post",
        to: "./add-new-post",
        Icon: WritePostIcon,
    },
    {
        id: 4,
        link: "All Posts",
        to: "./all-posts",
        Icon: AllPostIcon,
    },
    {
        id: 5,
        link: "Resources",
        to: "./resources",
        Icon: ResourceIcon,
    },
    {
        id: 5,
        link: "Settings",
        to: "./settings",
        Icon: SettingsIcon,
    },
    {
        id: 6,
        link: "Support",
        to: "./support",
        Icon: SupportIcon,
    },
];

function Navigation() {
    return (
        <>
            <Logo style={"text-white text-3xl py-8 pl-5 cursor-auto"} />
            {navLinks.map((linkObject) => (
                <Link to={linkObject?.to ?? ""}>
                    <div
                        key={linkObject.id}
                        className="text-white/80 py-2 pl-4 text-lg hover:bg-white/20 cursor-pointer transition-colors duration-150 flex gap-4 *:self-center"
                    >
                        <linkObject.Icon style={"size-8"} />
                        <span>{linkObject.link}</span>
                    </div>
                </Link>
            ))}
        </>
    );
}

export default Navigation;

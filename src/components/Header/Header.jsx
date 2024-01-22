import React, { useState } from "react";
import Logo from "../Logo";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  // Manage state of navbar hamburger menu items visible/invisible
  const [visible, setVisible] = useState(false);
  const links = [
    {
      title: "Home",
      url: "/",
    },
    {
      title: "Posts",
      url: "/posts",
    },
    {
      title: "All Posts",
      url: "/all-posts",
    },
    {
      title: "Services",
      url: "/services",
    },
    {
      title: "Contact Us",
      url: "/contact-us",
    },
  ];
  return (
    <>
      <header className="hidden max-sm:block sticky ">
        <div className=" flex justify-between p-3 bg-gradient-to-r from-rose-100 to-teal-100">
          <Logo clickable={false} />
          <div>
            <svg
              onClick={() => {
                setVisible((visible) => !visible);
              }}
              className="w-6 h-6 cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="100"
              height="100"
              viewBox="0 0 50 50"
            >
              <path
                className={`${visible ? "block" : "hidden"}`}
                d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z"
              ></path>

              <path
                className={`${!visible ? "block" : "hidden"}`}
                d="M 3 9 A 1.0001 1.0001 0 1 0 3 11 L 47 11 A 1.0001 1.0001 0 1 0 47 9 L 3 9 z M 3 24 A 1.0001 1.0001 0 1 0 3 26 L 47 26 A 1.0001 1.0001 0 1 0 47 24 L 3 24 z M 3 39 A 1.0001 1.0001 0 1 0 3 41 L 47 41 A 1.0001 1.0001 0 1 0 47 39 L 3 39 z"
              ></path>
            </svg>
          </div>
        </div>
        <div>
          <ul className={`${visible ? "block" : "hidden"}`}>
            {links.map((link) => (
              <li
                key={link.title}
                onClick={() => {
                  navigate(link.url);
                }}
                className="m-1 p-2 cursor-pointer hover:bg-gray-100 hover:text-rose-500 rounded duration-75"
              >
                {link.title}
              </li>
            ))}
            <li className="m-1 p-2 cursor-pointer hover:bg-gray-100 hover:text-rose-500 rounded duration-75 flex justify-between">
              <button
                onClick={() => {
                  navigate("/login");
                }}
                className="font-bold text-teal-500"
              >
                Login
              </button>
            </li>
            <li className="m-1 p-2 cursor-pointer hover:bg-gray-100 hover:text-rose-500 rounded duration-75 flex justify-between">
              <button
                onClick={() => {
                  navigate("/signup");
                }}
                className="font-bold text-rose-500"
              >
                Signup
              </button>
            </li>
          </ul>
        </div>
      </header>
      <header className="block max-sm:hidden sticky ">
        <div className="sticky flex justify-between items-center p-3 bg-gradient-to-r from-rose-100 to-teal-100 backdrop-blur-sm">
          <Logo />

          <ul className="flex ">
            {links.map((link) => (
              <li
                key={link.title}
                onClick={() => {
                  navigate(link.url);
                }}
                className=" cursor-pointer font-semibold  mr-5 hover:text-rose-500 rounded duration-75"
              >
                {link.title}
              </li>
            ))}
          </ul>
          <div>
            <button
              onClick={() => navigate("/login")}
              className="font-bold text-neutral-900 hover:text-teal-800"
            >
              Login
            </button>
            <button
              onClick={() => navigate("/signup")}
              className={`px-4 py-1.5 bg-rose-500 border border-rose-500 text-gray-100 font-semibold mx-2 hover:bg-transparent hover:text-rose-500 duration-200 rounded-full`}
            >
              Signup
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;

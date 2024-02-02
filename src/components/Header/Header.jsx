import React, { useEffect, useRef, useState } from "react";
import MobileHeader from "./MobileHeader";
import DesktopHeader from "./DesktopHeader";
import { useSelector } from "react-redux";
const Header = () => {
  // Manage state of navbar hamburger menu items visible/invisible

  const links = [
    {
      title: "Home",
      url: "/",
      active: true,
    },
    {
      title: "Posts",
      url: "/posts",
      active: true,
    },
    {
      title: "MyPosts",
      url: "/myposts",
      active: useSelector((state) => state.user.status),
    },
    {
      title: "Services",
      url: "/services",
      active: false,
    },
    {
      title: "Contact Us",
      url: "/contact-us",
      active: true,
    },
    {
      title: "Add Post",
      url: "/add-post",
      active: useSelector((state) => state.user.status), // this method will be passed as value so state will be updated dynamically
    },
  ];
  return (
    <>
      <MobileHeader links={links} />
      <DesktopHeader links={links} />
    </>
  );
};

export default Header;

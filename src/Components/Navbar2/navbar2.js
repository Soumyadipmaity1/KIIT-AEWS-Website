import React from "react";
import { NavLink, useLocation } from 'react-router-dom';
import kaews_logo from "./kaews_logo.png";
const navLinks = [
  { to: "/", text: "Home" },
  { to: "/about", text: "About" },
  { to: "/members", text: "Members" },
  { to: "/events", text: "Events" },
  { to: "/gallery", text: "Gallery" },
  { to: "/blogs", text: "Blogs" },
  { to: "/contact", text: "Contact" },
];

const Navbar2 = () => {
  const location = useLocation();

  return (
    <div className="flex fixed w-[100%] bg-opacity-100 bg-[#ffffff] justify-between py-2 z-50 px-5">
      <div className="flex justify-between">
        <div className="m-3">
          <img src={kaews_logo} alt="logo" className="h-10  w-10" />
        </div>{" "}
        <div className="m-3">
          <img src={kaews_logo} alt="logo" className="h-10  w-10" />
        </div>
        <div className="m-3">
          <img src={kaews_logo} alt="logo" className="h-10  w-10" />
        </div>
      </div>

      <div className="flex justify-between items-center pb-1">
  {navLinks.map((link, index) => (
    <div key={index} className="px-2 mx-2">
      <NavLink
        to={link.to}
        className={`text-black p-2 md:text-md xl:text-lg font-bold ${
          location.pathname === link.to ? ' border-b-4 border-orange-500' : ''
        }`}
      >
        {link.text}
      </NavLink>
    </div>
  ))}
</div>
    </div>
  );
};

export default Navbar2;




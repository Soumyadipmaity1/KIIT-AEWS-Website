import React, { useState } from "react";
import { Link, NavLinks, useLocation } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { IoIosClose } from "react-icons/io";
import Logo from "./kaews_logo.png";
function Navbar2() {
  const [isOpen, setIsOpen] = useState(true);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const NavItems = [
    {
      index: 0,
      name: "Home",
      path: "/",
    },
    {
      index: 1,
      name: "About",
      path: "/about",
    },
    {
      index: 2,
      name: "Members",
      path: "/members",
    },
    {
      index: 3,
      name: "Events",
      path: "/events",
    },
    {
      index: 4,
      name: "Gallery",
      path: "/gallery",
    },
    {
      index: 5,
      name: "Blogs",
      path: "/blogs",
    },
    {
      index: 6,
      name: "Contact",
      path: "/contact",
    },
  ];

  const matchRoute = (route) => {
    return route === window.location.pathname;
  };

  return (
    <div className="flex fixed top-0 font-semibold text-xl w-full bg-opacity-100 bg-[#ffffff] justify-between px-10 items-center py-1 z-50">
      <Link to="/">
        <img
          src={Logo}
          alt="logo"
          className="h-[50px] rounded-full my-4 object-contain w-[50px]"
        />
      </Link>
      <div className="hidden md:flex justify-evenly items-center gap-3 w-[50vw]">
        {NavItems.map((element) => (
          <div
            key={element.index}
            className={
              matchRoute(element.path)
                ? "p-3 text-black w-32 flex justify-center items-center relative"
                : "p-3 hover:border-b-4 hover:border-b-orange-400 text-black w-32 flex justify-center items-center relative"
            }
          >
            <Link to={element.path}>
              <p
                className={
                  matchRoute(element.path)
                    ? "scale-125 transition-all p-3 duration-200 border-b-orange-400 border-b-4"
                    : ""
                }
              >
                {element.name}
              </p>
            </Link>
          </div>
        ))}
      </div>
      <div className="md:hidden">
        <button onClick={toggleNavbar}>
          {isOpen ? (
            <IoMenu size={42} />
          ) : (
            <div className="flex flex-col justify-evenly items-center gap-3 w-[100vw] pt-5 pr-10">
              <button
                className="w-full flex justify-center"
                onClick={toggleNavbar}
              >
                <IoIosClose
                  className="hover:border-b-4 hover:border-b-orange-400 text-orange-600"
                  size={70}
                />
              </button>
              {NavItems.map((element) => (
                <div
                  key={element.index}
                  className="p-3 hover:border-b-4 hover:border-b-orange-400 text-black w-32 flex justify-center items-center relative"
                >
                  <Link to={element.path}>
                    <p
                      className={
                        matchRoute(element.path)
                          ? "scale-125 transition-all duration-200"
                          : ""
                      }
                    >
                      {element.name}
                    </p>
                  </Link>
                </div>
              ))}
            </div>
          )}
        </button>
      </div>
    </div>
  );
}

export default Navbar2;
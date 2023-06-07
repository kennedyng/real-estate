import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import { navLinks } from "../constants";

import { section } from "../styles";
import { logo } from "../assets/icons";

const Nav: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handleToggleMenu = () => {
    setOpen(!open);
  };
  return (
    <nav
      className={`flex flex-row py-8  items-center justify-between text-base ${section.paddingX}`}
    >
      <Link to="/">
        <img
          src={logo}
          alt="logo"
          className="cursor-pointer w-[64.84px] h-[40px] "
        />
      </Link>
      <ul className="ml-20  flex-row gap-6 flex-1 hidden lg:flex ">
        {navLinks.map(({ id, label, link }) => (
          <li
            key={id}
            className="cursor-pointer text-paleBlue hover:text-hover"
          >
            <Link to={link}>{label}</Link>
          </li>
        ))}
      </ul>

      <div
        className={` fixed z-40 top-0 right-0 bg-lightBlue h-screen ${
          open ? "w-full md:w-2/4" : "w-0"
        } duration-200 lg:hidden`}
      >
        <button
          className=" h-[40px] w-[40px] text-white relative top-2 left-2 rounded-full bg-darkBlue"
          onClick={handleToggleMenu}
        >
          <i className="fi fi-br-cross text-xs text-[#fff]"></i>
        </button>
        <div className="h-screen py-10 ">
          <ul className=" text-center flex flex-col gap-2">
            {navLinks.map(({ id, label, link }) => (
              <li
                key={id}
                className="cursor-pointer text-paleBlue text-lg font-bold hover:underline duration-500"
              >
                <Link to={link} onClick={handleToggleMenu}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Button styles="px-4 py-3 hidden lg:block bg-blue">Contact Us</Button>

      <i
        onClick={handleToggleMenu}
        className="fi fi-br-menu-burger lg:hidden text-3xl text-darkBlue"
      ></i>
    </nav>
  );
};

export default Nav;

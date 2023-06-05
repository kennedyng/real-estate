import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import { navLinks } from "../constants";
import { logo } from "../assets";
import { section } from "../styles";

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
        className={` fixed top-0 right-0 bg-lightBlue h-screen ${
          open ? "w-full md:w-2/4" : "w-0"
        } duration-200 lg:hidden`}
      >
        <button
          className="p-2 text-white relative top-0 right-0 bg-darkBlue"
          onClick={handleToggleMenu}
        >
          close
        </button>
        <div className="h-screen py-10 ">
          <ul className=" text-center flex flex-col gap-2">
            {navLinks.map(({ id, label, link }) => (
              <li
                key={id}
                className="cursor-pointer text-paleBlue text-lg font-bold hover:underline duration-200"
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

      <img
        onClick={handleToggleMenu}
        src={logo}
        alt="logo"
        className="cursor-pointer w-[64.84px] h-[40px] lg:hidden "
      />
    </nav>
  );
};

export default Nav;

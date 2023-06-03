import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import { navLinks } from "../constants";
import { logo } from "../assets";
import { section } from "../styles";

const Nav: React.FC = () => {
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

      <Button styles="px-4 py-3 hidden lg:block ">Contact Us</Button>

      <Link to="/">
        <img
          src={logo}
          alt="logo"
          className="cursor-pointer w-[64.84px] h-[40px] lg:hidden "
        />
      </Link>
    </nav>
  );
};

export default Nav;

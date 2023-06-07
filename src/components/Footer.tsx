import React from "react";
import { whiteLogo } from "../assets/icons";

const Footer: React.FC = () => {
  return (
    <footer className=" flex flex-col gap-2  bg-blue justify-center items-center h-20 text-lightBlue md:h-[190px]">
      <img src={whiteLogo} className="h-[35.29px] w-[55.29px]" />
      <h2 className="font-serifs font-bold text-lightBlue">Real State</h2>
    </footer>
  );
};

export default Footer;

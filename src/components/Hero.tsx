import React from "react";
import { section } from "../styles";
import { dotsbg, hero } from "../assets";

const Hero: React.FC = () => {
  return (
    <section className={`${section.paddingX}`}>
      <div className="flex flex-col md:flex-row gap-2 items-center">
        <div className="w-full text-center md:text-start ">
          <h1 className="text-3xl font-serifs  text-darkBlue font-bold md:leading-[86.35px] md:text-6xl ">
            Modern living <br className="hidden md:block" /> for everyone
          </h1>
          <p className="text-darkBlue  md:leading-[32.2px]">
            We provide a complete service for the sale, purchase{" "}
            <br className="hidden md:block" />
            or rental of real estate. We have been operating{" "}
            <br className="hidden md:block" /> in Madrid and Barcelona more than
            15 years.
          </p>
        </div>
        <div className="w-full">
          <img src={hero} className="w-[100%] h-[100%]" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

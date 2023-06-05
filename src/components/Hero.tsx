import React from "react";
import { section } from "../styles";
import { dotsbg, hero } from "../assets";

const Hero: React.FC = () => {
  return (
    <section className={`${section.paddingLeft}  pr-4 md:pr-[50px] `}>
      <div className="flex flex-col md:flex-row gap-2 items-center h-[544px]">
        <div className="w-full text-center md:text-start ">
          <h1 className="text-4xl font-serifs  text-darkBlue font-bold  md:text-6xl lg:leading-[86.35px] ">
            Modern living <br className="hidden md:block" /> for everyone
          </h1>
          <p className="text-darkBlue  lg:leading-[32.2px]">
            We provide a complete service for the sale, purchase{" "}
            <br className="hidden md:block" />
            or rental of real estate. We have been operating{" "}
            <br className="hidden md:block" /> in Madrid and Barcelona more than
            15 years.
          </p>
        </div>
        <div className="relative h-[100%] w-full">
          <img src={dotsbg} className="  h-[100%] w-[90%] absolute right-0  " />
          <img src={hero} className=" h-[100%] w-[90%] z-10 absolute top-3" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

import React from "react";
import { section } from "../styles";
import { dotsbg, hero } from "../assets";
import { Button } from ".";

const Hero: React.FC = () => {
  return (
    <section className={`${section.paddingLeft}  pr-4 md:pr-[50px] `}>
      <div className="flex flex-col md:flex-row gap-2 items-center h-[450px]  lg:h-[544px]">
        <div className="w-full text-center md:text-start ">
          <h1 className="text-4xl font-serifs  text-darkBlue font-bold   lg:leading-[86.35px] lg:text-6xl">
            Modern living <br className="hidden md:block" /> for everyone
          </h1>
          <p className="text-darkBlue  lg:leading-[32.2px]">
            We provide a complete service for the sale, purchase{" "}
            <br className="hidden lg:block" />
            or rental of real estate. We have been operating{" "}
            <br className="hidden lg:block" /> in Madrid and Barcelona more than
            15 years.
          </p>

          <div className="flex-row gap-4 p-6 z-20 bg-lightBlue rounded-[4px] w-7/12 absolute hidden md:flex">
            <select className="w-2/4 p-4 bg-faint border-paleBlue rounded-[4px] ">
              <option>Property</option>
              <option>dddd</option>
              <option>dddd</option>
            </select>
            <input
              className="w-3/4 p-4 rounded-[4px] "
              placeholder="Search of location"
            />

            <Button styles="bg-blue w-1/4 p-4 rounded-[4px] ">Search</Button>
          </div>
        </div>
        <div className="relative h-[100%] w-full">
          <img
            src={dotsbg}
            className="  h-[100%] w-[90%] absolute right-0  bg-cover bg-no-repeat"
          />
          <img
            src={hero}
            className=" h-[100%] w-[90%] z-10 absolute top-3 bg-cover bg-no-repeat"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

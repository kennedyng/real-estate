import React from "react";
import { section } from "../styles";
import { dots, professional } from "../assets";
import OurTeam from "./OurTeam";

const AboutUs: React.FC = () => {
  return (
    <div className={`${section.paddingX} ${section.paddingY} `}>
      <div className="flex flex-col items-center  gap-24  md:flex-row">
        <div className="relative flex-1  h-[100%]">
          <img src={dots} className="top-0 h-[100%] w-[100%] left-0  " />
          <img
            src={professional}
            className="right-0 bottom-0 h-[90%] w-[90%] absolute"
          />
        </div>
        <div className="flex-1 flex flex-col gap-4 md-gap-10">
          <h1 className="text-darkBlue font-bold text-3xl lg:text-6xl font-serifs ">
            About Us
          </h1>

          <p className="text-darkBlue text-base md:text-lg">
            We are a company that connects the world of real estate and finance.
            We provide a complete service for the sale, purchase or rental of
            real estate. Our advantage is more than 15 years of experience and
            soil in attractive locations in Slovakia with branches in Bratislava
            and Košice.
          </p>

          <p className="text-darkBlue text-base md:text-lg">
            We have a connection to all banks on the Slovak market, so we can
            solve everything under one roof. By constantly innovating our
            business activities, we move forward and we are able to offer truly
            above-standard services that set us apart from the competition.
          </p>
        </div>
      </div>

      <OurTeam />
    </div>
  );
};

export default AboutUs;

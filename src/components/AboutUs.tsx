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
            We are a dedicated team of real estate experts with a passion for
            helping you find your ideal property. With years of experience in
            the industry, we understand that buying or selling a home is a
            significant milestone in your life. That's why we're committed to
            providing top-notch service and expert guidance every step of the
            way. Whether you're a first-time buyer, an investor, or looking to
            sell your property, we've got you covered.
          </p>
        </div>
      </div>

      <OurTeam />
    </div>
  );
};

export default AboutUs;

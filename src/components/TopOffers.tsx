import React, { useRef } from "react";
import { Button } from ".";
import { section } from "../styles";

import { topOffers } from "../constants";
import Card from "./Card";

const TopOffers: React.FC = () => {
  const listEndRef = useRef<HTMLDivElement>(null);

  const handleNext = () => {
    listEndRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  };
  return (
    <section
      id="top-offers"
      className={`${section.paddingX} ${section.paddingY} flex flex-col bg-lightBlue `}
    >
      <h1 className="font-serif font-bold text-[51px] text-darkBlue">
        Top Offers
      </h1>

      <div className="flex flex-col  justify-between gap-4 md:flex-row">
        <p className="text-darkBlue">
          Fulfill your career dreams, enjoy all the achievements of the <br />{" "}
          city center and luxury housing to the fullest.
        </p>

        <Button styles="border-2 p-2">Show all offers</Button>
      </div>

      <div className="flex flex-row items-center justify-center gap-4 my-10">
        <hr className="flex-1 border-2 hidden md:block" />
        <div className="bg-darkBlue text-white p-2 rounded-full">
          <i className="fi fi-rr-angle-left"></i>
        </div>
        <button
          className="bg-darkBlue text-white p-2 rounded-full"
          onClick={handleNext}
        >
          <i className="fi fi-rr-angle-small-left bg-red-600"></i>
        </button>
      </div>

      <div className=" flex flex-row gap-10  overflow-y-auto ">
        {topOffers.map((offer) => (
          <Card key={offer.id} {...offer} />
        ))}

        <div ref={listEndRef} />
      </div>
    </section>
  );
};

export default TopOffers;

import React from "react";
import { Button } from ".";
import { section } from "../styles";

const TopOffers: React.FC = () => {
  return (
    <section
      id="top-offers"
      className={`${section.paddingX}flex flex-col bg-lightBlue py-40`}
    >
      <h1 className="font-serif font-bold text-[51px] text-darkBlue">
        Top Offers
      </h1>

      <div className="flex flex-row justify-between">
        <p className="text-darkBlue">
          Fulfill your career dreams, enjoy all the achievements of the <br />{" "}
          city center and luxury housing to the fullest.
        </p>

        <Button styles="border-2 px-2">Show all offers</Button>
      </div>

      <div className="flex flex-row items-center gap-4">
        <hr className="w-full" />
        <div>button klk lkl lk ls</div>
      </div>
    </section>
  );
};

export default TopOffers;

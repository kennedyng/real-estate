import React, { useRef } from "react";
import { Button } from ".";
import { section } from "../styles";
import { hero } from "../assets";
import { topOffers } from "../constants";

interface CardProps {
  id: string;
  title: string;
  price: string;
  city: string;
  img: string;
}
const Card: React.FC<CardProps> = ({ title, price, city, id, img }) => {
  return (
    <div
      id={id}
      className="shadow-lg rounded-[4px]  bg-[#fff] min-w-[320px] max-w-[320px] text-darkBlue "
    >
      <img src={img} className="bg-cover h-[250px] w-[100%]" alt="" />
      <h5 className=" px-4 mt-6 mb-5 font-serifs font-bold text-xl">{title}</h5>
      <div className="px-4   font-bold text-blue "> {price}</div>
      <div className="px-4  pb-4">{city}</div>
    </div>
  );
};

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
        <div className="bg-darkBlue text-white p-2 rounded-full">next</div>
        <button
          className="bg-darkBlue text-white p-2 rounded-full"
          onClick={handleNext}
        >
          next
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

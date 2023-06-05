import React from "react";
import { Button } from ".";
import { section } from "../styles";

const NewsLetter: React.FC = () => {
  return (
    <div
      className={` ${section.paddingX} flex flex-col bg-lightBlue items-center justify-center w-full h-[398px]`}
    >
      <div className="flex flex-col gap-1">
        <h2 className="font-bold text-3xl font-serifs">
          Subscribe to newsletter
        </h2>
        <p className="text-paleBlue">
          Get the latest news and interesting offers and real estate
        </p>

        <div className="flex flex-row gap-4 items-center">
          <input
            type="text"
            placeholder="Email"
            className="h-[48px] p-4  border-2 "
          />
          <Button styles="h-[48px] px-4  border-2 text-blue">Subscript</Button>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;

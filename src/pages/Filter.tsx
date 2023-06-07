import React from "react";
import { section } from "../styles";
import { Card, Filters } from "../components";
import { topOffers } from "../constants";

const Filter: React.FC = () => {
  return (
    <main className={` py-10 text-darkBlue `}>
      <div className={`${section.paddingX} text-center leading-8`}>
        <h1 className="font-serifs text-6xl font-bold">Search for an offer</h1>
        <p className=""> Choose from the most advantageous offers</p>
      </div>

      <div className={`${section.paddingX} py-10 bg-lightBlue`}>
        <Filters />
      </div>

      <div
        className={`${section.paddingX} py-10 grid grid-cols-1 gap-9 md:grid-cols-2 lg:grid-cols-3`}
      >
        {topOffers.map((item) => (
          <Card {...item} key={item.id} />
        ))}
      </div>
    </main>
  );
};

export default Filter;

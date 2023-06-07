import React from "react";
import { section } from "../styles";

const Card: React.FC = () => {
  return (
    <div className="flex flex-col flex-1 bg-lightBlue py-12  px-6 rounded-[4px] gap-6">
      <div className="flex flex-row gap-2">
        <h1 className="font-bold text-6xl font-serifs opacity-[50%]">"</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique in
          pellentesque ultrices et massa neque, convallis lorem. Erat proin in
          posuere dui accumsan lorem. Diam nunc scelerisque mi vestibulum
          scelerisque mi ac nisi. Dictumst nunc placerat ultricies pretium.
        </p>
      </div>

      <div className="flex flex-col">
        <h1 className="font-serifs font-bold">Emerson Aminoff</h1>
        <p>3 bedroom apartmentt in Madrid </p>
      </div>
    </div>
  );
};

const References: React.FC = () => {
  return (
    <section
      id="references"
      className={`${section.paddingX} ${section.paddingY} text-darkBlue`}
    >
      <h1 className="text-3xl font-bold lg:text-6xl">References</h1>
      <p className="mb-10">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Purus
        rutrum donec ultricies cras id ac.
      </p>

      <div className="flex flex-col md:flex-row gap-12">
        <Card />
        <Card />
      </div>
    </section>
  );
};

export default References;

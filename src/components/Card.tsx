import React from "react";

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
      className="shadow-lg rounded-[4px]  bg-[#fff] cursor-pointer min-w-[320px] max-w-[320px] [&_img]:hover:bg-contain text-darkBlue overflow-hidden "
    >
      <div>
        <img src={img} className="bg-cover h-[250px] w-[100%] duration-700 " />
      </div>
      <h5 className=" px-4 mt-6 mb-5 font-serifs font-bold text-xl">{title}</h5>
      <div className="px-4   font-bold text-blue "> {price}</div>
      <div className="px-4  pb-4">{city}</div>
    </div>
  );
};

export default Card;

import React from "react";
import { section } from "../styles";
import { staff } from "../constants";

interface CardProps {
  title: string;
  description: string;
  imgUrl?: string;
}
const Card: React.FC<CardProps> = ({ imgUrl, title, description }) => (
  <div className="flex flex-col items-center rounded-[4px] border-[1px] h-full  shadow-xl p-12 min-w-[220px] flex-1  text-darkBlue cursor-pointer">
    <img
      className="bg-black rounded-full w-[100%] h-[100%] bg-cover bg-no-repeat md:w-[200px] "
      alt={title}
      src={imgUrl}
    />
    <h3 className="text-center mt-6  font-serifs font-bold text-xl">{title}</h3>
    <p className="text-center mt-1">{description}</p>
  </div>
);

const OurTeam: React.FC = () => {
  return (
    <section
      className={`pt-10 ${section.paddingX} grid grid-cols-1 gap-8 md:grid-cols-2 items-stretch lg:grid-cols-3 lg:pt-[120px]`}
    >
      {staff.map((memberInfo, index) => (
        <div key={memberInfo.id} className={`order-${index + 1}`}>
          <Card
            title={memberInfo.name}
            imgUrl={memberInfo.img}
            description={memberInfo.desc}
          />
        </div>
      ))}

      <div className="flex flex-col text-darkBlue items-center justify-center order-first lg:order-1">
        <h1 className="font-serifs font-bold text-3xl text-center lg:text-3xl">
          Our Team
        </h1>
        <p className="text-center">
          dedicated and experienced real estate professionals is here to serve
          as your trusted partners in the exciting journey of buying or selling
          a property. With a combined wealth of knowledge, a commitment to
          excellence, and a passion for helping clients achieve their real
          estate goals, we are proud to introduce you to our remarkable team of
          agents.
        </p>
      </div>
    </section>
  );
};

export default OurTeam;

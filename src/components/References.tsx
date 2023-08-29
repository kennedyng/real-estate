import React from "react";
import { section } from "../styles";
import { reference } from "../utils/constants";

interface CardProps {
  quote: string;
  author: string;
  description: string;
}
const Card: React.FC<CardProps> = ({ quote, author, description }) => {
  return (
    <div className="flex flex-col flex-1 bg-lightBlue py-12  px-6 rounded-[4px] gap-6">
      <div className="flex flex-row gap-2">
        <h1 className="font-bold text-6xl font-serifs opacity-[50%]">"</h1>
        <p>{quote}</p>
      </div>

      <div className="flex flex-col">
        <h1 className="font-serifs font-bold">{author}</h1>
        <p>{description} </p>
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
        our success is best measured by the satisfaction and success of our
        valued clients. We take great pride in the relationships we've built and
        the results we've achieved. Here's what some of our clients have to say
        about their experiences working with us
      </p>

      <div className="flex flex-col md:flex-row gap-12">
        {reference.map(({ id, quote, author, description }) => (
          <Card
            key={id}
            quote={quote}
            author={author}
            description={description}
          />
        ))}
      </div>
    </section>
  );
};

export default References;

import React from "react";
import { section } from "../styles";

const Card: React.FC = () => (
  <div className="rounded-lg bg-white p-8 ">
    <img />
    <h3>Name</h3>
    <p>Super du klkl</p>
  </div>
);

const OurTeam: React.FC = () => {
  return (
    <section
      className={`${section.paddingY} ${section.paddingX} flex flex-wrap gap-8`}
    >
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </section>
  );
};

export default OurTeam;

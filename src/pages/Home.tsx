import React from "react";
import { Hero, NewsLetter, TopOffers } from "../components";

const Home: React.FC = () => {
  return (
    <>
      <Hero />

      <TopOffers />
      <NewsLetter />
    </>
  );
};

export default Home;

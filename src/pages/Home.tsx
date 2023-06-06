import React from "react";
import { AboutUs, Hero, NewsLetter, TopOffers } from "../components";
import OurTeam from "../components/OurTeam";

const Home: React.FC = () => {
  return (
    <>
      <Hero />

      <TopOffers />
      <AboutUs />

      <NewsLetter />
    </>
  );
};

export default Home;

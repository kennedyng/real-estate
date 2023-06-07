import React from "react";
import { AboutUs, Hero, References, TopOffers } from "../components";
import OurTeam from "../components/OurTeam";

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <TopOffers />
      <AboutUs />
      <References />
    </>
  );
};

export default Home;

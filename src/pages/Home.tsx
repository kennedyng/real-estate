import React from "react";
import { AboutUs, Hero, References, TopOffers } from "../components";

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

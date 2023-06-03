import React from "react";
import { Outlet } from "react-router-dom";
import { Footer, Nav } from "../components";

const Root: React.FC = () => {
  return (
    <>
      <Nav />

      <Outlet />
      <Footer />
    </>
  );
};

export default Root;

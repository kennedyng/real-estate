import React from "react";
import Nav from "../components/Nav";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

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

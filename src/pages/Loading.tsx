import React from "react";
import { ClimbingBoxLoader, HashLoader } from "react-spinners";
import { logo } from "../assets/icons";

const Loading: React.FC = () => {
  return (
    <div className="h-screen  flex flex-col gap-4 items-center justify-center">
      <div>
        <HashLoader color="#1C3988" size={60} speedMultiplier={1.5} />
      </div>

      <h1 className="font-serifs text-darkBlue text-2xl font-bold ">
        Real Estate
      </h1>
    </div>
  );
};

export default Loading;

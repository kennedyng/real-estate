import React from "react";

const Filters: React.FC = () => {
  return (
    <div className="flex flex-col gap-8 justify-center items-center">
      <div className="flex flex-row gap-4 ">
        <input
          placeholder="Enter Keyword"
          className="px-4 py-5 border-2 w-full"
        />
      </div>

      <div className="flex flex-row  w-full items-center gap-1">
        <hr className="w-full" />
        <p className="text-base px-9 whitespace-nowrap opacity-50">
          Filter settings
        </p>
        <hr className="w-full" />
      </div>
    </div>
  );
};

export default Filters;

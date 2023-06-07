import React from "react";

const Filters: React.FC = () => {
  return (
    <div className="flex flex-col gap-8 justify-center items-center">
      <div className="flex flex-row gap-4 ">
        <input placeholder="Enter Keyword" className="px-4 py-5 border-2" />
        <button>Search</button>
      </div>

      <div className="flex flex-row  w-full items-center gap-1">
        <hr className="w-full" />
        <p className="text-base px-9 whitespace-nowrap opacity-50">
          Filter settings
        </p>
        <hr className="w-full" />
      </div>

      <div className="grid grid-cols-1 w-full gap-10 md:grid-cols-2 lg:grid-cols-4">
        <select className="flex-1">
          <option>Sale</option>
        </select>
        <select className="flex-1">
          <option>Sale</option>
        </select>
        <select className="flex-1">
          <option>Sale</option>
        </select>
        <select className="flex-1">
          <option>Sale</option>
        </select>
      </div>

      <input type="range" />
    </div>
  );
};

export default Filters;

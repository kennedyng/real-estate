import React from "react";
import { Link } from "react-router-dom";

const Nav: React.FC = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/filter">Filter Page</Link>
        </li>
        <li>
          <Link to="/details/1">Product Details</Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;

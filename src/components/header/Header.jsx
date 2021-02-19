import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">CURRENCY CONVERTER</Link>
        </li>
        <li>
          <Link to="/currencies"> CURRENT EXCHANGE RATES</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;

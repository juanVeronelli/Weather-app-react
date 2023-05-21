import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faCity,
  faAddressCard,
  faCloudSun,
} from "@fortawesome/free-solid-svg-icons";
const Navbar = (props) => {
  return (
    <nav className="navbar-content">
      <ul>
        <li className="ul-item">
          <FontAwesomeIcon
            icon={faCloudSun}
            style={{ fontSize: "30px", marginLeft: "10px" }}
          />
          <a href="/dashboard">Weather</a>
        </li>
        <li className="ul-item">
          <FontAwesomeIcon icon={faAddressCard} style={{ fontSize: "30px" }} />{" "}
          <a href="">About</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

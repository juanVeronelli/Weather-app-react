import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGears,
  faWind,
  faSun,
  faBath,
} from "@fortawesome/free-solid-svg-icons";

const Wind = (props) => {
  const { loading, data } = props;
  return (
    <div className="wind-content">
      <div className="wind-main">
        <h4> CONDITIONS </h4>
      </div>
      <div className="wind-data">
        <div className="flex">
          <div className="data-flex">
            <FontAwesomeIcon icon={faGears} style={{ fontSize: "30px" }} />{" "}
            <h4> PRESSURE </h4>
          </div>
          {!loading && <h3> {data.main.pressure + " hPa"}</h3>}
        </div>
        <div className="flex">
          <div className="data-flex">
            <FontAwesomeIcon icon={faWind} style={{ fontSize: "30px" }} />
            <h4>WIND SPEED</h4>
          </div>
          {!loading && <h3> {data.wind.speed + " KM/H"}</h3>}
        </div>
        <div className="flex">
          <div className="data-flex">
            <FontAwesomeIcon icon={faSun} style={{ fontSize: "30px" }} />
            <h4> MAX TEMPERATURE </h4>
          </div>
          {!loading && (
            <h3> {(data.main.temp_max - 273.15).toFixed(0) + "°"}</h3>
          )}
        </div>
        <div className="flex">
          <div className="data-flex">
            <FontAwesomeIcon icon={faBath} style={{ fontSize: "30px" }} />
            <h4>HUMIDITY</h4>
          </div>
          {!loading && <h3> {data.main.humidity + "%"}</h3>}
        </div>
      </div>
    </div>
  );
};

export default Wind;

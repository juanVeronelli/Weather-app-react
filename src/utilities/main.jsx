import React from "react";

const defaultIcon = "Clear"; // default value from icons

const MainInfo = (props) => {
  const { loading, data, icons } = props; // get Props from dashboard
  return (
    <div className="data-content">
      <div className="data-info">
        <div className="city-content">
          <h1>
            {loading && "Loading..."} {!loading && data.name}
          </h1>
          <span>
            {loading && ""}
            {!loading && data.weather[0].description}
          </span>
        </div>
        {loading && <h3> ... </h3>}
        {!loading && <h3>{(data.main.temp - 273.15).toFixed(0)}° </h3>}
      </div>
      {loading && <img src={icons[defaultIcon]} alt="Weather Icon" />}
      {!loading && (
        <img
          src={icons[`${data.weather[0].main}`] ?? icons[defaultIcon]}
          alt="Weather Icon"
        />
      )}
    </div>
  );
};

export default MainInfo;

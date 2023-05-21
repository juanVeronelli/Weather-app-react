import React, { useState, useEffect } from "react";
import ForeCards from "../helpers/forecastCards";

const Forecast = (props) => {
  const { fData, loading, icons } = props;
  return (
    <div className="forecast-content">
      <h1> DAILY-FORECAST</h1>
      <div className="forecast-grid">
        <ForeCards data={fData} icons={icons} />
      </div>
    </div>
  );
};

export default Forecast;

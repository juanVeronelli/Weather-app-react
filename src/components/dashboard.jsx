import React, { useState } from "react";
import { getApiUrl, getForecastUrl } from "../config";

import "../../public/styles/dashboard.css";

// Utilities Components
import Navbar from "../utilities/navbar";
import MainInfo from "../utilities/main";
import Wind from "../utilities/wind";
import Forecast from "../utilities/forecast";

//pages Import
import ErrorPage from "./404";

//icons image
import rainIcon from "../../public/assets/rain.png";
import drizzleIcon from "../../public/assets/drizzle.png";
import sunIcon from "../../public/assets/sun.png";
import cloudIcon from "../../public/assets/cloud.png";

const icons = {
  Rain: rainIcon,
  Drizzle: drizzleIcon,
  Clear: sunIcon,
  Clouds: cloudIcon,
};

const fetchCityData = async (city, getUrl) => {
  try {
    const response = await fetch(getUrl({ city }));
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
};

const Dashboard = () => {
  const [city, setCity] = useState("");
  const [data, setData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (city === "" || !city) return null;
    setLoading(true);
    try {
      const data = await fetchCityData(city, getApiUrl);
      const forecastData = await fetchCityData(city, getForecastUrl);
      if (forecastData.cod === "404") return setError(true);
      if (data.cod === "404") return setError(true);
      setData(data);
      setForecastData(forecastData);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container-content">
      {error && <ErrorPage city={city} error={error} />}
      {!error && (
        <>
          <Navbar />
          <div className="main-content">
            <form className="form-content" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Search for City name"
                onChange={(e) => setCity(e.target.value)}
              />
            </form>
            <MainInfo loading={loading} data={data} icons={icons} />
            <Wind loading={loading} data={data} />
          </div>
          <Forecast fData={forecastData} loading={loading} icons={icons} />
        </>
      )}
    </div>
  );
};

export default Dashboard;

import React from "react";

const Cards = (props) => {
  const { hour, state, temp, icon } = props;
  return (
    <>
      <div className="forecast-item">
        <h3 id="hour"> {hour} </h3>
        <div className="img-content">
          <img id="icon-small" src={icon} alt="Weather small icon" />
          <h3>{state}</h3>
        </div>
        <h3 id="temp"> {temp}°</h3>
      </div>
      <div className="bar"></div>
    </>
  );
};

export default Cards;

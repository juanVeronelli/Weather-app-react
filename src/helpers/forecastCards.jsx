import React from "react";
import Cards from "./cards";

const ForeCards = (props) => {
  const { data, icons } = props;
  const cards = [];

  if (!data) return null;

  for (let i = 0; i < 5; i++) {
    let hour = new Date(
      data.list[i].dt_txt.replace(/-/g, "/") // Reemplaza los guiones con barras para asegurar un formato reconocido
    ).toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });

    let state = data.list[i].weather[0].main;
    let temp = (data.list[i].main.temp - 273.15).toFixed(0);
    cards.push(
      <Cards
        key={i}
        hour={hour}
        state={state}
        temp={temp}
        icon={icons[state]}
      />
    );
  }
  return <>{cards}</>;
};

export default ForeCards;

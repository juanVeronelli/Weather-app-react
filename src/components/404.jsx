import React from "react";

const ErrorPage = (props) => {
  const { city, error } = props;
  return (
    <div className="error-content">
      <h1> La ciudad {city} no existe </h1>
      <h3> Por favor introduzca a una ciudad existente </h3>
      <a href="/"> Volver! </a>
    </div>
  );
};

export default ErrorPage;

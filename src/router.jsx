import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// PAGES
import Dashboard from "./components/dashboard";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;

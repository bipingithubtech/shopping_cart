import React from "react";
import "../Style.css";

import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import { AppProvider } from "../constext/Context";

const Root = () => {
  return (
    <AppProvider>
      <Navbar />
      <Outlet />
    </AppProvider>
  );
};

export default Root;

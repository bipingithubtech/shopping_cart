import React from "react";
import "../Style.css";

import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import { AppProvider } from "../constext/Context";
import { CartProvider } from "../constext/CartContext";

const Root = () => {
  return (
    <AppProvider>
      <CartProvider>
        <Navbar />
        <Outlet />
      </CartProvider>
    </AppProvider>
  );
};

export default Root;

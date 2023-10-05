import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import CartOverview from "../features/cart/CartOverview";

function AppLayout() {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <CartOverview />
    </div>
  );
}

export default AppLayout;

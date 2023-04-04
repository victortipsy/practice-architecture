import React from "react";
import { Footer, Header } from "../../components";
import { Outlet } from "react-router-dom";

const LandingLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default LandingLayout;

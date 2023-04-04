import React from "react";
import { Outlet } from "react-router-dom";
import { Footer, Header } from "../../components";

const LandingLayout = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
      }}>
      <div
        style={{
          width: "100%",
          height: "15%",
        }}>
        <Header />
      </div>
      <div
        style={{
          width: "100%",
          height: "70%",
        }}>
        <Outlet />
      </div>
      <div
        style={{
          width: "100%",
          height: "15%",
        }}>
        <Footer />
      </div>
    </div>
  );
};

export default LandingLayout;

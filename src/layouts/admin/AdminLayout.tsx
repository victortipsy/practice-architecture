import React from "react";
import { Outlet } from "react-router-dom";
import { Dashboard } from "../../components";

const LandingLayout = () => {
  return (
    <div
      style={{
        width: "100vw",
        display: "flex",
      }}>
      <div
        style={{
          width: "250px",
          height: "100vh",
        }}>
        <Dashboard />
      </div>
      <div
        style={{
          flex: "1",
        }}>
        <Outlet />
      </div>
    </div>
  );
};

export default LandingLayout;

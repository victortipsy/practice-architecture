import React from "react";
import { Outlet } from "react-router-dom";
import { UserSidebar } from "../../components";

const UserLayout = () => {
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
        <UserSidebar />
      </div>
      <div
        style={{
          flex: 1,
        }}>
        <Outlet />
      </div>
    </div>
  );
};

export default UserLayout;

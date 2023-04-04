import React from "react";
import { Outlet } from "react-router-dom";
import { AdminSidebar } from "../../components";

const AdminLayout = () => {
  return (
    //container
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
        <AdminSidebar />
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

export default AdminLayout;

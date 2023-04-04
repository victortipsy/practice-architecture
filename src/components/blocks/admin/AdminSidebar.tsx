import React from "react";
import { NavLink } from "react-router-dom";
import { allUrls } from "../../../constants/all.enums";

const AdminSidebar = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "blueviolet",
        color: "whitesmoke",
      }}>
      <div> AdminSidebar</div>
      <div
        style={{
          marginTop: "50px",
          marginLeft: "10px",
          display: "flex",
          flexDirection: "column",
          gap: "40px",
        }}>
        <h3>
          <NavLink
            style={{ color: "white", textDecoration: "none" }}
            to={allUrls.admin}>
            Home
          </NavLink>
        </h3>
        <h3>
          <NavLink
            style={{ color: "white", textDecoration: "none" }}
            to={`${allUrls.admin}/profile`}>
            Profile
          </NavLink>
        </h3>
      </div>
    </div>
  );
};

export default AdminSidebar;

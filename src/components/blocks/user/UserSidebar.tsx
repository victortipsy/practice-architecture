import React from "react";
import { NavLink } from "react-router-dom";
import { allUrls } from "../../../constants/all.enums";

const UserSidebar = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "orange",
        color: "black",
      }}>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "23px",
        }}>
        {" "}
        User Dashboard
      </div>
      <div
        style={{
          height: "400px",
          marginTop: "50px",
          marginLeft: "10px",
          display: "flex",
          flexDirection: "column",
          gap: "40px",
        }}>
        <h3>
          <NavLink
            style={{ color: "black", textDecoration: "none" }}
            to={allUrls.user}>
            Home
          </NavLink>
        </h3>
        <h3>
          <NavLink
            style={{ color: "black", textDecoration: "none" }}
            to={`${allUrls.user}/profile`}>
            Profile
          </NavLink>
        </h3>
      </div>
      <h3>
        <NavLink
          style={{
            marginTop: "50px",
            marginLeft: "10px",
            color: "black",
            textDecoration: "none",
          }}
          to="/">
          Logout
        </NavLink>
      </h3>
    </div>
  );
};

export default UserSidebar;

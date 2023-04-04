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
      <div> UserSidebar</div>
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
            style={{ color: "grey", textDecoration: "none" }}
            to={allUrls.user}>
            Home
          </NavLink>
        </h3>
        <h3>
          <NavLink
            style={{ color: "grey", textDecoration: "none" }}
            to={`${allUrls.user}/profile`}>
            Profile
          </NavLink>
        </h3>
      </div>
    </div>
  );
};

export default UserSidebar;

import React from "react";
import { NavLink } from "react-router-dom";
import { allUrls } from "../../../shapes/enums/all.enums";

const Header = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "70px",
        color: "white",
        backgroundColor: "black",
        display: "flex",
        gap: "50px",
        alignItems: "center",
        justifyContent: "center",
      }}>
      <div>
        <NavLink
          style={{
            color: "white",
            textDecoration: "none",
          }}
          to="/about">
          About
        </NavLink>
      </div>
      <div>
        <NavLink
          style={{
            color: "white",
            textDecoration: "none",
          }}
          to={allUrls.select}>
          Get Started
        </NavLink>
      </div>
    </div>
  );
};

export default Header;

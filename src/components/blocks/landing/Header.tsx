import React from "react";
import { NavLink } from "react-router-dom";
import { allUrls } from "../../../constants/all.enums";

const Header = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        color: "white",
        backgroundColor: "black",
        display: "flex",
        gap: "100px",
        alignItems: "center",
        justifyContent: "center",
      }}>
      <div>
        <NavLink
          style={{
            color: "white",
            textDecoration: "none",
          }}
          to="/">
          Home
        </NavLink>
      </div>
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
          to="/contact">
          Contact
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

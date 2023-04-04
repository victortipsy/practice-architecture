import React from "react";
import { NavLink } from "react-router-dom";
import { SelectImage } from "../../components";
import { allUrls } from "../../constants/all.enums";

const SelectLayout = () => {
  return (
    //container
    <div
      style={{
        width: "100vw",
        display: "flex",
      }}>
      <div
        style={{
          width: "300px",
          height: "100vh",
          backgroundColor: "palevioletred",
          color: "lightgrey",
        }}>
        <SelectImage />
      </div>

      <div
        style={{
          flex: 1,
          backgroundColor: "wheat",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "20px",
        }}>
        <NavLink
          style={{
            width: "70%",
            color: "grey",
            textDecoration: "none",
          }}
          to={allUrls.user}>
          <div
            style={{
              width: "100%",
              height: "100px",
              backgroundColor: "paleturquoise",
              color: "#123456",
              borderRadius: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}>
            Get Started as a User
          </div>
        </NavLink>
        <NavLink
          style={{
            width: "70%",
            color: "grey",
            textDecoration: "none",
          }}
          to={allUrls.admin}>
          <div
            style={{
              width: "100%",
              height: "100px",
              backgroundColor: "palegreen",
              color: "#123456",
              borderRadius: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}>
            Get Started as an Admin
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default SelectLayout;

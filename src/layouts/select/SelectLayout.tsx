import React from "react";
import { NavLink } from "react-router-dom";
import { SelectImage } from "../../components";
import { allUrls } from "../../shapes/enums/all.enums";

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
        <div
          style={{
            width: "250px",
            height: "100px",
            backgroundColor: "paleturquoise",
            color: "#123456",
            borderRadius: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}>
          <NavLink
            style={{
              color: "grey",
              textDecoration: "none",
            }}
            to={allUrls.user}>
            Get Started as a User
          </NavLink>
        </div>
        <div
          style={{
            width: "250px",
            height: "100px",
            backgroundColor: "palegreen",
            color: "#123456",
            borderRadius: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}>
          <NavLink
            style={{
              color: "grey",
              textDecoration: "none",
            }}
            to={allUrls.admin}>
            Get Started as an Admin
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default SelectLayout;

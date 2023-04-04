import React from "react";
import { SelectImage } from "../../components";

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
          Log in as Admin
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
          Log in as User
        </div>
      </div>
    </div>
  );
};

export default SelectLayout;

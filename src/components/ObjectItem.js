import React from "react";
import "./../styles/ObjectItem.css";

function ObjectItem(props) {
  const obj = "block";
  return (
    <div
      className={
        obj === "normal"
          ? "normalItem"
          : obj === "circle"
          ? "normalItem circle"
          : "normalItem block"
      }
    ></div>
  );
}

export default ObjectItem;

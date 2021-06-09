import React from "react";
import "./../styles/ObjectItem.css";

function ObjectItem(props) {
  const obj = "block";
  const { playPendulum, setPlayPendulum } = props;
  return (
    <div
      className={
        obj === "normal"
          ? "normalItem"
          : obj === "circle"
          ? "normalItem circle"
          : "normalItem block"
      }
    >
      <button
        onClick={() => {
          playPendulum ? setPlayPendulum(false) : setPlayPendulum(true);
        }}
      >
        {playPendulum ? "Stop" : "Play"}
      </button>
    </div>
  );
}

export default ObjectItem;

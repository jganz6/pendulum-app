import React from "react";
import "./../styles/ObjectItem.css";

function ObjectItem(props) {
  const obj = "block";
  const { playPendulum, setPlayPendulum, setObjLeftAngle } = props;
  const stopPendulum = () => {
    setPlayPendulum(false);
    setObjLeftAngle(0);
  };
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
          playPendulum ? stopPendulum() : setPlayPendulum(true);
        }}
      >
        {playPendulum ? "Stop" : "Play"}
      </button>
    </div>
  );
}

export default ObjectItem;

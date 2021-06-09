import React from "react";
import "./../styles/Pendulum.css";
function Pendulum(props) {
  console.log(props.objLength);
  return (
    <div className="base">
      <div className="holder"></div>
      <div
        className="thread"
        style={
          props.objLength && props.playPendulum
            ? {
                height: `${props.objLength + "px"}`,
                animationName: "moveIt",
                animationDuration: "2.5s",
                animationTimingFunction: "ease-in-out",
                animationIterationCount: "infinite",
              }
            : props.objLength && !props.playPendulum
            ? {
                height: `${props.objLength + "px"}`,
              }
            : null
        }
      >
        <div className="knob"></div>
        <div className="pendulum"></div>
      </div>
      <div
        className="shadow"
        style={
          props.playPendulum
            ? {
                animationName: "moveShade",
                animationDuration: "1.25s",
                animationTimingFunction: "ease-in-out",
                animationDirection: "alternate",
                animationIterationCount: "infinite",
              }
            : null
        }
      ></div>
    </div>
  );
}

export default Pendulum;

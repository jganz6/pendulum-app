import React, { useState, useEffect } from "react";
import "./../styles/Pendulum.css";
function Pendulum(props) {
  const { amplitudoPlus, amplitudoMinus, objForm } = props;
  const [periode, setPeriode] = useState(3);
  useEffect(() => {
    let lngth = props.objLength / 400;
    setPeriode((Math.PI / Math.sqrt(9.81 / lngth)) * 2);
  }, [props.objLength]);
  return (
    <>
      <style>
        {`
      @keyframes moveIt {
        0%,
        100% {
          transform: rotate(${amplitudoPlus}deg);
        }
        50% {
          transform: rotate(${amplitudoMinus}deg);
        }
      }
      
      @keyframes moveShade {
        0% {
          transform: translateX(-220px) scale(1.4, 0.5);
          filter: blur(20px);
        }
        50% {
          filter: blur(3px);
        }
        100% {
          transform: translateX(220px) scale(1.4, 0.5);
          filter: blur(20px);
        }
      }
      `}
      </style>
      <div className="base">
        <div className="holder"></div>
        <div
          className="thread"
          style={
            props.objLength && props.playPendulum
              ? {
                  height: `${props.objLength + "px"}`,
                  transform: `rotate(${props.objLeftAngle}deg)`,
                  animationName: "moveIt",
                  animationDuration: `${periode}s`,
                  animationTimingFunction: "ease-in-out",
                  animationIterationCount: "infinite",
                }
              : props.objLength && !props.playPendulum
              ? {
                  height: `${props.objLength + "px"}`,
                  transform: `rotate(${props.objLeftAngle}deg)`,
                }
              : { transform: `rotate(${props.objLeftAngle}deg)` }
          }
        >
          <div className="knob"></div>
          <div
            className="pendulum"
            style={
              objForm === "circle"
                ? { borderRadius: "50%" }
                : objForm === "block"
                ? { height: "40px" }
                : null
            }
          ></div>
        </div>
        {/* <div
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
        ></div> */}
      </div>
    </>
  );
}

export default Pendulum;

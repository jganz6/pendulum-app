import React from "react";
import "./../styles/ObjectItem.css";
function ObjectItem(props) {
  const obj = "block";
  const {
    playPendulum,
    setPlayPendulum,
    setObjLeftAngle,
    objForm,
    setObjForm,
    // setSectionPage,
  } = props;
  // function ndsolve(f, x0, dt, tmax) {
  //   let x = x0.clone(); // Current values of variables
  //   const result = [x]; // Contains entire solution
  //   const nsteps = math.divide(tmax, dt); // Number of time steps
  //   for (let i = 0; i < nsteps; i++) {
  //     // Compute derivatives
  //     // eslint-disable-next-line no-loop-func
  //     const dxdt = f.map((func) => func(...x.toArray()));
  //     // Euler method to compute next time step
  //     const dx = math.multiply(dxdt, dt);
  //     x = math.add(x, dx);
  //     result.push(x);
  //   }
  //   return math.matrix(result);
  // }
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
        className="buttonSet"
        onClick={() => {
          playPendulum ? stopPendulum() : setPlayPendulum(true);
        }}
      >
        {playPendulum ? "Stop" : "Play"}
      </button>
      <select
        className="inputSet"
        value={objForm}
        onChange={(e) => setObjForm(e.target.value)}
      >
        <option value="circle" style={{ textAlign: "center" }}>
          circle
        </option>
        <option value="rectangle" style={{ textAlign: "center" }}>
          rectangle
        </option>
        <option value="block" style={{ textAlign: "center" }}>
          block
        </option>
      </select>
      {/* <button className="buttonSet" onClick={() => setSectionPage(1)}>
        section page
      </button> */}
    </div>
  );
}

export default ObjectItem;

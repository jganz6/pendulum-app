import React from "react";
import "./../styles/SettingsMass.css";

function SettingsMass(props) {
  const {
    objLength,
    setObjLength,
    objMass,
    setObjMass,
    objLeftAngle,
    setObjLeftAngle,
  } = props;
  return (
    <div className="settings-container">
      <form>
        <div className="item-settings">
          <label className="item2-row" htmlFor="length1">
            Length 1
          </label>
          <input
            name="length1"
            className="item2-row"
            value={objLength}
            onChange={(e) => setObjLength(e.target.value)}
          />
        </div>
        <div className="item-settings">
          <button style={{ transform: "rotate(180deg)" }}>&#10148;</button>
          <input
            name="rangeLength"
            className="item2-row"
            type="range"
            value={objLength}
            onChange={(e) => setObjLength(e.target.value)}
            min="0"
            max="400"
          />
          <button>&#10148;</button>
        </div>
        <div className="item-settings">
          <label className="item2-row" htmlFor="mass1">
            Mass 1
          </label>
          <input
            name="mass1"
            className="item2-row"
            value={objMass}
            onChange={(e) => setObjMass(e.target.value)}
          />
        </div>
        <div className="item-settings">
          <button style={{ transform: "rotate(180deg)" }}>&#10148;</button>
          <input
            name="rangeLength"
            className="item2-row"
            type="range"
            value={objMass}
            onChange={(e) => setObjMass(e.target.value)}
          />
          <button>&#10148;</button>
        </div>
        <div className="item-settings">
          <label className="item2-row" htmlFor="length1">
            Initial left angle
          </label>
          <input
            name="leftAngle"
            className="item2-row"
            value={objLeftAngle}
            onChange={(e) => setObjLeftAngle(e.target.value)}
            min="-90"
            max="90"
          />
        </div>
        <div className="item-settings">
          <button style={{ transform: "rotate(180deg)" }}>&#10148;</button>
          <input
            name="rangeLeftAngle"
            className="item2-row"
            type="range"
            value={objLeftAngle}
            onChange={(e) => setObjLeftAngle(e.target.value)}
            min="-90"
            max="90"
          />
          <button>&#10148;</button>
        </div>
      </form>
    </div>
  );
}

export default SettingsMass;

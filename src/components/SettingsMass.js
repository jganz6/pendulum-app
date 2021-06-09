import React from "react";
import "./../styles/SettingsMass.css";

function SettingsMass(props) {
  const { objLength, setObjLength } = props;
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
          />
          <button>&#10148;</button>
        </div>
        <div className="item-settings">
          <label className="item2-row" htmlFor="mass1">
            Mass 1
          </label>
          <input name="mass1" className="item2-row" value="1.17" />
        </div>
        <div className="item-settings">
          <button style={{ transform: "rotate(180deg)" }}>&#10148;</button>
          <input name="rangeLength" className="item2-row" type="range" />
          <button>&#10148;</button>
        </div>
      </form>
    </div>
  );
}

export default SettingsMass;

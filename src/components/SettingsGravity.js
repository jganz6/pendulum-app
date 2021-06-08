import React from "react";

function SettingsGravity() {
  return (
    <div className="settings-container">
      <form>
        <div className="item-settings">
          <label className="item2-row" htmlFor="length1">
            Gravity
          </label>
          <div className="item2-row"></div>
        </div>
        <div className="item-settings">
          <button style={{ transform: "rotate(180deg)" }}>&#10148;</button>
          <input name="rangeLength" className="item2-row" type="range" />
          <button>&#10148;</button>
        </div>
        <div className="item-settings">
          <select>
            <option>earth</option>
          </select>
        </div>
        <div className="item-settings">
          <label className="item2-row" htmlFor="mass1">
            Friction
          </label>
          <div className="item2-row"></div>
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

export default SettingsGravity;

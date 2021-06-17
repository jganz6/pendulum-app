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
            Length 1 (m)
          </label>
          <input
            name="length1"
            className="item2-row border-inp"
            value={objLength / 400}
            onChange={(e) => setObjLength(e.target.value * 400)}
          />
        </div>
        <div className="item-settings border-rad">
          <button
            className="border-but"
            style={{ transform: "rotate(180deg)" }}
            type="button"
            onClick={() => {
              objLength > 0
                ? setObjLength(objLength - 4)
                : setObjLength((prevState) => prevState);
            }}
          >
            &#10148;
          </button>
          <input
            name="rangeLength"
            className="item2-row "
            type="range"
            value={objLength}
            onChange={(e) => setObjLength(Number(e.target.value))}
            min="0"
            max="400"
          />
          <button
            className="border-but"
            type="button"
            onClick={() => {
              objLength < 400
                ? setObjLength((prevState) => prevState + 4)
                : setObjLength((prevState) => prevState);
            }}
          >
            &#10148;
          </button>
        </div>
        <div className="item-settings">
          <label className="item2-row" htmlFor="mass1">
            Mass 1 (kg)
          </label>
          <input
            name="mass1"
            className="item2-row border-inp"
            value={objMass}
            onChange={(e) => setObjMass(e.target.value)}
          />
        </div>
        <div className="item-settings border-rad">
          <button
            className="border-but"
            style={{ transform: "rotate(180deg)" }}
            type="button"
            onClick={() => {
              objMass > 0
                ? setObjMass((prevState) => prevState - 1)
                : setObjMass((prevState) => prevState);
            }}
          >
            &#10148;
          </button>
          <input
            name="rangeLength"
            className="item2-row"
            type="range"
            value={objMass}
            onChange={(e) => setObjMass(Number(e.target.value))}
            maxLength="100"
          />
          <button
            className="border-but"
            type="button"
            onClick={() => {
              objMass < 100
                ? setObjMass((prevState) => prevState + 1)
                : setObjMass((prevState) => prevState);
            }}
          >
            &#10148;
          </button>
        </div>
        <div className="item-settings">
          <label className="item2-row" htmlFor="length1">
            Initial left angle (deg)
          </label>
          <input
            name="leftAngle"
            className="item2-row border-inp"
            value={objLeftAngle}
            onChange={(e) => setObjLeftAngle(e.target.value)}
            min="-90"
            max="90"
          />
        </div>
        <div className="item-settings border-rad">
          <button
            className="border-but"
            style={{ transform: "rotate(180deg)" }}
            type="button"
            onClick={() => {
              objLeftAngle > -90
                ? setObjLeftAngle((prevState) => prevState - 1)
                : setObjLeftAngle((prevState) => prevState);
            }}
          >
            &#10148;
          </button>
          <input
            name="rangeLeftAngle"
            className="item2-row"
            type="range"
            value={objLeftAngle}
            onChange={(e) => setObjLeftAngle(Number(e.target.value))}
            min="-90"
            max="90"
          />
          <button
            className="border-but"
            type="button"
            onClick={() => {
              objLeftAngle < 90
                ? setObjLeftAngle((prevState) => prevState + 1)
                : setObjLeftAngle((prevState) => prevState);
            }}
          >
            &#10148;
          </button>
        </div>
      </form>
    </div>
  );
}

export default SettingsMass;

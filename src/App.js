import React, { useState, useEffect } from "react";
import SettingsMass from "./components/SettingsMass";
// import SettingsGravity from "./components/SettingsGravity";
import Ruller from "./components/Ruller";
import ObjectItem from "./components/ObjectItem";
import Pendulum from "./components/Pendulum";
import Stopwatch from "./components/Stopwatch";
import "./app.css";

function App() {
  const [objLength, setObjLength] = useState(400);
  const [objLeftAngle, setObjLeftAngle] = useState(0);
  const [amplitudoPlus, setAmplitudoPlus] = useState(0);
  const [amplitudoMinus, setAmplitudoMinus] = useState(0);
  const [objMass, setObjMass] = useState(1);
  const [playPendulum, setPlayPendulum] = useState(false);
  const [objForm, setObjForm] = useState("circle");
  useEffect(() => {
    if (objLeftAngle <= 0) {
      setAmplitudoPlus(-Math.abs(objLeftAngle));
      setAmplitudoMinus(Math.abs(objLeftAngle));
    } else {
      setAmplitudoPlus(Math.abs(objLeftAngle));
      setAmplitudoMinus(-Math.abs(objLeftAngle));
    }
  }, [objLeftAngle]);
  return (
    <div className="App">
      <div className="sideSec">
        <Ruller />
        <Stopwatch />
      </div>
      <div className="midSec">
        <Pendulum
          objForm={objForm}
          objLength={objLength}
          playPendulum={playPendulum}
          objMass={objMass}
          objLeftAngle={objLeftAngle}
          amplitudoPlus={amplitudoPlus}
          amplitudoMinus={amplitudoMinus}
        />
      </div>
      <div className="sideSec" style={{ flexDirection: "column" }}>
        <SettingsMass
          objLeftAngle={objLeftAngle}
          setObjLeftAngle={(angl) => setObjLeftAngle(angl)}
          objMass={objMass}
          setObjMass={(mass) => setObjMass(mass)}
          objLength={objLength}
          setObjLength={(length) => setObjLength(length)}
        />
        <div>{"     ."}</div>
        {/* <SettingsGravity /> */}
        <ObjectItem
          objForm={objForm}
          setObjForm={(obj) => setObjForm(obj)}
          setObjLeftAngle={(angl) => setObjLeftAngle(angl)}
          playPendulum={playPendulum}
          setPlayPendulum={(choice) => setPlayPendulum(choice)}
        />
      </div>
    </div>
  );
}

export default App;

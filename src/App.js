import React, { useState, useEffect } from "react";
import SettingsMass from "./components/SettingsMass";
// import SettingsGravity from "./components/SettingsGravity";
import Ruller from "./components/Ruller";
import ObjectItem from "./components/ObjectItem";
import Pendulum from "./components/Pendulum";
import Stopwatch from "./components/Stopwatch";

function App() {
  const [objLength, setObjLength] = useState(0);
  const [objLeftAngle, setObjLeftAngle] = useState(0);
  const [amplitudoPlus, setAmplitudoPlus] = useState(0);
  const [amplitudoMinus, setAmplitudoMinus] = useState(0);
  const [objMass, setObjMass] = useState(1);
  const [playPendulum, setPlayPendulum] = useState(false);
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
      <h1>Pendulum App</h1>
      <Pendulum
        objLength={objLength}
        playPendulum={playPendulum}
        objMass={objMass}
        objLeftAngle={objLeftAngle}
        amplitudoPlus={amplitudoPlus}
        amplitudoMinus={amplitudoMinus}
      />
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
        setObjLeftAngle={(angl) => setObjLeftAngle(angl)}
        playPendulum={playPendulum}
        setPlayPendulum={(choice) => setPlayPendulum(choice)}
      />
      <Stopwatch />
      <Ruller />
    </div>
  );
}

export default App;

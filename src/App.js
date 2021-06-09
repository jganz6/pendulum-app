import React, { useState } from "react";
import SettingsMass from "./components/SettingsMass";
import SettingsGravity from "./components/SettingsGravity";
import Ruller from "./components/Ruller";
import ObjectItem from "./components/ObjectItem";
import Pendulum from "./components/Pendulum";
import Stopwatch from "./components/Stopwatch";

function App() {
  const [objLength, setObjLength] = useState(0);
  const [playPendulum, setPlayPendulum] = useState(false);
  return (
    <div className="App">
      <h1>Pendulum App</h1>
      <Pendulum objLength={objLength} playPendulum={playPendulum} />
      <SettingsMass
        objLength={objLength}
        setObjLength={(length) => setObjLength(length)}
      />
      <div>{"     ."}</div>
      <SettingsGravity />
      <ObjectItem
        playPendulum={playPendulum}
        setPlayPendulum={(choice) => setPlayPendulum(choice)}
      />
      <Stopwatch />
      <Ruller />
    </div>
  );
}

export default App;

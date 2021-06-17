import React, { useState, useEffect } from "react";
import SettingsMass from "./components/SettingsMass";
// import SettingsGravity from "./components/SettingsGravity";
import Ruller from "./components/Ruller";
import ObjectItem from "./components/ObjectItem";
import Pendulum from "./components/Pendulum";
import Stopwatch from "./components/Stopwatch";
// import Canvas from "./contexts/Canvas";
import LogoUpi from "./images/logo-upi.png";
import "./app.css";

function App() {
  const [objLength, setObjLength] = useState(400);
  const [objLeftAngle, setObjLeftAngle] = useState(0);
  const [amplitudoPlus, setAmplitudoPlus] = useState(0);
  const [amplitudoMinus, setAmplitudoMinus] = useState(0);
  const [objMass, setObjMass] = useState(1);
  const [sectionPage, setSectionPage] = useState(0);
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
  console.log(sectionPage);
  return (
    <div className="App">
      <div className="sideSec">
        <div className="headSecStart">SIMPLE HARMONIC MOTION SIMULATION</div>
        <div className="headerSec">
          <img src={LogoUpi} alt="LogoUpi" />
          <div className="textHeader">
            <div>Program Studi Pendidikan Fisika</div>
            <div>Universitas Pendidikan Indonesia</div>
            <br />
            <div>Oleh :Nurhasanah(170194)</div>
          </div>
        </div>
        <Ruller />
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
          setSectionPage={(choice) => setSectionPage(choice)}
        />
        <Stopwatch />
      </div>
    </div>
  );
}

export default App;

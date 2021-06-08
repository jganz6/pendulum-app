import SettingsMass from "./components/SettingsMass";
import SettingsGravity from "./components/SettingsGravity";
import Ruller from "./components/Ruller";
import ObjectItem from "./components/ObjectItem";

function App() {
  return (
    <div className="App">
      <h1>Pendulum App</h1>
      <SettingsMass />
      <div>{"     ."}</div>
      <SettingsGravity />
      <ObjectItem />
      <Ruller />
    </div>
  );
}

export default App;

import { useState } from "react";
import "./App.css";
import Player from "./components/Player";
import ColorPicker from "./components/ColorPicker";
import Button from "./components/Button";

function App() {
  var [team1Color, setTeam1Color] = useState("red");
  var [team2Color, setTeam2Color] = useState("blue");

  var [isGlobalPause, setIsGlobalPause] = useState(false);

  return (
    <div
      className="App"
      style={{ height: "100%", display: "flex", flexDirection: "column" }}
    >
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          flex: 1,
        }}
      >
        <div
          style={{
            backgroundColor: team1Color,
            display: "flex",
            flexDirection: "row",
            padding: "10px",
            flex: 1,
            justifyContent: "space-between",
          }}
        >
          <Player
            title="Blocker"
            isGlobalPause={isGlobalPause}
            color={team1Color}
          />
          <Player
            title="Blocker"
            isGlobalPause={isGlobalPause}
            color={team1Color}
          />
          <Player
            title="Jammer"
            isGlobalPause={isGlobalPause}
            color={team1Color}
          />
        </div>
        <div
          style={{
            backgroundColor: team2Color,
            display: "flex",
            flexDirection: "row",
            padding: "10px",
            flex: 1,
            justifyContent: "space-between",
          }}
        >
          <Player
            title="Jammer"
            isGlobalPause={isGlobalPause}
            color={team2Color}
          />
          <Player
            title="Blocker"
            isGlobalPause={isGlobalPause}
            color={team2Color}
          />
          <Player
            title="Blocker"
            isGlobalPause={isGlobalPause}
            color={team2Color}
          />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          justifyContent: "space-around",
          alignItems: "center",
          backgroundColor: "#333333",
          padding: "10px",
        }}
      >
        <ColorPicker currentColor={team1Color} setColor={setTeam1Color} />
        <Button
          onClick={() => setIsGlobalPause(!isGlobalPause)}
          title={isGlobalPause ? "PAUSE ALL" : "RESUME ALL"}
        />
        <ColorPicker currentColor={team2Color} setColor={setTeam2Color} />
      </div>
    </div>
  );
}

export default App;

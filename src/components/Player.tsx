import { useEffect, useState } from "react";
import { DARK_COLORS } from "../consts/colors";
import Button from "./Button";

function Player({
  title,
  isGlobalPause,
  color,
}: {
  title: string;
  isGlobalPause: boolean;
  color: string;
}) {
  const [timeLeft, setTimeLeft] = useState(0);

  useEffect(() => {
    if (!isGlobalPause && timeLeft > 0) {
      const interval = setInterval(() => {
        setTimeLeft((timeLeft) => timeLeft - 1000);
      }, 1000);

      // Clean up the interval when the component unmounts
      return () => clearInterval(interval);
    }
  }, [isGlobalPause, timeLeft]);

  var textColor = DARK_COLORS.includes(color) ? "white" : "black";

  var start30s = () => {
    setTimeLeft(30000);
  };

  var add30s = () => {
    setTimeLeft((timeLeft) => timeLeft + 30000);
  };

  var reset = () => {
    setTimeLeft(0);
  };

  return (
    <div
      style={{
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div style={{ color: textColor, fontSize: "20px", textAlign: "center" }}>
        {title}
      </div>
      <div
        style={{
          backgroundColor: "white",
          height: "70px",
          width: "70px",
          fontSize: "30px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "40px",
          marginTop: "10px",
          fontWeight: timeLeft <= 10000 && timeLeft > 0 ? "bold" : "normal",
          borderStyle: timeLeft <= 10000 && timeLeft > 0 ? "dashed" : "solid",
          borderColor: timeLeft <= 10000 && timeLeft > 0 ? "grey" : "white",
          borderWidth: "4px",
        }}
      >
        {timeLeft / 1000}
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          flex: 1,
        }}
      >
        <Button onClick={start30s} title="Start" />
        <Button onClick={reset} title="Reset" />
        <Button onClick={add30s} title="+30" />
      </div>
    </div>
  );
}

export default Player;

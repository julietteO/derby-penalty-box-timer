import { useState } from "react";
import { COLORS } from "../consts/colors";
import Button from "./Button";

function ColorPicker({
  currentColor,
  setColor,
}: {
  currentColor: string;
  setColor: (color: string) => void;
}) {
  var [isPickerOpen, setIsPickerOpen] = useState(false);

  return (
    <div>
      <Button onClick={() => setIsPickerOpen(true)} title="Change team color" />
      {isPickerOpen && (
        <div
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            backgroundColor: "rgba(0, 0, 0, 0.87)",

            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <div style={{ fontSize: "30px", color: "#ffffff" }}>
            Choose team color
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            {COLORS.map((color: string) => (
              <div
                key={color}
                style={{
                  height: "50px",
                  width: "50px",
                  borderRadius: "50%",
                  backgroundColor: color,
                  border: "2px solid white",
                  margin: "10px",
                }}
                onClick={() => {
                  setColor(color);
                  setIsPickerOpen(false);
                }}
              ></div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default ColorPicker;

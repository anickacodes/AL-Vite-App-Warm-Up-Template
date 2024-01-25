import { useRef, useState } from "react";
import MIDISounds from "midi-sounds-react";

import "../App.css";

const Square = () => {
  const midiSounds = useRef(null);

  const [squares, setSquares] = useState(["purple", "aqua", "gold", "orange"]);
  function playTestInstrument(color) {
    const soundMap = {
      purple: [60],
      aqua: [62],
      gold: [64],
      orange: [65],
    };
    midiSounds.current.playChordNow(3, soundMap[color], 2.5);
  }

  function handleSquareClick(index) {
    const colorSquareArr = squares.map((color, i) => {
      if (i === index) {
        const nextColor =
          color === "purple"
            ? "aqua"
            : color === "aqua"
            ? "gold"
            : color === "gold"
            ? "orange"
            : "purple";

        playTestInstrument(nextColor);
        return nextColor;
      }
      return color;
    });
    setSquares(colorSquareArr);
  }

  return (
    <div className="squares">
      {squares.map((element, index) => (
        <div
          key={index}
          style={{ backgroundColor: element }}
          className="square"
          onClick={() => handleSquareClick(index)}
        >
          {index}
        </div>
      ))}
      <MIDISounds ref={midiSounds} appElementName="root" instruments={[3]} />
    </div>
  );
};

export default Square;

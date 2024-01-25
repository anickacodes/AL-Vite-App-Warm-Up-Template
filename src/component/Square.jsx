import { useRef, useState } from "react";
import MIDISounds from "midi-sounds-react";
import "../App.css";

// console.log(MIDISounds)

const Square = () => {
  const [squares, setSquares] = useState(["purple", "aqua", "gold", "orange"]);
  const midiSounds = useRef(null);
  const [instrument, setInstrument] = useState(0);
  const [instrumentVolume, setInstrumentVolume] = useState(null);

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
            : color === "orange"
            ? "teal"
            : "purple";
        playTestInstrument(nextColor);
        return nextColor;
      }
      return color;
    });
    setSquares(colorSquareArr);
  }

  const addSquare = () => {
    const newColor = "teal";
    setSquares([...squares, newColor]);
  };

  function playTestInstrument(color) {
    const soundMap = {
      purple: [61], //C#3
      aqua: [62], //D3
      gold: [65], //F3
      orange: [71], //B3
      teal: [88], //E6
    };
    console.log(
      `Playing sound with instrument ID: ${instrument}, Note: ${soundMap[color]}`
    );
    midiSounds.current.playChordNow(instrument, soundMap[color], 2.5);
  }
  const selectInstrument = (newInstrument, volume) => {
    console.log(`Selected instrument: ${newInstrument}, Volume: ${volume}`);
    setInstrumentVolume(volume);

    setInstrument(newInstrument);

    // midiSounds.current.playChordNow(newInstrument, [60], 2.5);
  };

  return (
    <div>
      {/* instrument selector */}
      <select onChange={(e) => selectInstrument(Number(e.target.value))}>
        <option value="22">Electric Grand Piano</option>
        <option value="44">Electric Piano 1 Deeper</option>
        <option value="129">Marimba</option>
        <option value="111">Music Box</option>
        <option value="99">Glockenspiel: TinkerBell</option>
      </select>
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
        <button onClick={addSquare}>Add Square</button>
        <MIDISounds
          ref={midiSounds}
          appElementName="root"
          instruments={[22, 44, 129, 111, 99]}
        />
      </div>
    </div>
  );
};

export default Square;

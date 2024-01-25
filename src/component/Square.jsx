import { useState } from "react";
import "../App.css";

const Square = () => {
  const [squares, setSquares] = useState(["blueviolet", "aqua", "gold"]);

  function handleSquareClick(index) {
    const colorSquareArr = squares.map((color, i) => {
      if (i === index)
        return color === "blueviolet"
          ? "aqua"
          : color === "aqua"
          ? "gold"
          : "blueviolet";

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
    </div>
  );
};

export default Square;

import { useState } from "react";
import "./App.css";
import boxes from "./boxes";
import Box from "./Box";

function App() {
  const [squares, setSquares] = useState(boxes);
  function toggle(id) {
    setSquares((prevSquares) => {
      return prevSquares.map((square) => {
        return square.id === id ? { ...square, on: !square.on } : square;
      });
    });
  }
  const boxElems = squares.map((square) => (
    <Box
      key={square.id}
      id={square.id}
      on={square.on}
      toggle={() => toggle(square.id)}
    />
  ));
  return (
    <div>
      <h1>Hello</h1>
      <h1>{boxElems}</h1>
    </div>
  );
}

export default App;

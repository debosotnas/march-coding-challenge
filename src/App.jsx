import { useState } from 'react';
import Square from './Square';

const SQUARES_GRID_SIDE = 15;
export const BASE_COLOR = 'bg-blue-700';
export const ALT_COLOR = 'bg-red-700';
export const GREEN_COLOR = 'bg-green-700';

function createRow(numPerRow, color) {
  return new Array(numPerRow).fill(color);
}

function createSquare(sideAmount, color) {
  return new Array(sideAmount).fill(createRow(sideAmount, color));
}

function getSquareColor({
  selectedColorCol,
  selectedColorRow,
  idxCol,
  idxRow,
}) {
  let baseColor =
    idxCol === selectedColorCol && idxRow === selectedColorRow
      ? ALT_COLOR
      : BASE_COLOR;

  if (
    (idxCol - 1 === selectedColorCol && idxRow === selectedColorRow) ||
    (idxCol - 1 < 0 &&
      selectedColorCol === SQUARES_GRID_SIDE - 1 &&
      selectedColorRow + 1 === idxRow)
  ) {
    baseColor = GREEN_COLOR;
  }

  return baseColor;
}

function App() {
  const square = createSquare(SQUARES_GRID_SIDE, BASE_COLOR);

  const [selectedSquare, setSelectedSquare] = useState([]);

  return (
    <div className='container flex justify-center m-10'>
      {square.map((squresRow, idxCol) => {
        return (
          <div key={idxCol} className=''>
            {squresRow.map((color, idxRow) => {
              const [selectedColorCol, selectedColorRow] = selectedSquare;

              const currSquareColor = getSquareColor({
                selectedColorCol,
                selectedColorRow,
                idxRow,
                idxCol,
              });

              return (
                <Square
                  key={idxRow}
                  color={currSquareColor}
                  coorCol={idxCol}
                  coorRow={idxRow}
                  setSelectedSquare={setSelectedSquare}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

export default App;

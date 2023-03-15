import { useState } from 'react';
import { ALT_COLOR, BASE_COLOR } from './App';

function Square({ color, setSelectedSquare, coorCol, coorRow }) {
  console.log('>> coorCol, coorRow : ', coorCol, coorRow, ' - color:', color);

  const handleUpdateColor = () => {
    setSelectedSquare([coorCol, coorRow]);
  };

  return (
    <div
      onClick={handleUpdateColor}
      className={`${color} w-20 h-20 my-1 mr-1 cursor-pointer`}
    ></div>
  );
}

export default Square;

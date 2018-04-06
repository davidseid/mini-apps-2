import React, { Component } from 'react';
import Square from './Square.js';

const Row = ({size, rowNum, revealSquare}) => {
  let squares = [];
  for (let i = 0; i < size; i++) {
    squares.push(<Square rowNum={rowNum} colNum={i} revealSquare={revealSquare} />)
  }

  return (
    <div className="Row">
      {squares}
    </div>
  )
}

export default Row;

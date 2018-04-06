import React, { Component } from 'react';
import Square from './Square.js';

const Row = ({row, rowNum, revealSquare}) => {
  let squares = [];
  for (let i = 0; i < row.length; i++) {
    squares.push(<Square state={row[i]} rowNum={rowNum} colNum={i} revealSquare={revealSquare} />)
  }

  return (
    <div className="Row">
      {squares}
    </div>
  )
}

export default Row;

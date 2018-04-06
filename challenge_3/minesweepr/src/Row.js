import React, { Component } from 'react';
import Square from './Square.js';

const Row = ({size}) => {
  let squares = [];
  for (let i = 0; i < size; i++) {
    squares.push(<Square colNum={i} />)
  }

  return (
    <div className="Row">
      {squares}
    </div>
  )
}

export default Row;

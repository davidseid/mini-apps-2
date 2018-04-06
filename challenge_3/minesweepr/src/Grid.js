import React, { Component } from 'react';
import Row from './Row.js';

const Grid = ({size, revealSquare}) => {
  
  let rows = [];
  for (let i = 0; i < size; i++) {
    rows.push(<Row size={size} rowNum={i} revealSquare={revealSquare} />);
  }

  return (
    <div className="Grid">
      {rows}
    </div>
  )
}

export default Grid;

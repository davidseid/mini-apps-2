import React, { Component } from 'react';
import Row from './Row.js';

const Grid = ({size, grid, revealSquare}) => {
  
  let rows = [];
  for (let i = 0; i < grid.length; i++) {
    let row = grid[i]
    rows.push(<Row row={row} rowNum={i} revealSquare={revealSquare} />);
  }

  return (
    <div className="Grid">
      {rows}
    </div>
  )
}

export default Grid;

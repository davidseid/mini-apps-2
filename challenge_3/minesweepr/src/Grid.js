import React, { Component } from 'react';
import Row from './Row.js';

const Grid = ({size}) => {
  
  let rows = [];
  for (let i = 0; i < size; i++) {
    rows.push(<Row size={size} rowNum={i} />);
  }

  console.log(rows);

  return (
    <div className="Grid">
      {rows}
    </div>
  )
}

export default Grid;

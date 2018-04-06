import React, { Component } from 'react';

const Square = ({rowNum, colNum, revealSquare}) => {
  return (
    <div className="Square" onClick={() => {revealSquare(rowNum, colNum)}}>
    </div>
  )
}

export default Square;

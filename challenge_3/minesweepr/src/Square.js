import React, { Component } from 'react';

const Square = ({state, rowNum, colNum, revealSquare}) => {
  if (state === 'hidden' || state === 'bomb') {
    return (
      <div className="hidden-square" onClick={() => {revealSquare(rowNum, colNum)}}>
      </div>
    )
  } else if (state === 'safe') {
    return (
      <div className="safe-square">
      </div>
    )
  } 
}

export default Square;

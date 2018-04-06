import React, { Component } from 'react';

const Square = ({isHidden, isBomb, nearbyBombs, rowNum, colNum, revealSquare}) => {
  if (isHidden || isBomb) {
    return (
      <div className="hidden-square" onClick={() => {revealSquare(rowNum, colNum)}}>
      </div>
    )
  } else if (!isBomb) {
    return (
      <div className="safe-square">
        {nearbyBombs}
      </div>
    )
  } 
}

export default Square;

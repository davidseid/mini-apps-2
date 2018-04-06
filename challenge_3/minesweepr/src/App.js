import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Grid from './Grid.js';

class App extends Component {
  constructor(props) {
    super(props)

    const grid = []
    for (let i = 0; i < 10; i++) {
      let row = [];
      for (let j = 0; j < 10; j++) {
        row.push('safe');
      }
      grid.push(row);
    }

    const mineCoordinates = [];
    
    // refactor to make sure there are no duplicate mines
    for (let i = 0; i < 10; i++) {
      mineCoordinates.push([Math.floor(Math.random() * 9), Math.floor(Math.random() * 9)]);
    }

    for (let i = 0; i < mineCoordinates.length; i++) {
      let bomb = mineCoordinates[i];
      let bombx = bomb[0];
      let bomby = bomb[1];
      grid[bombx][bomby] = 'bomb';
    }


    this.state = {
      numMines: 10,
      mineCoordinates: mineCoordinates,
      grid: grid
    }
  }

  revealSquare(rowNum, colNum) {
    
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Minesweeper</h1>
        </header>
        <div className="App-intro">
          <Grid size={10} 
                numMines={10} 
                mineCoordinates={this.state.mineCoordinates}
                revealSquare={this.revealSquare.bind(this)}
          />
        </div>
      </div>
    );
  }
}

export default App;

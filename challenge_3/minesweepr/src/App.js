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
        row.push({
          isHidden: true,
          isBomb: false,
          nearbyBombs: 0
        });
      }
      grid.push(row);
    }

    const mineCoordinates = [];
    
    // refactor to make sure there are no duplicate mines
    for (let i = 0; i < 20; i++) {
      mineCoordinates.push([Math.floor(Math.random() * 9), Math.floor(Math.random() * 9)]);
    }

    for (let i = 0; i < mineCoordinates.length; i++) {
      let bomb = mineCoordinates[i];
      let bombx = bomb[0];
      let bomby = bomb[1];
      grid[bombx][bomby].isBomb = true;
    }

    for (let i = 0; i < mineCoordinates.length; i++) {
      let bombLocation = mineCoordinates[i];
      let bombx = bombLocation[0];
      let bomby = bombLocation[1];
      for (let j = -1; j <= 1; j++) {
        for (let k = -1; k <= 1; k++) {
          if (grid[bombx + j]) {
            if (grid[bombx + j][bomby + k]) {
              if (grid[bombx + j][bomby + k].isBomb === false) {
                grid[bombx + j][bomby + k].nearbyBombs++;
              }
            }
          }
        }
      }
    }


    this.state = {
      numMines: 10,
      mineCoordinates: mineCoordinates,
      grid: grid,
      gameState: 'play'
    }
  }

  revealSquare(row, col) {
    if (this.state.grid[row][col].isHidden) {
      let newGrid = this.state.grid;
      newGrid[row][col].isHidden = false;

      if (this.state.grid[row][col].nearbyBombs === 0) {
        for (let j = -1; j <= 1; j++) {
          for (let k = -1; k <= 1; k++) {
            if (this.state.grid[row + j]) {
              if (this.state.grid[row + j][col + k]) {
                this.revealSquare(row + j, col + k);
              }
            }
          }
        }
      }

      this.setState({
        grid: newGrid
      })
    }
    
    if (this.state.grid[row][col].isBomb) {
      console.log('bomb!!!!')
      this.setState({
        gameState: 'lose'
      })
    }
  }

  render() {
    if (this.state.gameState === 'play') {
      return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Minesweeper</h1>
          </header>
          <div className="App-intro">
            <Grid size={10} 
                  grid={this.state.grid}
                  numMines={10} 
                  mineCoordinates={this.state.mineCoordinates}
                  revealSquare={this.revealSquare.bind(this)}
            />
          </div>
        </div>
      );
    } else if (this.state.gameState === 'lose') {
      return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Minesweeper</h1>
          </header>
          <div className="App-intro">
            <Grid size={10} 
                  grid={this.state.grid}
                  numMines={10} 
                  mineCoordinates={this.state.mineCoordinates}
                  revealSquare={this.revealSquare.bind(this)}
            />
          </div>
          <div>
            GAME OVER
          </div>
        </div>
      );
    }
  }
}

export default App;

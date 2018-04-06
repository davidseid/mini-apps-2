import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Grid from './Grid.js';

class App extends Component {
  constructor(props) {
    super(props)

    const mineCoordinates = [];
    
    // refactor to make sure there are no duplicate mines
    for (let i = 0; i < 10; i++) {
      mineCoordinates.push([Math.floor(Math.random() * 9), Math.floor(Math.random() * 9)]);
    }

    this.state = {
      numMines: 10,
      mineCoordinates: mineCoordinates 
    }
  }

  revealSquare(rowNum, colNum) {
    console.log(rowNum, colNum);
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

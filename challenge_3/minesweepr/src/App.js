import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Grid from './Grid.js';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }



  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Minesweeper</h1>
        </header>
        <div className="App-intro">
          <Grid size={10}/>
        </div>
      </div>
    );
  }
}

export default App;

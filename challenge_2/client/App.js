import React from 'react';

import Home from './Home.js';
import Form1 from './Form1.js';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      checkoutStage: 0
    }
  }

  getNextForm() {
    console.log('clicked');
    this.setState({
      checkoutStage: this.state.checkoutStage + 1
    })
  }

  render() {
    if (this.state.checkoutStage === 0) {
      return (
        <div>
          <Home getNextForm={this.getNextForm.bind(this)} />
        </div>
      )
    }
    if (this.state.checkoutStage === 1) {
      return (
        <div>
          <Form1 getNextForm={this.getNextForm.bind(this)} />
        </div>
      )
    }
  }
}

export default App;
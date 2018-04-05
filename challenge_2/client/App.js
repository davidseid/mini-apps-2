import React from 'react';

import Home from './Home.js';
import Form1 from './Form1.js';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      checkoutStage: 'home'
    }
  }

  render() {
    if (this.state.checkoutStage === 'home') {
      return (
        <div>
          <Home />
        </div>
      )
    }
    if (this.state.checkoutStage === 'form1') {
      return (
        <div>
          <Form1/>
        </div>
      )
    }
  }
}

export default App;
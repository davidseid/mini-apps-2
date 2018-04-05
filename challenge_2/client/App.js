import React from 'react';

import Home from './Home.js';
import Form1 from './Form1.js';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <div>
        <Home />
        <Form1 />
      </div>
    )
  }
}

export default App;
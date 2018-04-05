import React from 'react';
import axios from 'axios';

import Home from './Home.js';
import Form1 from './Form1.js';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      checkoutStage: 0,
      purchaseInfo: {}
    }
  }

  getNextForm() {
    this.savePurchase(this.purchaseInfo)
    this.setState({
      checkoutStage: this.state.checkoutStage + 1
    })
  }

  updatePurchaseInfo() {
  }

  savePurchase(data) {
    axios.post('/purchases', data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
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
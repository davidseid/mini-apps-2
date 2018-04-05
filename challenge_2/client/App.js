import React from 'react';
import axios from 'axios';

import Home from './Home.js';
import Form1 from './Form1.js';
import Form2 from './Form2.js';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      checkoutStage: 0,
      purchaseInfo: {}
    }
  }

  updatePurchaseInfo(data) {
    const updatedPurchaseInfo = this.state.purchaseInfo;
    for (let key in data) {
      updatedPurchaseInfo[key] = data[key];
    }
    console.log(updatedPurchaseInfo);
    this.savePurchase(updatedPurchaseInfo);

    this.setState({
      purchaseInfo: updatedPurchaseInfo,
      checkoutStage: this.state.checkoutStage + 1
    })
  }

  savePurchase(data) {
    axios.post('/purchases', data)
      .then((res) => {
        console.log(res.body);
      })
      .catch((err) => {
        console.error(err);
      })
  }

  render() {
    if (this.state.checkoutStage === 0) {
      return (
        <div>
          <Home updatePurchaseInfo={this.updatePurchaseInfo.bind(this)} />
        </div>
      )
    }
    if (this.state.checkoutStage === 1) {
      return (
        <div>
          <Form1 updatePurchaseInfo={this.updatePurchaseInfo.bind(this)} />
        </div>
      )
    }
    if (this.state.checkoutStage === 2) {
      return (
        <div>
          <Form2 updatePurchaseInfo={this.updatePurchaseInfo.bind(this)} />
        </div>
      )
    }
  }
}

export default App;
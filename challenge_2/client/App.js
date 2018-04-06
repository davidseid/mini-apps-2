import React from 'react';
import axios from 'axios';

import Home from './Home.js';
import Form1 from './Form1.js';
import Form2 from './Form2.js';
import Form3 from './Form3.js';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      checkoutStage: 0,
      purchaseInfo: {}
    }
  }

  updatePurchaseInfo(key, value) {
    const updatedPurchaseInfo = this.state.purchaseInfo;
    updatedPurchaseInfo[key] = value;
    this.setState({
      purchaseInfo: updatedPurchaseInfo
    })
  }

  changeForm() {
    this.savePurchase(this.state.purchaseInfo);

    let nextStage;
    
    if (this.state.checkoutStage === 3) {
      nextStage = 0;
    } else {
      nextStage = this.state.checkoutStage + 1;
    }

    this.setState({
      checkoutStage: nextStage
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
          <Home changeForm={this.changeForm.bind(this)} />
        </div>
      )
    }
    if (this.state.checkoutStage === 1) {
      return (
        <div>
          <Form1 changeForm={this.changeForm.bind(this)} updatePurchaseInfo={this.updatePurchaseInfo.bind(this)} />
        </div>
      )
    }
    if (this.state.checkoutStage === 2) {
      return (
        <div>
          <Form2 changeForm={this.changeForm.bind(this)} updatePurchaseInfo={this.updatePurchaseInfo.bind(this)} />
        </div>
      )
    }
    if (this.state.checkoutStage === 3) {
      return (
        <div>
          <Form3 changeForm={this.changeForm.bind(this)} updatePurchaseInfo={this.updatePurchaseInfo.bind(this)} />
        </div>
      )
    }
  }
}

export default App;
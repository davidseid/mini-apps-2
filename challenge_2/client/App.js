import React from 'react';
import axios from 'axios';

import Home from './Home.js';
import Form1 from './Form1.js';
import Form2 from './Form2.js';
import Form3 from './Form3.js';
import Confirmation from './Confirmation.js';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      checkoutStage: 0,
      purchaseInfo: {
        purchaseID: 0
      },
    }
  }

  //each time checkout is clicked it creates a new record
  //each time next is clicked it updates that record

  updatePurchaseInfo(key, value) {
    const updatedPurchaseInfo = this.state.purchaseInfo;
    updatedPurchaseInfo[key] = value;
    this.setState({
      purchaseInfo: updatedPurchaseInfo
    })
  }

  // createPurchase() {
  //   // this function should be invoked when checkout is clicked
  //   // it should create a record in the database with a purchase ID
  // }

  changeForm() {
    this.savePurchase(this.state.purchaseInfo);

    let nextStage;
    let nextPurchaseNumber;
    
    if (this.state.checkoutStage === 4) {
      nextPurchaseNumber = this.state.purchaseInfo.purchaseID + 1;
      this.setState({
        checkoutStage: 0,
        purchaseInfo: {
          purchaseID: nextPurchaseNumber
        }
      })
    } else {
      nextStage = this.state.checkoutStage + 1;
      nextPurchaseNumber = this.state.purchaseInfo.purchaseID;
      this.setState({
        checkoutStage: nextStage,
      })
    }
  }

  // updatePurchaseInfo(id) {
  //   // this function should replace save purchase
  //   // it should take the current purchaseID 
  // }

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
    if (this.state.checkoutStage === 4) {
      return (
        <div>
          <Confirmation changeForm={this.changeForm.bind(this)} purchaseInfo={this.state.purchaseInfo}/>
        </div>
      )
    }
  }
}

export default App;
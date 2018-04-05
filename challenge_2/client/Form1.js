import React from 'react';

import Input from './Input.js';

class Form1 extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      formData: {}
    }
  }

  render() {
    return (
      <div>
        <h3>Form 1</h3>
        <Input fieldName={'name'}  updatePurchaseInfo={this.props.updatePurchaseInfo}/>
        <Input fieldName={'email'}  updatePurchaseInfo={this.props.updatePurchaseInfo} />
        <Input fieldName={'password'} updatePurchaseInfo={this.props.updatePurchaseInfo} />
        <button onClick={() => {this.props.changeForm()}}>Next</button>
      </div>
    )
  }
  // ({changeForm, updatePurchaseInfo}) => {
}

export default Form1;
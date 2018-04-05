import React from 'react';

import Input from './Input.js';

class Form1 extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      formData: {}
    }
  }

  getFormData(key, value) {
    const newFormData = this.state.formData;
    newFormData[key] = value;
    this.setState({
      formData: newFormData
    })
  }

  render() {
    return (
      <div>
        <h3>Form 1</h3>
        <Input fieldName={'name'} getFormData={this.getFormData.bind(this)} />
        <Input fieldName={'email'} getFormData={this.getFormData.bind(this)} />
        <Input fieldName={'password'} />
        <button onClick={() => {props.changeForm()}}>Next</button>
      </div>
    )
  }
  // ({changeForm, updatePurchaseInfo}) => {
}

export default Form1;
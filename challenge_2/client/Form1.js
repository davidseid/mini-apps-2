import React from 'react';

import Input from './Input.js';

const Form1 = ({updatePurchaseInfo}) => {
  return (
    <div>
      <h3>Form 1</h3>
      <Input fieldName={'name'} />
      <Input fieldName={'email'} />
      <Input fieldName={'password'} />
      <button onClick={() => {updatePurchaseInfo({name: 'David'})}}>Next</button>
    </div>
  )
}

export default Form1;
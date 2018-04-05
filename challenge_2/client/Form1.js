import React from 'react';

import Input from './Input.js';

const Form1 = ({updatePurchaseInfo, changeForm}) => {
  return (
    <div>
      <h3>Form 1</h3>
      <Input fieldName={'name'}  updatePurchaseInfo={updatePurchaseInfo}/>
      <Input fieldName={'email'}  updatePurchaseInfo={updatePurchaseInfo} />
      <Input fieldName={'password'} updatePurchaseInfo={updatePurchaseInfo} />
      <button onClick={() => {changeForm()}}>Next</button>
    </div>
  )
}

export default Form1;
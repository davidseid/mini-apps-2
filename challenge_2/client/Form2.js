import React from 'react';

import Input from './Input.js';

const Form2 = ({updatePurchaseInfo, changeForm}) => {
  return (
    <div>
      <h3>Form 2</h3>
      <Input fieldName={'line1'}  updatePurchaseInfo={updatePurchaseInfo}/>
      <Input fieldName={'line2'}  updatePurchaseInfo={updatePurchaseInfo} />
      <Input fieldName={'city'} updatePurchaseInfo={updatePurchaseInfo} />
      <Input fieldName={'state'} updatePurchaseInfo={updatePurchaseInfo} />
      <Input fieldName={'zip'} updatePurchaseInfo={updatePurchaseInfo} />
      <button onClick={() => {changeForm()}}>Next</button>
    </div>
  )
}

export default Form2;
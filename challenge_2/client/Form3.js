import React from 'react';

import Input from './Input.js';

const Form3 = ({updatePurchaseInfo, changeForm}) => {
  return (
    <div>
      <h3>Form 3</h3>
      <Input fieldName={'creditcard'}  updatePurchaseInfo={updatePurchaseInfo}/>
      <Input fieldName={'expiry'}  updatePurchaseInfo={updatePurchaseInfo} />
      <Input fieldName={'cvv'} updatePurchaseInfo={updatePurchaseInfo} />
      <Input fieldName={'billzip'} updatePurchaseInfo={updatePurchaseInfo} />
      <button onClick={() => {changeForm()}}>Next</button>
    </div>
  )
}

export default Form3;
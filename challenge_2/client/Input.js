import React from 'react';

const Input = ({fieldName, getFormData, updatePurchaseInfo}) => {
  return (
    <div>
      {fieldName}
      <input onChange={(e) => updatePurchaseInfo(fieldName, e.target.value)} ></input>
    </div>
  )
}

export default Input;
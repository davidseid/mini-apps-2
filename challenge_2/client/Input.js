import React from 'react';

const Input = ({fieldName, getFormData}) => {
  return (
    <div>
      {fieldName}
      <input onChange={(e) => {getFormData(fieldName, e.target.value)}}></input>
    </div>
  )
}

export default Input;
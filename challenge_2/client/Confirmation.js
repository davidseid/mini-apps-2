import React from 'react';


const Confirmation = ({changeForm}) => {
  return (
    <div>
      <h3>Confirmation</h3>
      <button onClick={() => {changeForm()}}>Purchase</button>
    </div>
  )
}

export default Confirmation;
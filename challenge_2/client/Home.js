import React from 'react';

const Home = ({changeForm}) => {
  return (
    <div>
      <button onClick={() => {changeForm()}}>Checkout</button>
    </div>
  )
}

export default Home;
import React from 'react';

const Home = ({getNextForm}) => {
  return (
    <div>
      <button onClick={() => {getNextForm()}}>Checkout</button>
    </div>
  )
}

export default Home;
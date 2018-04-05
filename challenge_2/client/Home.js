import React from 'react';

const Home = ({updatePurchaseInfo}) => {
  return (
    <div>
      <button onClick={() => {updatePurchaseInfo()}}>Checkout</button>
    </div>
  )
}

export default Home;
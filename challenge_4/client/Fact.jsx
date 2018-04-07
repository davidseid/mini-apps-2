import React from 'react';

const Fact = ({data}) => {
  return (
    <div>
      Date: {data.date}
      <br/>
      Description: {data.description}
      <br/>
      <br/>
    </div>
  )
}

export default Fact;
import React from 'react';
import Fact from './Fact.jsx';

const Facts = ({data}) => {
  return (
    <div>
      {data.map((fact) => {
        return <Fact data={fact}/>
      })}
    </div>
  )
}

export default Facts;
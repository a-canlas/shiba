import React from 'react';

const ShibaCard = props => {
  return (
    <div className="card">
      <img src={props.picture} alt="shiba inu dog"/>
      <div className="container">
        Shiba pics to make you smile
      </div>
    </div>
  )
}

export default ShibaCard;

import React from 'react';

const Card = (props)=>{
  let {img,name,occupation,portrayed} =props;
  if(occupation.length>1){
    occupation = occupation.splice(0,1);
  }
  return(
    <div>
      <div className="card">
        <img className="card__image" src={img} alt="character"/>
        <div className="card__body">
            <h2 className="card__title">{name}</h2>
            <p className="card__occupation">Occupation : {occupation}</p>
            <p className="card__portrayer">Portrayed By : {portrayed}</p>
        </div>
      </div>
    </div>
  )
}

export default Card;
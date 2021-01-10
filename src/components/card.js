import React from 'react';
import {Link} from 'gatsby';
import '../sass/main.scss';

const Card = (props)=>{



  let {img,name,occupation,portrayed} =props;
  if(occupation.length>1){
    occupation = occupation.splice(0,1);
  }
  return(
    <div>
      <Link className="link" to={`/characters/${props.char_id}`}>
        <div className="card">
        <img className="card__image" src={img} alt="character"/>
        <div className="card__body">
            <h2 className="card__title">{name}</h2>
            <p className="card__occupation">Occupation : {occupation}</p>
            <p className="card__portrayer">Portrayed By : {portrayed}</p>
        </div>
      </div>
      </Link>
    </div>
  )
}

export default Card;
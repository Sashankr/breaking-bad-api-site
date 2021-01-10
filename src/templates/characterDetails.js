import React from 'react';
import Layout from '../components/layout';

const CharacterDetails = ({pageContext})=>{
  const {charDetails} = pageContext;

  return(
    <Layout>
      <div>
        <h1>{charDetails.name}</h1>
        <p>Occupation : {charDetails.occupation}</p>
        <p>Birthday : {charDetails.birthday}</p>
        <p>Portrayed By : {charDetails.portrayed}</p>
        <img src={charDetails.img} alt={charDetails.name}/>
      </div>
    </Layout>
  )

}

export default CharacterDetails;
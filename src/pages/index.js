import React from "react"
import Layout from '../components/layout';
import Card from '../components/card';
import {graphql} from 'gatsby';
import '../sass/main.scss';


const Home = ({data})=>{
  return(
    <Layout>
      <h1>Breaking Bad Characters</h1>
      <div className="cards">
        {(data.allCustomApi.nodes).map((characterData)=>{
          return <Card key={characterData.id} {...characterData}/>
        })}
      </div>
    </Layout>
  )
}


export const query = graphql`
query{
    allCustomApi{
    nodes{
      img,name,occupation,portrayed,id
    }
  }
}

`

export default Home;
import React,{ useState, useEffect } from "react"
import Layout from '../components/layout';
import Pagination from '../components/pagination';
import Card from '../components/card';
import {graphql} from 'gatsby';
import '../sass/main.scss';


const Home = ({data})=>{

  const [heading,setHeading] = useState("Breaking Bad Characters");
  const [betterCallSaul,setBetterCallSaul] = useState(false);
  const [cards,setCards] = useState([]);
  const [currentPage,setCurrentPage] = useState(1);
  const [cardsPerPage] = useState(6);

    useEffect(()=>{
      setCards(data.allCustomApi.nodes);
  },[data]);
  console.log(cards);


  // Get Current Posts
  const indexOfLastCard = currentPage*cardsPerPage; 
  const indexOfFirstCard = indexOfLastCard- cardsPerPage;
  const currentCards = cards.slice(indexOfFirstCard,indexOfLastCard);

  const filters =()=>{
    if(betterCallSaul===false){
              return(
                <div className="cards">     
            {(currentCards).map((characterData)=>{
              return <Card  key={characterData.char_id} {...characterData}/>
            })}
            </div>
              )
    }

    else{
              
            return(
                <div className="cards">     
            {(data.allCustomApi.nodes).map((characterData)=>{
              if(characterData.better_call_saul_appearance.length>0){
                return <Card  key={characterData.char_id} {...characterData}/>
              }
              return "";
            })}
            </div>
              )
            }
  }

  const paginate = (pageNumber)=> {
    setCurrentPage(pageNumber);
    return false;
  }; 
  return(
    <Layout>
      <h1 className="title">{heading}</h1>
      <span style={{marginRight:"10px"}}>Filters:</span>
      <button className="btn" onClick={()=>{setBetterCallSaul(true);setHeading("Better Call Saul Characters")}}>Better Call Saul</button>
      <button className="btn" onClick={()=>{setBetterCallSaul(false);setHeading("Breaking Bad Characters")}}>Breaking Bad</button>
      {filters()}
      <Pagination cardsPerPage={cardsPerPage} totalCards={data.allCustomApi.nodes.length} paginate={paginate}/>
    </Layout>
  )
}


export const query = graphql`
query{
    allCustomApi{
    nodes{
      img,name,occupation,portrayed,id,char_id,better_call_saul_appearance
    }
  }
}

`

export default Home;
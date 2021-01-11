import React from 'react'
import Layout from './layout';

const Pagination = ({cardsPerPage, totalCards,paginate})=>{
  const pageNumber = [];

  for(let i=1;i<=Math.ceil(totalCards/cardsPerPage);i++){
    pageNumber.push(i);
  }

  return(
    <Layout>
          <div>
      <ul className="pagination">
            <span className="pagination__title">Pages: </span>
        {pageNumber.map(number =>(
          <li className="pagination__item" key={number}>
             <a href="!#" onClick={(e)=>{paginate(number);e.preventDefault()}} className="pagination__link">
               {number}
             </a>
          </li>
        ))}
      </ul>
    </div>
    </Layout>
  )
}

export default Pagination;
import React from 'react'

export default function Pagination({ postsPerPage, totalPosts, paginate }) {
    const pageNumbers =[];
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
      }    
    return (
        <React.Fragment>
            <ul id="pageNumberContent" class="pages">
          
            {pageNumbers.map(number =>(
              
                       <li id="pageNumber"  key={number}>  <a class="select" onClick={() => paginate(number)} >
              {number}
            </a></li>
              
            ))}  	
            </ul>        
        </React.Fragment>
    )
}

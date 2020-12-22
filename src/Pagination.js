import React from 'react'

export default function Pagination({postsPerPage, totalPosts, paginate}) {
    const pageNumbers =[];
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
      }    
    return (
        <React.Fragment>
            <ul id="pageNumberContent" class="pages">     
            {pageNumbers.map(number =>(
               <li id="pageNumber"  key={number}>  <a className={`${(number==1) ? "select": ""}`} onClick={() => paginate(number)}  style={{cursor:'pointer '}}>
              {number}
            </a></li>
            ))}  	
            </ul>        
        </React.Fragment>
    )
}
import React from 'react'

const Pagination = ({postPerPage, totalPosts, setCurrentPage }) => {
    const pageNUmbers = [];

    for(let i=1;i<=Math.ceil(totalPosts/postPerPage);i++){
        pageNUmbers.push(i);
    }

  return (
    <nav>
      <ul className='flex flex-wrap'>
        {pageNUmbers.map(num=>(
            <li className='m-2' key={num}>
                <a onClick={()=>setCurrentPage(num)}>{num}</a>
            </li>
        ))}
      </ul>
    </nav>
  )
}

export default Pagination;

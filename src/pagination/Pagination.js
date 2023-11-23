import React from 'react'

const Pagination = ({nPages, currentPage, setCurrentPage}) => {
    const pagrNumbers = [...Array(nPages + 1).keys()].slice(1);
    console.log(pagrNumbers)
  return (
   <ul className='flex'>
      {
        pagrNumbers.map((pgnum)=>(
          <li key={pgnum} className='m-2 cursor-pointer' onClick={()=>setCurrentPage(pgnum)}>
          
{pgnum}
         
          </li>
        ))
      } 
   </ul>
  )
}

export default Pagination

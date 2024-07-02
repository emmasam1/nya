import React from 'react'
import { Link } from 'react-router-dom'

const Pagination = ({blogs,currentPage, pageSize,onPageChange}) => {
    const totalPage = Math.ceil(blogs.length / pageSize)
   const renderPaginationLinks =()=>{
    //const pages = [...Array(totalPage).keys()]
    return Array.from({length: totalPage}, (_, i) => i + 1).map((pageNumber) =>(
        <li key={pageNumber} className={pageNumber === currentPage ? "activePagination" : ""}>
            <Link className="page-link" onClick={()=>onPageChange(pageNumber)}>{pageNumber}</Link>
        </li>
    ))
   }
  return (
        <ul className='pagination my-8 flex flex-wrap gap-4'>
            <li>
                <button onClick={()=> onPageChange(currentPage - 1)} disabled={currentPage === 1}>Previous</button>
            </li>
            <div className='flex gap-1'>{renderPaginationLinks()}</div>
            <li><button onClick={()=> onPageChange(currentPage +1)} disabled={currentPage === totalPage}>Next</button></li>
        </ul>
  )
}

export default Pagination
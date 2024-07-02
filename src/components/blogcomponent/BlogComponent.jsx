import React, { useEffect, useState } from 'react'
import BlogCards from '../card/BlogCards'
import Pagination from '../pagination/Pagination'
import CategorySelection from '../category/CategorySelection'

const BlogComponent = () => {
    const [blogs, setBlogs] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const pageSize = 10 //10 articles per page
    const [selectedCategory, setSelectedCategory] = useState(null)
    const [activeCategory, setActiveCategory] = useState(null)

    useEffect(()=>{
        async function fetchBlogs(){
            let url= `http://localhost:5000/blogs?page=${currentPage}&limit=${pageSize}`

            //filter by category
            if(selectedCategory){
                url += `&category=${selectedCategory}`;
            }
            const response = await fetch(url);
            const data = await response.json();
           // console.log(data)
            setBlogs(data)
        }
        fetchBlogs()
    },[currentPage, pageSize, selectedCategory])

    //page changing btn
    const handlePageChange = (pageNumber)=>{
        setCurrentPage(pageNumber)
    }
    const handleCategoryChange =(category)=>{
        setSelectedCategory(category)
        setCurrentPage(1)
        setActiveCategory(category)
    }
  return (
    <div>
        {/* category */}
        <div>
            <CategorySelection
             onSelectCategory={handleCategoryChange}
            selectedCategory={selectedCategory}
            activeCategory={activeCategory}
             />
        </div>

        {/* blog cards */}
        <div>
            <BlogCards 
                blogs={blogs} 
                currentPage={currentPage}
                selectedCategory={selectedCategory} 
                pageSize={pageSize}
             />
        </div>

        {/* pagination */}
        <div>
            <Pagination
               blogs={blogs} 
               currentPage={currentPage}
               pageSize={pageSize}
               onPageChange={handlePageChange}
            />
        </div>
    </div>
  )
}

export default BlogComponent
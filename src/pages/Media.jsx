import React from 'react'
import BlogComponent from '../components/blogcomponent/BlogComponent'

const Media = () => {
  return (
    <div>
      <div className='py-40 bg-gradient-to-r from-black via-gray-800 to-gray-900 px-4 text-center text-white'>
        <h2 className='text-5xl lg:text-7xl leading-snug font-bold mb-5'>Welcome to our media page</h2>
      </div>
      <div className="max-w-7xl mx-auto">
        <BlogComponent />
      </div>
    </div>
  )
}

export default Media
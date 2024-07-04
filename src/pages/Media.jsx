import React from 'react';
import BlogComponent from '../components/blogcomponent/BlogComponent';
import PageBanner from './PageBanner';

const Media = () => {
  const title= "Welcome to our media page"
  return (
    <div>
      <PageBanner title={title} />
      <div className="max-w-7xl mx-auto">
        <BlogComponent />
      </div>
    </div>
  );
};

export default Media;





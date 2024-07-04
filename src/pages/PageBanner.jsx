import React from 'react'

const PageBanner = ({title, img}) => {
    return (
        <div>
          <div className="relative py-40 bg-gradient-to-r from-black via-gray-800 to-gray-900 px-4 text-center text-white">
            <div className="absolute inset-0 flex items-center justify-center bg-[url('./assets/logo.png')] bg-no-repeat bg-center md:bg-[length:10%] bg-[length:20%] bg-top-1/2 md:bg-top-140px lg:bg-top-200px">
              <div className="w-full h-full bg-opacity-50 bg-black"></div>
            </div>
            <div className="relative z-10">
              <h2 className="text-3xl lg:text-5xl leading-snug font-bold mb-5">
                {title}
              </h2>
            </div>
          </div>
        </div>
      );
}

export default PageBanner
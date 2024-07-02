import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaArrowDown } from "react-icons/fa6";
import banner from "../../assets/images/banner_1.jpg";

const Banner = () => {
  return (
    <div className="top-[72px] relative">
      <div className="h-[500px] w-full ">
        <img
          src={banner}
          alt="Banner"
          className="w-full h-[100%] object-cover"
        />
      </div>

      <div className="px-4 py-32 mx-auto">
        <div className="text-center lg:px-28">
          <h1 className="text-5xl lg:text-7xl leading-snug mb-5 font-medium">
            Welcome to the <span className="text-green-800">National </span>{" "}
            <span>Youth</span> <span className="text-red-600">Alliance</span>{" "}
            official site
          </h1>
          <p className="text-gray-500 text-2xl lg:w-3/5 mx-auto mb-5 font-primary">
            Optimism is our identity, It's Youth 0'Clock Nigerians wake up
          </p>
          <div>
            <Link
              to="/"
              className="group font-medium text-green-800 hover:text-red-600 inline-flex items-center py-1"
            >
              Let's jump to it
              <FaArrowRight className="mt-1 ml-2 transition-transform transform group-hover:rotate-90" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

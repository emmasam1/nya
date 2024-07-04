import React from "react";
import img15 from "../../assets/images/img_15.jpg";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";

const MissionQuote = () => {
  return (
    <div className="mt-20 relative h-80 sm:h-96 md:h-[400px] lg:h-[400px]">
      <img src={img15} alt="" className="object-contain w-full h-full" />
      <div className="absolute top-0 left-0 overLayColor w-full h-full z-10 flex items-center justify-center">
        <div className="relative text-white px-4 sm:px-10 md:px-20 lg:px-40 text-center">
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-2xl max-w-4xl mx-auto relative">
            <span className="absolute -left-4">
              <ImQuotesLeft />
            </span>{" "}
            At the National Youth Alliance, we believe in the power of young
            voices to shape a brighter future. Together, we stand for progress,
            equality, and the relentless pursuit of justice for all. Join us in
            forging a path where every young person has the opportunity to lead,
            innovate, and make a lasting impact on our nation.
            <span className="absolute bottom-0 right-10">
              <ImQuotesRight />
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default MissionQuote;

import React from "react";
import face from "../../assets/images/img_19.png";

const Face = () => {
  return (
    <div className="relative w-full mt-5 ">
      <div className="bg-img-2 w-full h-full absolute"></div>
      <div className="myOverLay"></div>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-8 relative mt-10 m-auto w-11/12">
          <div className="text-white flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-3">National Youth Alliance</h2>
            <p className="text-[1.2rem] text-justify">
              At the National Youth Alliance Party, we are dedicated to
              empowering young voices and fostering a generation of leaders
              committed to progress, equality, and justice. Our mission is to
              create a vibrant platform where the youth can actively participate
              in shaping the future of our nation. We strive to build an
              inclusive society where every young person has the opportunity to
              lead, innovate, and make a meaningful impact. Together, we
              champion the causes that matter most to our generation, advocating
              for policies that promote education, sustainability, and social
              equity. Join us in our pursuit of a brighter, more just world
              where the potential of youth is fully realized and celebrated.
            </p>
          </div>
          <div>
            <img src={face} alt="" className="object-cover"/>
          </div>
        </div>
    </div>
  );
};

export default Face;

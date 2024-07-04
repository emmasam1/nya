import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import Banner from "../components/banner/Banner";
import { Card } from "antd";
import image1 from '../assets/images/img_13.jpg';
import image2 from '../assets/images/img_5.jpg';
import image3 from '../assets/images/img_3.jpg';

const { Meta } = Card;

const Home = () => {
  const data = [
    {
      id: 1,
      image: image1,
      title: "Preparing and folding laundry",
      content:
        "Our caregivers are trained to efficiently handle laundry tasks, including washing, drying, folding, and putting away clothes. We ensure that your loved one's clothes are clean, fresh, and well-organized.",
    },
    {
      id: 2,
      image:image2,
      title: "Taking out the garbage as directed",
      content:
        "Our caregivers can assist with regular garbage disposal according to your specific instructions. Whether it's daily, weekly, or as needed, we ensure that your home remains clean and sanitary.",
    },
    {
      id: 3,
      image:image3,
      title: "Home organization and management",
      content:
        "We help maintain a clutter-free and organized home environment. From arranging items to keeping spaces tidy, our caregivers ensure that everything is in its place.",
    },
  ];

  return (
    <div>
      <Banner />
      <div className="m-auto mt-20 w-11/12 pt-3">
      <div className="m-auto mt-10 mb-10 flex justify-center">
        <h1 className="text-center bg-green-800 rounded-full text-white text-2xl font-semibold font-mono px-5">Latest events / Press release</h1>
      </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {data.map((e) => (
            <Card
              key={e.id}
              hoverable
              className="custom-card" // Apply the custom class
              cover={<img alt="example" src={e.image} style={{ height: 250, objectFit: 'cover' }} />}
            >
              <Meta
                title={e.title}
                description={e.content}
                className="md:pb-5 sm:pb-5 pb-5"
              />
              <Link
                to="/"
                smooth
                duration={500}
                className="group font-medium text-green-800 hover:text-red-600 inline-flex items-center py-1"
              >
                Read more
                <FaArrowRight className="mt-1 ml-2 transition-transform transform group-hover:rotate-90" />
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;

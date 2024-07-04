import React from 'react'
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { Card } from "antd";
import image1 from '../../assets/images/img_13.jpg';
import image2 from '../../assets/images/img_5.jpg';
import image3 from '../../assets/images/img_3.jpg';

const { Meta } = Card;

const Press_release = () => {
    const data = [
        {
          id: 1,
          image: image1,
          title: "Green Jobs Revolution: A Sustainable Future",
          content:
            "Our party champions a green jobs revolution aimed at creating sustainable employment opportunities in renewable energy, conservation, and technology sectors. By investing in green infrastructure and innovation, we ensure a prosperous future while combating climate change.",
        },
        {
          id: 2,
          image:image2,
          title: "Education Equity: Quality Learning for Every Child",
          content:
            "We are committed to ensuring every child receives a quality education, regardless of background or location. Our policies focus on equitable funding, modernizing curriculum, and supporting teachers to prepare students for a rapidly evolving world.",
        },
        {
          id: 3,
          image:image3,
          title: "Healthcare for All: Affordable and Accessible",
          content:
            " Our vision includes a healthcare system that guarantees affordable and accessible care for all citizens. Through reforms that prioritize preventive care, reduce costs, and expand coverage, we aim to improve health outcomes and enhance quality of life nationwide.",
        },
      ];
  return (
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
  )
}

export default Press_release
import React from "react";
import Banner from "../components/banner/Banner";
import { Card } from "antd";
const { Meta } = Card;

const Home = () => {
  const data = [
    {
      id: 1,
      image:
        "https://www.akamai.com/site/im-demo/perceptual-standard.jpg?imbypass=true",
      title: "Preparing and folding laundry",
      content:
        "Our caregivers are trained to efficiently handle laundry tasks, including washing, drying, folding, and putting away clothes. We ensure that your loved one's clothes are clean, fresh, and well-organized.",
    },
    {
      id: 2,
      image:
        "https://www.akamai.com/site/im-demo/perceptual-standard.jpg?imbypass=true",
      title: "Taking out the garbage as directed",
      content:
        "Our caregivers can assist with regular garbage disposal according to your specific instructions. Whether it's daily, weekly, or as needed, we ensure that your home remains clean and sanitary.",
    },
    {
      id: 3,
      image:
        "https://www.akamai.com/site/im-demo/perceptual-standard.jpg?imbypass=true",
      title: "Home organization and management",
      content:
        "We help maintain a clutter-free and organized home environment. From arranging items to keeping spaces tidy, our caregivers ensure that everything is in its place.",
    },
    {
      id: 4,
      image:
        "https://www.akamai.com/site/im-demo/perceptual-standard.jpg?imbypass=true",
      title: "General Cleaning",
      content:
        "Our caregivers can handle various cleaning tasks, such as dusting, vacuuming, mopping, and cleaning bathrooms and kitchens. We strive to create a clean and comfortable living space for your loved one.",
    },
    {
      id: 5,
      image:
        "https://www.akamai.com/site/im-demo/perceptual-standard.jpg?imbypass=true",
      title: "Cooking nutritious meals",
      content:
        "We provide meal preparation services tailored to your loved one's dietary needs and preferences. Our caregivers ensure that your loved one receives delicious and nutritious meals every day.",
    },
    {
      id: 6,
      image:
        "https://www.akamai.com/site/im-demo/perceptual-standard.jpg?imbypass=true",
      title: "Serving it to your comfort",
      content:
        "Our caregivers offer assistance with meal service, ensuring that meals are served at the right time and in a manner that meets your loved one's preferences. We aim to make mealtime enjoyable and stress-free.",
    },
    {
      id: 7,
      image:
        "https://www.akamai.com/site/im-demo/perceptual-standard.jpg?imbypass=true",
      title: "Grocery shopping and general errands ",
      content:
        "We can help with grocery shopping and running general errands, ensuring that your loved one has everything they need. Our caregivers can also assist with picking up prescriptions and other essential items.",
    },
  ];

  return (
    <div>
      <Banner />
      <div className="m-auto mt-20 w-11/12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {data.map((e) => (
            <Card
              id={e.id}
              hoverable
              style={
                {
                  //   width: 300,
                  // height: 400,
                }
              }
              cover={<img alt="example" src={e.image} />}
            >
              <Meta
                title={e.title}
                description={e.content}
                className="md:pb-5 sm:pb-5 pb-5"
              />
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;

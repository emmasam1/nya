import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-scroll";
import banner1 from "../../assets/images/banner_1.jpg";
import banner2 from "../../assets/images/banner_5.jpg";
import banner3 from "../../assets/images/img_7.jpg";


const Banner = () => {
  const slides = [
    {
      image: banner1,
      title: "Future and Past president in one room",
      description: "Our president pay homeage visit the ex president General Olusegun Obasonjo at his home town ",
      link: "/",
      linkText: "Let's jump to it",
    },
    {
      image: banner2,
      title: "Welcome to the National Youth Alliance official site",
      description: "Optimism is our identity, It's Youth 0'Clock Nigerians wake up",
      link: "/",
      linkText: "Let's jump to it",
    },
    {
      image: banner3,
      title: "Important executive meeting..",
      description: "The National Alliance Youth President meet an important executive today",
      link: "/media",
      linkText: "Learn more...",
    },
  ];

  return (
    <div className="top-[72px] relative">
      <div className="carousel-container h-[400px] w-full overflow-hidden">
        <Carousel
          showThumbs={false}
          showStatus={false}
          infiniteLoop={true}
          autoPlay={true}
          interval={5000} // adjust interval as needed
          transitionTime={1000} // adjust transition time as needed
          useKeyboardArrows
          stopOnHover
          swipeable={true}
          dynamicHeight
          emulateTouch
          selectedItem={0}
          showIndicators={true}
          renderIndicator={(onClickHandler, isSelected, index, label) => {
            const indicatorStyle = {
              background: isSelected ? '#000' : '#ccc',
              width: '10px',
              height: '10px',
              display: 'inline-block',
              margin: '0 4px',
              borderRadius: '50%',
            };
            return (
              <li
                style={indicatorStyle}
                onClick={onClickHandler}
                onKeyDown={onClickHandler}
                value={index}
                key={index}
                role="button"
                tabIndex="0"
                title={`${label} ${index + 1}`}
                aria-label={`${label} ${index + 1}`}
              />
            );
          }}
        >
          {slides.map((slide, index) => (
            <div className="h-[400px] grid grid-cols-1 lg:grid-cols-2" key={index}>
              <div className={`flex items-center justify-center p-8 ${index % 2 === 0 ? "lg:order-1" : "lg:order-2"}`}>
                <div className="text-center lg:text-left">
                  <h2 className="text-4xl lg:text-2xl leading-snug mb-5 font-bold">
                    {slide.title}
                  </h2>
                  <p className="text-gray-500 text-xl mb-5 font-primary">
                    {slide.description}
                  </p>
                  <Link
                    to={slide.link}
                    smooth
                    duration={500}
                    className="group font-medium text-green-800 hover:text-red-600 inline-flex items-center py-1"
                  >
                    {slide.linkText}
                    <FaArrowRight className="mt-1 ml-2 transition-transform transform group-hover:rotate-90" />
                  </Link>
                </div>
              </div>
              <div className={`h-full ${index % 2 === 0 ? "lg:order-2" : "lg:order-1"}`}>
                <img src={slide.image} alt={`Banner ${index + 1}`} className="w-full h-full object-cover object-top" />
              </div>
            </div>
          ))}
        </Carousel>
      </div>
          {/* END OF CAROUSEL */}
      <div className="px-4 py-9 mx-auto">
        <div className="text-center lg:px-28">
          <h1 className="text-4xl lg:text-4xl leading-snug mb-5 font-bold">
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
              smooth
              duration={500}
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

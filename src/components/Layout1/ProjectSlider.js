import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import project1Image from '../Layout1/project.jpg'; 
import project2Image from '../Layout1/project2.jpg';

const ProjectSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="mt-16">
      <h2 className="text-center text-3xl font-bold mb-8">Projects</h2>
      <Slider {...settings}>
        <div>
          <img src={project1Image} alt="Project 1" className="mx-auto" />
          <div className="text-center mt-4">
            <h3 className="text-xl font-semibold">Project 1</h3>
            <p className="text-gray-600">Description of Project 1</p>
          </div>
        </div>
        <div>
          <img src={project2Image} alt="Project 2" className="mx-auto" />
          <div className="text-center mt-4">
            <h3 className="text-xl font-semibold">Project 2</h3>
            <p className="text-gray-600">Description of Project 2</p>
          </div>
        </div>
        {/* Add more project slides as needed */}
      </Slider>
    </div>
  );
};

export default ProjectSlider;
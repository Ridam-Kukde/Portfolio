import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ProjectSlider.css'; // Import your CSS file

const projects = [
  {
    date: '30.07.2017',
    title: 'Lorem Ipsum Dolor Site Mate, Ad Est Abhorreant',
    text: 'Lorem ipsum dolor sit amet, ad est abhorreant efficiantur, vero oporteat apeirian in vel. Et appareat electram appellantur est. Ei nec duis invenire. Cu mel ipsum laoreet, per rebum omittam ex.',
    image: 'https://goranvrban.com/codepen/img2.jpg',
  },
  {
    date: '30.08.2017',
    title: 'Lorem Ipsum Dolor Site Mate, Ad Est Abhorreant',
    text: 'Lorem ipsum dolor sit amet, ad est abhorreant efficiantur, vero oporteat apeirian in vel. Et appareat electram appellantur est. Ei nec duis invenire. Cu mel ipsum laoreet, per rebum omittam ex.',
    image: 'https://goranvrban.com/codepen/img3.jpg',
  },
  {
    date: '30.09.2017',
    title: 'Lorem Ipsum Dolor Site Mate, Ad Est Abhorreant',
    text: 'Lorem ipsum dolor sit amet, ad est abhorreant efficiantur, vero oporteat apeirian in vel. Et appareat electram appellantur est. Ei nec duis invenire. Cu mel ipsum laoreet, per rebum omittam ex.',
    image: 'https://goranvrban.com/codepen/img5.jpg',
  },
  {
    date: '30.10.2017',
    title: 'Lorem Ipsum Dolor Site Mate, Ad Est Abhorreant',
    text: 'Lorem ipsum dolor sit amet, ad est abhorreant efficiantur, vero oporteat apeirian in vel. Et appareat electram appellantur est. Ei nec duis invenire. Cu mel ipsum laoreet, per rebum omittam ex.',
    image: 'https://goranvrban.com/codepen/img6.jpg',
  },
];

const ProjectSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="slider">
      <Slider {...settings}>
        {projects.map((project, index) => (
          <div key={index} className="slide flex">
            <div className="slide-image">
              <img src={project.image} alt={project.title} />
              <div className="overlay"></div>
            </div>
            <div className="slide-content">
              <div className="slide-date">{project.date}</div>
              <div className="slide-title">{project.title}</div>
              <div className="slide-text">{project.text}</div>
              <div className="slide-more">READ MORE</div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} arrow next`}
      style={{ ...style, display: 'block' }}
      onClick={onClick}
    />
  );
};

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} arrow prev`}
      style={{ ...style, display: 'block' }}
      onClick={onClick}
    />
  );
};

export default ProjectSlider;
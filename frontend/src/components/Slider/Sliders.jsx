import SliderItem from "./SliderItem";
import { useState } from "react";
import "./Sliders.css";

const Sliders = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const nextSlide = () => {
    if (slideIndex !== 2) {
      setSlideIndex(slideIndex + 1);
    } else {
      setSlideIndex(0);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 0) {
      setSlideIndex(slideIndex - 1);
    } else {
      setSlideIndex(2);
    }
  };

  const imgSrc = [
    "img/slider/slider1.jpg",
    "img/slider/slider2.jpg",
    "img/slider/slider3.jpg"
  ];

  const handleClick = (index) => {
    setSlideIndex(index);
  };

  return (
    <section className="slider">
      <div className="slider-elements">
        <SliderItem imgSrc={imgSrc[slideIndex]} />
        <div className="slider-buttons">
          <button onClick={prevSlide}>
            <i className="bi bi-chevron-left"></i>
          </button>
          <button onClick={nextSlide}>
            <i className="bi bi-chevron-right"></i>
          </button>
        </div>
        <div className="slider-dots">
          {imgSrc.map((_, index) => (
            <button
              key={index}
              className={`slider-dot ${slideIndex === index ? 'active' : ''}`}
              onClick={() => handleClick(index)}
            >
              <span></span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sliders;

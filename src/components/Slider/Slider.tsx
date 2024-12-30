import React, { useState } from "react";
import styles from "./Slider.module.scss";

interface Slide {
  image: string;
  title: string;
  category: string;
}

interface ImageSliderProps {
  slides: Slide[];
}

const Slider: React.FC<ImageSliderProps> = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className={styles.slider}>
      <div
        className={styles.slides}
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className={styles.slide}>
            <img src={slide.image} alt={slide.title} />
            <h3>{slide.title}</h3>
            <p>{slide.category}</p>
          </div>
        ))}
      </div>
      <div className={styles.navigation}>
        <button className={styles.arrow} onClick={goToPrevSlide}>
          &#8592;
        </button>
        <button className={styles.arrow} onClick={goToNextSlide}>
          &#8594;
        </button>
      </div>
    </div>
  );
};

export default Slider;

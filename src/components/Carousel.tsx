import React, { useEffect, useState } from 'react'
import Slide1 from '../assets/slide1.png'
import Slide2 from '../assets/slide2.png'
import Slide3 from '../assets/slide3.png'
import DropdownIcon from '../Icons/DropdownIcon'

const images = [Slide1, Slide2, Slide3]
const captionTitle = 'Latest News & Updates'
const captionText = `Turpis interdum nunc varius ornare dignissim pretium. 
Massa ornare quis aliquet sed vitae. Sed velit nisi, fermentum erat. 
Fringilla purus, erat fringilla tincidunt quisque non. 
Pellentesque in ut tellus.`

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNextSlide();
    }, 5000);
    return () => clearInterval(interval);
  });

  const handleNextSlide = () => {
    setCurrentIndex(currentIndex < images.length - 1 ? currentIndex + 1 : 0);
  }

  const handlePreviousSlide = () => {
    setCurrentIndex(currentIndex > 0 ? currentIndex - 1 : images.length - 1);
  }

  return (
    <div className="h-full rounded-[5px]">
      <div className="relative w-full max-h-[320px] flex items-center justify-center rounded-[5px]">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt="carousel"
            className={`top-0 left-0 right-0 bottom-0 w-full max-h-[320px] object-cover rounded-[5px] ${currentIndex === index ? 'opacity-8 relative' : 'opacity-0 absolute'} transition-all duration-700 ease-in-out`}
          />
        ))}
        <button
          className={`absolute top-1/2 -translate-y-1/2 left-4 w-6 h-6 flex items-center justify-center cursor-pointer rotate-90 bg-main-light border border-secondary rounded-full`}
          onClick={handlePreviousSlide}
        >
          <DropdownIcon />
        </button>
        <button
          className={`absolute top-1/2 -translate-y-1/2 right-4 w-6 h-6 flex items-center justify-center cursor-pointer -rotate-90 bg-main-light border border-secondary rounded-full`}
          onClick={handleNextSlide}
        >
          <DropdownIcon />
        </button>
        <div className="flex flex-col gap-y-2 absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-b from-[rgba(0,0,0,0)] to-[rgba(0,0,0,0.5)]">
          <h3 className="text-white text-xs font-[600] leading-4">{captionTitle}</h3>
          <p className="text-white text-xs leading-4">{captionText}</p>
          <div className="w-full flex justify-center items-center gap-1">
            {images.map((_, index) => (
              <span
                key={index}
                className={`w-3 h-[3px] bg-white rounded-[2px] opacity-30 cursor-pointer ${currentIndex === index && '!opacity-100'}`}
                onClick={() => setCurrentIndex(index)}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Carousel
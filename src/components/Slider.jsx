import React from 'react'
import lgSlidera from "../assets/lgSlider1.jpg"
import lgSliderb from "../assets/lgSlider2.jpg"
import lgSliderc from "../assets/lgSlider3.jpg"
import lgSliderd from "../assets/lgSlider4.jpg"
import lgSlidere from "../assets/lgSlider5.jpg"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const images = [
lgSlidera,
lgSliderb,lgSliderc,lgSliderd,lgSlidere
];
const Slider = () => {
  return (
    <div className="bg-blue-950 w-full md:px-8 p-5 items-center relative  justify-center flex mb-10">
      <div className="border-2 border-white w-[1300px]  rounded-md overflow-hidden m-5 shadow-lg p-2">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop={true}
          spaceBetween={0}
          slidesPerView={1}
                  speed={1000} 

          className="w-full h-[250px] md:h-[350px] lg:h-[400px]"
        >
          {images.map((src, i) => (
            <SwiperSlide key={i}>
              <img
                src={src}
                
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

    </div>
  );
};

export default Slider;
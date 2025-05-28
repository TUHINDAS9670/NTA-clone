import React from 'react';
import lgSlidera from "../assets/lgslider1.jpg";
import lgSliderb from "../assets/lgslider2.jpg";
import lgSliderc from "../assets/lgslider3.jpg";
import lgSliderd from "../assets/lgslider4.jpg";
import lgSlidere from "../assets/lgslider5.jpg";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const images = [lgSlidera, lgSliderb, lgSliderc, lgSliderd, lgSlidere];

const Slider = () => {
  return (
    <div className="bg-blue-950 w-full px-4 md:px-8 py-6 flex justify-center items-center mb-10">
      <div className="border-2 border-white rounded-md p-4 overflow-hidden shadow-lg w-full max-w-7xl">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop={true}
          spaceBetween={0}
          slidesPerView={1}
          speed={1000}
          className="w-full h-[200px] sm:h-[250px] md:h-[350px] lg:h-[450px]"
        >
          {images.map((src, i) => (
            <SwiperSlide key={i}>
              <img
                src={src}
                alt={`slider-${i}`}
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

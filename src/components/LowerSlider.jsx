// LogoSlider.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import govtlogo1 from "../assets/govtlogo1.png";
import govtlogo2 from "../assets/govtlogo2.png";
import govtlogo3 from "../assets/govtlogo3.png";
import govtlogo4 from "../assets/govtlogo4.png";
import govtlogo5 from "../assets/govtlogo5.png";

const logos = [
  { src: govtlogo1, alt: 'Ministry of Education' },
  { src: govtlogo2, alt: 'RTI' },
  { src: govtlogo3, alt: 'data.gov.in' },
  { src: govtlogo4, alt: 'india.gov.in' },
  { src: govtlogo5, alt: 'india.gov.in' },
];

export default function LowerSlider() {
  return (
    <div className="bg-white py-6 shadow-sm">
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={20}
        breakpoints={{
          320: {
            slidesPerView: 2,
          },
          640: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
        navigation
        loop
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        speed={1000}
        className="w-full max-w-6xl mx-auto"
      >
        {logos.map((logo, index) => (
          <SwiperSlide key={index}>
            <div className="flex items-center justify-center h-24">
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-full object-contain cursor-pointer"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

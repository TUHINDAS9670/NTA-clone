import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import Gallery1 from "../assets/Gallery1.jpeg";
import Gallery2 from "../assets/Gallery2.jpeg";
import Gallery3 from "../assets/Gallery3.jpeg";
import Gallery4 from "../assets/Gallery4.jpeg";
import Gallery5 from "../assets/Gallery5.jpeg";

const imageGroups = [
  [Gallery1, Gallery3, Gallery4],
  [Gallery3, Gallery2, Gallery5],
  [Gallery2, Gallery5, Gallery4],
  [Gallery3, Gallery1, Gallery2],
  [Gallery4, Gallery5, Gallery2],
];

const Gallery = () => {
  return (
    <div className="w-full bg-white py-8 px-4 text-center">
      {/* Heading */}
      <h2 className="px-2 py-1 text-3xl font-bold text-blue-900 mb-12">
        GALLERY <span className="bg-orange-400 text-white px-2 py-1 rounded">@NTA</span>
      </h2>

      {/* Swiper Carousel */}
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={20}
        loop={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        speed={1200}
        pagination={{ clickable: true }}
        className="max-w-6xl mx-auto"
      >
        {imageGroups.map((group, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col md:flex-row md:flex-wrap justify-center items-center gap-4">
              {group.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`Slide ${index} - ${idx}`}
                  className="w-full md:w-[30%] max-w-[450px] h-[300px] object-cover rounded-sm"
                />
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Gallery;

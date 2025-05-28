import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import TPC10 from "../assets/TPC10.jpg"
import TPC11 from "../assets/TPC11.jpg"
import TPC12 from "../assets/TPC12.jpg"
import TPC14 from "../assets/TPC14.jpg"
import TPC15 from "../assets/TPC15.jpg"
import TPC16 from "../assets/TPC16.jpg"
import TPC17 from "../assets/TPC17.jpg"
import TPC19 from "../assets/TPC19.jpg"
const imageGroups = [

 [ TPC10,
  TPC11,
  TPC12,],
 [ TPC14,
  TPC15,
  TPC16,],
  [TPC17,
  TPC19,]
  

];

const MockTestSection = () => {
  return (
    <div className="w-full bg-white py-8 px-4 text-center">
       <h2 className="text-3xl font-bold text-blue-900 mb-6">
        Mock Test <span className="bg-orange-500 text-white px-2 py-1 rounded">@TPC</span>
      </h2>

   <Swiper
        modules={[Autoplay, Pagination]}
                 autoplay={{ delay: 2500, disableOnInteraction: false }}
                 pagination={{ clickable: true }}
                 loop={true}
                 spaceBetween={0}
                 speed={1000}
                 slidesPerView={1}
        className="max-w-6xl mx-auto"
      >
        {imageGroups.map((group, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col md:flex-row gap-2 justify-center items-center">
              {group.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
               
                  className="w-[450px] md:w-1/3 h-[300px] object-cover  rounded-sm"
                />
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

  
    </div>
  );
};

export default MockTestSection;

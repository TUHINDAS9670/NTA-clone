import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

const AgencySection = () => {
  const data = [
    {
      tag: "JEE (MAIN)",
      title: "Engineering",
      subtitle: "Joint Entrance Examination - (Main)",
      // img: "/images/jee.png",
    },
    {
      tag: "NEET (UG)",
      title: "Medical",
      subtitle: "National Eligibility Cum Entrance Test - (UG)",
      // img: "/images/neet.png",
    },
    {
      tag: "CMAT",
      title: "Management",
      subtitle: "Common Management Admission Test",
      // img: "/images/cmat.png",
    },
    {
      tag: "GPAT",
      title: "Pharmacy",
      subtitle: "Graduate Pharmacy Aptitude Test",
      // img: "/images/gpat.png",
    },
    {
      tag: "UGC-NET",
      title: "University",
      subtitle: "UGC National Eligibility Test",
      // img: "/images/ugcnet.png",
    },
    {
      tag: "JNUEE",
      title: "University",
      subtitle: "Jawaharlal Nehru University Entrance Test",
      // img: "/images/jnuee.png",
    },
  ];

  return (
    <div className="w-full px-4 py-5 bg-neutral-200     ">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-5 text-blue-950 text-" >
          National <span className="text-white bg-orange-400 p-2 ">Testing</span>{" "}
          Agency
        </h2>
        <p>
          National Testing Agency (NTA) is a registered society under the
          Societies Registration Act, 1860.
        </p>
        <p>The NTA will conduct all exams in following domains:</p>
      </div>
        <div className="max-w-6xl mx-auto text-center">
    <div className="swiper-button-prev-custom absolute -left-6 top-1/2 -translate-y-1/2 z-10 text-4xl text-blue-900 cursor-pointer">
    <HiChevronLeft />
  </div>
  <div className="swiper-button-next-custom absolute -right-6 top-1/2 -translate-y-1/2 z-10 text-4xl text-blue-900 cursor-pointer">
    <HiChevronRight />
  </div>

        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={20}
          slidesPerView={4}
          loop={true}
                  speed={1000} 

          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
            pauseOnMouseEnter:true,
          }}
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          className="my-10  "
        >
          
          
          
       
          
          {data.map((card, index) => (
            <SwiperSlide key={index}>
              <div className="relative bg-white border px-6 py-6 hover:shadow-2xl rounded-sm h-[200px] cursor-pointer mx-3 ">
                {/* Top-left Ribbon */}
                <div className="relative  -top-7 right-9  bg-blue-950  text-white   font-bold px-4 py-2 text-left text-xl">
                  {card.tag}
                  <div className="absolute top-full left-1 w-0 h-0 border-t-[10px] border-t-blue-900 border-l-[10px] border-l-transparent" />
                </div>

                {/* Body content */}
                <p className="text-gray-700 mb-4 leading-relaxed text-lg font-bold">
                  {card.title}
                </p>

                <p className="text-gray-700 mb-6 leading-relaxed">
                  {card.subtitle}
                </p>
              </div>
              
            </SwiperSlide>
          ))}
          
        
        </Swiper>
      </div>
    </div>
  );
};

export default AgencySection;

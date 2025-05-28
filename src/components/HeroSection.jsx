import React from 'react';
import { Link } from "react-router-dom";
import { FaArrowRight, FaMobileAlt, FaCertificate, FaHandPaper } from "react-icons/fa";
import { MdComputer } from "react-icons/md";

const HeroSection = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
      {/* Top Buttons */}
      <div className='font-semibold border w-full max-w-[1100px] flex flex-wrap justify-center text-sm sm:text-base md:text-xl gap-2 px-2 py-3'>
        <button className='rounded-full bg-green-500 text-white hover:text-orange-500 hover:bg-white px-3 py-2 cursor-pointer transition-all duration-500'>
          <FaHandPaper className='inline mr-1' /> ACTIVE EXAMINATIONS
        </button>
        <span className="hidden sm:inline">||</span>
        <button className='rounded-4xl bg-green-500 text-white hover:text-orange-500 hover:bg-white px-3 py-2 cursor-pointer transition-all duration-500'>
          <FaCertificate className='inline mr-1' /> E-CERTIFICATE
        </button>
        <span className="hidden sm:inline">||</span>
        <button className='rounded-4xl bg-green-500 text-white hover:text-orange-500 hover:bg-white px-3 py-2 cursor-pointer transition-all duration-500'>
          <MdComputer className='inline mr-1' /> MOCK TEST
        </button>
        <span className="hidden sm:inline">||</span>
        <button className='rounded-4xl bg-green-500 text-white hover:text-orange-500 hover:bg-white px-3 py-2 cursor-pointer transition-all duration-500'>
          <FaMobileAlt className='inline mr-1' /> ABHYAS
        </button>
      </div>

      {/* Content Lecture Text */}
      <div className='font-semibold border px-4 py-3 w-full max-w-[1100px] text-lg md:text-2xl flex flex-wrap justify-center gap-2 mt-5 text-center md:text-left'>
        <Link to="/" className='text-orange-500'>Content Based Lecture</Link>
        <p>- FOR JEE MAIN AND NEET-UG BY IIT PROFESSORS / SUBJECT EXPERTS</p>
      </div>

      {/* Info Boxes */}
      <div className="max-w-6xl w-full flex flex-col lg:flex-row justify-center items-stretch gap-6 px-4 py-10">
        {/* Box 1 */}
        <div className="relative bg-white border px-6 py-6 shadow-md rounded-sm w-full">
          <div className="absolute -top-5 left-0 bg-blue-950 text-white text-lg font-extrabold px-4 py-2">
            ABOUT NTA
            <div className="absolute top-full left-0 w-0 h-0 border-t-[10px] border-t-blue-900 border-l-[10px] border-l-transparent" />
          </div>
          <p className="text-gray-700 mb-4 leading-relaxed">
            National Testing Agency (NTA) has been established as a premier, specialist, autonomous and self-sustained testing organization to conduct entrance examinations for admission/fellowship in higher educational institutions.
          </p>
          <p className="text-gray-700 mb-6 leading-relaxed">
            To assess competence of candidates for admissions and recruitment has always been a challenge in terms of matching with research based international standards, efficiency, transparency and error free delivery.
          </p>
          <div className="flex justify-end">
            <button className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold px-4 py-2 text-sm uppercase cursor-pointer">
              Read More <FaArrowRight />
            </button>
          </div>
        </div>

        {/* Box 2 */}
        <div className="relative bg-white border px-6 py-6 shadow-md rounded-sm w-full">
          <div className="absolute -top-5 left-0 bg-blue-950 text-white text-lg font-extrabold px-4 py-2">
            LATEST @ NTA
            <div className="absolute top-full left-0 w-0 h-0 border-t-[10px] border-t-blue-900 border-l-[10px] border-l-transparent" />
          </div>
          <p className="text-gray-700 mb-4 leading-relaxed">
            National Testing Agency (NTA) has been established as a premier, specialist, autonomous and self-sustained testing organization to conduct entrance examinations for admission/fellowship in higher educational institutions.
          </p>
          <p className="text-gray-700 mb-6 leading-relaxed">
            To assess competence of candidates for admissions and recruitment has always been a challenge in terms of matching with research based international standards, efficiency, transparency and error free delivery.
          </p>
          <div className="flex justify-end">
            <button className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold px-4 py-2 text-sm uppercase cursor-pointer">
              Read More <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

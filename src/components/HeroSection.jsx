import React from 'react'
import {Link} from "react-router-dom"
import { FaArrowRight } from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";
import { MdComputer } from "react-icons/md";
import { FaCertificate } from "react-icons/fa";
import { FaHandPaper } from "react-icons/fa";

const HeroSection = () => {
  return (
    <div className='flex flex-col justify-center items-center '>
      <div className='font-semibold border   w-[1100px] flex items-center text-xl gap-2 '>
        <button className='rounded-full bg-green-500  item-center text-white hover:text-orange-500 hover:bg-white p-2 cursor-pointer m-3 transition-all duration-500'><FaHandPaper className='inline'/> ACTIVE EXAMINATIONS</button>
        <span>||</span>
        <button className='rounded-4xl bg-green-500 text-white hover:text-orange-500 hover:bg-white p-2 cursor-pointer m-3 transition-all duration-500'><FaCertificate className='inline'/>E-CERTIFICATE</button>
        <span>||</span>
        <button className='rounded-4xl bg-green-500 text-white hover:text-orange-500 hover:bg-white p-2 cursor-pointer m-3 transition-all duration-500'><MdComputer className='inline'/>MOCK TEST</button>
        <span>||</span>
        <button className='rounded-4xl bg-green-500 text-white hover:text-orange-500 hover:bg-white p-2 cursor-pointer m-3 transition-all duration-500'><FaMobileAlt className='inline'/>ABHYAS</button>
      </div>
      <div className='font-semibold border p-[20px]  w-[1100px] text-2xl flex items-center mt-5'>
        <Link to="/" className='text-orange-500'>Content Based Lecture</Link>
        <p> -  FOR JEE MAIN AND NEET-UG BY IIT PROFESSORS / SUBJECT EXPERTS </p>
      </div>
       
 <div className="h-[350px] max-w-5xl  my-10 flex justify-center gap-x-10 gap-y-10 ">
      <div className="relative bg-white border px-6 py-6 shadow-md rounded-sm ">
       
        <div className ="absolute -top-5 left-0  bg-blue-950 text-white text-lg  font-extrabold px-4 py-2">
          ABOUT NTA
          <div className="absolute top-full left-0 w-0 h-0 border-t-[10px] border-t-blue-900 border-l-[10px] border-l-transparent" />
        </div>
        <p className="text-gray-700 mb-4 leading-relaxed">
          National Testing Agency (NTA) has been established as a premier,
          specialist, autonomous and self-sustained testing organization to
          conduct entrance examinations for admission/fellowship in higher
          educational institutions.
        </p>

        <p className="text-gray-700 mb-6 leading-relaxed">
          To assess competence of candidates for admissions and recruitment has
          always been a challenge in terms of matching with research based
          international standards, efficiency, transparency and error free
          delivery.
        </p>

       
        <div className="flex justify-end">
          <button className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold px-4 py-2 text-sm uppercase cursor-pointer">
            Read More <FaArrowRight />
          </button>
        </div>
      </div>
      <div className="relative bg-white border px-6 py-6 shadow-md rounded-sm">
    
        <div className="absolute -top-5 left-0  bg-blue-950  text-white text-lg  font-extrabold px-4 py-2">
          LATEST @ NTA
          <div className="absolute top-full left-0 w-0 h-0 border-t-[10px] border-t-blue-900 border-l-[10px] border-l-transparent" />
        </div>

      
        <p className="text-gray-700 mb-4 leading-relaxed">
          National Testing Agency (NTA) has been established as a premier,
          specialist, autonomous and self-sustained testing organization to
          conduct entrance examinations for admission/fellowship in higher
          educational institutions.
        </p>

        <p className="text-gray-700 mb-6 leading-relaxed">
          To assess competence of candidates for admissions and recruitment has
          always been a challenge in terms of matching with research based
          international standards, efficiency, transparency and error free
          delivery.
        </p>

        <div className="flex justify-end">
          <button className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold px-4 py-2 text-sm uppercase cursor-pointer">
            Read More <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
       
    </div>
  )
}

export default HeroSection
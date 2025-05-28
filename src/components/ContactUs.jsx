import React from 'react';
import govtlogo from "../assets/govtlogo2.png";
import { MdComputer, MdAppRegistration, MdEmail, MdCopyright } from "react-icons/md";
import { TiDocumentText } from "react-icons/ti";
import { FaFacebook, FaTwitterSquare, FaYoutube, FaAppStore, FaQuestion, FaPhoneAlt, FaMapPin } from "react-icons/fa";
import { BiLogoPlayStore } from "react-icons/bi";
import { TbMap2 } from "react-icons/tb";

const ContactUs = () => {
  return (
    <div className="bg-blue-950 text-white py-10 px-6 md:px-20">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        
=        <div>
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            🔗 QUICK LINKS
          </h2>
          <ul className="space-y-2 text-orange-400">
            <li className="flex items-center gap-1"><MdComputer /> Mock Test</li>
            <li className="flex items-center gap-1"><TiDocumentText /> Recruitment (Young Professionals)</li>
            <li className="flex items-center gap-1"><FaFacebook /> Facebook</li>
            <li className="flex items-center gap-1"><FaTwitterSquare /> Twitter</li>
            <li className="flex items-center gap-1"><FaYoutube /> YouTube</li>
            <li className="flex items-center gap-1"><BiLogoPlayStore /> Play Store</li>
            <li className="flex items-center gap-1"><FaAppStore /> App Store</li>
            <li className="flex items-center gap-1"><FaQuestion /> FAQs</li>
            <li className="flex items-center gap-1"><MdAppRegistration /> NTA Registration and MoA</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <FaPhoneAlt /> CONTACT
          </h2>
          <ul className="space-y-2">
            <li className="flex items-start gap-1">
              <FaMapPin className="mt-1" /> 
              <span>
                First Floor, NSIC-MDBP Building, <br />
                Okhla Industrial Estate,<br />
                New Delhi, Delhi 110020
              </span>
            </li>
            <li className="flex items-center gap-1"><FaPhoneAlt /> 011-69227700</li>
            <li className="flex items-center gap-1"><MdEmail /> genadmin@nta.ac.in</li>
          </ul>
          <img
            src={govtlogo}
            alt="Ministry of Education"
            className="mt-6 w-full max-w-[250px] md:max-w-[300px]"
          />
        </div>


        <div>
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <TbMap2 /> LOCATION
          </h2>
          <iframe
            title="NTA Location"
            aria-label="Google Map showing NTA location"
            className="w-full h-64 rounded-md"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14010.29223859041!2d77.26060431738279!3d28.524403143708918!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3b8c1b61f9f%3A0x62c187bd4ee19ad6!2sNational%20Testing%20Agency!5e0!3m2!1sen!2sin!4v1683278333762!5m2!1sen!2sin"
            loading="lazy"
          ></iframe>
        </div>
      </div>


      <div className="mt-10 text-center border-t border-blue-800 pt-4 text-sm text-gray-300">
        <MdCopyright className="inline" /> All Rights Reserved - National Testing Agency
      </div>
    </div>
  );
};

export default ContactUs;

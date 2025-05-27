import React from 'react'
import govtlogo from"../assets/govtlogo2.png"
import { MdComputer } from "react-icons/md";
import { TiDocumentText } from "react-icons/ti";
import { FaFacebook } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { BiLogoPlayStore } from "react-icons/bi";
import { FaAppStore } from "react-icons/fa";
import { FaQuestion } from "react-icons/fa";
import { MdAppRegistration } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaMapPin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { TbMap2 } from "react-icons/tb";
import { MdCopyright } from "react-icons/md";



const ContactUs = () => {
  return (
    <div className="bg-blue-950 text-white py-10 px-6 md:px-20">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <span>🔗</span> QUICK LINKS
          </h2>
          <ul className="space-y-2 text-orange-400  ">
            <li><MdComputer className='inline'/> Mock Test</li>
            <li><TiDocumentText className='inline'/>
 Recruitment (Young Professionals)</li>
            <li><FaFacebook className='inline'/> Facebook</li>
            <li><FaTwitterSquare className='inline'/> Twitter</li>
            <li><FaYoutube className='inline' />
 Youtube</li>
            <li><BiLogoPlayStore className='inline'/> Play Store</li>
            <li><FaAppStore className='inline'/> App Store</li>
            <li><FaQuestion className='inline'/> FAQs</li>
            <li><MdAppRegistration className='inline'/> NTA Registration and MoA</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <span><FaPhoneAlt />
</span> CONTACT
          </h2>
          <ul className="space-y-2">
            <li>
              <FaMapPin className='inline'/> First Floor, NSIC-MDBP Building, <br />
              Okhla Industrial Estate,<br />
              New Delhi, Delhi 110020
            </li>
            <li><FaPhoneAlt className='inline' /> 011-69227700</li>
            <li><MdEmail className='inline'/> genadmin@nta.ac.in</li>
          </ul>
          <img
            src={govtlogo}
            alt="Ministry of Education"
            className="mt-6 w-full  "
          />
        </div>
        <div>
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <span><TbMap2/></span> LOCATION
          </h2>
          <iframe
            title="NTA Location"
            className="w-full h-64 rounded-md"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14010.29223859041!2d77.26060431738279!3d28.524403143708918!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3b8c1b61f9f%3A0x62c187bd4ee19ad6!2sNational%20Testing%20Agency!5e0!3m2!1sen!2sin!4v1683278333762!5m2!1sen!2sin"
            loading="lazy"
          ></iframe>
        </div>
      </div>
      <div className="mt-10 text-center border-t border-blue-800 pt-4 text-sm text-gray-300">
        <MdCopyright className='inline'/> All Rights Reserved - National Testing Agency
      </div>
    </div>
  );
};

export default ContactUs;



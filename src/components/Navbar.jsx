import React, { useEffect, useState } from "react";
import { FaYoutube, FaTwitterSquare, FaAppStore, FaBars } from "react-icons/fa";
import { BiLogoPlayStore } from "react-icons/bi";
import { Link } from "react-router-dom";
import azadi from "/azadi.png";
import yrLogo from "/150yrLogo.png";
import ntaLogo from "/ntaLogo.png";

const Navbar = () => {
  const [dateTime, setDateTime] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const dayDate = now.toLocaleDateString("en-IN", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        timeZone: "Asia/Kolkata",
      });

      const time = now.toLocaleTimeString("en-IN", {
        hour12: false,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        timeZone: "Asia/Kolkata",
      });

      setDateTime(`${dayDate.toUpperCase()} - ${time} IST`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="bg-blue-900 text-white py-1 px-4 flex justify-between items-center text-lg">
        <div>{dateTime}</div>
        <div className="flex gap-2">
          <span><FaYoutube /></span>
          <span><FaTwitterSquare /></span>
          <span><BiLogoPlayStore /></span>
          <span><FaAppStore /></span>
        </div>
      </div>

      <div className="bg-white shadow-md">
        <div className="flex justify-between items-center py-2 px-6">
           <div className="flex items-center gap-4">
            <img src={yrLogo} alt="Logo 1" className="h-[70px] mb-3" />
            <img src={ntaLogo} alt="NTA Logo" className="h-[100px]" />
          </div>

          {/*   icon for mobile */} 
          <div className="md:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              <FaBars size={24} className="text-blue-900" />
            </button>
          </div>

          {/* Navigation links for desktop */}
          <div className="hidden md:flex gap-6 font-semibold text-sm text-blue-900">
            <Link to="/Home" className="relative px-3 py-2 hover:bg-blue-900 hover:text-white border-t-4 border-transparent hover:border-orange-400 transition-all">HOME</Link>
            <Link to="/Student" className="relative px-3 py-2 hover:bg-blue-900 hover:text-white border-t-4 border-transparent hover:border-orange-400 transition-all">STUDENT</Link>
            <Link to="/Institute" className="relative px-3 py-2 hover:bg-blue-900 hover:text-white border-t-4 border-transparent hover:border-orange-400 transition-all">INSTITUTE</Link>
            <Link to="/Action" className="relative px-3 py-2 hover:bg-blue-900 hover:text-white border-t-4 border-transparent hover:border-orange-400 transition-all">ACTION AGENDA</Link>
            <Link to="/Rti" className="relative px-3 py-2 hover:bg-blue-900 hover:text-white border-t-4 border-transparent hover:border-orange-400 transition-all">RTI</Link>
            <Link to="/Tender" className="relative px-3 py-2 hover:bg-blue-900 hover:text-white border-t-4 border-transparent hover:border-orange-400 transition-all">TENDER</Link>
            <Link to="/Downloads" className="relative px-3 py-2 hover:bg-blue-900 hover:text-white border-t-4 border-transparent hover:border-orange-400 transition-all">DOWNLOADS</Link>
            <Link to="/Contactus" className="relative px-3 py-2 hover:bg-blue-900 hover:text-white border-t-4 border-transparent hover:border-orange-400 transition-all">CONTACT US</Link>
          </div>

           <div>
            <img src={azadi} alt="Amrit Mahotsav" className="h-[100px] w-[130px] mt-[-20px]" />
          </div>
        </div>

        {/* Mobile menu */} 
        {isMobileMenuOpen && (
          <div className="md:hidden px-6 pb-4 bg-white shadow-inner transition-all duration-300 text-blue-900 font-semibold">
            <Link to="/Home" className="block py-2 border-b hover:bg-blue-900 hover:text-white" onClick={() => setIsMobileMenuOpen(false)}>HOME</Link>
            <Link to="/Student" className="block py-2 border-b hover:bg-blue-900 hover:text-white" onClick={() => setIsMobileMenuOpen(false)}>STUDENT</Link>
            <Link to="/Institute" className="block py-2 border-b hover:bg-blue-900 hover:text-white" onClick={() => setIsMobileMenuOpen(false)}>INSTITUTE</Link>
            <Link to="/Action" className="block py-2 border-b hover:bg-blue-900 hover:text-white" onClick={() => setIsMobileMenuOpen(false)}>ACTION AGENDA</Link>
            <Link to="/Rti" className="block py-2 border-b hover:bg-blue-900 hover:text-white" onClick={() => setIsMobileMenuOpen(false)}>RTI</Link>
            <Link to="/Tender" className="block py-2 border-b hover:bg-blue-900 hover:text-white" onClick={() => setIsMobileMenuOpen(false)}>TENDER</Link>
            <Link to="/Downloads" className="block py-2 border-b hover:bg-blue-900 hover:text-white" onClick={() => setIsMobileMenuOpen(false)}>DOWNLOADS</Link>
            <Link to="/Contactus" className="block py-2 hover:bg-blue-900 hover:text-white" onClick={() => setIsMobileMenuOpen(false)}>CONTACT US</Link>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;

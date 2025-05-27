import { useState } from 'react'
import React from 'react';
import './App.css'
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import HeroSection from './components/HeroSection';
import AgencySection from './components/AgencySection';
import MockTestSection from './components/MockTestSection';
import CategorySection from './components/CategorySection';
import Gallery from './components/Gallery';
import LowerSlider from './components/LowerSlider';
import ContactUs from './components/ContactUs';
import { BrowserRouter } from 'react-router';

function App() {


  return (
    <>
   <Navbar/>
   <Slider/>
   <HeroSection/>
   <AgencySection/>
   <MockTestSection/>
   <CategorySection/>
   <Gallery/>
   <LowerSlider/>
   <ContactUs/>
    </>
  )
}

export default App

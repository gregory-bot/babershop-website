import React, { useState, useEffect } from 'react';
import { Menu, X, Scissors, Star, Clock, Users, MessageSquare, Instagram, Facebook, Twitter } from 'lucide-react';
import TypewriterComponent from 'typewriter-effect';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Services from './components/Services';
import BookingSection from './components/BookingSection';
import WhyChooseUs from './components/WhyChooseUs';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <HeroSection />
      <Services />
      <BookingSection />
      <WhyChooseUs />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
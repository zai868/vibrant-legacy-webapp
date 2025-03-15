
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import SdgSection from '@/components/SdgSection';
import VideoSection from '@/components/VideoSection';
import QuoteSection from '@/components/QuoteSection';
import TestimonialSection from '@/components/TestimonialSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#0A0A0A] to-[#0D1B2A] text-white">
      <Navbar />
      <Hero />
      
      <main className="flex-grow">
        <VideoSection />
        <SdgSection />
        <QuoteSection />
        <TestimonialSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;

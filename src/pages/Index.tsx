
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
    <div className="min-h-screen flex flex-col bg-black text-white">
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

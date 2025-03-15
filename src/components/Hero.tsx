
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="relative min-h-[90vh] flex items-center bg-gradient-to-b from-[#000000] to-[#121212] overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_#1a237e_0%,_transparent_70%)]"></div>
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-enactus-yellow/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-blue-900/10 rounded-full filter blur-3xl"></div>
      
      {/* Hero content */}
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <motion.div
            className="inline-block px-4 py-1 mb-6 bg-enactus-yellow/20 rounded-full text-enactus-yellow border border-enactus-yellow/30"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="text-sm font-medium">Vice World Champion 2024 🇰🇿</span>
          </motion.div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            <span className="text-enactus-yellow">Transforming</span> Lives<br />
            Through <span className="bg-gradient-to-r from-enactus-yellow to-yellow-500 text-transparent bg-clip-text">Entrepreneurial Action</span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8">
            Enactus EMI empowers students to use innovation and entrepreneurship to create a better, more sustainable world for us all.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild className="bg-enactus-yellow text-black hover:bg-yellow-500 border-2 border-enactus-yellow">
              <Link to="/who-are-we" className="flex items-center">
                Discover Us <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="border-2 border-enactus-yellow text-enactus-yellow hover:bg-enactus-yellow hover:text-black">
              <Link to="/our-projects" className="flex items-center">
                Our Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
      
      {/* Feature highlight */}
      <motion.div 
        className="absolute bottom-10 right-10 md:bottom-20 md:right-20 max-w-xs hidden md:block"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.5 }}
      >
        <div className="p-6 rounded-xl bg-black/50 backdrop-blur-md border border-gray-800 shadow-xl">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-3 h-3 bg-enactus-yellow rounded-full"></div>
            <h3 className="text-lg font-semibold text-white">Global Recognition</h3>
          </div>
          <p className="text-gray-300 text-sm">
            Consistently ranked among the world's top Enactus teams since 2013
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;

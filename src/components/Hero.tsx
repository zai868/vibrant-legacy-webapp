
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative min-h-[90vh] flex items-center">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-enactus-black to-enactus-black/90 z-0"></div>
      
      {/* Hero content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            <span className="gradient-text">Enactus</span> EMI
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8">
            Pushing boundaries, driving change.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild className="bg-enactus-yellow text-black hover:bg-yellow-500 border-2 border-enactus-yellow">
              <Link to="/who-are-we">Découvrir</Link>
            </Button>
            <Button asChild variant="outline" className="border-2 border-enactus-yellow text-enactus-yellow hover:bg-enactus-yellow hover:text-black">
              <Link to="/our-projects" className="flex items-center">
                Nos Projets <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

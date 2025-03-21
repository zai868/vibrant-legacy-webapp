
import React from 'react';
import { Link } from 'react-router-dom';
import EnactusLogo from '@/components/EnactusLogo';

const Footer = () => {
  return (
    <footer className="bg-black text-white border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <EnactusLogo className="h-8 mb-4" />
            <p className="text-gray-300 max-w-md">
              Enactus EMI is a local branch of the Enactus organization that brings together student entrepreneurs around social innovation projects.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/who-are-we" className="text-gray-300 hover:text-enactus-yellow transition-colors">Who We Are</Link></li>
              <li><Link to="/our-projects" className="text-gray-300 hover:text-enactus-yellow transition-colors">Our Projects</Link></li>
              <li><Link to="/our-mission" className="text-gray-300 hover:text-enactus-yellow transition-colors">Our Mission</Link></li>
              <li><Link to="/palmares" className="text-gray-300 hover:text-enactus-yellow transition-colors">Palmarès</Link></li>
              <li><Link to="/news" className="text-gray-300 hover:text-enactus-yellow transition-colors">News</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <p className="text-gray-300 mb-2">École Mohammadia d'Ingénieurs</p>
            <p className="text-gray-300 mb-2">Rabat, Morocco</p>
            <p className="text-gray-300 mb-4">contact@enactusemi.org</p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/enactusemi" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-enactus-yellow">
                Facebook
              </a>
              <a href="https://www.instagram.com/enactusemi" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-enactus-yellow">
                Instagram
              </a>
              <a href="https://www.linkedin.com/company/enactusemi" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-enactus-yellow">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Enactus EMI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

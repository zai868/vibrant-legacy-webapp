
import React from 'react';

interface EnactusLogoProps {
  className?: string;
}

const EnactusLogo: React.FC<EnactusLogoProps> = ({ className = "h-10 w-auto" }) => {
  return (
    <div className={`flex items-center ${className}`}>
      {/* This is a text-based logo as a placeholder - replace with an actual SVG or image */}
      <span className="font-bold text-xl text-enactus-black dark:text-white">
        <span className="text-enactus-yellow">Enactus</span> EMI
      </span>
    </div>
  );
};

export default EnactusLogo;

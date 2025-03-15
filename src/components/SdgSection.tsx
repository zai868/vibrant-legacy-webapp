
import React from 'react';

interface SDG {
  id: number;
  name: string;
  color: string;
}

const sdgList: SDG[] = [
  { id: 1, name: "No Poverty", color: "bg-red-600" },
  { id: 2, name: "Zero Hunger", color: "bg-yellow-600" },
  { id: 3, name: "Good Health and Well-being", color: "bg-green-500" },
  { id: 4, name: "Quality Education", color: "bg-red-500" },
  { id: 5, name: "Gender Equality", color: "bg-orange-600" },
  { id: 6, name: "Clean Water and Sanitation", color: "bg-blue-500" },
  { id: 7, name: "Affordable and Clean Energy", color: "bg-yellow-500" },
  { id: 8, name: "Decent Work and Economic Growth", color: "bg-red-700" },
  { id: 9, name: "Industry, Innovation and Infrastructure", color: "bg-orange-500" },
  { id: 10, name: "Reduced Inequality", color: "bg-pink-600" },
  { id: 11, name: "Sustainable Cities and Communities", color: "bg-yellow-700" },
  { id: 12, name: "Responsible Consumption and Production", color: "bg-amber-600" },
  { id: 13, name: "Climate Action", color: "bg-green-600" },
  { id: 14, name: "Life Below Water", color: "bg-blue-600" },
  { id: 15, name: "Life on Land", color: "bg-green-700" },
  { id: 16, name: "Peace, Justice and Strong Institutions", color: "bg-blue-700" },
  { id: 17, name: "Partnerships for the Goals", color: "bg-blue-800" },
];

// These are the SDGs that Enactus EMI is focusing on (example)
const focusedSdgIds = [1, 4, 8, 10, 12, 13];

const SdgSection = () => {
  return (
    <section className="py-16 bg-white dark:bg-enactus-dark">
      <div className="container mx-auto px-4">
        <h2 className="section-title dark:text-white">
          Objectifs de Développement Durable
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
          Chez Enactus EMI, nous nous engageons à contribuer aux Objectifs de Développement Durable des Nations Unies à travers nos projets innovants.
        </p>
        
        <div className="mb-12">
          <h3 className="section-subtitle text-center dark:text-white">Nos SDGs Prioritaires</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 mt-6">
            {sdgList.filter(sdg => focusedSdgIds.includes(sdg.id)).map((sdg) => (
              <div 
                key={sdg.id} 
                className={`${sdg.color} rounded-lg p-4 flex flex-col items-center justify-center h-28 text-white transition-transform hover:scale-105 cursor-pointer`}
              >
                <div className="font-bold text-xl mb-1">{sdg.id}</div>
                <div className="text-center text-xs font-medium">{sdg.name}</div>
              </div>
            ))}
          </div>
        </div>
        
        <h3 className="section-subtitle text-center dark:text-white">Tous les Objectifs de Développement Durable</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-3 mt-6">
          {sdgList.map((sdg) => (
            <div 
              key={sdg.id} 
              className={`${sdg.color} rounded-lg p-2 flex flex-col items-center justify-center h-24 text-white opacity-80 hover:opacity-100 transition-all ${focusedSdgIds.includes(sdg.id) ? 'ring-2 ring-enactus-yellow' : ''}`}
            >
              <div className="font-bold text-lg">{sdg.id}</div>
              <div className="text-center text-xs">{sdg.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SdgSection;

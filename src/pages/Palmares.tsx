
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Trophy, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface AchievementProps {
  year: number;
  achievement: string;
  country: string;
  flag: string;
  description: string;
}

const achievements: AchievementProps[] = [
  {
    year: 2024,
    achievement: "Vice-world champion",
    country: "Kazakhstan",
    flag: "🇰🇿",
    description: "L'équipe Enactus EMI a brillamment représenté le Maroc à l'Enactus World Cup 2024 au Kazakhstan, se hissant jusqu'à la finale et remportant la place de vice-champions du monde."
  },
  {
    year: 2022,
    achievement: "Semi-finalist",
    country: "Puerto Rico",
    flag: "🇵🇷",
    description: "Notre équipe a atteint les demi-finales de la compétition mondiale Enactus à Puerto Rico, confirmant l'excellence continue d'Enactus EMI sur la scène internationale."
  },
  {
    year: 2020,
    achievement: "Semi-finalist",
    country: "Netherlands",
    flag: "🇳🇱",
    description: "L'édition virtuelle due à la pandémie n'a pas freiné notre équipe qui a atteint les demi-finales de la compétition mondiale."
  },
  {
    year: 2019,
    achievement: "Semi-finalist",
    country: "USA",
    flag: "🇺🇸",
    description: "Enactus EMI a brillé à Silicon Valley en atteignant les demi-finales lors de l'Enactus World Cup aux États-Unis."
  },
  {
    year: 2018,
    achievement: "Fourth in the world",
    country: "USA",
    flag: "🇺🇸",
    description: "Une performance exceptionnelle de notre équipe qui s'est classée quatrième mondiale lors de la compétition aux États-Unis."
  },
  {
    year: 2015,
    achievement: "Third in the world",
    country: "South Africa",
    flag: "🇿🇦",
    description: "Notre équipe est montée sur le podium en se classant troisième mondiale lors de l'Enactus World Cup en Afrique du Sud."
  },
  {
    year: 2014,
    achievement: "Vice-world champion",
    country: "China",
    flag: "🇨🇳",
    description: "Première grande reconnaissance internationale pour Enactus EMI avec une place de vice-champions du monde lors de la compétition en Chine."
  },
  {
    year: 2013,
    achievement: "Semi-finalist",
    country: "Mexico",
    flag: "🇲🇽",
    description: "Première participation aux demi-finales de l'Enactus World Cup pour notre équipe, marquant le début d'une série de succès internationaux."
  }
];

const Palmares = () => {
  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  
  const handleYearClick = (year: number) => {
    setSelectedYear(year === selectedYear ? null : year);
  };
  
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-b from-[#000000] to-[#121212] overflow-hidden">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_#1a237e_0%,_transparent_70%)]"></div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div 
              className="max-w-4xl mx-auto text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-block px-4 py-1 mb-6 bg-enactus-yellow/20 rounded-full text-enactus-yellow border border-enactus-yellow/30">
                <Trophy className="h-4 w-4 inline-block mr-2" />
                <span className="text-sm font-medium">Vice World Champion 2024 🇰🇿</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Transforming Lives<br />Through
                <span className="bg-gradient-to-r from-enactus-yellow to-yellow-500 text-transparent bg-clip-text"> Excellence</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Our journey of global recognition and impact through entrepreneurial action.
              </p>
            </motion.div>
          </div>
        </section>
        
        {/* Timeline Section */}
        <section className="py-16 bg-black">
          <div className="container mx-auto px-4">
            <motion.h2 
              className="text-3xl font-bold text-center mb-16"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Our Global <span className="text-enactus-yellow">Journey</span>
            </motion.h2>
            
            <div className="flex flex-wrap justify-center gap-4 mb-16">
              {[...new Set(achievements.map(a => a.year))].sort((a, b) => b - a).map((year) => (
                <motion.button
                  key={year}
                  className={`px-4 py-2 rounded-full transition-all ${
                    selectedYear === year 
                      ? 'bg-enactus-yellow text-black' 
                      : 'bg-gray-800 hover:bg-gray-700 text-white'
                  }`}
                  onClick={() => handleYearClick(year)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {year}
                </motion.button>
              ))}
            </div>
            
            <div className="max-w-5xl mx-auto">
              {(selectedYear === null ? achievements : achievements.filter(a => a.year === selectedYear))
                .sort((a, b) => b.year - a.year)
                .map((achievement, index) => (
                <motion.div 
                  key={`${achievement.year}-${index}`}
                  className="mb-12 relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex flex-col md:flex-row items-start gap-6">
                    <div className="flex-shrink-0 w-24 md:w-32 text-center">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-enactus-yellow/20 to-enactus-yellow/5 border border-enactus-yellow/30 text-2xl font-bold text-enactus-yellow">
                        {achievement.year}
                      </div>
                    </div>
                    
                    <div className="flex-grow">
                      <Card className="bg-gray-900/50 border border-gray-800 overflow-hidden backdrop-blur-sm hover:bg-gray-900/80 transition-colors">
                        <CardContent className="p-6">
                          <div className="flex flex-wrap items-center gap-3 mb-4">
                            <h3 className="text-2xl font-bold text-white">
                              {achievement.achievement}
                            </h3>
                            <span className="text-3xl">{achievement.flag}</span>
                          </div>
                          
                          <p className="text-gray-400 mb-2">
                            {achievement.country}
                          </p>
                          
                          <p className="text-gray-300">
                            {achievement.description}
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {selectedYear !== null && (
              <div className="text-center mt-10">
                <Button 
                  variant="outline" 
                  className="border-enactus-yellow text-enactus-yellow hover:bg-enactus-yellow hover:text-black"
                  onClick={() => setSelectedYear(null)}
                >
                  View All Achievements
                </Button>
              </div>
            )}
          </div>
        </section>
        
        {/* Stats Section */}
        <section className="py-16 bg-gradient-to-b from-[#121212] to-[#000000]">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Enactus EMI <span className="text-enactus-yellow">in Numbers</span></h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <motion.div 
                whileHover={{ y: -10 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <Card className="bg-gray-900/20 backdrop-blur-sm border border-gray-800/50 overflow-hidden hover:bg-gray-900/40 transition-all">
                  <CardContent className="p-6 text-center relative">
                    <div className="absolute -top-6 -right-6 w-24 h-24 bg-enactus-yellow/10 rounded-full blur-2xl"></div>
                    <div className="text-4xl font-bold text-enactus-yellow mb-2">2</div>
                    <div className="text-xl text-gray-300">Vice-world championships</div>
                  </CardContent>
                </Card>
              </motion.div>
              
              <motion.div 
                whileHover={{ y: -10 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <Card className="bg-gray-900/20 backdrop-blur-sm border border-gray-800/50 overflow-hidden hover:bg-gray-900/40 transition-all">
                  <CardContent className="p-6 text-center relative">
                    <div className="absolute -top-6 -right-6 w-24 h-24 bg-enactus-yellow/10 rounded-full blur-2xl"></div>
                    <div className="text-4xl font-bold text-enactus-yellow mb-2">1</div>
                    <div className="text-xl text-gray-300">World bronze medal</div>
                  </CardContent>
                </Card>
              </motion.div>
              
              <motion.div 
                whileHover={{ y: -10 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <Card className="bg-gray-900/20 backdrop-blur-sm border border-gray-800/50 overflow-hidden hover:bg-gray-900/40 transition-all">
                  <CardContent className="p-6 text-center relative">
                    <div className="absolute -top-6 -right-6 w-24 h-24 bg-enactus-yellow/10 rounded-full blur-2xl"></div>
                    <div className="text-4xl font-bold text-enactus-yellow mb-2">4</div>
                    <div className="text-xl text-gray-300">Semi-final appearances</div>
                  </CardContent>
                </Card>
              </motion.div>
              
              <motion.div 
                whileHover={{ y: -10 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <Card className="bg-gray-900/20 backdrop-blur-sm border border-gray-800/50 overflow-hidden hover:bg-gray-900/40 transition-all">
                  <CardContent className="p-6 text-center relative">
                    <div className="absolute -top-6 -right-6 w-24 h-24 bg-enactus-yellow/10 rounded-full blur-2xl"></div>
                    <div className="text-4xl font-bold text-enactus-yellow mb-2">8</div>
                    <div className="text-xl text-gray-300">World competitions</div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="py-16 bg-black border-t border-gray-800">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Join the <span className="text-enactus-yellow">Adventure</span></h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Do you want to be part of the next generation of Enactors representing Morocco on the international stage?
            </p>
            <Button className="bg-enactus-yellow hover:bg-yellow-500 text-black">
              Join Us <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Palmares;

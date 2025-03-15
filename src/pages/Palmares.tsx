
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Trophy, Calendar } from 'lucide-react';

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
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-enactus-black text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="gradient-text">Palmarès</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Découvrez le parcours exceptionnel d'Enactus EMI sur la scène internationale.
              </p>
              <div className="flex items-center justify-center">
                <Trophy className="h-16 w-16 text-enactus-yellow mr-4" />
                <div className="text-left">
                  <p className="text-2xl font-bold">+10 ans</p>
                  <p className="text-lg text-gray-300">d'excellence internationale</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Timeline Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="section-title">Notre Histoire en Compétitions</h2>
            
            <div className="max-w-4xl mx-auto mt-12 pl-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="timeline-item">
                  <div className="mb-6">
                    <div className="flex items-center mb-3">
                      <Calendar className="h-5 w-5 text-enactus-yellow mr-2" />
                      <span className="text-xl font-bold">{achievement.year}</span>
                      <span className="text-2xl ml-3">{achievement.flag}</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">
                      {achievement.achievement}
                    </h3>
                    <p className="text-gray-600 mb-2">
                      {achievement.country}
                    </p>
                    <p className="text-gray-700">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Stats Section */}
        <section className="py-16 bg-gradient-to-r from-enactus-black to-gray-900 text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Enactus EMI en Chiffres</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl font-bold text-enactus-yellow mb-2">2</div>
                  <div className="text-xl">Vice-championnats mondiaux</div>
                </CardContent>
              </Card>
              
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl font-bold text-enactus-yellow mb-2">1</div>
                  <div className="text-xl">Médaille de bronze mondiale</div>
                </CardContent>
              </Card>
              
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl font-bold text-enactus-yellow mb-2">4</div>
                  <div className="text-xl">Participations aux demi-finales</div>
                </CardContent>
              </Card>
              
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl font-bold text-enactus-yellow mb-2">8</div>
                  <div className="text-xl">Compétitions mondiales</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Rejoignez l'Aventure</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Vous souhaitez faire partie de la prochaine génération d'Enactors qui représenteront le Maroc sur la scène internationale?
            </p>
            <Button className="bg-enactus-yellow hover:bg-yellow-500 text-black">
              Rejoignez-nous
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Palmares;

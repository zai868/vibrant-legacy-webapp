
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Users, Award, Compass, Heart, Calendar, Globe, ChevronRight, Lightbulb } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const WhoAreWe = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#0A0A0A] to-[#0D1B2A] text-white">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-black/40 z-0"></div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div 
              className="max-w-3xl mx-auto text-center"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="gradient-text">Qui Sommes-Nous</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Découvrez l'équipe Enactus EMI, ses membres passionnés et son histoire remarquable.
              </p>
            </motion.div>
          </div>
        </section>
        
        {/* About Us Section */}
        <section className="py-16 bg-gradient-to-br from-[#111827] to-[#1E293B]">
          <div className="container mx-auto px-4">
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ duration: 0.6 }}
            >
              <div>
                <div className="flex items-center mb-4">
                  <Users className="h-8 w-8 text-enactus-yellow mr-3" />
                  <h2 className="text-3xl font-bold">À Propos d'Enactus EMI</h2>
                </div>
                <p className="text-gray-300 mb-4">
                  Enactus EMI est un chapitre local d'Enactus basé à l'École Mohammadia d'Ingénieurs au Maroc. Nous sommes une communauté d'étudiants, d'universitaires et de leaders d'entreprise engagés à utiliser le pouvoir de l'action entrepreneuriale pour créer un monde meilleur et plus durable.
                </p>
                <p className="text-gray-300 mb-4">
                  Notre équipe a remporté plusieurs distinctions internationales, notamment en devenant vice-championne du monde à deux reprises, en 2014 et 2024.
                </p>
                <p className="text-gray-300">
                  À travers nos projets innovants, nous cherchons à résoudre des problèmes sociaux concrets tout en développant les compétences entrepreneuriales de nos membres.
                </p>
              </div>
              <div className="flex justify-center">
                <div className="relative h-80 w-80 rounded-full overflow-hidden border-8 border-enactus-yellow">
                  <div className="absolute inset-0 bg-gradient-to-b from-enactus-yellow/20 to-enactus-yellow/40 flex items-center justify-center">
                    <img 
                      src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=600" 
                      alt="Équipe Enactus EMI" 
                      className="object-cover h-full w-full opacity-80 mix-blend-overlay"
                    />
                    <Users className="absolute h-32 w-32 text-white/80" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
        
        {/* Our Story Section */}
        <section className="py-16 bg-gradient-to-br from-[#0F172A] to-[#1E3A8A]">
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center mb-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center justify-center mb-4">
                <Calendar className="h-8 w-8 text-enactus-yellow mr-3" />
                <h2 className="text-3xl font-bold">Notre Histoire</h2>
              </div>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Depuis sa création, Enactus EMI a traversé un parcours remarquable, marqué par des succès et des réalisations exceptionnelles.
              </p>
            </motion.div>
            
            <div className="max-w-4xl mx-auto">
              <div className="timeline-item">
                <motion.div 
                  className="bg-black/30 p-6 rounded-lg backdrop-blur-sm border border-white/10"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeIn}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  <h3 className="text-xl font-bold mb-2 text-enactus-yellow">2012 - La Naissance</h3>
                  <p className="text-gray-300">
                    Fondation du chapitre Enactus EMI avec une poignée d'étudiants passionnés, déterminés à créer un impact positif sur leur communauté.
                  </p>
                </motion.div>
              </div>
              
              <div className="timeline-item">
                <motion.div 
                  className="bg-black/30 p-6 rounded-lg backdrop-blur-sm border border-white/10"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeIn}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <h3 className="text-xl font-bold mb-2 text-enactus-yellow">2014 - Premier Titre</h3>
                  <p className="text-gray-300">
                    L'équipe devient vice-championne du monde lors de l'Enactus World Cup en Chine, marquant le début d'une série de succès internationaux.
                  </p>
                </motion.div>
              </div>
              
              <div className="timeline-item">
                <motion.div 
                  className="bg-black/30 p-6 rounded-lg backdrop-blur-sm border border-white/10"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeIn}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <h3 className="text-xl font-bold mb-2 text-enactus-yellow">2018-2023 - Évolution</h3>
                  <p className="text-gray-300">
                    Période de croissance et de diversification des projets, avec plusieurs participations remarquées aux compétitions mondiales et de nombreux prix nationaux.
                  </p>
                </motion.div>
              </div>
              
              <div className="timeline-item">
                <motion.div 
                  className="bg-black/30 p-6 rounded-lg backdrop-blur-sm border border-white/10"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeIn}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <h3 className="text-xl font-bold mb-2 text-enactus-yellow">2024 - Consécration</h3>
                  <p className="text-gray-300">
                    L'équipe brille à nouveau sur la scène internationale en devenant vice-championne du monde lors de l'Enactus World Cup au Kazakhstan.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Values Section */}
        <section className="py-16 bg-gradient-to-br from-[#1A202C] to-[#2D3748]">
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center mb-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center justify-center mb-4">
                <Heart className="h-8 w-8 text-enactus-yellow mr-3" />
                <h2 className="text-3xl font-bold">Nos Valeurs</h2>
              </div>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Les principes qui guident notre action et notre engagement quotidien.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <motion.div 
                className="bg-black/30 p-6 rounded-lg backdrop-blur-sm border border-white/10 flex flex-col items-center text-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <Lightbulb className="h-12 w-12 text-enactus-yellow mb-4" />
                <h3 className="text-xl font-bold mb-2">Innovation</h3>
                <p className="text-gray-300">
                  Nous croyons au pouvoir des solutions novatrices pour résoudre les défis sociaux les plus pressants.
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-black/30 p-6 rounded-lg backdrop-blur-sm border border-white/10 flex flex-col items-center text-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Award className="h-12 w-12 text-enactus-yellow mb-4" />
                <h3 className="text-xl font-bold mb-2">Excellence</h3>
                <p className="text-gray-300">
                  Nous visons l'excellence dans chaque projet, chaque présentation et chaque interaction.
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-black/30 p-6 rounded-lg backdrop-blur-sm border border-white/10 flex flex-col items-center text-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Compass className="h-12 w-12 text-enactus-yellow mb-4" />
                <h3 className="text-xl font-bold mb-2">Impact</h3>
                <p className="text-gray-300">
                  Notre mesure de succès est l'impact positif et durable que nous créons dans nos communautés.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Sorties de Prospection */}
        <section className="py-16 bg-gradient-to-br from-[#0B1437] to-[#172554]">
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center mb-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center justify-center mb-4">
                <Compass className="h-8 w-8 text-enactus-yellow mr-3" />
                <h2 className="text-3xl font-bold">Nos Sorties de Prospection</h2>
              </div>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Découvrez comment notre équipe va à la rencontre des communautés pour comprendre leurs besoins et développer des solutions adaptées.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <motion.div 
                className="bg-black/30 overflow-hidden rounded-lg backdrop-blur-sm border border-white/10"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <div className="h-64 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=600" 
                    alt="Sortie de prospection" 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Région de Rabat-Salé</h3>
                  <p className="text-gray-300 mb-4">
                    Notre équipe a effectué plusieurs visites dans les zones rurales entourant Rabat-Salé pour identifier les défis liés à l'accès à l'eau potable.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-400">Octobre 2023</span>
                    <span className="text-sm bg-enactus-yellow/20 text-enactus-yellow px-3 py-1 rounded-full">
                      15 participants
                    </span>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                className="bg-black/30 overflow-hidden rounded-lg backdrop-blur-sm border border-white/10"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="h-64 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600" 
                    alt="Sortie de prospection" 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Région de Marrakech</h3>
                  <p className="text-gray-300 mb-4">
                    Exploration des villages de l'Atlas pour comprendre les défis liés à l'éducation et au développement des compétences numériques des jeunes.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-400">Mars 2024</span>
                    <span className="text-sm bg-enactus-yellow/20 text-enactus-yellow px-3 py-1 rounded-full">
                      22 participants
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Teams Section */}
        <section className="py-16 bg-gradient-to-br from-[#030712] to-[#111827]">
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center mb-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center justify-center mb-4">
                <Globe className="h-8 w-8 text-enactus-yellow mr-3" />
                <h2 className="text-3xl font-bold">Nos Équipes Internationales</h2>
              </div>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Découvrez les équipes qui ont brillamment représenté Enactus EMI sur la scène internationale.
              </p>
            </motion.div>
            
            <Tabs defaultValue="kazakhstan" className="max-w-5xl mx-auto">
              <TabsList className="w-full max-w-md mx-auto bg-black/30 border border-white/10 mb-12">
                <TabsTrigger value="kazakhstan" className="data-[state=active]:bg-enactus-yellow data-[state=active]:text-black">Kazakhstan 2024</TabsTrigger>
                <TabsTrigger value="puertorico" className="data-[state=active]:bg-enactus-yellow data-[state=active]:text-black">Puerto Rico 2022</TabsTrigger>
              </TabsList>
              
              <TabsContent value="kazakhstan">
                <motion.div 
                  className="grid grid-cols-1 md:grid-cols-2 gap-8"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeIn}
                  transition={{ duration: 0.6 }}
                >
                  <Card className="overflow-hidden shadow-lg bg-black/30 backdrop-blur-sm border border-white/10 text-white">
                    <div className="h-64 bg-gradient-to-r from-enactus-yellow to-yellow-600 flex items-center justify-center overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=600" 
                        alt="Équipe Kazakhstan 2024" 
                        className="w-full h-full object-cover mix-blend-overlay"
                      />
                      <span className="absolute text-2xl font-bold text-white">Vice-Champions du Monde 2024</span>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-2xl font-bold mb-4 text-enactus-yellow">Kazakhstan 2024</h3>
                      <p className="text-gray-300">
                        Notre équipe a brillamment représenté le Maroc à l'Enactus World Cup 2024 au Kazakhstan, remportant la place de vice-champions du monde.
                      </p>
                      <div className="mt-6">
                        <h4 className="font-semibold mb-2 text-white">Membres de l'équipe:</h4>
                        <ul className="list-disc list-inside text-gray-300">
                          <li>Mohammed Alaoui - Team Leader</li>
                          <li>Amina Benali - Project Manager</li>
                          <li>Youssef Kadiri - Technical Lead</li>
                          <li>Sofia El Mansouri - Marketing Director</li>
                          <li>Ahmed Tazi - Financial Analyst</li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <div className="flex flex-col space-y-8">
                    <Card className="shadow-md bg-black/30 backdrop-blur-sm border border-white/10 text-white">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold mb-2 text-enactus-yellow">Notre Projet Phare</h3>
                        <p className="text-gray-300">
                          Le projet qui nous a menés à la deuxième place mondiale se concentre sur l'autonomisation des communautés rurales à travers des solutions durables d'accès à l'eau. Cette innovation a déjà impacté plus de 5000 personnes dans la région de l'Atlas.
                        </p>
                      </CardContent>
                    </Card>
                    
                    <Card className="shadow-md bg-black/30 backdrop-blur-sm border border-white/10 text-white">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold mb-2 text-enactus-yellow">L'Expérience Kazakhstan</h3>
                        <p className="text-gray-300">
                          Participer à l'Enactus World Cup au Kazakhstan a été une expérience transformative pour notre équipe. Nous avons eu l'opportunité de présenter notre projet devant un panel d'experts internationaux et d'échanger avec des équipes du monde entier.
                        </p>
                      </CardContent>
                    </Card>
                    
                    <Card className="shadow-md bg-black/30 backdrop-blur-sm border border-white/10 text-white">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold mb-2 text-enactus-yellow">Impact Médiatique</h3>
                        <p className="text-gray-300">
                          Notre performance au Kazakhstan a généré une couverture médiatique significative, mettant en lumière l'entrepreneuriat social au Maroc et inspirant d'autres jeunes à s'engager.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              </TabsContent>
              
              <TabsContent value="puertorico">
                <motion.div 
                  className="grid grid-cols-1 md:grid-cols-2 gap-8"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeIn}
                  transition={{ duration: 0.6 }}
                >
                  <Card className="overflow-hidden shadow-lg bg-black/30 backdrop-blur-sm border border-white/10 text-white">
                    <div className="h-64 bg-gradient-to-r from-blue-600 to-indigo-700 flex items-center justify-center overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600" 
                        alt="Équipe Puerto Rico 2022" 
                        className="w-full h-full object-cover mix-blend-overlay"
                      />
                      <span className="absolute text-2xl font-bold text-white">Semi-Finalistes 2022</span>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-2xl font-bold mb-4 text-blue-400">Puerto Rico 2022</h3>
                      <p className="text-gray-300">
                        Notre équipe a atteint les demi-finales de l'Enactus World Cup 2022 à Puerto Rico, démontrant l'excellence continue d'Enactus EMI.
                      </p>
                      <div className="mt-6">
                        <h4 className="font-semibold mb-2 text-white">Membres de l'équipe:</h4>
                        <ul className="list-disc list-inside text-gray-300">
                          <li>Karim Fathi - Innovation Lead</li>
                          <li>Leila Nadori - Finance Director</li>
                          <li>Omar Benjelloun - Operations Manager</li>
                          <li>Nadia Chaoui - Communications Lead</li>
                          <li>Mehdi Laraki - Technical Developer</li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <div className="flex flex-col space-y-8">
                    <Card className="shadow-md bg-black/30 backdrop-blur-sm border border-white/10 text-white">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold mb-2 text-blue-400">Projet Innovant</h3>
                        <p className="text-gray-300">
                          À Puerto Rico, nous avons présenté notre projet EcoSolutions, qui s'attaque au problème de gestion des déchets dans les zones urbaines. Ce projet a déjà aidé 3000 personnes et continue de croître.
                        </p>
                      </CardContent>
                    </Card>
                    
                    <Card className="shadow-md bg-black/30 backdrop-blur-sm border border-white/10 text-white">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold mb-2 text-blue-400">L'Aventure Caribéenne</h3>
                        <p className="text-gray-300">
                          La compétition à Puerto Rico a été une opportunité exceptionnelle pour notre équipe de se mesurer aux meilleurs projets d'entrepreneuriat social du monde entier.
                        </p>
                      </CardContent>
                    </Card>
                    
                    <Card className="shadow-md bg-black/30 backdrop-blur-sm border border-white/10 text-white">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold mb-2 text-blue-400">Apprentissages Clés</h3>
                        <p className="text-gray-300">
                          Cette expérience nous a enseigné l'importance de la scalabilité des projets et a renforcé notre détermination à développer des solutions entrepreneuriales à impact social positif.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              </TabsContent>
            </Tabs>
            
            <div className="text-center mt-12">
              <Button asChild className="bg-enactus-yellow text-black hover:bg-yellow-500 inline-flex items-center">
                <Link to="/palmares">
                  Voir tout notre palmarès <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default WhoAreWe;

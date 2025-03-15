
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Users, Award, Compass, Heart, Calendar, Globe, ChevronRight, Lightbulb, Handshake } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const WhoAreWe = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-[#0A0A0A] to-[#0D1B2A] overflow-hidden">
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
                <span className="gradient-text">Who We Are</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Discover Enactus EMI, our passionate members, and our remarkable history.
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
                  <h2 className="text-3xl font-bold text-white">About Enactus EMI</h2>
                </div>
                <p className="text-gray-300 mb-4">
                  Enactus EMI is a local chapter of Enactus based at the École Mohammadia d'Ingénieurs in Morocco. We are a community of students, academics, and business leaders committed to using the power of entrepreneurial action to create a better and more sustainable world.
                </p>
                <p className="text-gray-300 mb-4">
                  Our team has won several international distinctions, including becoming vice-world champions twice, in 2014 and 2024.
                </p>
                <p className="text-gray-300">
                  Through our innovative projects, we seek to solve concrete social problems while developing the entrepreneurial skills of our members.
                </p>
              </div>
              <div className="flex justify-center">
                <div className="relative h-80 w-80 rounded-full overflow-hidden border-8 border-enactus-yellow">
                  <div className="absolute inset-0 bg-gradient-to-b from-enactus-yellow/20 to-enactus-yellow/40 flex items-center justify-center">
                    <img 
                      src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=600" 
                      alt="Enactus EMI Team" 
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
                <h2 className="text-3xl font-bold text-white">Our Story</h2>
              </div>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Since its inception, Enactus EMI has gone through a remarkable journey, marked by successes and exceptional achievements.
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
                  <h3 className="text-xl font-bold mb-2 text-enactus-yellow">2012 - The Beginning</h3>
                  <p className="text-gray-300">
                    Founding of the Enactus EMI chapter with a handful of passionate students, determined to create a positive impact on their community.
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
                  <h3 className="text-xl font-bold mb-2 text-enactus-yellow">2014 - First Major Title</h3>
                  <p className="text-gray-300">
                    The team becomes vice-world champions at the Enactus World Cup in China, marking the beginning of a series of international successes.
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
                  <h3 className="text-xl font-bold mb-2 text-enactus-yellow">2018-2023 - Evolution</h3>
                  <p className="text-gray-300">
                    Period of growth and diversification of projects, with several notable participations in world competitions and numerous national awards.
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
                    The team shines again on the international stage by becoming vice-world champions at the Enactus World Cup in Kazakhstan.
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
                <h2 className="text-3xl font-bold text-white">Our Values</h2>
              </div>
              <p className="text-gray-300 max-w-3xl mx-auto">
                The principles that guide our actions and our daily commitment.
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
                <h3 className="text-xl font-bold mb-2 text-white">Innovation</h3>
                <p className="text-gray-300">
                  We believe in the power of innovative solutions to solve the most pressing social challenges.
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
                <h3 className="text-xl font-bold mb-2 text-white">Excellence</h3>
                <p className="text-gray-300">
                  We aim for excellence in every project, every presentation, and every interaction.
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
                <h3 className="text-xl font-bold mb-2 text-white">Impact</h3>
                <p className="text-gray-300">
                  Our measure of success is the positive and lasting impact we create in our communities.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Impact Numbers Section */}
        <section className="py-16 bg-gradient-to-br from-[#1E3A8A] to-[#312E81]">
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
                <Handshake className="h-8 w-8 text-enactus-yellow mr-3" />
                <h2 className="text-3xl font-bold text-white">Our Impact</h2>
              </div>
              <p className="text-gray-300 max-w-3xl mx-auto">
                The difference we've made through our social entrepreneurship projects.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              <motion.div 
                className="bg-black/30 p-6 rounded-lg backdrop-blur-sm border border-white/10 flex flex-col items-center text-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <span className="text-5xl font-bold text-enactus-yellow mb-2">12,500+</span>
                <p className="text-white">Lives Impacted</p>
              </motion.div>
              
              <motion.div 
                className="bg-black/30 p-6 rounded-lg backdrop-blur-sm border border-white/10 flex flex-col items-center text-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <span className="text-5xl font-bold text-enactus-yellow mb-2">25+</span>
                <p className="text-white">Projects Launched</p>
              </motion.div>
              
              <motion.div 
                className="bg-black/30 p-6 rounded-lg backdrop-blur-sm border border-white/10 flex flex-col items-center text-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <span className="text-5xl font-bold text-enactus-yellow mb-2">30+</span>
                <p className="text-white">Communities Served</p>
              </motion.div>
              
              <motion.div 
                className="bg-black/30 p-6 rounded-lg backdrop-blur-sm border border-white/10 flex flex-col items-center text-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <span className="text-5xl font-bold text-enactus-yellow mb-2">200+</span>
                <p className="text-white">Student Entrepreneurs</p>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Field Trips Section */}
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
                <h2 className="text-3xl font-bold text-white">Our Field Trips</h2>
              </div>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Discover how our team meets with communities to understand their needs and develop adapted solutions.
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
                    alt="Field trip" 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-white">Rabat-Salé Region</h3>
                  <p className="text-gray-300 mb-4">
                    Our team made several visits to rural areas around Rabat-Salé to identify challenges related to access to clean water.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-400">October 2023</span>
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
                    alt="Field trip" 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-white">Marrakech Region</h3>
                  <p className="text-gray-300 mb-4">
                    Exploration of Atlas villages to understand the challenges related to education and the development of digital skills for young people.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-400">March 2024</span>
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
                <h2 className="text-3xl font-bold text-white">Our International Teams</h2>
              </div>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Discover the teams that have brilliantly represented Enactus EMI on the international stage.
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
                        alt="Kazakhstan 2024 Team" 
                        className="w-full h-full object-cover mix-blend-overlay"
                      />
                      <span className="absolute text-2xl font-bold text-white">2024 World Vice-Champions</span>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-2xl font-bold mb-4 text-enactus-yellow">Kazakhstan 2024</h3>
                      <p className="text-gray-300">
                        Our team brilliantly represented Morocco at the 2024 Enactus World Cup in Kazakhstan, earning the title of world vice-champions.
                      </p>
                      <div className="mt-6">
                        <h4 className="font-semibold mb-2 text-white">Team members:</h4>
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
                        <h3 className="text-xl font-bold mb-2 text-enactus-yellow">Our Flagship Project</h3>
                        <p className="text-gray-300">
                          The project that led us to second place in the world focuses on empowering rural communities through sustainable water access solutions. This innovation has already impacted more than 5,000 people in the Atlas region.
                        </p>
                      </CardContent>
                    </Card>
                    
                    <Card className="shadow-md bg-black/30 backdrop-blur-sm border border-white/10 text-white">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold mb-2 text-enactus-yellow">The Kazakhstan Experience</h3>
                        <p className="text-gray-300">
                          Participating in the Enactus World Cup in Kazakhstan was a transformative experience for our team. We had the opportunity to present our project to a panel of international experts and interact with teams from around the world.
                        </p>
                      </CardContent>
                    </Card>
                    
                    <Card className="shadow-md bg-black/30 backdrop-blur-sm border border-white/10 text-white">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold mb-2 text-enactus-yellow">Media Impact</h3>
                        <p className="text-gray-300">
                          Our performance in Kazakhstan generated significant media coverage, highlighting social entrepreneurship in Morocco and inspiring other young people to get involved.
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
                        alt="Puerto Rico 2022 Team" 
                        className="w-full h-full object-cover mix-blend-overlay"
                      />
                      <span className="absolute text-2xl font-bold text-white">2022 Semi-Finalists</span>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-2xl font-bold mb-4 text-blue-400">Puerto Rico 2022</h3>
                      <p className="text-gray-300">
                        Our team reached the semi-finals of the 2022 Enactus World Cup in Puerto Rico, demonstrating Enactus EMI's continued excellence.
                      </p>
                      <div className="mt-6">
                        <h4 className="font-semibold mb-2 text-white">Team members:</h4>
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
                        <h3 className="text-xl font-bold mb-2 text-blue-400">Innovative Project</h3>
                        <p className="text-gray-300">
                          In Puerto Rico, we presented our EcoSolutions project, which tackles the problem of waste management in urban areas. This project has already helped 3,000 people and continues to grow.
                        </p>
                      </CardContent>
                    </Card>
                    
                    <Card className="shadow-md bg-black/30 backdrop-blur-sm border border-white/10 text-white">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold mb-2 text-blue-400">The Caribbean Adventure</h3>
                        <p className="text-gray-300">
                          The competition in Puerto Rico was an exceptional opportunity for our team to measure ourselves against the best social entrepreneurship projects in the world.
                        </p>
                      </CardContent>
                    </Card>
                    
                    <Card className="shadow-md bg-black/30 backdrop-blur-sm border border-white/10 text-white">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold mb-2 text-blue-400">Key Learnings</h3>
                        <p className="text-gray-300">
                          This experience taught us the importance of project scalability and strengthened our determination to develop entrepreneurial solutions with positive social impact.
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
                  See all our achievements <ChevronRight className="ml-2 h-4 w-4" />
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

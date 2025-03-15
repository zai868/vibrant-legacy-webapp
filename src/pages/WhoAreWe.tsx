
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Users } from 'lucide-react';

const WhoAreWe = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-enactus-black text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="gradient-text">Qui Sommes-Nous</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Découvrez l'équipe Enactus EMI, ses membres passionnés et son histoire remarquable.
              </p>
            </div>
          </div>
        </section>
        
        {/* About Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">À Propos d'Enactus EMI</h2>
                <p className="text-gray-700 mb-4">
                  Enactus EMI est un chapitre local d'Enactus basé à l'École Mohammadia d'Ingénieurs au Maroc. Nous sommes une communauté d'étudiants, d'universitaires et de leaders d'entreprise engagés à utiliser le pouvoir de l'action entrepreneuriale pour créer un monde meilleur et plus durable.
                </p>
                <p className="text-gray-700 mb-4">
                  Notre équipe a remporté plusieurs distinctions internationales, notamment en devenant vice-championne du monde à deux reprises, en 2014 et 2024.
                </p>
                <p className="text-gray-700">
                  À travers nos projets innovants, nous cherchons à résoudre des problèmes sociaux concrets tout en développant les compétences entrepreneuriales de nos membres.
                </p>
              </div>
              <div className="flex justify-center">
                <div className="relative h-80 w-80 rounded-full overflow-hidden border-8 border-enactus-yellow">
                  <div className="absolute inset-0 bg-gradient-to-b from-enactus-yellow/20 to-enactus-yellow flex items-center justify-center">
                    <Users className="h-32 w-32 text-enactus-black/70" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Teams Section */}
        <section className="py-16 bg-gray-50 dark:bg-enactus-dark">
          <div className="container mx-auto px-4">
            <h2 className="section-title dark:text-white">Nos Équipes Internationales</h2>
            
            <Tabs defaultValue="kazakhstan" className="max-w-5xl mx-auto">
              <TabsList className="grid w-full grid-cols-2 mb-12">
                <TabsTrigger value="kazakhstan">Kazakhstan 2024</TabsTrigger>
                <TabsTrigger value="puertorico">Puerto Rico 2022</TabsTrigger>
              </TabsList>
              
              <TabsContent value="kazakhstan">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <Card className="overflow-hidden shadow-lg">
                    <div className="h-64 bg-gradient-to-r from-yellow-400 to-enactus-yellow flex items-center justify-center">
                      <span className="text-2xl font-bold text-enactus-black">Équipe Kazakhstan 2024</span>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-2xl font-bold mb-4">Vice-Champions du Monde</h3>
                      <p className="text-gray-700 dark:text-gray-300">
                        Notre équipe a brillamment représenté le Maroc à l'Enactus World Cup 2024 au Kazakhstan, remportant la place de vice-champions du monde.
                      </p>
                      <div className="mt-6">
                        <h4 className="font-semibold mb-2">Membres de l'équipe:</h4>
                        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
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
                    <Card className="shadow-md">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold mb-2">Notre Projet Phare</h3>
                        <p className="text-gray-700 dark:text-gray-300">
                          Le projet qui nous a menés à la deuxième place mondiale se concentre sur [description du projet]. Cette innovation a déjà impacté plus de X personnes dans la région de [région].
                        </p>
                      </CardContent>
                    </Card>
                    
                    <Card className="shadow-md">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold mb-2">L'Expérience Kazakhstan</h3>
                        <p className="text-gray-700 dark:text-gray-300">
                          Participer à l'Enactus World Cup au Kazakhstan a été une expérience transformative pour notre équipe. Nous avons eu l'opportunité de présenter notre projet devant un panel d'experts internationaux et d'échanger avec des équipes du monde entier.
                        </p>
                      </CardContent>
                    </Card>
                    
                    <Card className="shadow-md">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold mb-2">Impact Médiatique</h3>
                        <p className="text-gray-700 dark:text-gray-300">
                          Notre performance au Kazakhstan a généré une couverture médiatique significative, mettant en lumière l'entrepreneuriat social au Maroc et inspirant d'autres jeunes à s'engager.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="puertorico">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <Card className="overflow-hidden shadow-lg">
                    <div className="h-64 bg-gradient-to-r from-blue-500 to-teal-400 flex items-center justify-center">
                      <span className="text-2xl font-bold text-white">Équipe Puerto Rico 2022</span>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-2xl font-bold mb-4">Semi-Finalistes</h3>
                      <p className="text-gray-700 dark:text-gray-300">
                        Notre équipe a atteint les demi-finales de l'Enactus World Cup 2022 à Puerto Rico, démontrant l'excellence continue d'Enactus EMI.
                      </p>
                      <div className="mt-6">
                        <h4 className="font-semibold mb-2">Membres de l'équipe:</h4>
                        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
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
                    <Card className="shadow-md">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold mb-2">Projet Innovant</h3>
                        <p className="text-gray-700 dark:text-gray-300">
                          À Puerto Rico, nous avons présenté notre projet [nom du projet], qui s'attaque au problème de [description du problème]. Ce projet a déjà aidé X personnes et continue de croître.
                        </p>
                      </CardContent>
                    </Card>
                    
                    <Card className="shadow-md">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold mb-2">L'Aventure Caribéenne</h3>
                        <p className="text-gray-700 dark:text-gray-300">
                          La compétition à Puerto Rico a été une opportunité exceptionnelle pour notre équipe de se mesurer aux meilleurs projets d'entrepreneuriat social du monde entier.
                        </p>
                      </CardContent>
                    </Card>
                    
                    <Card className="shadow-md">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold mb-2">Apprentissages Clés</h3>
                        <p className="text-gray-700 dark:text-gray-300">
                          Cette expérience nous a enseigné l'importance de [apprentissage clé] et a renforcé notre détermination à développer des solutions entrepreneuriales à impact social positif.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default WhoAreWe;

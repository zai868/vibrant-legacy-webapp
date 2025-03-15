
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface ProjectProps {
  title: string;
  description: string;
  image: string;
  sdgs: number[];
  status: "En cours" | "Terminé" | "En développement";
  impact: string;
}

const projects: ProjectProps[] = [
  {
    title: "Project Name 1",
    description: "Description détaillée du projet, son objectif, et son impact sur la communauté ciblée.",
    image: "https://images.unsplash.com/photo-1556761175-129418cb2dfe?q=80&w=2000",
    sdgs: [1, 4, 8],
    status: "En cours",
    impact: "500+ bénéficiaires"
  },
  {
    title: "Project Name 2",
    description: "Description détaillée du projet, son objectif, et son impact sur la communauté ciblée.",
    image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?q=80&w=2000",
    sdgs: [10, 12],
    status: "Terminé",
    impact: "1200+ bénéficiaires"
  },
  {
    title: "Project Name 3",
    description: "Description détaillée du projet, son objectif, et son impact sur la communauté ciblée.",
    image: "https://images.unsplash.com/photo-1560438718-eb61ede255eb?q=80&w=2000",
    sdgs: [4, 8, 13],
    status: "En développement",
    impact: "Objectif: 300+ bénéficiaires"
  }
];

const OurProjects = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-enactus-black text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="gradient-text">Nos Projets</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Découvrez les projets innovants développés par Enactus EMI pour créer un impact social positif.
              </p>
            </div>
          </div>
        </section>
        
        {/* Projects Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <Card key={index} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle>{project.title}</CardTitle>
                      <Badge variant={
                        project.status === "En cours" ? "default" : 
                        project.status === "Terminé" ? "secondary" : "outline"
                      }>
                        {project.status}
                      </Badge>
                    </div>
                    <CardDescription>Impact: {project.impact}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.sdgs.map(sdg => (
                        <Badge key={sdg} variant="outline" className="bg-primary/10">
                          SDG {sdg}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="ghost" className="w-full text-enactus-yellow hover:text-enactus-yellow/90 hover:bg-enactus-yellow/10">
                      En savoir plus <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-r from-enactus-black to-gray-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Vous avez une idée de projet?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Nous sommes toujours à la recherche de nouvelles idées et de nouveaux collaborateurs pour nos projets.
            </p>
            <Button className="bg-enactus-yellow hover:bg-yellow-500 text-black">
              Contactez-nous
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default OurProjects;

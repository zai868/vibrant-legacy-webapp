
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
  status: "In progress" | "Completed" | "In development";
  impact: string;
}

const projects: ProjectProps[] = [
  {
    title: "Project Name 1",
    description: "Detailed description of the project, its objective, and its impact on the target community.",
    image: "https://images.unsplash.com/photo-1556761175-129418cb2dfe?q=80&w=2000",
    sdgs: [1, 4, 8],
    status: "In progress",
    impact: "500+ beneficiaries"
  },
  {
    title: "Project Name 2",
    description: "Detailed description of the project, its objective, and its impact on the target community.",
    image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?q=80&w=2000",
    sdgs: [10, 12],
    status: "Completed",
    impact: "1200+ beneficiaries"
  },
  {
    title: "Project Name 3",
    description: "Detailed description of the project, its objective, and its impact on the target community.",
    image: "https://images.unsplash.com/photo-1560438718-eb61ede255eb?q=80&w=2000",
    sdgs: [4, 8, 13],
    status: "In development",
    impact: "Target: 300+ beneficiaries"
  }
];

const OurProjects = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow bg-gradient-to-br from-[#0A0A0A] to-[#0D1B2A] text-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-[#000000] to-[#121212] py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="gradient-text">Our Projects</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Discover the innovative projects developed by Enactus EMI to create positive social impact.
              </p>
            </div>
          </div>
        </section>
        
        {/* Projects Section */}
        <section className="py-16 bg-gradient-to-br from-[#0A0A0A] to-[#0D1B2A]">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <Card key={index} className="bg-black/40 backdrop-blur-sm border border-gray-800 overflow-hidden shadow-lg hover:shadow-xl transition-shadow text-white">
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
                        project.status === "In progress" ? "default" : 
                        project.status === "Completed" ? "secondary" : "outline"
                      }>
                        {project.status}
                      </Badge>
                    </div>
                    <CardDescription className="text-gray-400">Impact: {project.impact}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.sdgs.map(sdg => (
                        <Badge key={sdg} variant="outline" className="bg-primary/10 border-primary/30">
                          SDG {sdg}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="ghost" className="w-full text-enactus-yellow hover:text-enactus-yellow/90 hover:bg-enactus-yellow/10">
                      Learn more <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-b from-[#0D1B2A] to-[#000000]">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Do you have a project idea?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              We are always looking for new ideas and collaborators for our projects.
            </p>
            <Button className="bg-enactus-yellow hover:bg-yellow-500 text-black">
              Contact Us
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default OurProjects;


import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';

const OurMission = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow bg-gradient-to-br from-[#0A0A0A] to-[#0D1B2A] text-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-[#000000] to-[#121212] text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="gradient-text">Our Mission</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Discover what drives Enactus EMI and how we work to create positive impact.
              </p>
            </div>
          </div>
        </section>
        
        {/* Mission Statement */}
        <section className="py-16 bg-gradient-to-br from-[#0A0A0A] to-[#0D1B2A]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-8">Our Purpose</h2>
              <blockquote className="text-2xl font-light italic text-gray-300 mb-8">
                "We believe in the ability of students to change the world through entrepreneurial action."
              </blockquote>
              <p className="text-lg text-gray-300 mb-6">
                Enactus EMI is committed to empowering students to become agents of change, using entrepreneurship as a tool to create positive and lasting social impact.
              </p>
              <p className="text-lg text-gray-300">
                We are determined to develop the next generation of leaders who combine academic excellence, innovation, and social responsibility.
              </p>
            </div>
          </div>
        </section>
        
        {/* Values Section */}
        <section className="py-16 bg-gradient-to-b from-[#0D1B2A] to-[#0A0A0A]">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="bg-black/40 backdrop-blur-sm border border-gray-800 overflow-hidden hover:bg-black/60 transition-all">
                <CardContent className="p-6 text-center">
                  <div className="h-16 w-16 bg-enactus-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-enactus-black">1</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Innovation</h3>
                  <p className="text-gray-300">
                    We encourage creative thinking and innovative approaches to social problems, constantly seeking new solutions.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-black/40 backdrop-blur-sm border border-gray-800 overflow-hidden hover:bg-black/60 transition-all">
                <CardContent className="p-6 text-center">
                  <div className="h-16 w-16 bg-enactus-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-enactus-black">2</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Impact</h3>
                  <p className="text-gray-300">
                    We strive to create measurable and meaningful change in the communities we serve.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-black/40 backdrop-blur-sm border border-gray-800 overflow-hidden hover:bg-black/60 transition-all">
                <CardContent className="p-6 text-center">
                  <div className="h-16 w-16 bg-enactus-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-enactus-black">3</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Collaboration</h3>
                  <p className="text-gray-300">
                    We believe in the power of teamwork and strategic partnerships to maximize our social impact.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Vision & Objectives */}
        <section className="py-16 bg-gradient-to-br from-[#0A0A0A] to-[#0D1B2A]">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
                <p className="text-gray-300 mb-6">
                  We aspire to be recognized as the standard-bearer of student social entrepreneurship in Morocco and around the world. Our vision is to create a community of student leaders capable of transforming innovative ideas into sustainable social enterprises.
                </p>
                <p className="text-gray-300">
                  We want to inspire a generation that not only dreams of a better world but takes concrete action to create it.
                </p>
              </div>
              
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Objectives</h2>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="h-6 w-6 bg-enactus-yellow rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <span className="text-sm font-bold text-enactus-black">1</span>
                    </span>
                    <p className="text-gray-300">
                      Develop entrepreneurial projects with positive and measurable social impact.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <span className="h-6 w-6 bg-enactus-yellow rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <span className="text-sm font-bold text-enactus-black">2</span>
                    </span>
                    <p className="text-gray-300">
                      Train students in entrepreneurial skills and ethical leadership.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <span className="h-6 w-6 bg-enactus-yellow rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <span className="text-sm font-bold text-enactus-black">3</span>
                    </span>
                    <p className="text-gray-300">
                      Create sustainable partnerships with businesses, universities, and international organizations.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <span className="h-6 w-6 bg-enactus-yellow rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <span className="text-sm font-bold text-enactus-black">4</span>
                    </span>
                    <p className="text-gray-300">
                      Represent Morocco in international Enactus competitions.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default OurMission;

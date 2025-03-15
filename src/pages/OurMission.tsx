
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';

const OurMission = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-enactus-black text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="gradient-text">Notre Mission</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Découvrez ce qui motive Enactus EMI et comment nous travaillons à créer un impact positif.
              </p>
            </div>
          </div>
        </section>
        
        {/* Mission Statement */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-8">Notre Raison d'Être</h2>
              <blockquote className="text-2xl font-light italic text-gray-700 mb-8">
                "Nous croyons en la capacité des étudiants à changer le monde à travers l'action entrepreneuriale."
              </blockquote>
              <p className="text-lg text-gray-700 mb-6">
                Enactus EMI s'engage à autonomiser les étudiants pour qu'ils deviennent des agents de changement, en utilisant l'entrepreneuriat comme outil pour créer un impact social positif et durable.
              </p>
              <p className="text-lg text-gray-700">
                Nous sommes déterminés à développer la prochaine génération de leaders qui combinent excellence académique, innovation et sens des responsabilités sociales.
              </p>
            </div>
          </div>
        </section>
        
        {/* Values Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Nos Valeurs</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="bg-white shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="h-16 w-16 bg-enactus-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-enactus-black">1</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Innovation</h3>
                  <p className="text-gray-700">
                    Nous encourageons la pensée créative et l'approche novatrice des problèmes sociaux, en cherchant constamment de nouvelles solutions.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-white shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="h-16 w-16 bg-enactus-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-enactus-black">2</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Impact</h3>
                  <p className="text-gray-700">
                    Nous nous efforçons de créer un changement mesurable et significatif dans les communautés que nous servons.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-white shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="h-16 w-16 bg-enactus-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-enactus-black">3</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Collaboration</h3>
                  <p className="text-gray-700">
                    Nous croyons au pouvoir du travail d'équipe et des partenariats stratégiques pour maximiser notre impact social.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Vision & Objectives */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Notre Vision</h2>
                <p className="text-gray-700 mb-6">
                  Nous aspirons à être reconnus comme le porte-étendard de l'entrepreneuriat social étudiant au Maroc et dans le monde. Notre vision est de créer une communauté d'étudiants leaders capables de transformer des idées innovantes en entreprises sociales durables.
                </p>
                <p className="text-gray-700">
                  Nous voulons inspirer une génération qui ne se contente pas de rêver d'un monde meilleur, mais qui agit concrètement pour le créer.
                </p>
              </div>
              
              <div>
                <h2 className="text-3xl font-bold mb-6">Nos Objectifs</h2>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="h-6 w-6 bg-enactus-yellow rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <span className="text-sm font-bold text-enactus-black">1</span>
                    </span>
                    <p className="text-gray-700">
                      Développer des projets entrepreneuriaux à impact social positif et mesurable.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <span className="h-6 w-6 bg-enactus-yellow rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <span className="text-sm font-bold text-enactus-black">2</span>
                    </span>
                    <p className="text-gray-700">
                      Former des étudiants aux compétences entrepreneuriales et au leadership éthique.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <span className="h-6 w-6 bg-enactus-yellow rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <span className="text-sm font-bold text-enactus-black">3</span>
                    </span>
                    <p className="text-gray-700">
                      Créer des partenariats durables avec des entreprises, des universités et des organisations internationales.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <span className="h-6 w-6 bg-enactus-yellow rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <span className="text-sm font-bold text-enactus-black">4</span>
                    </span>
                    <p className="text-gray-700">
                      Représenter le Maroc dans les compétitions internationales d'Enactus.
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

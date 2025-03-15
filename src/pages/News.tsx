
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight } from 'lucide-react';

interface NewsItemProps {
  title: string;
  excerpt: string;
  date: string;
  image: string;
  source?: string;
  category: "Événement" | "Presse" | "Article";
  url?: string;
}

const newsItems: NewsItemProps[] = [
  {
    title: "Enactus EMI remporte la seconde place à l'Enactus World Cup 2024",
    excerpt: "L'équipe d'Enactus EMI a brillamment représenté le Maroc lors de la compétition mondiale au Kazakhstan.",
    date: "24 octobre 2024",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2000",
    source: "Le Matin",
    category: "Presse",
    url: "#"
  },
  {
    title: "Recrutement ouvert pour rejoindre l'équipe Enactus EMI 2025",
    excerpt: "Vous êtes étudiant à l'EMI et vous souhaitez faire partie de l'aventure Enactus? Les inscriptions sont ouvertes!",
    date: "15 novembre 2024",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2000",
    category: "Événement",
    url: "#"
  },
  {
    title: "Lancement du nouveau projet d'Enactus EMI: 'Innovation for Tomorrow'",
    excerpt: "Découvrez notre nouveau projet qui vise à résoudre le problème de [description du problème] grâce à une approche innovante.",
    date: "5 novembre 2024",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2000",
    category: "Article",
    url: "#"
  },
  {
    title: "Enactus EMI organise une conférence sur l'entrepreneuriat social",
    excerpt: "Ne manquez pas notre conférence annuelle qui réunira des experts et des entrepreneurs sociaux de renom.",
    date: "12 décembre 2024",
    image: "https://images.unsplash.com/photo-1475721027785-f74ec9904410?q=80&w=2000",
    category: "Événement",
    url: "#"
  },
  {
    title: "Interview exclusive avec le président d'Enactus EMI",
    excerpt: "Dans cette interview, notre président partage sa vision pour l'avenir d'Enactus EMI et les projets en cours.",
    date: "20 octobre 2024",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=2000",
    source: "Aujourd'hui Maroc",
    category: "Presse",
    url: "#"
  },
  {
    title: "Comment Enactus EMI transforme l'entrepreneuriat étudiant au Maroc",
    excerpt: "Un article détaillé sur l'impact d'Enactus EMI dans le développement de l'esprit entrepreneurial chez les étudiants marocains.",
    date: "8 novembre 2024",
    image: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?q=80&w=2000",
    category: "Article",
    url: "#"
  }
];

const News = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-enactus-black text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="gradient-text">Actualité</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Restez informés des dernières nouvelles, événements et couverture médiatique d'Enactus EMI.
              </p>
            </div>
          </div>
        </section>
        
        {/* News Tabs Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="all" className="max-w-5xl mx-auto">
              <TabsList className="grid w-full grid-cols-4 mb-12">
                <TabsTrigger value="all">Tout</TabsTrigger>
                <TabsTrigger value="events">Événements</TabsTrigger>
                <TabsTrigger value="press">Presse</TabsTrigger>
                <TabsTrigger value="articles">Articles</TabsTrigger>
              </TabsList>
              
              <TabsContent value="all">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {newsItems.map((item, index) => (
                    <NewsCard key={index} news={item} />
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="events">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {newsItems.filter(item => item.category === "Événement").map((item, index) => (
                    <NewsCard key={index} news={item} />
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="press">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {newsItems.filter(item => item.category === "Presse").map((item, index) => (
                    <NewsCard key={index} news={item} />
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="articles">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {newsItems.filter(item => item.category === "Article").map((item, index) => (
                    <NewsCard key={index} news={item} />
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
        
        {/* Newsletter Section */}
        <section className="py-16 bg-gradient-to-r from-enactus-black to-gray-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Restez informés</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Abonnez-vous à notre newsletter pour ne manquer aucune actualité d'Enactus EMI.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Votre email" 
                className="px-4 py-2 rounded-md bg-white/10 border border-white/20 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-enactus-yellow"
              />
              <Button className="bg-enactus-yellow hover:bg-yellow-500 text-black">
                S'abonner
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

// News Card Component
const NewsCard = ({ news }: { news: NewsItemProps }) => {
  return (
    <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow h-full flex flex-col">
      <div className="h-48 overflow-hidden">
        <img 
          src={news.image} 
          alt={news.title} 
          className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
        />
      </div>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <Badge variant={
            news.category === "Événement" ? "default" : 
            news.category === "Presse" ? "secondary" : "outline"
          }>
            {news.category}
          </Badge>
          <span className="text-sm text-gray-500">{news.date}</span>
        </div>
        <CardTitle className="text-xl mt-2">{news.title}</CardTitle>
        {news.source && (
          <CardDescription>Source: {news.source}</CardDescription>
        )}
      </CardHeader>
      <CardContent className="pb-2 flex-grow">
        <p className="text-gray-700">{news.excerpt}</p>
      </CardContent>
      <CardFooter>
        <Button asChild variant="ghost" className="w-full text-enactus-yellow hover:text-enactus-yellow/90 hover:bg-enactus-yellow/10">
          <a href={news.url || "#"}>
            Lire la suite <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default News;

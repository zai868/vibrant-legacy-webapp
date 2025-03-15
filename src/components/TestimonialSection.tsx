
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface TestimonialProps {
  quote: string;
  name: string;
  role: string;
  image?: string;
  team: string;
}

const testimonials: TestimonialProps[] = [
  {
    quote: "Représenter le Maroc à l'Enactus World Cup a été l'une des expériences les plus enrichissantes de ma vie. Notre équipe a démontré que l'innovation sociale marocaine peut briller sur la scène mondiale.",
    name: "Mohammed Alaoui",
    role: "Team Leader",
    team: "Kazakhstan 2024",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=200"
  },
  {
    quote: "Devenir vice-champions du monde à Enactus World Cup 2024 est le résultat de plusieurs années de travail acharné. Notre projet a non seulement impressionné le jury, mais il continue d'avoir un impact réel sur les communautés que nous servons.",
    name: "Amina Benali",
    role: "Project Manager",
    team: "Kazakhstan 2024",
    image: "https://images.unsplash.com/photo-1554727242-741c14fa561c?q=80&w=200"
  },
  {
    quote: "Notre expérience à Puerto Rico a été transformatrice. Nous avons appris l'importance de la collaboration internationale et sommes revenus avec une vision encore plus grande pour nos projets.",
    name: "Karim Fathi",
    role: "Innovation Lead",
    team: "Puerto Rico 2022",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200"
  },
  {
    quote: "Enactus m'a permis de développer des compétences que je n'aurais jamais pu acquérir ailleurs. Notre parcours vers Puerto Rico a été rempli de défis, mais chacun d'eux nous a rendus plus forts.",
    name: "Leila Nadori",
    role: "Finance Director",
    team: "Puerto Rico 2022",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200"
  }
];

const TestimonialSection = () => {
  return (
    <section className="py-16 bg-white dark:bg-enactus-dark">
      <div className="container mx-auto px-4">
        <h2 className="section-title dark:text-white">
          Témoignages de Nos Équipes
        </h2>
        
        <Tabs defaultValue="Kazakhstan 2024" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="Kazakhstan 2024">Kazakhstan 2024</TabsTrigger>
            <TabsTrigger value="Puerto Rico 2022">Puerto Rico 2022</TabsTrigger>
          </TabsList>
          
          <TabsContent value="Kazakhstan 2024" className="space-y-8">
            {testimonials
              .filter(t => t.team === "Kazakhstan 2024")
              .map((testimonial, index) => (
                <div key={index} className="bg-gray-50 dark:bg-enactus-black rounded-lg p-6 shadow-md">
                  <div className="flex items-start">
                    <Avatar className="h-12 w-12 mr-4">
                      <AvatarImage src={testimonial.image} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <blockquote className="text-gray-700 dark:text-gray-300 mb-4">
                        "{testimonial.quote}"
                      </blockquote>
                      <div>
                        <p className="font-semibold text-enactus-black dark:text-white">{testimonial.name}</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </TabsContent>
          
          <TabsContent value="Puerto Rico 2022" className="space-y-8">
            {testimonials
              .filter(t => t.team === "Puerto Rico 2022")
              .map((testimonial, index) => (
                <div key={index} className="bg-gray-50 dark:bg-enactus-black rounded-lg p-6 shadow-md">
                  <div className="flex items-start">
                    <Avatar className="h-12 w-12 mr-4">
                      <AvatarImage src={testimonial.image} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <blockquote className="text-gray-700 dark:text-gray-300 mb-4">
                        "{testimonial.quote}"
                      </blockquote>
                      <div>
                        <p className="font-semibold text-enactus-black dark:text-white">{testimonial.name}</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default TestimonialSection;

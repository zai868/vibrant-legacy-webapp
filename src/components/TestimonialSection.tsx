
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface TestimonialProps {
  quote: string;
  name: string;
  role: string;
  image: string;
  team: string;
}

const testimonials: TestimonialProps[] = [
  {
    quote: "At the World Cup, our presentation showcased how innovation and entrepreneurship can solve complex social challenges. The judges were impressed by our scalable solutions.",
    name: "Youssef El Amrani",
    role: "Technical Lead, Enactus EMI",
    team: "Kazakhstan 2024",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=200"
  },
  {
    quote: "Becoming vice-champions of the world at Enactus World Cup 2024 is the result of years of hard work. Our project not only impressed the jury but continues to have a real impact on the communities we serve.",
    name: "Amina Benali",
    role: "Project Manager, Enactus EMI",
    team: "Kazakhstan 2024",
    image: "https://images.unsplash.com/photo-1554727242-741c14fa561c?q=80&w=200"
  },
  {
    quote: "Our experience in Puerto Rico was transformative. We learned the importance of international collaboration and returned with an even bigger vision for our projects.",
    name: "Karim Fathi",
    role: "Innovation Lead, Enactus EMI",
    team: "Puerto Rico 2022",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200"
  },
  {
    quote: "Enactus has allowed me to develop skills I could never have acquired elsewhere. Our journey to Puerto Rico was filled with challenges, but each one made us stronger.",
    name: "Leila Nadori",
    role: "Finance Director, Enactus EMI",
    team: "Puerto Rico 2022",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200"
  }
];

const TestimonialSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeTeam, setActiveTeam] = useState("Kazakhstan 2024");
  
  const filteredTestimonials = testimonials.filter(t => t.team === activeTeam);
  
  const handlePrev = () => {
    setActiveIndex(prev => 
      prev === 0 ? filteredTestimonials.length - 1 : prev - 1
    );
  };
  
  const handleNext = () => {
    setActiveIndex(prev => 
      prev === filteredTestimonials.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section className="py-20 bg-gradient-to-br from-[#0A0A0A] to-[#0D1B2A]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-4">
          <span className="inline-block px-4 py-1.5 bg-enactus-yellow/20 text-enactus-yellow rounded-full text-sm font-medium mb-4">
            Team Voices
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">
            World Cup {activeTeam.split(" ")[1]} Experience
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Hear from our team members who represented Enactus EMI at the World Cup in {activeTeam.split(" ")[0]}
          </p>
        </div>
        
        <div className="mt-16 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="bg-gradient-to-r from-black/40 to-black/20 rounded-xl overflow-hidden h-[28rem]">
              <img 
                src={filteredTestimonials[activeIndex]?.image} 
                alt={filteredTestimonials[activeIndex]?.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="bg-[#111111]/60 backdrop-blur-sm rounded-xl p-8 flex flex-col h-[28rem]">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-enactus-yellow text-enactus-yellow" />
                ))}
              </div>
              
              <blockquote className="text-xl md:text-2xl text-white italic leading-relaxed mb-6 flex-grow">
                "{filteredTestimonials[activeIndex]?.quote}"
              </blockquote>
              
              <div>
                <h4 className="text-xl font-bold text-white">
                  {filteredTestimonials[activeIndex]?.name}
                </h4>
                <p className="text-gray-400">
                  {filteredTestimonials[activeIndex]?.role}
                </p>
              </div>
            </div>
          </div>
          
          <div className="flex justify-between items-center mt-10">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={handlePrev}
              className="rounded-full border-gray-700 bg-black/50 text-white hover:bg-black/80"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            
            <div className="flex space-x-2">
              {filteredTestimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`w-2 h-2 rounded-full ${
                    idx === activeIndex ? "bg-enactus-yellow" : "bg-gray-600"
                  }`}
                />
              ))}
            </div>
            
            <Button 
              variant="outline" 
              size="icon" 
              onClick={handleNext}
              className="rounded-full border-gray-700 bg-black/50 text-white hover:bg-black/80"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
          
          <div className="flex justify-center mt-8 space-x-4">
            <Button
              variant={activeTeam === "Kazakhstan 2024" ? "default" : "outline"}
              onClick={() => {
                setActiveTeam("Kazakhstan 2024");
                setActiveIndex(0);
              }}
              className={activeTeam === "Kazakhstan 2024" ? "bg-enactus-yellow text-black hover:bg-yellow-500" : "text-white border-gray-700"}
            >
              Kazakhstan 2024
            </Button>
            <Button
              variant={activeTeam === "Puerto Rico 2022" ? "default" : "outline"}
              onClick={() => {
                setActiveTeam("Puerto Rico 2022");
                setActiveIndex(0);
              }}
              className={activeTeam === "Puerto Rico 2022" ? "bg-enactus-yellow text-black hover:bg-yellow-500" : "text-white border-gray-700"}
            >
              Puerto Rico 2022
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;

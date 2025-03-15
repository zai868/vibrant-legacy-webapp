
import React from 'react';
import { motion } from 'framer-motion';

interface QuoteProps {
  text: string;
  author?: string;
}

const QuoteSection = () => {
  const quotes: QuoteProps[] = [
    {
      text: "Pushing boundaries, driving change.",
      author: "Enactus EMI"
    },
    {
      text: "Once an Enactor, always an Enactor.",
      author: "Enactus EMI"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-enactus-black to-enactus-dark text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {quotes.map((quote, index) => (
            <div 
              key={index}
              className="my-8 text-center p-8 rounded-xl backdrop-blur-sm bg-white/5 border border-white/10"
            >
              <blockquote className="text-2xl md:text-3xl italic font-light mb-4">
                "{quote.text}"
              </blockquote>
              {quote.author && (
                <cite className="text-lg text-enactus-yellow font-medium">— {quote.author}</cite>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;

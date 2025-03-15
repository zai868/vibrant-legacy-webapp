
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
    <section className="py-20 bg-gradient-to-b from-[#0A0A0A] to-[#0D1B2A] text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-blue-900/20 to-transparent opacity-50"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {quotes.map((quote, index) => (
            <motion.div 
              key={index}
              className="my-8 text-center p-8 rounded-xl backdrop-blur-sm bg-black/30 border border-white/10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <blockquote className="text-2xl md:text-3xl italic font-light mb-4">
                "{quote.text}"
              </blockquote>
              {quote.author && (
                <cite className="text-lg text-enactus-yellow font-medium">— {quote.author}</cite>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;

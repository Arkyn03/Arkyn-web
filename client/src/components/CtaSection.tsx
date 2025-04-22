import React from 'react';
import { Button } from '@/components/ui/button';
import AnimatedBackground from './AnimatedBackground';
import { useNavigate } from 'react-router-dom';

const CtaSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative py-24 overflow-hidden">
      <AnimatedBackground intensity="high" variant="dual" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-satoshi font-bold mb-6 text-gradient">
            Ready to Future-Proof Your Institution?
          </h2>
          <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
            Join the next generation of educational institutions using Arkyn to transform your digital experience.
          </p>
          <div className="flex justify-center">
            <Button 
              size="lg" 
              className="glow bg-gradient-to-r from-arkyin-blue to-arkyin-purple hover:opacity-90 px-8"
              onClick={() => navigate('/contact')}
            >
              Book a Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;

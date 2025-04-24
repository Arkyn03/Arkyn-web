import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedBackground from '@/components/AnimatedBackground';
import SectionTitle from '@/components/SectionTitle';
import CtaSection from '@/components/CtaSection';
import { Button } from '@/components/ui/button';
import { 
  ChevronRight, 
  Code, 
  Heart, 
  Lightbulb, 
  Rocket, 
  Star, 
  Target, 
  Users,
  Cpu,
  Database,
  Cloud,
  Layers,
  Network,
  Server,
  BookOpen,
  GraduationCap,
  Laptop,
  Smartphone,
  Globe,
  Brain
} from 'lucide-react';
import { motion } from 'framer-motion';
import staticAssets from '@/lib/assets';

const About = () => {
  // Apply fade-in animation to elements as they become visible
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          entry.target.classList.remove('opacity-0');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      el.classList.add('opacity-0');
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const educationEvolution = [
    {
      icon: <BookOpen className="w-8 h-8 text-arkyin-purple" />,
      title: "Traditional",
      description: "Paper-based systems"
    },
    {
      icon: <Laptop className="w-8 h-8 text-arkyin-blue" />,
      title: "Digital",
      description: "Basic software solutions"
    },
    {
      icon: <Globe className="w-8 h-8 text-arkyin-purple" />,
      title: "Connected",
      description: "Cloud-based platforms"
    },
    {
      icon: <Brain className="w-8 h-8 text-arkyin-blue" />,
      title: "Intelligent",
      description: "AI-powered systems"
    }
  ];

  return (
    <div className="min-h-screen bg-arkyin-dark text-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden pt-20">
        <AnimatedBackground withGrid={true} />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-satoshi font-bold mb-6 text-gradient animate-fade-in">
              Our Vision for Educational Technology
            </h1>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto animate-fade-in-slow">
              Founded by designers and developers passionate about meaningful software, Arkyn blends elegance and engineering to create next-gen education systems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-slower">
              <Button 
                size="lg" 
                className="glow bg-gradient-to-r from-arkyin-blue to-arkyin-purple hover:opacity-90 px-8"
                onClick={() => {
                  const teamSection = document.getElementById('meet-our-team');
                  if (teamSection) {
                    teamSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Meet Our Team
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Story Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="animate-on-scroll">
              <SectionTitle 
                title="Our Story" 
                subtitle="The journey that led us to reimagine educational software for modern institutions."
                className="mb-8"
              />
              
              <div className="space-y-6 text-gray-300">
                <p>
                  Arkyn began with a simple observation: educational institutions were using outdated, fragmented software systems that failed to match the elegance of their purpose.
                </p>
                <p>
                  Founded in 2024 by a team of designers and developers who shared a passion for education, we set out to create something different—a cohesive platform that combines sophisticated functionality with intuitive design.
                </p>
                <p>
                  Today, we're a growing team dedicated to crafting thoughtful and beautiful software that empowers educators, administrators, students, and parents around the world.
                </p>
              </div>
            </div>
            
            <div className="animate-on-scroll h-[500px]">
              <div className="h-full w-full flex flex-col justify-center">
                {/* Evolution Timeline */}
                <div className="relative">
                  {/* Background Connection Line */}
                  <div className="absolute left-0 right-0 h-1 bg-gradient-to-r from-arkyin-purple via-arkyin-blue to-arkyin-purple top-1/2 transform -translate-y-1/2"></div>
                  
                  {/* Evolution Steps */}
                  <div className="relative flex justify-between">
                    {educationEvolution.map((step, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        className="relative"
                      >
                        <div className="w-24 flex flex-col items-center">
                          {/* Icon Container */}
                          <motion.div
                            className="w-16 h-16 rounded-full bg-arkyin-dark/50 backdrop-blur-sm border border-white/10 flex items-center justify-center mb-2"
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            transition={{ type: "spring", stiffness: 300 }}
                          >
                            {step.icon}
                          </motion.div>
                          
                          {/* Title and Description */}
                          <div className="text-center">
                            <h4 className="text-sm font-medium mb-1">{step.title}</h4>
                            <p className="text-xs text-gray-400">{step.description}</p>
                          </div>
                          
                          {/* Connection Dots */}
                          <div className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-arkyin-purple left-1/2 -translate-x-1/2"></div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  
                  {/* Floating Elements */}
                  <motion.div
                    className="absolute top-0 left-0 w-full h-full"
                    animate={{
                      y: [0, -10, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <div className="absolute top-1/4 left-1/4 w-4 h-4 rounded-full bg-arkyin-purple/20 blur-sm"></div>
                    <div className="absolute top-3/4 right-1/4 w-6 h-6 rounded-full bg-arkyin-blue/20 blur-sm"></div>
                    <div className="absolute bottom-1/4 left-1/3 w-5 h-5 rounded-full bg-arkyin-purple/20 blur-sm"></div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Values Section */}
      <section className="relative py-24 overflow-hidden">
        <AnimatedBackground variant="purple" intensity="low" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionTitle 
            title="Our Core Values" 
            subtitle="The principles that guide our work and define our approach to educational technology."
            center
            className="mb-16 animate-on-scroll"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="animate-on-scroll">
              <div className="glass p-8 rounded-2xl h-full text-center hover:translate-y-[-4px] transition-transform">
                <div className="w-16 h-16 rounded-full bg-arkyin-blue/20 text-arkyin-blue flex items-center justify-center mx-auto mb-6">
                  <Heart size={28} />
                </div>
                <h3 className="text-xl font-medium mb-3">Elegance in Engineering</h3>
                <p className="text-gray-400">
                  We believe educational software should be as refined as the institutions it serves, blending functionality with beauty.
                </p>
              </div>
            </div>
            
            <div className="animate-on-scroll">
              <div className="glass p-8 rounded-2xl h-full text-center hover:translate-y-[-4px] transition-transform">
                <div className="w-16 h-16 rounded-full bg-arkyin-purple/20 text-arkyin-purple flex items-center justify-center mx-auto mb-6">
                  <Users size={28} />
                </div>
                <h3 className="text-xl font-medium mb-3">Empathy-Driven Design</h3>
                <p className="text-gray-400">
                  Every feature is crafted with a deep understanding of educational workflows and the needs of all stakeholders.
                </p>
              </div>
            </div>
            
            <div className="animate-on-scroll">
              <div className="glass p-8 rounded-2xl h-full text-center hover:translate-y-[-4px] transition-transform">
                <div className="w-16 h-16 rounded-full bg-arkyin-blue/20 text-arkyin-blue flex items-center justify-center mx-auto mb-6">
                  <Rocket size={28} />
                </div>
                <h3 className="text-xl font-medium mb-3">Continuous Evolution</h3>
                <p className="text-gray-400">
                  We're committed to growing our platform alongside the changing landscape of education.
                </p>
              </div>
            </div>
            
            <div className="animate-on-scroll">
              <div className="glass p-8 rounded-2xl h-full text-center hover:translate-y-[-4px] transition-transform">
                <div className="w-16 h-16 rounded-full bg-arkyin-purple/20 text-arkyin-purple flex items-center justify-center mx-auto mb-6">
                  <Target size={28} />
                </div>
                <h3 className="text-xl font-medium mb-3">Precision & Detail</h3>
                <p className="text-gray-400">
                  We obsess over the small details that make a big difference in the user experience.
                </p>
              </div>
            </div>
            
            <div className="animate-on-scroll">
              <div className="glass p-8 rounded-2xl h-full text-center hover:translate-y-[-4px] transition-transform">
                <div className="w-16 h-16 rounded-full bg-arkyin-blue/20 text-arkyin-blue flex items-center justify-center mx-auto mb-6">
                  <Star size={28} />
                </div>
                <h3 className="text-xl font-medium mb-3">Excellence as Standard</h3>
                <p className="text-gray-400">
                  We hold ourselves to the highest standards in every aspect of our work, from code to customer service.
                </p>
              </div>
            </div>
            
            <div className="animate-on-scroll">
              <div className="glass p-8 rounded-2xl h-full text-center hover:translate-y-[-4px] transition-transform">
                <div className="w-16 h-16 rounded-full bg-arkyin-purple/20 text-arkyin-purple flex items-center justify-center mx-auto mb-6">
                  <Lightbulb size={28} />
                </div>
                <h3 className="text-xl font-medium mb-3">Educational Innovation</h3>
                <p className="text-gray-400">
                  We're constantly exploring new ways to enhance the educational experience through technology.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Team Section */}
      <section id="meet-our-team" className="relative py-24 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            title="Meet Our Team" 
            subtitle="The passionate individuals behind Arkyn, dedicated to transforming educational technology."
            center
            className="mb-16 animate-on-scroll"
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="animate-on-scroll">
              <div className="glass rounded-2xl overflow-hidden h-full">
                <div className="aspect-square bg-arkyin-gray">
                  <img src={staticAssets.CEO} alt="Krish Patel" className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-medium mb-1">Krish Patel</h3>
                  <p className="text-gray-400 mb-4">Founder & CEO</p>
                  <p className="text-gray-300 text-sm">
                  A dynamic and visionary young leader, our Founder & CEO brings exceptional leadership and deep domain expertise to Arkyn.                 </p>
                </div>
              </div>
            </div>
            
            <div className="animate-on-scroll">
              <div className="glass rounded-2xl overflow-hidden h-full">
                <div className="aspect-square bg-arkyin-gray">
                <img src={staticAssets.CDO} alt="Raj Patel" className="w-full h-full object-cover" />

                </div>
                <div className="p-6">
                  <h3 className="text-xl font-medium mb-1">Raj Patel</h3>
                  <p className="text-gray-400 mb-4">Founder & CDO</p>
                  <p className="text-gray-300 text-sm">
                  Young and visionary, our Founder & CDO excels in UI/UX and domain knowledge, driven by unique design ideas and innovation </p>
                </div>
              </div>
            </div>
            
            <div className="animate-on-scroll">
              <div className="glass rounded-2xl overflow-hidden h-full">
                <div className="aspect-square bg-arkyin-gray">
                <img src={staticAssets.CTO} alt="Krish Patel" className="w-full h-full object-cover" />

                </div>
                <div className="p-6">
                  <h3 className="text-xl font-medium mb-1">Krish Patel</h3>
                  <p className="text-gray-400 mb-4">Founder & CTO</p>
                  <p className="text-gray-300 text-sm">
                  A young and driven tech expert, he’s passionate about innovation and excels across all modern technologies.                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Tech Stack Section */}
      <section className="relative py-24 overflow-hidden">
        <AnimatedBackground variant="blue" intensity="low" withGrid={true} />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="animate-on-scroll">
              <SectionTitle 
                title="Our Technology" 
                subtitle="Built on modern, robust technologies for performance, scalability and security."
                className="mb-8"
              />
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="mr-4 h-10 w-10 rounded-full bg-arkyin-purple/20 text-arkyin-purple flex items-center justify-center flex-shrink-0">
                    <Code size={24} />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg">Frontend Excellence</h4>
                    <p className="text-gray-400 mb-2">
                      Our user interfaces are built with modern frameworks like React, ensuring responsive, fast and beautiful experience.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="inline-block px-3 py-1 text-xs font-medium bg-white/10 rounded-full">React</span>
                      <span className="inline-block px-3 py-1 text-xs font-medium bg-white/10 rounded-full">Tailwind CSS</span>
                      <span className="inline-block px-3 py-1 text-xs font-medium bg-white/10 rounded-full">Framer Motion</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 h-10 w-10 rounded-full bg-arkyin-blue/20 text-arkyin-blue flex items-center justify-center flex-shrink-0">
                    <Server size={24} />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg">Robust Backend</h4>
                    <p className="text-gray-400 mb-2">
                      Our server architecture is designed for reliability, security and performance at scale.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="inline-block px-3 py-1 text-xs font-medium bg-white/10 rounded-full">Node.js</span>
                      <span className="inline-block px-3 py-1 text-xs font-medium bg-white/10 rounded-full">express.js</span>
                      <span className="inline-block px-3 py-1 text-xs font-medium bg-white/10 rounded-full">MongoDB</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 h-10 w-10 rounded-full bg-arkyin-purple/20 text-arkyin-purple flex items-center justify-center flex-shrink-0">
                    <Cloud size={24} />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg">Cloud Infrastructure</h4>
                    <p className="text-gray-400 mb-2">
                      Deployed on enterprise-grade cloud services for high availability and global accessibility.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="inline-block px-3 py-1 text-xs font-medium bg-white/10 rounded-full">AWS</span>
                      <span className="inline-block px-3 py-1 text-xs font-medium bg-white/10 rounded-full">Kubernetes</span>
                      <span className="inline-block px-3 py-1 text-xs font-medium bg-white/10 rounded-full">Docker</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="animate-on-scroll relative h-[600px]">
              <div className="relative h-full w-full">
                {/* Central Element */}
                <motion.div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  animate={{
                    scale: [1, 1.05, 1],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <div className="relative">
                    <div className="h-32 w-32 rounded-2xl bg-arkyin-dark/50 backdrop-blur-sm border border-arkyin-purple/20 flex items-center justify-center">
                      <Cpu className="h-16 w-16 text-arkyin-purple" />
                    </div>
                    <motion.div
                      className="absolute inset-0"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 0.8, 0.5]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <div className="absolute inset-0 bg-arkyin-purple/20 rounded-2xl blur-xl" />
                    </motion.div>
                  </div>
                </motion.div>

                {/* Frontend Technologies */}
                <motion.div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  animate={{
                    rotate: [0, 360]
                  }}
                  transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                >
                  <div className="relative">
                    {[
                      { name: "React", icon: Layers, color: "arkyin-blue", radius: 180 },
                      { name: "Tailwind", icon: Network, color: "arkyin-purple", radius: 240 },
                      { name: "Framer", icon: Code, color: "arkyin-blue", radius: 300 }
                    ].map((tech, index) => (
                      <motion.div
                        key={tech.name}
                        className="absolute"
                        style={{
                          transform: `rotate(${index * 120}deg) translate(${tech.radius}px) rotate(-${index * 120}deg)`
                        }}
                        animate={{
                          y: [0, -15, 0]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: index * 0.2
                        }}
                      >
                        <div className={`h-20 w-20 rounded-xl bg-arkyin-dark/50 backdrop-blur-sm border border-${tech.color}/20 flex items-center justify-center`}>
                          <tech.icon className={`h-10 w-10 text-${tech.color}`} />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Backend & Cloud Technologies */}
                <motion.div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  animate={{
                    rotate: [0, -360]
                  }}
                  transition={{
                    duration: 40,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                >
                  <div className="relative">
                    {[
                      { name: "Node", icon: Server, color: "arkyin-purple", radius: 210 },
                      { name: "MongoDB", icon: Database, color: "arkyin-blue", radius: 270 },
                      { name: "AWS", icon: Cloud, color: "arkyin-purple", radius: 330 }
                    ].map((tech, index) => (
                      <motion.div
                        key={tech.name}
                        className="absolute"
                        style={{
                          transform: `rotate(${index * 120}deg) translate(${tech.radius}px) rotate(-${index * 120}deg)`
                        }}
                        animate={{
                          y: [0, -15, 0]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: index * 0.2
                        }}
                      >
                        <div className={`h-16 w-16 rounded-lg bg-arkyin-dark/50 backdrop-blur-sm border border-${tech.color}/20 flex items-center justify-center`}>
                          <tech.icon className={`h-8 w-8 text-${tech.color}`} />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Connection Lines */}
                <motion.div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  animate={{
                    rotate: [0, 360]
                  }}
                  transition={{
                    duration: 50,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                >
                  <div className="relative">
                    {[0, 120, 240].map((angle, index) => (
                      <motion.div
                        key={index}
                        className="absolute"
                        style={{
                          transform: `rotate(${angle}deg)`,
                          width: '330px',
                          height: '1px',
                          background: 'linear-gradient(90deg, transparent, rgba(139, 92, 246, 0.1), transparent)'
                        }}
                      />
                    ))}
                  </div>
                </motion.div>

                {/* Subtle Background Elements */}
                {[...Array(4)].map((_, index) => (
                  <motion.div
                    key={index}
                    className="absolute"
                    style={{
                      top: `${Math.random() * 100}%`,
                      left: `${Math.random() * 100}%`
                    }}
                    animate={{
                      y: [0, -30, 0],
                      opacity: [0.2, 0.4, 0.2]
                    }}
                    transition={{
                      duration: 4 + Math.random() * 2,
                      repeat: Infinity,
                      delay: index * 0.5
                    }}
                  >
                    <div className="h-3 w-3 rounded-full bg-arkyin-purple/10" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <CtaSection />
      
      <Footer />
    </div>
  );
};

export default About;

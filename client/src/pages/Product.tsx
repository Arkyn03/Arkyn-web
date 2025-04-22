import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedBackground from '@/components/AnimatedBackground';
import SectionTitle from '@/components/SectionTitle';
import CtaSection from '@/components/CtaSection';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Bell, 
  Calendar, 
  ChevronRight, 
  CreditCard, 
  LineChart, 
  MessageSquare, 
  Settings, 
  Shield, 
  Users, 
  Brain, 
  Rocket,
  ChevronLeft,
  Layers,
  Target,
  Server,
  Network,
  Cpu,
  Star,
  MessageCircle,
  HelpCircle,
  BookOpen,
  GraduationCap,
  Lightbulb,
  Briefcase,
  NetworkIcon,
  Home,
  Utensils,
  Bus,
  Vote,
  Video
} from 'lucide-react';
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from 'framer-motion';

const modules = {
  core: [
    {
      title: "Attendance Management",
      description: "Streamline attendance tracking with our comprehensive system.",
      icon: Calendar,
      features: ["Real-time tracking", "Automated notifications", "Comprehensive reporting"]
    },
    {
      title: "Financial Management",
      description: "Handle all financial aspects with precision and ease.",
      icon: CreditCard,
      features: ["Fee management", "Automated invoicing", "Secure payments"]
    },
    {
      title: "Parent & Student Portals",
      description: "Dedicated access points for parents and students.",
      icon: Users,
      features: ["Personalized dashboards", "Progress monitoring", "Document access"]
    },
    {
      title: "Communication Platform",
      description: "Foster meaningful connections in your community.",
      icon: MessageSquare,
      features: ["Instant messaging", "Announcements", "Event coordination"]
    },
    {
      title: "Employee 360°",
      description: "Get a complete view of staff performance and growth.",
      icon: LineChart,
      features: ["Performance tracking", "Attendance & leave overview", "Staff development insights"]
    },
    {
      title: "Student Review",
      description: "Capture feedback after every class to enhance learning outcomes.",
      icon: Star,
      features: ["Instant student feedback", "Teacher & parent insights", "Trigger doubt sessions"]
    }
  ],
  pro: [
    {
      title: "Alumni Network",
      description: "Stay connected with former students and build a thriving alumni community.",
      icon: NetworkIcon,
      features: ["Alumni profiles", "Networking tools", "Event coordination"]
    },
    {
      title: "Hostel Management",
      description: "Efficiently manage student accommodation and facilities.",
      icon: Home,
      features: ["Room allocation", "Complaint tracking", "Attendance logs"]
    },
    {
      title: "Cafeteria Management",
      description: "Streamline meal plans, billing, and menu updates.",
      icon: Utensils,
      features: ["Digital menus", "Prepaid meal cards", "Order tracking"]
    },
    {
      title: "Transport Management",
      description: "Organize and monitor student transport operations.",
      icon: Bus,
      features: ["Route planning", "Real-time tracking", "Driver logs"]
    },
    {
      title: "Student Elections",
      description: "Manage student council elections digitally and transparently.",
      icon: Vote,
      features: ["Nominee management", "Secure voting", "Live results"]
    },
    {
      title: "Virtual Classroom",
      description: "Enable online classes with interactive learning tools.",
      icon: Video,
      features: ["Live sessions", "Shared whiteboards", "Class recordings"]
    }
  ],
  ai: [
    {
      title: "AI Doubt Chatbot",
      description: "Instant support for student queries anytime.",
      icon: MessageCircle,
      features: ["Natural conversation flow", "24/7 query resolution", "Instant concept clarity"]
    },
    {
      title: "AI Q&A Generator",
      description: "Generate personalized practice questions on the fly.",
      icon: HelpCircle,
      features: ["Dynamic Q&A creation", "Topic-based quizzes", "Practice-ready formats"]
    },
    {
      title: "AI Learning Path",
      description: "Tailored study plans for exams and mastery.",
      icon: BookOpen,
      features: ["Smart goal planning", "Adaptive schedules", "Progress tracking"]
    },
    {
      title: "AI Notes Maker",
      description: "Auto-generate notes from books and lectures.",
      icon: Lightbulb,
      features: ["Summary from text/audio", "Visual highlights", "Shareable content"]
    },
    {
      title: "AI Mentor",
      description: "A virtual guide for academic and personal growth.",
      icon: GraduationCap,
      features: ["Study habit coaching", "Motivation check-ins", "Performance tips"]
    },
    {
      title: "Career AI",
      description: "Discover the right career path with smart insights.",
      icon: Briefcase,
      features: ["Interest mapping", "Role suggestions", "Skill gap analysis"]
    }
  ]
};

const Product = () => {
  const [activeCategory, setActiveCategory] = useState('core');
  const [isDragging, setIsDragging] = useState(false);
  const constraintsRef = useRef(null);
  const x = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 30 });
  const navigate = useNavigate();

  // Add scroll effect for hash navigation
  useEffect(() => {
    const hash = window.location.hash;
    if (hash === '#modules') {
      const modulesSection = document.getElementById('modules');
      if (modulesSection) {
        modulesSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  const handleDragStart = () => {
    setIsDragging(true);
  };

  const handleDragEnd = (event: any, info: any) => {
    setIsDragging(false);
    const velocity = info.velocity.x;
    const offset = info.offset.x;
    
    if (Math.abs(velocity) > 500) {
      const direction = velocity > 0 ? -1 : 1;
      const categories = ['core', 'pro', 'ai'];
      const currentIndex = categories.indexOf(activeCategory);
      const newIndex = (currentIndex + direction + categories.length) % categories.length;
      setActiveCategory(categories[newIndex]);
    }
  };

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

  return (
    <div className="min-h-screen bg-arkyin-dark text-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden pt-20">
        <AnimatedBackground withGrid={true} />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-satoshi font-bold mb-6 text-gradient animate-fade-in">
              Your School's Complete Digital Ecosystem
            </h1>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto animate-fade-in-slow">
              A comprehensive school management platform designed for educational excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-slower">
              <Button 
                size="lg" 
                className="glow bg-gradient-to-r from-arkyin-blue to-arkyin-purple hover:opacity-90 px-8"
                onClick={() => navigate('/contact')}
              >
                Schedule a Product Demo
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Product Overview Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <SectionTitle 
              title="A Unified Platform for Modern Education" 
              subtitle="Arkyn brings together all aspects of school management into a cohesive, elegant experience for administrators, teachers, students, and parents."
              className="mb-16 animate-on-scroll"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="animate-on-scroll">
                <div className="rounded-2xl overflow-hidden aspect-square relative">
                  {/* Platform Visualization */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    {/* Central Platform */}
                    <motion.div
                      className="relative"
                      animate={{
                        scale: [1, 1.02, 1],
                        rotate: [0, 1, -1, 0]
                      }}
                      transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <div className="h-48 w-48 rounded-2xl bg-gradient-to-br from-arkyin-purple/10 to-arkyin-blue/10 backdrop-blur-sm border border-arkyin-purple/20 flex items-center justify-center">
                        <div className="h-36 w-36 rounded-xl bg-gradient-to-br from-arkyin-blue/10 to-arkyin-purple/10 backdrop-blur-sm border border-arkyin-blue/20 flex items-center justify-center">
                          <Users className="h-16 w-16 text-arkyin-purple" />
                        </div>
                      </div>
                    </motion.div>

                    {/* Primary Orbiting Elements */}
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
                      {[
                        { icon: Layers, color: "arkyin-blue", radius: 180, size: "h-12 w-12" },
                        { icon: Rocket, color: "arkyin-purple", radius: 240, size: "h-14 w-14" },
                        { icon: Target, color: "arkyin-blue", radius: 300, size: "h-12 w-12" }
                      ].map((element, index) => (
                        <motion.div
                          key={index}
                          className="absolute"
                          style={{
                            transform: `rotate(${index * 120}deg) translate(${element.radius}px) rotate(-${index * 120}deg)`
                          }}
                          animate={{
                            y: [0, -8, 0]
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            delay: index * 0.2
                          }}
                        >
                          <div className={`${element.size} rounded-lg bg-gradient-to-br from-${element.color}/10 to-${element.color}/20 backdrop-blur-sm border border-${element.color}/20 flex items-center justify-center`}>
                            <element.icon className={`h-6 w-6 text-${element.color}`} />
                          </div>
                        </motion.div>
                      ))}
                    </motion.div>

                    {/* Secondary Orbiting Elements */}
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
                      {[
                        { icon: Brain, color: "arkyin-purple", radius: 150 },
                        { icon: Server, color: "arkyin-blue", radius: 210 },
                        { icon: Network, color: "arkyin-purple", radius: 270 }
                      ].map((element, index) => (
                        <motion.div
                          key={index}
                          className="absolute"
                          style={{
                            transform: `rotate(${index * 120}deg) translate(${element.radius}px) rotate(-${index * 120}deg)`
                          }}
                          animate={{
                            y: [0, -6, 0]
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            delay: index * 0.3
                          }}
                        >
                          <div className={`h-8 w-8 rounded-lg bg-gradient-to-br from-${element.color}/10 to-${element.color}/20 backdrop-blur-sm border border-${element.color}/20 flex items-center justify-center`}>
                            <element.icon className={`h-4 w-4 text-${element.color}`} />
                          </div>
                        </motion.div>
                      ))}
                    </motion.div>

                    {/* Connection Lines */}
                    <motion.div
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                      animate={{
                        rotate: [0, 360]
                      }}
                      transition={{
                        duration: 60,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    >
                      <div className="relative">
                        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, index) => (
                          <motion.div
                            key={index}
                            className="absolute"
                            style={{
                              transform: `rotate(${angle}deg)`,
                              width: '300px',
                              height: '1px',
                              background: 'linear-gradient(90deg, transparent, rgba(139, 92, 246, 0.05), transparent)'
                            }}
                          />
                        ))}
                      </div>
                    </motion.div>

                    {/* Data Flow Particles */}
                    {[...Array(12)].map((_, index) => (
                      <motion.div
                        key={index}
                        className="absolute"
                        style={{
                          top: `${Math.random() * 100}%`,
                          left: `${Math.random() * 100}%`
                        }}
                        animate={{
                          y: [0, -10, 0],
                          opacity: [0.1, 0.3, 0.1]
                        }}
                        transition={{
                          duration: 4 + Math.random() * 2,
                          repeat: Infinity,
                          delay: index * 0.2
                        }}
                      >
                        <div className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-arkyin-purple/20 to-arkyin-blue/20" />
                      </motion.div>
                    ))}

                    {/* Floating Tech Icons */}
                    {[...Array(6)].map((_, index) => (
                      <motion.div
                        key={index}
                        className="absolute"
                        style={{
                          top: `${Math.random() * 100}%`,
                          left: `${Math.random() * 100}%`
                        }}
                        animate={{
                          y: [0, -15, 0],
                          rotate: [0, 360]
                        }}
                        transition={{
                          duration: 8 + Math.random() * 4,
                          repeat: Infinity,
                          delay: index * 0.5
                        }}
                      >
                        <div className="h-6 w-6 rounded-lg bg-gradient-to-br from-arkyin-purple/10 to-arkyin-blue/10 backdrop-blur-sm border border-arkyin-purple/20 flex items-center justify-center">
                          <Cpu className="h-3 w-3 text-arkyin-purple/50" />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="space-y-8 animate-on-scroll">
                <div className="space-y-2">
                  <h3 className="text-2xl font-satoshi font-bold text-gradient">Elegantly Designed</h3>
                  <p className="text-gray-400">
                    Our user interface is crafted with attention to detail, creating a seamless experience that's both beautiful and functional.
                  </p>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-2xl font-satoshi font-bold text-gradient">Comprehensively Integrated</h3>
                  <p className="text-gray-400">
                    Every module works in harmony, eliminating data silos and creating a unified workflow for your institution.
                  </p>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-2xl font-satoshi font-bold text-gradient">Infinitely Customizable</h3>
                  <p className="text-gray-400">
                    Tailor the platform to your specific needs with custom workflows, branding, and functionality.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Modules Section */}
      <section id="modules" className="relative py-24 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
              Our Modules
            </h2>
            <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
              Choose from our range of modules to build the perfect solution for your institution.
            </p>

            {/* Simple Tab Navigation */}
            <div className="flex justify-center mb-12">
              <div className="flex space-x-1 bg-arkyin-dark/50 p-1 rounded-lg">
                {[
                  { id: 'core', label: 'Core Modules' },
                  { id: 'pro', label: 'Pro Modules' },
                  { id: 'ai', label: 'AI Modules' }
                ].map(({ id, label }) => (
                  <button
                    key={id}
                    onClick={() => setActiveCategory(id)}
                    className={`px-6 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
                      activeCategory === id
                        ? 'bg-arkyin-purple text-white'
                        : 'text-gray-400 hover:text-white hover:bg-arkyin-purple/20'
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            <div className="relative">
              <motion.div
                ref={constraintsRef}
                className="relative"
                style={{ x: springX }}
                drag="x"
                dragConstraints={constraintsRef}
                onDragStart={handleDragStart}
                onDragEnd={handleDragEnd}
                dragElastic={0.1}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeCategory}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                  >
                    {modules[activeCategory].map((module, index) => (
                      <motion.div
                        key={module.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="glass rounded-xl p-6 relative overflow-hidden group cursor-grab active:cursor-grabbing"
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-arkyin-purple/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="relative z-10">
                          <div className="flex items-center gap-4 mb-4">
                            <motion.div 
                              className="p-3 rounded-lg bg-arkyin-purple/20"
                              whileHover={{ rotate: 360 }}
                              transition={{ duration: 0.5 }}
                            >
                              <module.icon className="h-6 w-6 text-arkyin-purple" />
                            </motion.div>
                            <h3 className="text-xl font-bold">{module.title}</h3>
                          </div>
                          <p className="text-gray-400 mb-4">{module.description}</p>
                          <ul className="space-y-2">
                            {module.features.map((feature, i) => (
                              <motion.li 
                                key={i} 
                                className="flex items-center gap-2 text-sm"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2 + i * 0.1 }}
                              >
                                <div className="h-1.5 w-1.5 rounded-full bg-arkyin-purple" />
                                {feature}
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </AnimatePresence>
              </motion.div>

              {/* Navigation Arrows */}
              <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-4 pointer-events-none">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => {
                    const categories = ['core', 'pro', 'ai'];
                    const currentIndex = categories.indexOf(activeCategory);
                    const newIndex = (currentIndex - 1 + categories.length) % categories.length;
                    setActiveCategory(categories[newIndex]);
                  }}
                  className="p-2 rounded-full bg-arkyin-dark/50 backdrop-blur-sm pointer-events-auto"
                >
                  <ChevronLeft className="h-6 w-6" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => {
                    const categories = ['core', 'pro', 'ai'];
                    const currentIndex = categories.indexOf(activeCategory);
                    const newIndex = (currentIndex + 1) % categories.length;
                    setActiveCategory(categories[newIndex]);
                  }}
                  className="p-2 rounded-full bg-arkyin-dark/50 backdrop-blur-sm pointer-events-auto"
                >
                  <ChevronRight className="h-6 w-6" />
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Security Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="animate-on-scroll">
              <SectionTitle 
                title="Security By Design" 
                subtitle="We build security into every aspect of our platform, ensuring your data remains protected at all times."
                className="mb-8"
              />
              
              <ul className="space-y-6">
                <li className="flex items-start">
                  <div className="mr-4 h-10 w-10 rounded-full bg-arkyin-purple/20 text-arkyin-purple flex items-center justify-center flex-shrink-0">
                    <Shield size={24} />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg">End-to-End Encryption</h4>
                    <p className="text-gray-400">All data is encrypted both in transit and at rest, using industry-standard protocols.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-4 h-10 w-10 rounded-full bg-arkyin-blue/20 text-arkyin-blue flex items-center justify-center flex-shrink-0">
                    <Users size={24} />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg">Granular Access Controls</h4>
                    <p className="text-gray-400">Precise permission settings ensure users only access data relevant to their role.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-4 h-10 w-10 rounded-full bg-arkyin-purple/20 text-arkyin-purple flex items-center justify-center flex-shrink-0">
                    <Bell size={24} />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg">Proactive Monitoring</h4>
                    <p className="text-gray-400">Continuous system monitoring to detect and prevent unauthorized access attempts.</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="animate-on-scroll relative h-[500px]">
              <div className="relative h-full w-full">
                {/* Central Shield */}
                <motion.div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <div className="relative">
                    <Shield className="h-32 w-32 text-arkyin-purple" />
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
                      <div className="absolute inset-0 bg-arkyin-purple/20 rounded-full blur-xl" />
                    </motion.div>
                  </div>
                </motion.div>

                {/* Encryption Ring */}
                <motion.div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  animate={{
                    rotate: [0, 360]
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                >
                  <div className="relative">
                    <div className="h-48 w-48 border border-arkyin-purple/20 rounded-full" />
                  </div>
                </motion.div>

                {/* Security Icons */}
                <motion.div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  animate={{
                    rotate: [0, -360]
                  }}
                  transition={{
                    duration: 30,
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
                          transform: `rotate(${angle}deg) translate(100px) rotate(-${angle}deg)`
                        }}
                        animate={{
                          y: [0, -10, 0]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: index * 0.2
                        }}
                      >
                        <div className="h-8 w-8 rounded-full bg-arkyin-dark/50 backdrop-blur-sm flex items-center justify-center">
                          <Shield className="h-4 w-4 text-arkyin-purple" />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Floating Elements */}
                {[...Array(4)].map((_, index) => (
                  <motion.div
                    key={index}
                    className="absolute"
                    style={{
                      top: `${Math.random() * 100}%`,
                      left: `${Math.random() * 100}%`
                    }}
                    animate={{
                      y: [0, -20, 0],
                      opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{
                      duration: 3 + Math.random() * 2,
                      repeat: Infinity,
                      delay: index * 0.5
                    }}
                  >
                    <div className="h-2 w-2 rounded-full bg-arkyin-purple/20" />
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

export default Product;

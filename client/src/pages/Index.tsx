import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedBackground from '@/components/AnimatedBackground';
import FeatureCard from '@/components/FeatureCard';
import SectionTitle from '@/components/SectionTitle';
import CtaSection from '@/components/CtaSection';
import { Button } from '@/components/ui/button';
import { 
  Calendar, 
  ChevronRight, 
  CreditCard, 
  LineChart, 
  MessageSquare, 
  Search, 
  Settings, 
  Users,
  Lightbulb,
  Rocket
} from 'lucide-react';
import { motion } from 'framer-motion';
import staticAssets from '@/lib/assets';

const Index = () => {
  const navigate = useNavigate();

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
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <AnimatedBackground withGrid={true} />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-satoshi font-bold mb-6 text-gradient animate-fade-in">
            Digitally Engineered for Tomorrow’s Classrooms
            </h1>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto animate-fade-in-slow">
              We craft high-end school management systems tailored for modern institutions across the globe.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-slower">
              <Button 
                size="lg" 
                className="glow bg-gradient-to-r from-arkyin-blue to-arkyin-purple hover:opacity-90 px-8"
                onClick={() => navigate('/product')}
              >
                Explore Features
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white/20 text-white hover:bg-white/10 hover:text-white px-8"
                onClick={() => navigate('/contact')}
              >
                Book a Demo
              </Button>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-float">
          <span className="text-gray-400 text-sm mb-2">Scroll to discover</span>
          <div className="w-5 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-2 bg-gray-400 rounded-full animate-float mt-2"></div>
          </div>
        </div>
      </section>
      
      {/* Vision & Mission Section */}
      <section className="relative py-24 overflow-hidden">
        <AnimatedBackground variant="blue" intensity="low" withGrid={true} />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto">
            <SectionTitle 
              title="Why Arkyn Exists" 
              subtitle="We're on a mission to transform educational technology through elegant, purpose-built software solutions."
              center
              className="mb-16 animate-on-scroll"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="animate-on-scroll">
                <div className="space-y-8">
                  <div className="flex items-start">
                    <div className="mr-4 h-12 w-12 rounded-full bg-arkyin-blue/20 text-arkyin-blue flex items-center justify-center flex-shrink-0">
                      <Lightbulb size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-medium mb-2">Bridging the Gap</h3>
                      <p className="text-gray-400">
                        Educational institutions deserve software that matches their sophistication. We bridge the gap between traditional school management systems and modern technology expectations.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mr-4 h-12 w-12 rounded-full bg-arkyin-purple/20 text-arkyin-purple flex items-center justify-center flex-shrink-0">
                      <Rocket size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-medium mb-2">Future-Ready Solutions</h3>
                      <p className="text-gray-400">
                        We build scalable, adaptable platforms that grow with your institution, ensuring you're always equipped with cutting-edge tools for education.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mr-4 h-12 w-12 rounded-full bg-arkyin-blue/20 text-arkyin-blue flex items-center justify-center flex-shrink-0">
                      <Users size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-medium mb-2">Community-Centric Design</h3>
                      <p className="text-gray-400">
                        Our platform is built around the needs of everyone in the educational ecosystem - administrators, teachers, students, and parents.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="animate-on-scroll">
                <div className="glass rounded-2xl overflow-hidden p-8">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="glass-darker rounded-xl p-4 text-center">
                      <div className="text-3xl font-bold text-arkyin-blue mb-2">100%</div>
                      <p className="text-sm text-gray-400">Custom Solutions</p>
                    </div>
                    <div className="glass-darker rounded-xl p-4 text-center">
                      <div className="text-3xl font-bold text-arkyin-purple mb-2">24/7</div>
                      <p className="text-sm text-gray-400">Support</p>
                    </div>
                    <div className="glass-darker rounded-xl p-4 text-center">
                      <div className="text-3xl font-bold text-arkyin-blue mb-2">99.9%</div>
                      <p className="text-sm text-gray-400">Uptime</p>
                    </div>
                    <div className="glass-darker rounded-xl p-4 text-center">
                      <div className="text-3xl font-bold text-arkyin-purple mb-2">50+</div>
                      <p className="text-sm text-gray-400">Features</p>
                    </div>
                  </div>
                  
                  <div className="mt-8 flex flex-wrap justify-center gap-4">
                    <span className="glass px-4 py-2 rounded-full text-arkyin-blue">Custom</span>
                    <span className="glass px-4 py-2 rounded-full text-white">Secure</span>
                    <span className="glass px-4 py-2 rounded-full text-arkyin-purple">Scalable</span>
                    <span className="glass px-4 py-2 rounded-full text-white">Elegant</span>
                    <span className="glass px-4 py-2 rounded-full text-arkyin-blue">Innovative</span>
                    <span className="glass px-4 py-2 rounded-full text-white">Reliable</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Product Features Section */}
      <section className="relative py-24 overflow-hidden">
        <AnimatedBackground variant="blue" intensity="low" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionTitle 
            title="Your School's Digital Core" 
            subtitle="A comprehensive suite of modules designed to streamline your institution's operations with elegance and efficiency."
            center
            className="mb-16 animate-on-scroll"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="animate-on-scroll">
              <div className="glass p-6 rounded-xl h-full hover:translate-y-[-4px] transition-transform">
                <div className="w-12 h-12 rounded-full bg-arkyin-blue/10 text-arkyin-blue flex items-center justify-center mb-4">
                  <Calendar size={24} />
                </div>
                <h3 className="text-xl font-medium mb-2">Attendance System</h3>
                <p className="text-gray-400">
                  Track student attendance with ease. Generate reports, identify patterns, and send automated notifications to parents.
                </p>
              </div>
            </div>
            
            <div className="animate-on-scroll">
              <div className="glass p-6 rounded-xl h-full hover:translate-y-[-4px] transition-transform">
                <div className="w-12 h-12 rounded-full bg-arkyin-purple/10 text-arkyin-purple flex items-center justify-center mb-4">
                  <CreditCard size={24} />
                </div>
                <h3 className="text-xl font-medium mb-2">Fee & Invoicing</h3>
                <p className="text-gray-400">
                  Manage tuition, create payment plans, and automate billing with our intuitive financial module.
                </p>
              </div>
            </div>
            
            <div className="animate-on-scroll">
              <div className="glass p-6 rounded-xl h-full hover:translate-y-[-4px] transition-transform">
                <div className="w-12 h-12 rounded-full bg-arkyin-blue/10 text-arkyin-blue flex items-center justify-center mb-4">
                  <Users size={24} />
                </div>
                <h3 className="text-xl font-medium mb-2">Parent & Student Portals</h3>
                <p className="text-gray-400">
                  Give stakeholders access to important information through dedicated, secure portals.
                </p>
              </div>
            </div>
            
            <div className="animate-on-scroll">
              <div className="glass p-6 rounded-xl h-full hover:translate-y-[-4px] transition-transform">
                <div className="w-12 h-12 rounded-full bg-arkyin-purple/10 text-arkyin-purple flex items-center justify-center mb-4">
                  <MessageSquare size={24} />
                </div>
                <h3 className="text-xl font-medium mb-2">Real-time Communication</h3>
                <p className="text-gray-400">
                  Connect your entire educational community with instant messaging, announcements, and updates.
                </p>
              </div>
            </div>
            
            <div className="animate-on-scroll">
              <div className="glass p-6 rounded-xl h-full hover:translate-y-[-4px] transition-transform">
                <div className="w-12 h-12 rounded-full bg-arkyin-blue/10 text-arkyin-blue flex items-center justify-center mb-4">
                  <LineChart size={24} />
                </div>
                <h3 className="text-xl font-medium mb-2">Reporting & Analytics</h3>
                <p className="text-gray-400">
                  Transform data into insights with powerful reporting tools and visual analytics dashboards.
                </p>
              </div>
            </div>
            
            <div className="animate-on-scroll">
              <div className="glass p-6 rounded-xl h-full hover:translate-y-[-4px] transition-transform">
                <div className="w-12 h-12 rounded-full bg-arkyin-purple/10 text-arkyin-purple flex items-center justify-center mb-4">
                  <Settings size={24} />
                </div>
                <h3 className="text-xl font-medium mb-2">Custom Admin Tools</h3>
                <p className="text-gray-400">
                  Tailor administrative functions to match your institution's unique workflows and requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Product Showcase Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <SectionTitle 
              title="Elegantly Designed. Thoughtfully Crafted." 
              subtitle="Experience a user interface that blends aesthetics with functionality, designed for both administrators and end-users."
              className="mb-16 animate-on-scroll"
            />
            
            <div className="animate-on-scroll relative">
              <div className="relative">
                {/* Floating Elements */}
                <motion.div
                  className="absolute inset-0"
                  animate={{
                    scale: [1, 1.05, 1],
                    rotate: [0, 2, -2, 0]
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <div className="absolute top-0 left-0 w-4 h-4 rounded-full bg-arkyin-purple/20 blur-sm"></div>
                  <div className="absolute top-0 right-0 w-6 h-6 rounded-full bg-arkyin-blue/20 blur-sm"></div>
                  <div className="absolute bottom-0 left-0 w-5 h-5 rounded-full bg-arkyin-purple/20 blur-sm"></div>
                  <div className="absolute bottom-0 right-0 w-4 h-4 rounded-full bg-arkyin-blue/20 blur-sm"></div>
                </motion.div>

                {/* Dashboard Image with Glow Effect */}
                <motion.div
                  className="relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-arkyin-purple/20 to-arkyin-blue/20 blur-2xl rounded-2xl"></div>
                  <img 
                    src={staticAssets.Dashboard} 
                    alt="Dashboard Preview" 
                    className="relative rounded-2xl shadow-2xl shadow-arkyin-purple/20"
                  />
                </motion.div>

                {/* Animated Connection Lines */}
                <motion.div
                  className="absolute inset-0"
                  animate={{
                    opacity: [0.3, 0.6, 0.3]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-gradient-to-r from-arkyin-purple to-arkyin-blue rounded-full"></div>
                  <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-gradient-to-r from-arkyin-blue to-arkyin-purple rounded-full"></div>
                  <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-gradient-to-r from-arkyin-purple to-arkyin-blue rounded-full"></div>
                </motion.div>
              </div>
            </div>
            
            {/* <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative h-[300px] glass rounded-2xl overflow-hidden animate-on-scroll">
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-gray-300">Mobile view</p>
                </div>
              </div>
              
              <div className="relative h-[300px] glass rounded-2xl overflow-hidden animate-on-scroll">
                <div className="absolute inset-0 flex items-center justify-center">
                  <img src="/assets/Student_Profile.png" alt="Student_Profile" className="w-full h-full object-cover" />
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
      
      {/* Our Approach Section */}
      <section className="relative py-24 overflow-hidden">
        <AnimatedBackground variant="purple" intensity="low" withGrid={true} />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionTitle 
            title="A Thoughtful, Custom Process" 
            subtitle="We believe great software reflects the needs of its users. Our process ensures your solution is perfectly aligned with your institution's goals."
            center
            className="mb-16 animate-on-scroll"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="animate-on-scroll">
              <div className="glass p-8 rounded-2xl h-full text-center hover:translate-y-[-4px] transition-transform">
                <div className="w-16 h-16 rounded-full bg-arkyin-blue/20 text-arkyin-blue flex items-center justify-center mx-auto mb-6">
                  <Search size={24} />
                </div>
                <h3 className="text-xl font-medium mb-3">Discovery & Consultation</h3>
                <p className="text-gray-400">Understanding your institution's unique needs, challenges, and goals.</p>
              </div>
            </div>
            
            <div className="animate-on-scroll">
              <div className="glass p-8 rounded-2xl h-full text-center hover:translate-y-[-4px] transition-transform">
                <div className="w-16 h-16 rounded-full bg-arkyin-purple/20 text-arkyin-purple flex items-center justify-center mx-auto mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-medium mb-3">Tailored Design</h3>
                <p className="text-gray-400">Creating an elegant, intuitive interface that enhances user experience.</p>
              </div>
            </div>
            
            <div className="animate-on-scroll">
              <div className="glass p-8 rounded-2xl h-full text-center hover:translate-y-[-4px] transition-transform">
                <div className="w-16 h-16 rounded-full bg-arkyin-blue/20 text-arkyin-blue flex items-center justify-center mx-auto mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="16 18 22 12 16 6"></polyline>
                    <polyline points="8 6 2 12 8 18"></polyline>
                  </svg>
                </div>
                <h3 className="text-xl font-medium mb-3">Agile Development</h3>
                <p className="text-gray-400">Building with flexibility to adapt to feedback and evolving requirements.</p>
              </div>
            </div>
            
            <div className="animate-on-scroll">
              <div className="glass p-8 rounded-2xl h-full text-center hover:translate-y-[-4px] transition-transform">
                <div className="w-16 h-16 rounded-full bg-arkyin-purple/20 text-arkyin-purple flex items-center justify-center mx-auto mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 6 7 17l-5-5"></path>
                    <path d="m22 10-7.5 7.5L13 16"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-medium mb-3">Ongoing Support</h3>
                <p className="text-gray-400">Providing continuous assistance, updates, and enhancements after launch.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* About Arkyin Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <SectionTitle 
              title="Meet the Studio" 
              subtitle="Founded by designers and developers passionate about meaningful software, Arkyn blends elegance and engineering to create next-gen education systems."
              className="mb-16 animate-on-scroll"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="animate-on-scroll">
                <div className="glass p-8 rounded-2xl h-full">
                  <h3 className="text-xl font-medium mb-6 text-gradient">Our Capabilities</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="mr-4 h-6 w-6 rounded-full bg-arkyin-purple/20 text-arkyin-purple flex items-center justify-center flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M18 6 7 17l-5-5"></path>
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-medium">Industry-Proven Talent</h4>
                        <p className="text-gray-400 text-sm">Team of engineers and designers with a proven track record in education tech.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-4 h-6 w-6 rounded-full bg-arkyin-purple/20 text-arkyin-purple flex items-center justify-center flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M18 6 7 17l-5-5"></path>
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-medium">UI/UX obsessed</h4>
                        <p className="text-gray-400 text-sm">Creating interfaces that delight users and enhance productivity</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-4 h-6 w-6 rounded-full bg-arkyin-purple/20 text-arkyin-purple flex items-center justify-center flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M18 6 7 17l-5-5"></path>
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-medium">Modern tech stack</h4>
                        <p className="text-gray-400 text-sm">Built on React, Node, Tailwind, and other cutting-edge technologies</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-4 h-6 w-6 rounded-full bg-arkyin-purple/20 text-arkyin-purple flex items-center justify-center flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M18 6 7 17l-5-5"></path>
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-medium">Scalable architecture</h4>
                        <p className="text-gray-400 text-sm">Enterprise-grade cloud infrastructure that grows with your needs</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="animate-on-scroll">
                <div className="relative h-full glass rounded-2xl overflow-hidden p-8">
                  <h3 className="text-xl font-medium mb-6 text-gradient">Our Values</h3>
                  <ul className="space-y-6">
                    <li>
                      <h4 className="font-medium text-lg">Elegance in Engineering</h4>
                      <p className="text-gray-400">We believe educational software should be as refined as the institutions it serves.</p>
                    </li>
                    <li>
                      <h4 className="font-medium text-lg">Empathy-Driven Design</h4>
                      <p className="text-gray-400">Every feature is crafted with a deep understanding of educational workflows.</p>
                    </li>
                    <li>
                      <h4 className="font-medium text-lg">Continuous Evolution</h4>
                      <p className="text-gray-400">We're committed to growing our platform alongside the changing landscape of education.</p>
                    </li>
                  </ul>
                </div>
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

export default Index;

import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-arkyin-darker border-t border-white/10">
      <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-4 space-y-6">
            <div className="flex items-center">
              <span className="font-satoshi text-2xl font-bold text-white">ARKYN</span>
              <span className="ml-1 text-arkyin-purple">✦</span>
            </div>
            <p className="text-gray-400 max-w-xs">
              Crafting luxurious school management systems tailored for modern educational institutions across the globe.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div className="md:col-span-2 space-y-4">
            <h3 className="font-medium text-white text-lg">Pages</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/product" className="text-gray-400 hover:text-white transition-colors">Product</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">About</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link>
              </li>
            </ul>
          </div>
          
          <div className="md:col-span-2 space-y-4">
            <h3 className="font-medium text-white text-lg">Features</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/product#modules" className="text-gray-400 hover:text-white transition-colors">Attendance</Link>
              </li>
              <li>
                <Link to="/product#modules" className="text-gray-400 hover:text-white transition-colors">Fee Management</Link>
              </li>
              <li>
                <Link to="/product#modules" className="text-gray-400 hover:text-white transition-colors">Parent Portal</Link>
              </li>
              <li>
                <Link to="/product#modules" className="text-gray-400 hover:text-white transition-colors">Analytics</Link>
              </li>
              <li>
                <Link to="/product#modules" className="text-gray-400 hover:text-white transition-colors">Communication</Link>
              </li>
            </ul>
          </div>
          
          <div className="md:col-span-4 space-y-4">
            <h3 className="font-medium text-white text-lg">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start text-gray-400">
                <MapPin size={20} className="mr-3 mt-1 flex-shrink-0 text-arkyin-purple" />
                <span>4 Shiv Ashish, Dholeshwar Mahadev Road,Gandhinagar-382007, India</span>
              </li>
              <li className="flex items-center text-gray-400">
                <Phone size={20} className="mr-3 flex-shrink-0 text-arkyin-purple" />
                <span>+91 99135 97750</span>
              </li>
              <li className="flex items-center text-gray-400">
                <Mail size={20} className="mr-3 flex-shrink-0 text-arkyin-purple" />
                <span>info.arkyn@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">© 2025 Arkyn. All rights reserved.</p>
          <p className="text-gray-500 text-sm mt-4 sm:mt-0">
            Made with <span className="text-arkyin-purple">✦</span> by Arkyn
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

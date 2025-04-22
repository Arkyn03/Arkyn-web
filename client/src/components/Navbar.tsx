import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const NavLink = ({ 
  to, 
  children, 
  className,
  onClick 
}: { 
  to: string; 
  children: React.ReactNode; 
  className?: string;
  onClick?: () => void;
}) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <Link
      to={to}
      onClick={onClick}
      className={cn(
        'relative px-3 py-2 text-sm font-medium transition-colors',
        'hover:text-white after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-arkyin-purple after:transition-transform after:duration-300 hover:after:origin-bottom-left hover:after:scale-x-100',
        isActive ? 'text-white after:scale-x-100 after:origin-bottom-left' : 'text-gray-400',
        className
      )}
    >
      {children}
    </Link>
  );
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header
      className={cn(
        'fixed top-0 z-50 w-full transition-all duration-300',
        isScrolled ? 'glass-darker py-3' : 'bg-transparent py-5'
      )}
    >
      <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center">
          <span className="font-satoshi text-xl font-bold text-white">ARKYN</span>
          <span className="ml-1 text-arkyin-purple">✦</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/product">Product</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>

        <div className="hidden md:flex items-center">
          <Button 
            className="glow bg-gradient-to-r from-arkyin-blue to-arkyin-purple hover:opacity-90"
            onClick={() => navigate('/contact')}
          >
            Book a Demo
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden text-white focus:outline-none"
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full glass-darker animate-fade-in py-4">
          <div className="container mx-auto px-4 flex flex-col space-y-3">
            <NavLink to="/" className="py-2 block" onClick={() => setMobileMenuOpen(false)}>
              Home
            </NavLink>
            <NavLink to="/product" className="py-2 block" onClick={() => setMobileMenuOpen(false)}>
              Product
            </NavLink>
            <NavLink to="/about" className="py-2 block" onClick={() => setMobileMenuOpen(false)}>
              About
            </NavLink>
            <NavLink to="/contact" className="py-2 block" onClick={() => setMobileMenuOpen(false)}>
              Contact
            </NavLink>
            <div className="pt-2">
              <Button 
                className="bg-gradient-to-r from-arkyin-blue to-arkyin-purple justify-start hover:opacity-90"
                onClick={() => {
                  navigate('/contact');
                  setMobileMenuOpen(false);
                }}
              >
                Book a Demo
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Sun, Moon, Menu, X } from 'lucide-react';

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
}

export default function Navbar({ isDark, toggleTheme }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Wedding', path: '/gallery/wedding' },
    { name: 'Fashion', path: '/gallery/fashion' },
    { name: 'Studio', path: '/gallery/studio' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 px-6 py-4 md:px-12 md:py-6 ${
        isScrolled ? 'bg-white/80 dark:bg-black/80 backdrop-blur-md py-4' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link 
          to="/" 
          className="text-xl md:text-2xl tracking-[0.4em] font-light hover:opacity-70 transition-opacity"
        >
          LUMINA
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-12 text-[11px] uppercase tracking-[0.2em] font-medium">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              className={`hover:text-white transition-colors pb-1 ${
                location.pathname === link.path ? 'border-b border-white' : 'opacity-50 hover:opacity-100'
              }`}
            >
              {link.name}
            </Link>
          ))}
          
          <div 
            onClick={toggleTheme}
            className="w-10 h-5 bg-white/10 rounded-full relative flex items-center px-1 cursor-pointer transition-all hover:bg-white/20"
          >
            <motion.div 
              animate={{ x: isDark ? 20 : 0 }}
              className="w-3 h-3 bg-white rounded-full shadow-sm"
            />
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center space-x-4 md:hidden">
          <button onClick={toggleTheme} className="p-2">
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-stone-50 dark:bg-stone-950 border-b border-black/10 dark:border-white/10 p-12 flex flex-col items-center space-y-8 md:hidden shadow-2xl"
          >
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className="font-serif text-4xl hover:italic transition-all"
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import GalleryPage from './pages/GalleryPage';

export default function App() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <Router>
      <div className={`min-h-screen transition-colors duration-500 ${isDark ? 'bg-stone-950 text-stone-100' : 'bg-stone-50 text-stone-900'}`}>
        <Navbar isDark={isDark} toggleTheme={toggleTheme} />
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/gallery/:category" element={<GalleryPage />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

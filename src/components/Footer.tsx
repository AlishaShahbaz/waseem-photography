import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="px-6 md:px-12 py-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[9px] uppercase tracking-[0.3em] opacity-40 space-y-4 md:space-y-0 text-center md:text-left">
      <div>Est. 2024 © London, United Kingdom — Lumina Artistry</div>
      <div className="flex gap-8">
        <a href="#" className="hover:text-white transition-colors">Instagram</a>
        <a href="#" className="hover:text-white transition-colors">Vogue Portfolio</a>
        <a href="#" className="hover:text-white transition-colors">Behance</a>
      </div>
    </footer>
  );
}

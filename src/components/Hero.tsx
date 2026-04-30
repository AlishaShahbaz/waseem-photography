import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center px-6 md:px-24">
      {/* Background Image with Theme Treatment */}
      <motion.div 
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, ease: "linear" }}
        className="absolute inset-0 bg-cover bg-center z-0 contrast-125 grayscale opacity-40"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&q=80&w=2670")' }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-[#0A0A0A]/50" />
      </motion.div>

      {/* Background Decorative Shapes */}
      <div className="absolute inset-0 pointer-events-none z-1 overflow-hidden select-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-gradient-to-br from-white/10 to-transparent blur-3xl rounded-full opacity-30"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-[60%] h-[60%] bg-gradient-to-tl from-white/10 to-transparent blur-3xl rounded-full opacity-20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 space-y-8">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-6"
        >
          <span className="subheading text-white/50 tracking-[0.5em]">Volume 01 — Editorial Selection</span>
          <h1 className="heading-xl text-white">
            Lumina <br />
            <span className="ml-12 md:ml-32">Artistry</span>
          </h1>
          <p className="mt-8 ml-12 md:ml-32 max-w-sm text-sm leading-relaxed text-[#A0A0A0] italic font-serif opacity-0 animate-fade-in animation-delay-500" style={{ animationFillMode: 'forwards' }}>
            Exploring the delicate intersection of architectural form, haute couture, and the raw human spirit through a refined editorial lens.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="ml-12 md:ml-32"
        >
          <button className="group flex items-center gap-6">
            <span className="btn-circle">
              ↓
            </span>
            <span className="text-[11px] uppercase tracking-[0.3em] font-semibold opacity-50 group-hover:opacity-100 transition-opacity">Scroll to Explore</span>
          </button>
        </motion.div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 1s ease-out forwards;
        }
        .animation-delay-500 {
          animation-delay: 0.8s;
        }
      `}</style>
    </section>
  );
}

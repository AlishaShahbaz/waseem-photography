import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Link } from 'react-router-dom';

interface GallerySectionProps {
  title: string;
  tagline: string;
  category: string;
  images: string[];
}

export default function AsymmetricalGallery({ title, tagline, category, images }: GallerySectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const portraitY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const landscapeY = useTransform(scrollYProgress, [0, 1], [0, 50]);

  return (
    <section ref={containerRef} className="py-24 md:py-48 px-6 md:px-12 max-w-7xl mx-auto flex gap-12 relative overflow-hidden">
      {/* Sidebar Label (Vertical) */}
      <div className="hidden lg:flex w-20 flex-col justify-end pb-12">
        <span className="rotate-[-90deg] origin-left whitespace-nowrap text-[10px] tracking-[0.5em] uppercase opacity-30">
          VOLUME 01 — {category.toUpperCase()} SELECTION
        </span>
      </div>

      <div className="flex-1 relative space-y-24">
        {/* Header Content */}
        <div className="md:absolute top-0 left-0 z-40 space-y-8 md:max-w-md">
          <motion.h2 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="heading-xl"
          >
            {title.split(' ')[0]}<br/>
            <span className="ml-12 md:ml-20">{title.split(' ')[1] || 'Series'}</span>
          </motion.h2>
          
          <div className="md:ml-24 space-y-10">
            <p className="text-sm leading-relaxed opacity-60 italic font-serif max-w-xs">
              {tagline}. A curated exploration of light and form within the {category} realm.
            </p>
            
            <Link to={`/gallery/${category}`} className="group flex items-center gap-4">
              <span className="btn-circle">
                →
              </span>
              <span className="text-[11px] uppercase tracking-[0.2em] font-semibold">View Gallery</span>
            </Link>
          </div>
        </div>

        {/* Non-uniform Image Layout */}
        <div className="relative w-full h-[600px] md:h-[800px] mt-24 md:mt-0">
          {/* 1. Tall Portrait Image */}
          <motion.div 
            style={{ y: portraitY }}
            className="absolute right-0 md:right-[220px] top-0 w-full md:w-[400px] h-[500px] md:h-[600px] image-card z-10"
          >
            <img 
              src={images[0]} 
              loading="lazy"
              alt={`${title} main`}
              className="w-full h-full object-cover grayscale contrast-125 opacity-90 transition-all duration-1000"
            />
          </motion.div>

          {/* 2. Small Stacked Image (Offset Right) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="hidden md:block absolute right-0 top-12 w-[180px] h-[240px] image-card contrast-75 brightness-75 z-0"
          >
            <img 
              src={images[1]} 
              loading="lazy"
              alt={`${title} detail 1`}
              className="w-full h-full object-cover grayscale"
            />
          </motion.div>

          {/* 3. Small Overlapping Image */}
          <motion.div 
            whileInView={{ x: [20, 0] }}
            className="absolute left-0 md:left-auto md:right-20 top-[400px] md:top-[500px] w-[180px] md:w-[220px] h-[150px] image-card z-30"
          >
             <img 
              src={images[2]} 
              loading="lazy"
              alt={`${title} detail 2`}
              className="w-full h-full object-cover grayscale brightness-110"
            />
          </motion.div>

          {/* 4. Wide Landscape Image */}
          <motion.div 
            style={{ y: landscapeY }}
            className="absolute left-0 md:left-[120px] bottom-0 md:bottom-16 w-full md:w-[500px] h-[200px] md:h-[280px] image-card z-20"
          >
            <img 
              src={images[3]} 
              loading="lazy"
              alt={`${title} wide`}
              className="w-full h-full object-cover contrast-110 opacity-80"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

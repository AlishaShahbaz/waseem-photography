import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';

const galleryData: Record<string, { title: string; desc: string; images: string[] }> = {
  wedding: {
    title: "Wedding Series",
    desc: "Capturing the raw emotion and timeless elegance of your special day. From intimate elopements to grand celebrations.",
    images: [
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622",
      "https://images.unsplash.com/photo-1519741497674-611481863552",
      "https://images.unsplash.com/photo-1469334031218-e382a71b716b",
      "https://images.unsplash.com/photo-1460364154851-61d558878d71",
      "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8",
      "https://images.unsplash.com/photo-1522673607200-1648483b1c6f",
      "https://images.unsplash.com/photo-1532712938310-34cb3982ef74",
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed"
    ]
  },
  fashion: {
    title: "Fashion Editorial",
    desc: "Boundary-pushing visual narratives for high-end fashion brands and editorial publications.",
    images: [
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b",
      "https://images.unsplash.com/photo-1581067723713-3fe0f3f635f0",
      "https://images.unsplash.com/photo-1550614000-4895a10e1bfd",
      "https://images.unsplash.com/photo-1492633423870-43d1cd2775ff",
      "https://images.unsplash.com/photo-1509319117193-57bab727e09d",
      "https://images.unsplash.com/photo-1509631179647-0177331693ae",
      "https://images.unsplash.com/photo-1520975954732-35dd23335260",
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c"
    ]
  },
  studio: {
    title: "Studio Portraits",
    desc: "Character-driven portraiture focusing on light, texture, and the human spirit in a controlled environment.",
    images: [
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04",
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
      "https://images.unsplash.com/photo-1521119989659-a83eee488004",
      "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79",
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7"
    ]
  }
};

export default function GalleryPage() {
  const { category } = useParams<{ category: string }>();
  const data = category ? galleryData[category] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [category]);

  if (!data) return <div className="pt-32 text-center heading-lg">Series Not Found</div>;

  return (
    <main className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto space-y-24 relative overflow-hidden">
      {/* Background Shapes */}
      <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden select-none">
        <div className="absolute top-[-5%] left-[60%] w-[30%] h-[30%] bg-gradient-to-tr from-white/5 to-transparent blur-3xl rounded-full opacity-50"></div>
      </div>

      {/* Page Header */}
      <div className="space-y-12">
        <Link to="/" className="flex items-center space-x-2 text-[10px] uppercase tracking-[0.3em] opacity-40 hover:opacity-100 transition-all">
          <ArrowLeft size={12} />
          <span>Back to Home</span>
        </Link>
        <div className="space-y-6 max-w-3xl">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="heading-xl"
          >
            {data.title.split(' ')[0]}<br/>
            <span className="ml-12 md:ml-32">{data.title.split(' ')[1] || 'Gallery'}</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-sm leading-relaxed text-[#A0A0A0] italic font-serif max-w-xl md:ml-32"
          >
            {data.desc}
          </motion.p>
        </div>
      </div>

      {/* Immersive Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {data.images.map((img, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: (idx % 3) * 0.1 }}
            className={`image-card ${
                idx % 7 === 0 ? 'md:col-span-2 aspect-[16/9]' : 
                idx % 5 === 0 ? 'aspect-[4/5] md:row-span-2' : 
                'aspect-square'
            }`}
          >
            <img 
              src={`${img}?auto=format&fit=crop&q=80&w=1200`}
              alt={`${data.title} ${idx}`}
              className="w-full h-full object-cover grayscale brightness-90 contrast-110 transition-transform duration-1000 hover:scale-110 hover:grayscale-0 hover:brightness-100"
              loading="lazy"
            />
          </motion.div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="pt-24 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
        <p className="subheading text-[10px]">End of series</p>
        <Link to="/" className="group flex items-center gap-6">
           <span className="text-[11px] uppercase tracking-[0.3em] font-semibold opacity-50 group-hover:opacity-100 transition-opacity">Contact for Booking</span>
           <span className="btn-circle">→</span>
        </Link>
      </div>
    </main>
  );
}

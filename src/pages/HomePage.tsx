import Hero from '../components/Hero';
import AsymmetricalGallery from '../components/AsymmetricalGallery';

export default function HomePage() {
  const sections = [
    {
      title: "Wedding Photography",
      tagline: "Eternal Moments",
      category: "wedding",
      images: [
        "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1200",
        "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800",
        "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80&w=800",
        "https://images.unsplash.com/photo-1460364154851-61d558878d71?auto=format&fit=crop&q=80&w=1600"
      ]
    },
    {
      title: "Fashion Shoots",
      tagline: "Avant-Garde Style",
      category: "fashion",
      images: [
        "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&q=80&w=1200",
        "https://images.unsplash.com/photo-1581067723713-3fe0f3f635f0?auto=format&fit=crop&q=80&w=800",
        "https://images.unsplash.com/photo-1550614000-4895a10e1bfd?auto=format&fit=crop&q=80&w=800",
        "https://images.unsplash.com/photo-1492633423870-43d1cd2775ff?auto=format&fit=crop&q=80&w=1600"
      ]
    },
    {
      title: "Studio Photography",
      tagline: "Controlled Drama",
      category: "studio",
      images: [
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=1200",
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=800",
        "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=800",
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=1600"
      ]
    }
  ];

  return (
    <main className="relative">
      <Hero />
      
      {/* Background Decorative Shapes */}
      <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden select-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-gradient-to-br from-white/5 to-transparent blur-3xl rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-[50%] h-[50%] bg-gradient-to-tl from-white/5 to-transparent blur-3xl rounded-full"></div>
      </div>

      <div className="space-y-32">
        <AsymmetricalGallery 
          title={sections[0].title}
          tagline={sections[0].tagline}
          category={sections[0].category}
          images={sections[0].images}
        />
        <AsymmetricalGallery 
          title={sections[1].title}
          tagline={sections[1].tagline}
          category={sections[1].category}
          images={sections[1].images}
        />
        <AsymmetricalGallery 
          title={sections[2].title}
          tagline={sections[2].tagline}
          category={sections[2].category}
          images={sections[2].images}
        />
      </div>

      {/* Narrative Section */}
      <section className="py-48 px-6 text-center max-w-4xl mx-auto space-y-12">
        <h3 className="heading-lg italic px-4">"The best thing about a picture is that it never changes, even when the people in it do."</h3>
        <p className="subheading opacity-50">– Andy Warhol</p>
      </section>
    </main>
  );
}

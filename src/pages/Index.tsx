import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import GroovyLines from '@/components/GroovyLines';
import ProductCard from '@/components/ProductCard';
import BlogCard from '@/components/BlogCard';
const Index = () => {
  const [visible, setVisible] = useState<Record<string, boolean>>({});

  // Intersection Observer for fade-in animations
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisible(prev => ({
            ...prev,
            [entry.target.id]: true
          }));
        }
      });
    }, {
      threshold: 0.1
    });
    const sections = document.querySelectorAll('section[id]');
    sections.forEach(section => {
      observer.observe(section);
    });
    return () => {
      sections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);
  const fadeInClass = (id: string) => visible[id] ? 'opacity-100 translate-y-0 transition-all duration-1000' : 'opacity-0 translate-y-10 transition-all duration-1000';
  return <>
    <Header />
    
    <GroovyLines />

    {/* Hero Section */}
    <section id="home" className="min-h-screen flex items-center py-20 relative">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 px-6 items-center relative z-10">
        <div className={`${fadeInClass('home')} space-y-6`}>
          <h1 className="text-[clamp(2.7rem,5vw+1rem,6rem)] leading-none text-ninny-raspberry">STAY SMOOTH. STAY LIFTED. STAY SOULFUL.</h1>
          <p className="text-xl text-ninny-raspberry max-w-lg">
            Step into our groovy time capsule where vintage vibes meet premium cannabis.
          </p>
          <a href="#shop" className="retro-button inline-block">
            Shop Now
          </a>
        </div>
        <div className={`${fadeInClass('home')} transform rotate-6`}>
          <div className="aspect-[3/4] bg-gray-200 rounded-lg overflow-hidden shadow-xl">
            <img alt="Vintage vinyl records" className="w-full h-full object-cover" src="/lovable-uploads/f8a25f50-412a-4b92-9b9a-042bc5274479.jpg" />
          </div>
        </div>
      </div>
    </section>

    {/* Shop Section - MOVED UP to be right after Hero */}
    <section id="shop" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <h2 className={`text-center text-4xl font-funkydori uppercase text-ninny-raspberry mb-16 ${fadeInClass('shop')}`} style={{
          fontFamily: 'Pacifico, Monoton, cursive'
        }}>
          Far Out Products
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 mb-16">
          <ProductCard title="Flower" description="Premium cannabis strains with that vintage quality" iconBg="bg-ninny-marigold" iconSrc="/lovable-uploads/7c74c706-1102-43a2-bcd2-fe521ab66c26.png" />
          
          <ProductCard title="Edibles" description="Groovy treats that'll take you back to the 70s" iconBg="bg-ninny-water" iconSrc="/lovable-uploads/83c3b308-127f-46bd-9eb6-ef6d0bc17530.png" />
          
          <ProductCard title="Vapes" description="Modern tech with retro style for easy enjoyment" iconBg="bg-ninny-marigold" iconSrc="/lovable-uploads/a4cce5bd-dbfa-4a79-a948-7f3df095317b.png" />
          
          <ProductCard title="Concentrates" description="Powerful extracts with that pure 70s euphoria" iconBg="bg-ninny-raspberry" iconSrc="/lovable-uploads/c41c7e6b-9ba9-4bdd-8a73-09481cf54775.png" />
          
          <ProductCard title="Accessories" description="Tools and gear with vintage-inspired designs" iconBg="bg-ninny-mandarin" iconSrc="/lovable-uploads/6eada197-f35a-46b0-aeb3-ddd7b4588e7b.png" />
        </div>
        
        <div className="text-center">
          <a href="#" className="retro-button">View All Products</a>
        </div>
      </div>
    </section>

    {/* Our Mission Section - MOVED DOWN after Shop */}
    <section id="mission" className="py-24 bg-ninny-cashmere/60 relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <h2 className={`text-center text-4xl font-funkydori text-ninny-raspberry mb-16 ${fadeInClass('mission')}`} style={{
          fontFamily: 'Pacifico, Monoton, cursive'
        }}>
          Our Mission
        </h2>
        <div className="grid md:grid-cols-3 gap-12">
          <div className={`text-center ${fadeInClass('mission')}`}>
            <div className="w-20 h-20 bg-ninny-raspberry rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-ninny-cashmere" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="m5 3 4 2v12l-4-2V3z" />
                <path d="m9 5 4 2v12l-4-2V5z" />
                <path d="m13 7 4 2v12l-4-2V7z" />
                <path d="m17 9 4 2v12l-4-2V9z" />
              </svg>
            </div>
            <h3 className="text-ninny-water text-xl uppercase mb-2" style={{
              fontFamily: 'Pacifico, Monoton, cursive'
            }}>Elevating the Standard</h3>
            <p className="text-ninny-strawberry">
              We source the highest quality cannabis products, carefully curated for a premium experience that takes you back to the golden era.
            </p>
          </div>
          
          <div className={`text-center ${fadeInClass('mission')}`}>
            <div className="w-20 h-20 bg-ninny-water rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-ninny-cashmere" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 1 0 7.75" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
            <h3 className="text-ninny-water text-xl uppercase mb-2" style={{
              fontFamily: 'Pacifico, Monoton, cursive'
            }}>Promoting Inclusivity</h3>
            <p className="text-ninny-strawberry">
              Our dispensary welcomes everyone, creating a safe and accepting space for cannabis enthusiasts from all walks of life.
            </p>
          </div>
          
          <div className={`text-center ${fadeInClass('mission')}`}>
            <div className="w-20 h-20 bg-ninny-mandarin rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-ninny-cashmere" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
              </svg>
            </div>
            <h3 className="text-ninny-water text-xl uppercase mb-2" style={{
              fontFamily: 'Pacifico, Monoton, cursive'
            }}>Educating and Empowering</h3>
            <p className="text-ninny-strawberry">
              We believe in empowering our customers through education, providing comprehensive information about our products and their benefits.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Products Intro Section */}
    <section className="py-24 bg-ninny-water text-ninny-cashmere relative" id="products-intro">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div className={`${fadeInClass('products-intro')}`}>
          <h2 className="text-4xl uppercase mb-6" style={{
            fontFamily: 'Pacifico, Monoton, cursive'
          }}>Immerse Yourself in a Groovy Cannabis Culture</h2>
          <p className="mb-6 text-lg">
            Founded by true cannabis enthusiasts, our dispensary exudes a passion for the plant and a commitment to creating a haven for like-minded individuals who dig the good vibes.
          </p>
          <p className="mb-10">
            Step into a far-out space designed for cannabis people, by cannabis people and experience a shopping environment that feels like home in the 70s, man!
          </p>
          <a href="#shop" className="bg-ninny-mandarin text-ninny-cashmere px-6 py-3 rounded-full font-bold uppercase tracking-wider hover:bg-ninny-marigold transition-colors inline-block">
            Explore Our Products
          </a>
        </div>
        <div className={`${fadeInClass('products-intro')}`}>
          <div className="aspect-[4/3] overflow-hidden rounded-[30%_70%_70%_30%/30%_30%_70%_70%]">
            <img alt="70s inspired interior" className="w-full h-full object-cover" src="/lovable-uploads/d085a8fe-a733-4b4b-9cfa-3e0edc83be45.jpg" />
          </div>
        </div>
      </div>
    </section>

    {/* Blog Section - Updated with new images and content */}
    <section id="blog" className="py-24 bg-ninny-cashmere/60 relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <h2 className={`text-center text-4xl uppercase text-ninny-raspberry mb-16 ${fadeInClass('blog')}`} style={{
          fontFamily: 'Genty, sans-serif'
        }}>
          Groovy Blog
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <BlogCard title="Soul Train: Music & Cannabis" description="Explore the vibrant connection between 70s music culture and cannabis, tracing the rhythm of social change." date="July 15, 2023" author="Disco Dan" image="/lovable-uploads/bfed2b8d-6c79-424d-8c25-a3ef7d91d80f.png" link="/blog/soul-train-culture" />
          
          <BlogCard title="Vinyl Vibes & Green Scenes" description="Dive into how vintage vinyl records and premium cannabis create the perfect nostalgic experience." date="August 10, 2023" author="Record Roller" image="/lovable-uploads/60332039-deba-4d8d-9a20-7bfd3b684233.png" link="/blog/vinyl-cannabis-connection" />
          
          <BlogCard title="Roller Disco Revolution" description="A journey through the intersections of roller skating, music, and cannabis in the radical 1970s." date="September 5, 2023" author="Groovy Greta" image="/lovable-uploads/53741e30-b75e-4731-8834-af7367041663.png" link="/blog/roller-disco-revolution" />
        </div>
        
        <div className="text-center mt-12">
          <a href="/blog" className="retro-button">Show All Blog Posts</a>
        </div>
      </div>
    </section>

    {/* Newsletter Section */}
    <section id="newsletter" className="py-24 relative">
      <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
        <h2 className={`text-4xl uppercase text-ninny-water mb-8 ${fadeInClass('newsletter')}`} style={{
          fontFamily: 'Pacifico, Monoton, cursive'
        }}>
          Join the Dispo Disco!
        </h2>
        <p className={`text-ninny-raspberry mb-8 ${fadeInClass('newsletter')}`}>
          Sign up for our newsletter to get the latest updates on new products, promotions, and far-out content!
        </p>
        <form className={`flex flex-col sm:flex-row gap-4 ${fadeInClass('newsletter')}`}>
          <input type="text" placeholder="First Name" className="flex-1 px-4 py-3 rounded-full border border-ninny-water/40 focus:outline-none focus:border-ninny-water" />
          <input type="email" placeholder="Your Email" className="flex-1 px-4 py-3 rounded-full border border-ninny-water/40 focus:outline-none focus:border-ninny-water" />
          <button type="submit" className="bg-ninny-mandarin text-ninny-cashmere px-6 py-3 rounded-full font-bold uppercase tracking-wider hover:bg-ninny-marigold transition-colors">
            Sign Up
          </button>
        </form>
      </div>
    </section>

    <Footer />
  </>;
};
export default Index;
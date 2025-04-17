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
            <h1 className="text-[clamp(2.7rem,5vw+1rem,6rem)] leading-none font-funkydori text-ninny-raspberry">
              Vintage 70s Records
            </h1>
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

      {/* Mission Section */}
      <section id="mission" className="py-24 bg-ninny-cashmere/60 relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <h2 className={`text-center text-4xl font-funkydori text-ninny-raspberry mb-16 ${fadeInClass('mission')}`}>
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
              <h3 className="text-ninny-water text-xl mb-2">Elevating the Standard</h3>
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
              <h3 className="text-ninny-water text-xl mb-2">Promoting Inclusivity</h3>
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
              <h3 className="text-ninny-water text-xl mb-2">Educating and Empowering</h3>
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
            <h2 className="text-4xl font-funkydori mb-6">Immerse Yourself in a Groovy Cannabis Culture</h2>
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
              <img alt="70s inspired interior" className="w-full h-full object-cover" src="/lovable-uploads/12b24b3f-b3f2-4982-b7ac-bb7f1d7f2ef0.jpg" />
            </div>
          </div>
        </div>
      </section>

      {/* Shop Section */}
      <section id="shop" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <h2 className={`text-center text-4xl font-funkydori text-ninny-raspberry mb-16 ${fadeInClass('shop')}`}>
            Far Out Products
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 mb-16">
            <ProductCard 
              title="Flower" 
              description="Premium cannabis strains with that vintage quality" 
              iconBg="bg-ninny-marigold"
              iconSrc="/lovable-uploads/7c74c706-1102-43a2-bcd2-fe521ab66c26.png"
            />
            
            <ProductCard 
              title="Edibles" 
              description="Groovy treats that'll take you back to the 70s" 
              iconBg="bg-ninny-water"
              iconSrc="/lovable-uploads/83c3b308-127f-46bd-9eb6-ef6d0bc17530.png"
            />
            
            <ProductCard 
              title="Vapes" 
              description="Modern tech with retro style for easy enjoyment" 
              iconBg="bg-ninny-marigold"
              iconSrc="/lovable-uploads/a4cce5bd-dbfa-4a79-a948-7f3df095317b.png"
            />
            
            <ProductCard 
              title="Concentrates" 
              description="Powerful extracts with that pure 70s euphoria" 
              iconBg="bg-ninny-raspberry"
              iconSrc="/lovable-uploads/c41c7e6b-9ba9-4bdd-8a73-09481cf54775.png"
            />
            
            <ProductCard 
              title="Accessories" 
              description="Tools and gear with vintage-inspired designs" 
              iconBg="bg-ninny-mandarin"
              iconSrc="/lovable-uploads/6eada197-f35a-46b0-aeb3-ddd7b4588e7b.png"
            />
          </div>
          
          <div className="text-center">
            <a href="#" className="retro-button">View All Products</a>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-24 bg-ninny-cashmere/60 relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <h2 className={`text-center text-4xl font-funkydori text-ninny-raspberry mb-16 ${fadeInClass('blog')}`}>
            Blog
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <BlogCard title="Far Out Growing Tips" description="Dig these funky cultivation methods that'll give your garden those righteous vibrations and produce some dynamite results!" />
            <BlogCard title="Groovy Cannabis Culture" description="Take a trip back to the 70s and explore how cannabis shaped the counterculture movement that's still rockin' our world today!" />
            <BlogCard title="Peace & Pot Pairings" description="Get down with our outta sight strain recommendations to pair with those classic vinyl records for the ultimate cosmic experience!" />
          </div>
          
          <div className="text-center mt-12">
            <a href="#" className="retro-button">Show All</a>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section id="newsletter" className="py-24 relative">
        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <h2 className={`text-4xl font-funkydori text-ninny-water mb-8 ${fadeInClass('newsletter')}`}>
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

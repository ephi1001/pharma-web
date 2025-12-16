import React, { useState, useEffect, useRef } from 'react';
import { Shield, FileText, DollarSign, MessageCircle } from 'lucide-react';
import Header from './components/Header';
import Footer from './components/Footer';
import Contact from './components/Contact';
import About from './components/About';
import novatherapyImg from './assets/pictures/photo_2025-12-16_07-38-56.jpg';
import bioshieldImg from './assets/pictures/photo_2025-12-16_07-44-11.jpg';
import neurocureImg from './assets/pictures/photo_2025-12-16_07-14-04.jpg';
import img4 from './assets/pictures/photo_2025-12-11_05-43-21.jpg';
import img5 from './assets/pictures/photo_2025-12-11_17-35-04.jpg';
import img6 from './assets/pictures/photo_2025-12-16_07-28-46.jpg';
import newImage from './assets/pictures/photo_2025-12-11_08-34-42.jpg';
import logo from './assets/pictures/photo_2025-12-11_16-43-44.jpg';
import cityBg from './assets/pictures/city_bg.jpg';
import modernBg from './assets/pictures/modern_bg.jpg';

export default function App() {
  const [selectedCard, setSelectedCard] = useState(null);
  const [activeCard, setActiveCard] = useState(1); // middle card initially active

  const sectionRef = useRef(null);
  const cardRefs = [useRef(null), useRef(null), useRef(null)];

  const order = [(activeCard + 2) % 3, activeCard, (activeCard + 1) % 3];

  const cards = [
    { emoji: '🛡️', title: 'Quality Product', text: 'Delivering superior quality pharmaceutical products with uncompromising standards of excellence and regulatory compliance.' },
    { emoji: '📋', title: 'Regulatory and Marketing Product', text: 'Comprehensive regulatory compliance and effective marketing products to support pharmaceutical distribution and promotion.' },
    { emoji: '💰', title: 'Affordable Price', text: 'Offering competitive and affordable pricing without compromising on quality or efficacy.' }
  ];

  const handleCardClick = (index) => {
    setSelectedCard(selectedCard === index ? null : index);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const sectionRect = sectionRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const viewportCenter = viewportHeight / 2;

      // Check if section is in viewport
      if (sectionRect.top < viewportHeight && sectionRect.bottom > 0) {
        let closestIndex = 0;
        let minDistance = Infinity;

        cardRefs.forEach((ref, index) => {
          if (ref.current) {
            const rect = ref.current.getBoundingClientRect();
            const cardCenterX = rect.left + rect.width / 2;
            const viewportCenterX = window.innerWidth / 2;
            const distance = Math.abs(cardCenterX - viewportCenterX);
            if (distance < minDistance) {
              minDistance = distance;
              closestIndex = index;
            }
          }
        });

        if (minDistance < 100) { // threshold for activation
          setActiveCard(closestIndex);
        } else {
          setActiveCard(1); // default to middle card
        }
      } else {
        setActiveCard(1); // keep middle active when section not in view
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />

      {/* Hero Section */}
      <header id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background - Deep Royal Blue Theme with Breathing Animation */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img src={modernBg} alt="Background" className="w-full h-full object-cover animate-subtle-zoom" />
          <div className="absolute inset-0 bg-blue-950/80 mix-blend-multiply"></div>
          {/* Cinematic Vignette */}
          <div className="absolute inset-0 bg-radial-gradient from-transparent via-blue-950/20 to-black/60"></div>
          {/* Subtle Texture/Grain Overlay if possible - skipping for pure CSS cleanliness, but adding a gradient wash */}
          <div className="absolute inset-0 bg-gradient-to-t from-blue-950 via-transparent to-blue-950/30"></div>
        </div>

        {/* Content Container */}
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center pt-10">
          <div className="max-w-5xl mx-auto flex flex-col items-center">

            {/* Crown/Star Element - Animated */}
            <div className="mb-8 mt-12 animate-fade-in-up text-[#DBC498] animate-float-slow">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-[0_0_15px_rgba(219,196,152,0.5)]">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
              </svg>
            </div>

            {/* Main Title - Luxurious Liquid Gold */}
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-playfair font-medium text-white tracking-tight leading-[1.1] mb-8 animate-fade-in-up delay-200">
              Morya <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#C5A059] via-[#F3E5AB] to-[#C5A059] text-shimmer italic relative drop-shadow-lg">
                Pharma
              </span>
            </h1>

            {/* Decor Line */}
            <div className="w-32 h-[1px] bg-gradient-to-r from-transparent via-[#DBC498] to-transparent opacity-60 mb-10 animate-fade-in-up delay-300"></div>

            {/* Subtitle - High-end Editorial Style */}
            <p className="text-lg md:text-2xl text-blue-100/90 font-lora max-w-3xl mx-auto leading-relaxed font-light animate-fade-in-up delay-500 blur-[0.6px]">
              Bridging the gap between global innovation and local well-being. <br className="hidden md:block" />
              We deliver not just medicine, but the promise of a healthier future.
            </p>

          </div>
        </div>

        {/* Elegant Scroll Indicator - Floating */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-3 opacity-60 animate-bounce delay-700">
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#DBC498]">Explore</span>
          <div className="w-[1px] h-16 bg-gradient-to-b from-[#DBC498] to-transparent"></div>
        </div>
      </header>

      {/* Products / Solutions */}
      <section id="products" className="relative min-h-screen flex items-center py-20 overflow-hidden">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <img src={cityBg} alt="Background" className="w-full h-full object-cover blur-[2px]" />
          <div className="absolute inset-0 bg-blue-950/90 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-blue-900/20 to-black/80"></div>
        </div>

        <div className="container mx-auto px-4 w-full relative z-10">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#C5A059] via-[#F3E5AB] to-[#C5A059] animate-fade-in shadow-gold filter drop-shadow-lg">
              products
            </h2>
            <p className="text-blue-100/80 max-w-2xl mx-auto text-lg font-lora font-light">
              Innovative pharmaceutical solutions crafted for global excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className={`group relative p-4 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-[#C5A059]/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#C5A059]/10 cursor-pointer`} onClick={() => handleCardClick(3)}>
              <div className="absolute inset-0 bg-gradient-to-br from-[#C5A059]/10 via-transparent to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10 overflow-hidden rounded-2xl bg-white">
                <img src={novatherapyImg} alt="Product" className="w-full h-64 object-cover transform transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className={`group relative p-4 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-[#C5A059]/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#C5A059]/10 cursor-pointer`} onClick={() => handleCardClick(4)}>
              <div className="absolute inset-0 bg-gradient-to-br from-[#C5A059]/10 via-transparent to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10 overflow-hidden rounded-2xl bg-white">
                <img src={bioshieldImg} alt="Product" className="w-full h-64 object-cover transform transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className={`group relative p-4 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-[#C5A059]/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#C5A059]/10 cursor-pointer`} onClick={() => handleCardClick(5)}>
              <div className="absolute inset-0 bg-gradient-to-br from-[#C5A059]/10 via-transparent to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10 overflow-hidden rounded-2xl bg-white">
                <img src={neurocureImg} alt="Product" className="w-full h-64 object-cover transform transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className={`group relative p-4 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-[#C5A059]/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#C5A059]/10 cursor-pointer`} onClick={() => handleCardClick(6)}>
              <div className="absolute inset-0 bg-gradient-to-br from-[#C5A059]/10 via-transparent to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10 overflow-hidden rounded-2xl">
                <img src={img4} alt="Product" className="w-full h-64 object-cover transform transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                </div>
              </div>
            </div>

            {/* Card 5 */}
            <div className={`group relative p-4 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-[#C5A059]/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#C5A059]/10 cursor-pointer`} onClick={() => handleCardClick(7)}>
              <div className="absolute inset-0 bg-gradient-to-br from-[#C5A059]/10 via-transparent to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10 overflow-hidden rounded-2xl">
                <img src={img5} alt="Product" className="w-full h-64 object-cover transform transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                </div>
              </div>
            </div>

            {/* Card 6 */}
            <div className={`group relative p-4 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-[#C5A059]/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#C5A059]/10 cursor-pointer`} onClick={() => handleCardClick(8)}>
              <div className="absolute inset-0 bg-gradient-to-br from-[#C5A059]/10 via-transparent to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10 overflow-hidden rounded-2xl">
                <img src={img6} alt="Product" className="w-full h-64 object-cover transform transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-choose-us" className="relative min-h-screen flex items-center py-20 overflow-hidden">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <img src={newImage} alt="Background" className="w-full h-full object-cover blur-[2px] scale-105" />
          <div className="absolute inset-0 bg-blue-950/90 mix-blend-multiply"></div>
          {/* Subtle animated gradient accent */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80"></div>
        </div>

        <div className="container mx-auto px-4 w-full relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-600 animate-fade-in">
                Why Choose Us?
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto text-lg font-lora">
                Dedicated to excellence, integrity, and innovation in every aspect of healthcare service.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Card 1: Quality Product */}
              <div className="group relative p-8 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-amber-500/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-amber-500/10">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-transparent to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <div className="w-20 h-20 mb-8 rounded-2xl bg-gradient-to-br from-amber-300 to-amber-600 p-[1px] transform group-hover:rotate-6 transition-transform duration-300">
                    <div className="w-full h-full rounded-2xl bg-slate-900/90 flex items-center justify-center backdrop-blur-xl">
                      <Shield className="w-10 h-10 text-amber-400 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-playfair font-bold text-white mb-4 group-hover:text-amber-300 transition-colors">
                    Quality Product
                  </h3>
                  <p className="text-gray-300 font-lora leading-relaxed text-sm group-hover:text-white transition-colors">
                    Our GMP certified facilities produce high-quality pharmaceutical products that undergo rigorous quality control, meet global standards (FDA, EMA), and maintain full traceability from manufacturing to distribution.
                  </p>
                </div>
              </div>

              {/* Card 2: Regulatory */}
              <div className="group relative p-8 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-amber-500/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-amber-500/10">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-transparent to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <div className="w-20 h-20 mb-8 rounded-2xl bg-gradient-to-br from-amber-300 to-amber-600 p-[1px] transform group-hover:rotate-6 transition-transform duration-300">
                    <div className="w-full h-full rounded-2xl bg-slate-900/90 flex items-center justify-center backdrop-blur-xl">
                      <FileText className="w-10 h-10 text-amber-400 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-playfair font-bold text-white mb-4 group-hover:text-amber-300 transition-colors">
                    Regulatory Product
                  </h3>
                  <p className="text-gray-300 font-lora leading-relaxed text-sm group-hover:text-white transition-colors">
                    Expert regulatory affairs and marketing support for pharmaceutical products. We ensure compliance with global standards and provide strategic marketing products to enhance product visibility and distribution.
                  </p>
                </div>
              </div>

              {/* Card 3: Affordable Price */}
              <div className="group relative p-8 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-amber-500/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-amber-500/10">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-transparent to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <div className="w-20 h-20 mb-8 rounded-2xl bg-gradient-to-br from-amber-300 to-amber-600 p-[1px] transform group-hover:rotate-6 transition-transform duration-300">
                    <div className="w-full h-full rounded-2xl bg-slate-900/90 flex items-center justify-center backdrop-blur-xl">
                      <DollarSign className="w-10 h-10 text-amber-400 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-playfair font-bold text-white mb-4 group-hover:text-amber-300 transition-colors">
                    Affordable Price
                  </h3>
                  <p className="text-gray-300 font-lora leading-relaxed text-sm group-hover:text-white transition-colors">
                    Competitive pricing that makes high-quality healthcare accessible to all. We offer cost-effective solutions without sacrificing efficacy, ensuring value for money in every product.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about">
        <About />
      </section>



      {/* Contact / Inquiry Form */}
      <section id="contact" className="min-h-screen bg-gray-50 flex items-center">
        <div className="w-full">
          <Contact />
        </div>
      </section>

      <Footer />

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/251969797979"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-colors duration-300 z-50"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </div>
  );
}
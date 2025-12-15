import React, { useState, useEffect, useRef } from 'react';
import { Shield, FileText, DollarSign } from 'lucide-react';
import Header from './components/Header';
import Footer from './components/Footer';
import Contact from './components/Contact';
import About from './components/About';
import img1 from './assets/pictures/photo_2025-12-11_17-59-31.jpg';
import img2 from './assets/pictures/photo_2025-12-11_17-43-59.jpg';
import img3 from './assets/pictures/photo_2025-12-11_17-47-56.jpg';
import img4 from './assets/pictures/photo_2025-12-11_05-43-21.jpg';
import img5 from './assets/pictures/photo_2025-12-11_17-35-04.jpg';
import img6 from './assets/pictures/photo_2025-12-11_17-37-06.jpg';
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
    { emoji: '📋', title: 'Regulatory and Marketing Service', text: 'Comprehensive regulatory compliance and effective marketing services to support pharmaceutical distribution and promotion.' },
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
        {/* Background Image */}
        <div className="absolute inset-0">
          <img src={modernBg} alt="ABR Pharma Background" className="w-full h-full object-cover" />
          {/* Dark Blue Overlay - Matching Contact Us */}
          <div className="absolute inset-0 bg-blue-950/90 mix-blend-multiply"></div>
          {/* Decorative Elements matching reference vibe */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/10 to-purple-500/10 mix-blend-overlay"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center max-w-4xl mx-auto">

            {/* Text Content */}
            <div className="text-center animate-fade-in-up">
              <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight tracking-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-blue-200">
                  ABR Pharma
                </span>
              </h1>

              <h2 className="text-2xl md:text-3xl font-bold text-blue-200 mb-6 font-playfair">
                Advancing Healthcare Through Innovation
              </h2>

              <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed font-light px-4">
                Your trusted partner in pharmaceutical excellence. We provide comprehensive solutions in designing, building, and maintaining professional healthcare supply chains for companies in the Pharmaceutical, Biotech, and MedTech sectors.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-5 justify-center">
                <a
                  href="#products"
                  className="px-8 py-4 rounded-full font-bold text-white text-center transition-all duration-300 bg-gradient-to-r from-blue-600 to-cyan-500 hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] hover:scale-105"
                >
                  Explore Products
                </a>
                <a
                  href="#contact"
                  className="px-8 py-4 rounded-full font-bold text-white text-center border-2 border-white/20 hover:bg-white/10 backdrop-blur-sm transition-all duration-300 hover:border-white/50"
                >
                  Contact Us
                </a>
              </div>

              {/* Stats - Horizontal Strip */}
              <div className="flex flex-wrap items-center justify-center gap-8 mt-12 pt-8 border-t border-white/10">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">10+</div>
                  <div className="text-blue-300 text-xs uppercase tracking-wider">Years</div>
                </div>
                <div className="w-px h-10 bg-white/20 hidden md:block"></div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">500+</div>
                  <div className="text-blue-300 text-xs uppercase tracking-wider">Clients</div>
                </div>
                <div className="w-px h-10 bg-white/20 hidden md:block"></div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">50+</div>
                  <div className="text-blue-300 text-xs uppercase tracking-wider">Products</div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce opacity-70">
          <a href="#products">
            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </div>
      </header>

      {/* Products / Solutions */}
      <section id="products" className="min-h-screen bg-gray-50 flex items-center">
        <div className="container mx-auto px-4 w-full">
          <h2 className="text-4xl font-bold text-center text-black mb-4">Products and Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className={`bg-white p-6 rounded-lg shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer`} onClick={() => handleCardClick(3)}>
              <img src={img1} alt="NovaTherapy" className="w-full h-48 object-cover mb-4 rounded transition-all duration-300 hover:scale-110 hover:shadow-xl hover:brightness-110" />
            </div>
            <div className={`bg-white p-6 rounded-lg shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer`} onClick={() => handleCardClick(4)}>
              <img src={img2} alt="BioShield Vaccine" className="w-full h-48 object-cover mb-4 rounded transition-all duration-300 hover:scale-110 hover:shadow-xl hover:brightness-110" />
            </div>
            <div className={`bg-white p-6 rounded-lg shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer`} onClick={() => handleCardClick(5)}>
              <img src={img3} alt="NeuroCure" className="w-full h-48 object-cover mb-4 rounded transition-all duration-300 hover:scale-110 hover:shadow-xl hover:brightness-110" />
            </div>
            <div className={`bg-white p-6 rounded-lg shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer`} onClick={() => handleCardClick(6)}>
              <img src={img4} alt="CardioGuard" className="w-full h-48 object-cover mb-4 rounded transition-all duration-300 hover:scale-110 hover:shadow-xl hover:brightness-110" />
            </div>
            <div className={`bg-white p-6 rounded-lg shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer`} onClick={() => handleCardClick(7)}>
              <img src={img5} alt="ImmunoBoost" className="w-full h-48 object-cover mb-4 rounded transition-all duration-300 hover:scale-110 hover:shadow-xl hover:brightness-110" />
            </div>
            <div className={`bg-white p-6 rounded-lg shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer`} onClick={() => handleCardClick(8)}>
              <img src={img6} alt="PainRelief Pro" className="w-full h-48 object-cover mb-4 rounded transition-all duration-300 hover:scale-110 hover:shadow-xl hover:brightness-110" />
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
                    Regulatory Service
                  </h3>
                  <p className="text-gray-300 font-lora leading-relaxed text-sm group-hover:text-white transition-colors">
                    Expert regulatory affairs and marketing support for pharmaceutical products. We ensure compliance with global standards and provide strategic marketing solutions to enhance product visibility and distribution.
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
    </div>
  );
}
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
      <header id="hero" className="relative bg-gradient-to-br from-blue-50 to-blue-100 min-h-screen flex items-center">
        <div className="absolute inset-0">
          <img src={newImage} alt="ABR Pharma Background" className="w-full h-full object-cover" />
        </div>
      </header>

      {/* Products / Solutions */}
      <section id="products" className="min-h-screen bg-gray-50 flex items-center">
        <div className="container mx-auto px-4 w-full">
          <h2 className="text-4xl font-bold text-center text-black mb-4">Products and Services</h2>
          <p className="text-lg text-center text-gray-600 mb-12">Explore our comprehensive range of pharmaceutical products and professional services designed to meet your healthcare needs.</p>
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
      <section id="why-choose-us" className="min-h-screen bg-gray-50 flex items-center">
        <div className="container mx-auto px-4 w-full">
          <div className="max-w-6xl mx-auto">
            <div className="rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300" style={{ backgroundColor: '#1c4e78' }}>
              <h2 className="text-3xl font-bold text-white text-center mb-8">Why Choose Us?</h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="rounded-xl p-6 border-2 border-transparent hover:scale-105 hover:shadow-2xl hover:brightness-110 transition-all duration-300 cursor-pointer" style={{ backgroundColor: '#2a6d94' }}>
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-400 rounded-xl flex items-center justify-center text-white mb-4 mx-auto shadow-md hover:shadow-lg transition-shadow duration-300">
                    <Shield size={32} />
                  </div>
                  <h3 className="mb-3 text-center text-lg text-white font-semibold hover:font-bold transition-all duration-300">
                    Quality Product
                  </h3>
                  <p className="text-gray-100 leading-relaxed text-center text-sm hover:text-white transition-colors duration-300">
                    Our GMP certified facilities produce high-quality pharmaceutical products that undergo rigorous quality control, meet global standards (FDA, EMA), and maintain full traceability from manufacturing to distribution.
                  </p>
                </div>

                <div className="rounded-xl p-6 border-2 border-transparent hover:scale-105 hover:shadow-2xl hover:brightness-110 transition-all duration-300 cursor-pointer" style={{ backgroundColor: '#2a6d94' }}>
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-400 rounded-xl flex items-center justify-center text-white mb-4 mx-auto shadow-md hover:shadow-lg transition-shadow duration-300">
                    <FileText size={32} />
                  </div>
                  <h3 className="mb-3 text-center text-lg text-white font-semibold hover:font-bold transition-all duration-300">
                    Regulatory and Marketing Service
                  </h3>
                  <p className="text-gray-100 leading-relaxed text-center text-sm hover:text-white transition-colors duration-300">
                    Expert regulatory affairs and marketing support for pharmaceutical products. We ensure compliance with global standards and provide strategic marketing solutions to enhance product visibility and distribution.
                  </p>
                </div>

                <div className="rounded-xl p-6 border-2 border-transparent hover:scale-105 hover:shadow-2xl hover:brightness-110 transition-all duration-300 cursor-pointer" style={{ backgroundColor: '#2a6d94' }}>
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-400 rounded-xl flex items-center justify-center text-white mb-4 mx-auto shadow-md hover:shadow-lg transition-shadow duration-300">
                    <DollarSign size={32} />
                  </div>
                  <h3 className="mb-3 text-center text-lg text-white font-semibold hover:font-bold transition-all duration-300">
                    Affordable Price
                  </h3>
                  <p className="text-gray-100 leading-relaxed text-center text-sm hover:text-white transition-colors duration-300">
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
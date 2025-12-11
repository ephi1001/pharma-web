import React, { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Contact from './components/Contact';
import About from './components/About';

export default function App() {
  const [selectedCard, setSelectedCard] = useState(null);
  const [activeCard, setActiveCard] = useState(1); // middle card initially active

  const sectionRef = useRef(null);
  const cardRefs = [useRef(null), useRef(null), useRef(null)];

  const order = [(activeCard + 2) % 3, activeCard, (activeCard + 1) % 3];

  const cards = [
    { emoji: '🛡️', title: 'Quality & Safety', text: 'Ensuring the highest standards of quality, safety, and regulatory compliance in every product we deliver.' },
    { emoji: '👥', title: 'Trusted Expertise', text: 'Backed by experienced professionals dedicated to reliability, transparency, and patient well-being.' },
    { emoji: '🔬', title: 'Innovation & Research', text: 'Driven by continuous research, advanced technology, and innovative solutions in pharmaceutical science.' }
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
      <header id="hero" className="relative bg-gradient-to-br from-blue-50 to-blue-100 py-20 pt-40">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-blue-900 mb-4 animate-fade-in">
            Advancing Healthcare Through Science
          </h1>
          <p className="text-lg md:text-xl text-blue-700 mb-8 max-w-2xl mx-auto animate-fade-in animation-delay-200">
            At NovaCure Pharmaceuticals, we are dedicated to developing innovative therapies that improve patient outcomes and advance the field of medicine through cutting-edge research and unwavering commitment to quality.
          </p>
          <div className="space-x-4 animate-fade-in animation-delay-400">
            <a href="#about" className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition duration-300" aria-label="Learn more about NovaCure">
              Learn More
            </a>
            <a href="#contact" className="inline-block border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-lg font-semibold transition duration-300" aria-label="Contact NovaCure">
              Contact Us
            </a>
          </div>
        </div>
      </header>

      {/* Why Choose Us */}
      <section id="why-choose-us" ref={sectionRef} className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-[#31487A] p-8 rounded-lg">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-12 text-center">Why Choose Us?</h2>
            <div className="flex justify-between gap-8">
              {order.map((index) => (
                <div key={index} ref={cardRefs[index]} onClick={() => setActiveCard(index)} className={`bg-white p-8 w-80 rounded-lg shadow-lg hover:shadow-xl transition-all duration-500 cursor-pointer ${index === activeCard ? 'scale-110 font-bold' : 'scale-90 blur-sm opacity-70 font-bold'}`}>
                  <div className="text-6xl mb-4">{cards[index].emoji}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{cards[index].title}</h3>
                  <p className="text-gray-700">{cards[index].text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products / Solutions */}
      <section id="products" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">Our Products & Solutions</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className={`bg-white p-6 rounded-lg shadow-md transition-all duration-300 ${selectedCard === 3 ? 'font-bold ring-2 ring-blue-500' : ''} cursor-pointer`} onClick={() => handleCardClick(3)}>
              <h3 className="text-xl font-semibold text-blue-900 mb-2">NovaTherapy</h3>
              <p className="text-gray-600 mb-4">Advanced targeted therapy for oncology patients, designed to minimize side effects while maximizing efficacy.</p>
              <button className="text-blue-600 hover:text-blue-800 font-semibold">Learn More →</button>
            </div>
            <div className={`bg-white p-6 rounded-lg shadow-md transition-all duration-300 ${selectedCard === 4 ? 'font-bold ring-2 ring-blue-500' : ''} cursor-pointer`} onClick={() => handleCardClick(4)}>
              <h3 className="text-xl font-semibold text-blue-900 mb-2">BioShield Vaccine</h3>
              <p className="text-gray-600 mb-4">Next-generation vaccine platform providing long-lasting immunity against emerging infectious diseases.</p>
              <button className="text-blue-600 hover:text-blue-800 font-semibold">Learn More →</button>
            </div>
            <div className={`bg-white p-6 rounded-lg shadow-md transition-all duration-300 ${selectedCard === 5 ? 'font-bold ring-2 ring-blue-500' : ''} cursor-pointer`} onClick={() => handleCardClick(5)}>
              <h3 className="text-xl font-semibold text-blue-900 mb-2">NeuroCure</h3>
              <p className="text-gray-600 mb-4">Innovative treatment for neurodegenerative disorders, slowing disease progression and improving quality of life.</p>
              <button className="text-blue-600 hover:text-blue-800 font-semibold">Learn More →</button>
            </div>
            <div className={`bg-white p-6 rounded-lg shadow-md transition-all duration-300 ${selectedCard === 6 ? 'font-bold ring-2 ring-blue-500' : ''} cursor-pointer`} onClick={() => handleCardClick(6)}>
              <h3 className="text-xl font-semibold text-blue-900 mb-2">CardioGuard</h3>
              <p className="text-gray-600 mb-4">Comprehensive cardiovascular therapy combining multiple mechanisms for optimal heart health.</p>
              <button className="text-blue-600 hover:text-blue-800 font-semibold">Learn More →</button>
            </div>
            <div className={`bg-white p-6 rounded-lg shadow-md transition-all duration-300 ${selectedCard === 7 ? 'font-bold ring-2 ring-blue-500' : ''} cursor-pointer`} onClick={() => handleCardClick(7)}>
              <h3 className="text-xl font-semibold text-blue-900 mb-2">ImmunoBoost</h3>
              <p className="text-gray-600 mb-4">Immunomodulatory drug enhancing the body's natural defenses against autoimmune conditions.</p>
              <button className="text-blue-600 hover:text-blue-800 font-semibold">Learn More →</button>
            </div>
            <div className={`bg-white p-6 rounded-lg shadow-md transition-all duration-300 ${selectedCard === 8 ? 'font-bold ring-2 ring-blue-500' : ''} cursor-pointer`} onClick={() => handleCardClick(8)}>
              <h3 className="text-xl font-semibold text-blue-900 mb-2">PainRelief Pro</h3>
              <p className="text-gray-600 mb-4">Advanced pain management solution with reduced opioid dependency and improved safety profile.</p>
              <button className="text-blue-600 hover:text-blue-800 font-semibold">Learn More →</button>
            </div>
          </div>
        </div>
      </section>

      {/* Research & Development */}
      <section id="research" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">Research & Development</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-6xl mb-4">🧬</div>
              <h3 className="text-xl font-semibold text-blue-900 mb-2">Clinical Trials</h3>
              <p className="text-gray-600">Conducting rigorous Phase I-III clinical trials to ensure safety and efficacy of our therapies.</p>
            </div>
            <div>
              <div className="text-6xl mb-4">🔬</div>
              <h3 className="text-xl font-semibold text-blue-900 mb-2">Biotech Innovation</h3>
              <p className="text-gray-600">Leveraging cutting-edge biotechnology, CRISPR, and AI to accelerate drug discovery.</p>
            </div>
            <div>
              <div className="text-6xl mb-4">📋</div>
              <h3 className="text-xl font-semibold text-blue-900 mb-2">Regulatory Compliance</h3>
              <p className="text-gray-600">Adhering to FDA, EMA, and WHO guidelines to bring safe, effective treatments to market.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications & Compliance */}
      <section id="certifications" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">Certifications & Compliance</h2>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl mb-2">🏭</div>
              <h3 className="font-semibold text-blue-900">GMP Certified</h3>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl mb-2">🌐</div>
              <h3 className="font-semibold text-blue-900">ISO 9001</h3>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl mb-2">🇺🇸</div>
              <h3 className="font-semibold text-blue-900">FDA Approved</h3>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl mb-2">🌍</div>
              <h3 className="font-semibold text-blue-900">WHO-GMP</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials / Partner Logos */}
      <section id="testimonials" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">Trusted Partners</h2>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="bg-gray-100 p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-blue-900">Mayo Clinic</div>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-blue-900">Johns Hopkins</div>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-blue-900">Cleveland Clinic</div>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-blue-900">Stanford Medicine</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact / Inquiry Form */}
      <section id="contact" className="py-16 bg-gray-50">
        <Contact />
      </section>

      <Footer />
    </div>
  );
}
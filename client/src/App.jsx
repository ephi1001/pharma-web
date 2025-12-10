import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Contact from './components/Contact';
import About from './components/About';

export default function App() {
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
      <section id="why-choose-us" className="py-16 bg-gradient-to-br from-blue-50 via-teal-50 to-cyan-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-blue-900 mb-12">Why Choose Us?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-100 to-teal-100 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-blue-200">
              <div className="text-6xl mb-4">🛡️</div>
              <h3 className="text-xl font-semibold text-blue-900 mb-4">Quality & Safety</h3>
              <p className="text-gray-700">Ensuring the highest standards of quality, safety, and regulatory compliance in every product we deliver.</p>
            </div>
            <div className="bg-gradient-to-br from-purple-100 to-cyan-100 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-purple-200">
              <div className="text-6xl mb-4">👥</div>
              <h3 className="text-xl font-semibold text-blue-900 mb-4">Trusted Expertise</h3>
              <p className="text-gray-700">Backed by experienced professionals dedicated to reliability, transparency, and patient well-being.</p>
            </div>
            <div className="bg-gradient-to-br from-teal-100 to-cyan-100 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-teal-200">
              <div className="text-6xl mb-4">🔬</div>
              <h3 className="text-xl font-semibold text-blue-900 mb-4">Innovation & Research</h3>
              <p className="text-gray-700">Driven by continuous research, advanced technology, and innovative solutions in pharmaceutical science.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products / Solutions */}
      <section id="products" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">Our Products & Solutions</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-blue-900 mb-2">NovaTherapy</h3>
              <p className="text-gray-600 mb-4">Advanced targeted therapy for oncology patients, designed to minimize side effects while maximizing efficacy.</p>
              <button className="text-blue-600 hover:text-blue-800 font-semibold">Learn More →</button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-blue-900 mb-2">BioShield Vaccine</h3>
              <p className="text-gray-600 mb-4">Next-generation vaccine platform providing long-lasting immunity against emerging infectious diseases.</p>
              <button className="text-blue-600 hover:text-blue-800 font-semibold">Learn More →</button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-blue-900 mb-2">NeuroCure</h3>
              <p className="text-gray-600 mb-4">Innovative treatment for neurodegenerative disorders, slowing disease progression and improving quality of life.</p>
              <button className="text-blue-600 hover:text-blue-800 font-semibold">Learn More →</button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-blue-900 mb-2">CardioGuard</h3>
              <p className="text-gray-600 mb-4">Comprehensive cardiovascular therapy combining multiple mechanisms for optimal heart health.</p>
              <button className="text-blue-600 hover:text-blue-800 font-semibold">Learn More →</button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-blue-900 mb-2">ImmunoBoost</h3>
              <p className="text-gray-600 mb-4">Immunomodulatory drug enhancing the body's natural defenses against autoimmune conditions.</p>
              <button className="text-blue-600 hover:text-blue-800 font-semibold">Learn More →</button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
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
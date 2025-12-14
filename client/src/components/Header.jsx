import { useState, useEffect } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', id: 'home', path: '#hero' },
    { name: 'About & Services', id: 'about', path: '#about' },
    { name: 'Products & Services', id: 'products', path: '#products' },
    { name: 'Contact', id: 'contact', path: '#contact' }
  ];


  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      (!scrolled)
        ? 'bg-transparent'
        : 'bg-white/90 backdrop-blur-xl border-b border-stone-200 shadow-sm'
    }`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 group">
            <a
              href="#hero"
              className="flex items-center cursor-pointer transform transition-all duration-300 hover:scale-110"
            >
              <img src="/src/assets/pictures/photo_2025-12-11_16-43-44.jpg" alt="ABR Pharma Logo" className="h-10 w-10 mr-2 rounded-full" />
              <span className="text-2xl font-black bg-gradient-to-r from-blue-600 via-purple-500 to-red-600 bg-clip-text text-transparent">
                ABR Pharma
              </span>
            </a>
          </div>
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className={`flex items-center space-x-2 rounded-2xl p-2 border shadow-2xl ${
              (!scrolled)
                ? 'bg-white/10 backdrop-blur-xl border-white/20'
                : 'bg-white/70 backdrop-blur-md border-stone-200'
            }`}>
              {navigation.map((item, index) => (
                <a
                  key={item.name}
                  href={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`group relative px-6 py-3 rounded-xl text-sm font-bold transition-all duration-300 overflow-hidden ${
                    (!scrolled)
                      ? 'text-gray-200 hover:text-white hover:bg-gradient-to-r hover:from-blue-600 hover:via-purple-500 hover:to-red-600 hover:scale-110 hover:shadow-lg'
                      : 'text-stone-700 hover:text-white hover:bg-gradient-to-r hover:from-blue-600 hover:via-purple-500 hover:to-red-600 hover:scale-110 hover:shadow-lg'
                  }`}
                  style={{
                    animationDelay: `${index * 0.1}s`,
                    textShadow: '0 1px 6px rgba(0,0,0,0.18), 0 0px 1px rgba(0,0,0,0.12)'
                  }}
                >
                  <div className="flex items-center space-x-2 relative z-10">
                    <span>{item.name}</span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                </a>
              ))}
            </div>
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative p-3 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-2xl shadow-purple-500/50 transition-all duration-300 hover:scale-110 hover:rotate-12"
            >
              <div className="relative z-10">
                {isOpen ? (
                  <span className="h-6 w-6 animate-spin">×</span>
                ) : (
                  <span className="h-6 w-6">☰</span>
                )}
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`md:hidden transition-all duration-500 ease-out ${
          isOpen
            ? 'max-h-96 opacity-100 translate-y-0'
            : 'max-h-0 opacity-0 -translate-y-4 overflow-hidden'
        }`}>
          <div className={`mx-4 mb-4 rounded-2xl border shadow-2xl overflow-hidden ${
            (!scrolled)
              ? 'bg-white/10 backdrop-blur-2xl border-white/20'
              : 'bg-white/90 backdrop-blur-xl border-stone-200'
          }`}>
            {navigation.map((item, index) => (
              <a
                key={item.name}
                href={item.path}
                onClick={() => setIsOpen(false)}
                className={`w-full flex items-center space-x-3 px-6 py-4 text-left font-bold transition-all duration-300 ${
                  (!scrolled)
                    ? 'text-gray-200 hover:bg-gradient-to-r hover:from-blue-600 hover:via-purple-500 hover:to-red-600 hover:text-white'
                    : 'text-stone-700 hover:bg-gradient-to-r hover:from-blue-600 hover:via-purple-500 hover:to-red-600 hover:text-white'
                } ${index !== navigation.length - 1 ? 'border-b border-white/10' : ''}`}
                style={{
                  animationDelay: `${index * 0.1}s`,
                  transform: isOpen ? 'translateX(0)' : 'translateX(-20px)',
                  textShadow: '0 1px 6px rgba(0,0,0,0.18), 0 0px 1px rgba(0,0,0,0.12)'
                }}
              >
                <span className="text-2xl">{item.name.charAt(0)}</span>
                <span className="text-lg">{item.name}</span>
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
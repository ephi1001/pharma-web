import { Phone, Mail, MapPin } from 'lucide-react';
import logo from '../assets/pictures/photo_2025-12-11_16-43-44.jpg';

export default function Footer() {
  return (
    <footer className="relative pt-20 pb-10 overflow-hidden text-white">
      {/* Background - Deep and Regal */}
      <div className="absolute inset-0 z-0 bg-blue-950">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/50 to-black/80"></div>
        {/* Subtle noise/texture overlay could go here */}
      </div>

      {/* Decorative Top Border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#DBC498] to-transparent opacity-70"></div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              {/* Star Icon */}
              <div className="text-[#DBC498]">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-[0_0_8px_rgba(219,196,152,0.6)]">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                </svg>
              </div>
              <span className="text-2xl font-playfair font-bold text-white tracking-wide">ABR Pharma</span>
            </div>
            <p className="text-gray-300 font-lora text-sm leading-relaxed max-w-xs">
              Bridging global innovation with local care. We are committed to excellence, integrity, and the future of healthcare.
            </p>
            {/* Social / WhatsApp - Elegant Button */}
            <a
              href="https://wa.me/251969797979"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2 border border-[#DBC498]/30 rounded-sm text-[#DBC498] hover:bg-[#DBC498] hover:text-blue-950 transition-all duration-300 font-playfair text-sm uppercase tracking-wider"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
              <span>Connect with us</span>
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[#DBC498] font-playfair font-bold text-lg mb-6 uppercase tracking-wider">Explore</h3>
            <ul className="space-y-3 font-lora text-sm">
              {['Home', 'About', 'Products', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-gray-300 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-[#DBC498] font-playfair font-bold text-lg mb-6 uppercase tracking-wider">Expertise</h3>
            <ul className="space-y-3 font-lora text-sm text-gray-300">
              <li className="hover:text-white transition-colors cursor-default">Medical Distribution</li>
              <li className="hover:text-white transition-colors cursor-default">Regulatory Compliance</li>
              <li className="hover:text-white transition-colors cursor-default">Hospital Supply Chain</li>
              <li className="hover:text-white transition-colors cursor-default">Specialized Medicine</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[#DBC498] font-playfair font-bold text-lg mb-6 uppercase tracking-wider">Contact</h3>
            <div className="space-y-4 font-lora text-sm text-gray-300">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#DBC498]/80 mt-0.5" />
                <span>Addis Ababa, Ethiopia<br />Headquarters</span>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#DBC498]/80 mt-0.5" />
                <div className="flex flex-col">
                  <a href="tel:+251969797979" className="hover:text-white transition-colors">+251 969 797 979</a>
                  <a href="tel:+251955893220" className="hover:text-white transition-colors">+251 955 893 220</a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#DBC498]/80 mt-0.5" />
                <a href="mailto:moryaplc@gmail.com" className="hover:text-white transition-colors break-all">moryaplc@gmail.com</a>
              </div>
            </div>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400 font-lora">
          <p>© 2025 ABR Pharma. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="hover:text-[#DBC498] cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-[#DBC498] cursor-pointer transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
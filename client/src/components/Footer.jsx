import { Award, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center mb-4">
              <Award className="w-8 h-8 text-blue-400" />
              <span className="ml-2 text-xl font-bold text-white">ABR Pharma</span>
            </div>
            <p className="text-gray-400 mb-4">
              Your trusted partner for pharmaceutical innovation.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#hero" className="hover:text-blue-400 transition">Home</a></li>
              <li><a href="#about" className="hover:text-blue-400 transition">About</a></li>
              <li><a href="#products" className="hover:text-blue-400 transition">Products</a></li>
              <li><a href="#contact" className="hover:text-blue-400 transition">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-400 transition">Medical Equipment Import</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Lab Reagents & Consumables</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Pharmaceutical Supply</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Baby Food & Formula</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-blue-400 mr-3 mt-1 flex-shrink-0" />
                <span>Addis Ababa, Ethiopia</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" />
                <span>+251- 969-797-979</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" />
                <span>info@abrpharma.biz</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 ABR Pharma. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
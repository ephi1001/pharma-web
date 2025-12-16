import { useState } from 'react';
import toast from 'react-hot-toast';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import contactMessageService from '../services/contactMessageService';
import bgImage from '../assets/pictures/city_bg.jpg';

export default function Contact() {
  const { language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    rating: 5,
    location: ''
  });

  const translations = {
    en: {
      title: 'Contact Us',
      description: "Have questions about our products or want to discuss a potential partnership? We'd love to hear from you.",
      getInTouch: 'Get In Touch',
      address: 'Address',
      addressValue: 'Addis Ababa, Ethiopia',
      phone: 'Phone',
      phoneValue1: '+251969797979',
      phoneValue2: '+251955893220',
      email: 'Email',
      emailValue: 'moryaplc@gmail.com',
      businessHours: 'Business Hours',
      businessHoursValue: 'Monday - Sunday: 9:00 AM - 6:00 PM',
      writeMessage: 'Send Message',
      fullName: 'Full Name',
      emailLabel: 'Email',
      yourMessage: 'Your Message',
      sendMessage: 'Send',
      successMessage: 'Thank you for your message! We will get back to you soon.',
      reviewOnGoogleMaps: 'Review us on Google Maps'
    },
    am: {
      title: 'ያግኙን',
      description: 'ስለ አገልግሎታችን ጥያቄዎች አሉዎት ወይም ከእኛ ጋር መወያየት ይፈልጋሉ? ከእርስዎ መስማት እንፈልጋለን።',
      getInTouch: 'ተገናኝ',
      address: 'አድራሻ',
      addressValue: 'አዲስ አበባ፣ ኢትዮጵያ',
      phone: 'ስልክ',
      phoneValue1: '+251969797979',
      phoneValue2: '+251955893220',
      email: 'ኢሜይል',
      emailValue: 'moryaplc@gmail.com',
      businessHours: 'የስራ ሰዓት',
      businessHoursValue: 'ሰኞ - እሁድ፡ ከጠዋቱ 9:00 - ከምሽቱ 6:00',
      writeMessage: 'መልእክት ላክ',
      fullName: 'ሙሉ ስም',
      emailLabel: 'ኢሜይል',
      yourMessage: 'መልእክትዎ',
      sendMessage: 'ላክ',
      successMessage: 'ለመልእክትዎ እናመሰግናለን! በቅርቡ እናገኝዎታለን።',
      reviewOnGoogleMaps: 'በጉግል ካርታ ላይ አስተያየት ስጡን'
    }
  };

  const t = translations[language];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await contactMessageService.create(formData);
      toast.success(t.successMessage);
      setFormData({ name: '', email: '', message: '', rating: 5, location: '' });
    } catch (error) {
      console.error('Error submitting contact form:', error);
      toast.error('Failed to send message. Please try again.');
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center py-20 bg-blue-950 overflow-hidden">
      {/* Background with texture/gradient */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-950 to-black opacity-90"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 mix-blend-overlay"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-6xl">

        {/* Header Section - Classic Serif */}
        <div className="text-center mb-16 relative">
          <div className="inline-block mb-4">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" className="text-[#DBC498] mx-auto animate-float-slow drop-shadow-[0_0_10px_rgba(219,196,152,0.4)]">
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
            </svg>
          </div>
          <h1 className="text-5xl md:text-6xl font-playfair font-bold text-white mb-6 tracking-wide">
            {t.title}
          </h1>
          <div className="w-24 h-[1px] bg-[#DBC498] mx-auto mb-6"></div>
          <p className="text-gray-300 font-lora text-lg max-w-2xl mx-auto leading-relaxed font-light italic">
            {t.description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start bg-white/5 backdrop-blur-sm border border-white/10 p-8 md:p-12 rounded-sm shadow-2xl">

          {/* Left Column: Information - Elegant & Minimal */}
          <div className="lg:col-span-2 flex flex-col justify-center space-y-12 border-b lg:border-b-0 lg:border-r border-white/10 pb-12 lg:pb-0 lg:pr-12">

            {/* Address */}
            <div className="flex items-start group">
              <MapPin className="w-6 h-6 text-[#DBC498] mt-1 shrink-0" />
              <div className="ml-6">
                <h3 className="text-lg font-playfair font-bold text-[#DBC498] mb-2 uppercase tracking-wider">{t.address}</h3>
                <p className="text-gray-200 font-lora text-base font-light">{t.addressValue}</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start group">
              <Phone className="w-6 h-6 text-[#DBC498] mt-1 shrink-0" />
              <div className="ml-6">
                <h3 className="text-lg font-playfair font-bold text-[#DBC498] mb-2 uppercase tracking-wider">{t.phone}</h3>
                <p className="text-gray-200 font-lora text-base font-light">{t.phoneValue1}</p>
                <p className="text-gray-200 font-lora text-base font-light">{t.phoneValue2}</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start group">
              <Mail className="w-6 h-6 text-[#DBC498] mt-1 shrink-0" />
              <div className="ml-6">
                <h3 className="text-lg font-playfair font-bold text-[#DBC498] mb-2 uppercase tracking-wider">{t.email}</h3>
                <p className="text-gray-200 font-lora text-base font-light break-all">{t.emailValue}</p>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-start group">
              <Clock className="w-6 h-6 text-[#DBC498] mt-1 shrink-0" />
              <div className="ml-6">
                <h3 className="text-lg font-playfair font-bold text-[#DBC498] mb-2 uppercase tracking-wider">{t.businessHours}</h3>
                <p className="text-gray-200 font-lora text-base font-light">{t.businessHoursValue}</p>
              </div>
            </div>

          </div>

          {/* Right Column: Form - Luxury Inputs */}
          <div className="lg:col-span-3 w-full">
            <form onSubmit={handleSubmit} className="space-y-8">

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Full Name */}
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-0 py-3 bg-transparent border-b border-white/30 text-white placeholder-transparent focus:border-[#DBC498] focus:outline-none transition-colors font-lora peer"
                    placeholder="Name"
                  />
                  <label htmlFor="name" className="absolute left-0 -top-3.5 text-gray-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-[#DBC498] peer-focus:text-xs">
                    Full Name
                  </label>
                </div>

                {/* Email */}
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-0 py-3 bg-transparent border-b border-white/30 text-white placeholder-transparent focus:border-[#DBC498] focus:outline-none transition-colors font-lora peer"
                    placeholder="Email"
                  />
                  <label htmlFor="email" className="absolute left-0 -top-3.5 text-gray-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-[#DBC498] peer-focus:text-xs">
                    Email Address
                  </label>
                </div>
              </div>

              {/* Message */}
              <div className="relative mt-8">
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full px-0 py-3 bg-transparent border-b border-white/30 text-white placeholder-transparent focus:border-[#DBC498] focus:outline-none transition-colors font-lora resize-none peer"
                  placeholder="Message"
                ></textarea>
                <label htmlFor="message" className="absolute left-0 -top-3.5 text-gray-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-[#DBC498] peer-focus:text-xs">
                  How can we help you?
                </label>
              </div>

              {/* Submit Button */}
              <div className="pt-6 flex justify-end">
                <button
                  type="submit"
                  className="group relative px-10 py-3 bg-[#DBC498] text-blue-950 font-playfair font-bold text-lg uppercase tracking-widest hover:bg-[#E8DCC0] transition-colors duration-300 shadow-lg"
                >
                  <span className="relative z-10">{t.sendMessage}</span>
                  <div className="absolute inset-0 border border-white/20 transform translate-x-1 translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-300 pointer-events-none"></div>
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}
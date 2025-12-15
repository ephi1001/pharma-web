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
      description: "Have questions about our services or want to discuss a potential partnership? We'd love to hear from you.",
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
    <div className="relative min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center py-16"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-blue-950/90 mix-blend-multiply"></div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 w-full">

        {/* Header Section */}
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">{t.title}</h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed">
            {t.description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">

          {/* Left Column: Information */}
          <div className="flex flex-col justify-center space-y-10">
            {/* Address */}
            <div className="flex items-center group">
              <div className="flex-shrink-0 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                <MapPin className="w-8 h-8 text-black" />
              </div>
              <div className="ml-6">
                <h3 className="text-xl font-bold text-[#06b6d4] mb-1">{t.address}</h3>
                <p className="text-gray-100 text-lg font-medium">{t.addressValue}</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center group">
              <div className="flex-shrink-0 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                <Phone className="w-8 h-8 text-black" />
              </div>
              <div className="ml-6">
                <h3 className="text-xl font-bold text-[#06b6d4] mb-1">{t.phone}</h3>
                <p className="text-gray-100 text-lg font-medium">{t.phoneValue1}</p>
                {/* <p className="text-gray-100 text-lg font-medium">{t.phoneValue2}</p> */}
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center group">
              <div className="flex-shrink-0 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                <Mail className="w-8 h-8 text-black" />
              </div>
              <div className="ml-6">
                <h3 className="text-xl font-bold text-[#06b6d4] mb-1">{t.email}</h3>
                <p className="text-gray-100 text-lg font-medium">{t.emailValue}</p>
              </div>
            </div>

            {/* Business Hours */}
            {/* Note: The reference image didn't clearly show hours, but user data has it. I'll keep it for completeness but styled similarly. */}
            <div className="flex items-center group">
              <div className="flex-shrink-0 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                <Clock className="w-8 h-8 text-black" />
              </div>
              <div className="ml-6">
                <h3 className="text-xl font-bold text-[#06b6d4] mb-1">{t.businessHours}</h3>
                <p className="text-gray-100 text-lg font-medium">{t.businessHoursValue}</p>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="bg-white rounded-xl shadow-2xl p-8 md:p-10 lg:p-12 relative overflow-hidden">
            {/* Decorative top border or accent if needed, but plain white card matches reference best */}

            <h2 className="text-3xl font-bold text-gray-900 mb-8">{t.writeMessage}</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-pink-500 mb-2 uppercase tracking-wide">
                  {t.fullName}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-0 py-2 border-b-2 border-gray-300 focus:border-cyan-500 focus:ring-0 text-gray-900 bg-transparent transition-colors placeholder-gray-400 font-medium text-lg"
                  placeholder="Enter your name"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-bold text-pink-500 mb-2 uppercase tracking-wide">
                  {t.emailLabel}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-0 py-2 border-b-2 border-gray-300 focus:border-cyan-500 focus:ring-0 text-gray-900 bg-transparent transition-colors placeholder-gray-400 font-medium text-lg"
                  placeholder="Enter your email"
                />
              </div>

              {/* Subject - Keeping this as it's in the data, though not in the image explicitly. Will style same way. */}


              {/* Message */}
              <div>
                {/* The image shows just "Type your Message..." placeholder, but accessible label is good. */}
                {/* I will hide label visually or keep it subtle? The reference uses clear pink labels for Name/Email. I will use it for Message too. */}
                {/* Actually, looking at reference, the third field just says "Type your Message...", it might not have a label above it, or it's scrolled. I'll add the label for consistency. */}
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full px-0 py-2 border-b-2 border-gray-300 focus:border-cyan-500 focus:ring-0 text-gray-900 bg-transparent transition-colors placeholder-gray-400 resize-none font-medium text-lg mt-4"
                  placeholder="Type your Message..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="px-10 py-3 bg-[#00bcd4] text-white text-lg font-bold rounded shadow-md hover:bg-[#00acc1] transition-all duration-300 transform hover:-translate-y-1"
                >
                  {t.sendMessage}
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}
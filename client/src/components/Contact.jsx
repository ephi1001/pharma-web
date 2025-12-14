import { useState } from 'react';
import toast from 'react-hot-toast';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import contactMessageService from '../services/contactMessageService';

export default function Contact() {
  const { language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    rating: 5,
    location: ''
  });

  const translations = {
    en: {
      title: 'Contact Us',
      description: 'Have questions about our services or want to discuss a potential partnership? We\'d love to hear from you. Send us a message and we\'ll respond as soon as possible.',
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
      writeMessage: 'Write Us a Message',
      fullName: 'Full Name',
      emailLabel: 'Email',
      subject: 'Subject',
      yourMessage: 'Your Message',
      sendMessage: 'Send Message',
      successMessage: 'Thank you for your message! We will get back to you soon.',
      reviewOnGoogleMaps: 'Review us on Google Maps'
    },
    am: {
      title: 'ያግኙን',
      description: 'ስለ አገልግሎታችን ጥያቄዎች አሉዎት ወይም ከእኛ ጋር መወያየት ይፈልጋሉ? ከእርስዎ መስማት እንፈልጋለን። መልእክት ይላኩልን እና በተቻለ ፍጥነት እንመልሳለን።',
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
      writeMessage: 'መልእክት ይጻፉልን',
      fullName: 'ሙሉ ስም',
      emailLabel: 'ኢሜይል',
      subject: 'ርዕሰ ጉዳይ',
      yourMessage: 'መልእክትዎ',
      sendMessage: 'መልእክት ላክ',
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
      setFormData({ name: '', email: '', subject: '', message: '', rating: 5, location: '' });
    } catch (error) {
      console.error('Error submitting contact form:', error);
      toast.error('Failed to send message. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Container */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          {/* Contact Us Title - Centered */}
          <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">{t.title}</h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-8">{t.getInTouch}</h2>

              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #06b6d4, #3b82f6)' }}>
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">{t.address}</h3>
                    <p className="mt-1 text-gray-900">{t.addressValue}</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #06b6d4, #3b82f6)' }}>
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">{t.phone}</h3>
                    <p className="mt-1 text-gray-900">{t.phoneValue1}</p>
                    <p className="text-gray-900">{t.phoneValue2}</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #06b6d4, #3b82f6)' }}>
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">{t.email}</h3>
                    <p className="mt-1 text-gray-900">{t.emailValue}</p>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #06b6d4, #3b82f6)' }}>
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">{t.businessHours}</h3>
                    <p className="mt-1 text-gray-900">{t.businessHoursValue}</p>
                  </div>
                </div>
              </div>

              {/* Google Map */}
              <div className="mt-8">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3001.547335676859!2d38.800583!3d9.018718999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m1!2zOcKwMDEnMDcuNCJOIDM4wrA0OCcwMi4xIkU!5e1!3m2!1sen!2set!4v1763892230826!5m2!1sen!2set"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                ></iframe>
                <button
                  onClick={() => window.open('https://www.google.com/maps?q=9.018719,38.800583', '_blank')}
                  className="mt-4 w-full py-3 px-6 rounded-lg font-semibold text-white transition-all duration-300 hover:shadow-lg"
                  style={{ background: 'linear-gradient(135deg, #06b6d4, #3b82f6)' }}
                >
                  {t.reviewOnGoogleMaps}
                </button>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-8">{t.writeMessage}</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Full Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    {t.fullName}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                    placeholder={t.fullName}
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    {t.emailLabel}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                    placeholder={t.emailLabel}
                  />
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    {t.subject}
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                    placeholder={t.subject}
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    {t.yourMessage}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all resize-none"
                    placeholder={t.yourMessage}
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-4 px-6 rounded-lg font-semibold text-white transition-all duration-300 hover:shadow-lg"
                  style={{ background: 'linear-gradient(135deg, #06b6d4, #3b82f6)' }}
                >
                  {t.sendMessage}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
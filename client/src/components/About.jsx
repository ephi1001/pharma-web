import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Trophy, Handshake, Sparkles, Shield, Users, Lightbulb } from 'lucide-react';

export default function About() {
  const { language } = useLanguage();

  const content = {
    en: {
      hero: {
        title: 'About NovaCure Pharmaceuticals',
        subtitle: 'Advancing Healthcare Through Science and Innovation'
      },
      motto: {
        title: 'Our Motto',
        text: '"Innovation for a Healthier Tomorrow"'
      },
      vision: {
        title: 'Our Vision',
        text: 'To be the global leader in pharmaceutical innovation, providing accessible, effective, and sustainable healthcare solutions that improve lives worldwide.'
      },
      story: {
        title: 'Our Story',
        paragraphs: [
          'Founded in 2010, NovaCure Pharmaceuticals has been at the forefront of pharmaceutical innovation, developing cutting-edge therapies that improve patient outcomes worldwide.',
          'Our journey began with a mission to bridge the gap between scientific discovery and accessible healthcare. Today, we are recognized as a leader in biopharmaceutical research and development.',
          'With over a decade of experience and a team of world-class scientists, we provide comprehensive solutions that address complex medical challenges.'
        ]
      },
      expertise: {
        title: 'Our Expertise',
        items: [
          'Advanced drug discovery and development',
          'Clinical trials and regulatory compliance',
          'Biotechnology and AI-driven research',
          'Global distribution and supply chain management',
          'Quality assurance and GMP standards'
        ]
      },
      whyChooseUs: {
        title: 'Why Choose Us?',
        items: [
          {
            title: 'Quality & Safety',
            description: 'GMP certified facilities ensuring the highest standards of quality, safety, and regulatory compliance in every product we deliver. Each product undergoes rigorous quality control, meets global standards (FDA, EMA), and maintains full traceability from manufacturing to distribution.'
          },
          {
            title: 'Trusted Expertise',
            description: 'Over 10 years of pharmaceutical expertise from licensed pharmacists, scientists, and researchers. We prioritize patient safety, ethical practices, and transparency in all our interactions with healthcare providers.'
          },
          {
            title: 'Innovation & Research',
            description: 'AI-driven drug discovery, biotechnology, and advanced clinical trial methodologies. We continuously invest in cutting-edge research to develop next-generation treatments for complex medical conditions.'
          }
        ]
      },
      values: {
        title: 'Our Values',
        items: [
          {
            title: 'Excellence',
            description: 'Committed to the highest standards in pharmaceutical development'
          },
          {
            title: 'Trust',
            description: 'Building lasting relationships based on integrity and reliability'
          },
          {
            title: 'Innovation',
            description: 'Embracing cutting-edge technologies in healthcare solutions'
          }
        ]
      },
      stats: [
        { number: '10+', label: 'Years Experience' },
        { number: '500+', label: 'Satisfied Clients' },
        { number: '50+', label: 'Countries Served' }
      ],
      team: {
        title: 'Meet Our Leadership',
        subtitle: 'Our team of dedicated professionals brings together decades of experience in pharmaceuticals.',
        members: [
          {
            name: 'Dr. Sarah Johnson',
            role: 'CEO & Chief Scientist',
            description: 'Leading NovaCure with expertise in pharmaceutical research and strategic vision.',
            expertise: ['Drug Development', 'Clinical Research', 'Regulatory Affairs']
          }
        ]
      },
      cta: {
        title: 'Ready to Partner with Us?',
        button: 'Get in Touch'
      }
    },
    am: {
      hero: {
        title: 'ስለ ኖቫኩር ፋርማሲውቲካልስ',
        subtitle: 'በሳይንስ እና ፈጠራ ለማሳደግ የጤና አገልግሎት'
      },
      story: {
        title: 'ታሪካችን',
        paragraphs: [
          'በ2010 ዓ.ም የተመሰረተው ኖቫኩር ፋርማሲውቲካልስ በፋርማሲውቲካል ፈጠራ ግንባር ቀደም በመሆን የተለያዩ ሕክምናዎችን የሚያሳድጉ የተለያዩ ሕክምናዎችን አድጎታል።',
          'ጉዞአችን የተጀመረው በሳይንሳዊ ግኝት እና በሚያገኝ የጤና አገልግሎት መካከል ያለውን ክፍተት ለመሙላት በሚል ነው። ዛሬ በባዮፋርማሲውቲካል ምርምር እና እድገት ውስጥ አንድ አንድ ነን።',
          'በአሥር ዓመታት ልምድ እና በዓለም አቀፍ ሳይንቲስቶች ቡድን በተለያዩ ሕክምናዊ ተግዳሮት አጠቃላይ መፍትሄዎችን እንሰጣለን።'
        ]
      },
      expertise: {
        title: 'የስራ ብቃታችን',
        items: [
          'የላቀ የሕክምና ግኝት እና እድገት',
          'ክሊኒካል ሙከራዎች እና የምርመራ ተለያይነት',
          'ባዮቴክኖሎጂ እና ኤአይ ምርምር',
          'ዓለም አቀፍ ስርጭት እና የሰፊያ ሥርዓት አስተያየት',
          'የጥሩ ሁኔታ ማረጋገጫ እና ጂኤምፒ ደረጃዎች'
        ]
      },
      whyChooseUs: {
        title: 'ለምን እኛን ይመርጣሉ?',
        items: [
          {
            title: 'ጥራት እና ደህንነት',
            description: 'ጂኤምፒ የተረጋገጡ ቦታዎች የፋርማሲውቲካል ብቃትን የሚያረጋግጡ። እያንዳንዱ ምርት ጥብቅ የጥራት ቁጥጥር ያልፋል፣ ዓለም አቀፍ የምርመራ ደረጃዎችን (ኤፍዲኤ፣ ኢኤምኤ) ያሟላል እና ከማምረት እስከ ስርጭት ሙሉ መከታተል ያቆያል።'
          },
          {
            title: 'የታመነ ብቃት',
            description: 'ከ10 ዓመታት በላይ የፋርማሲውቲካል ፈጠራ ከፈቃድ ያላቸው ፋርማሲስቶች፣ የምርምር ሳይንቲስቶች እና የምርመራ ባለሙያዎች ቡድን ጋር። የታካሚ ደህንነትን፣ ስነ-ምግባራዊ ልምዶችን እና ከጤና አገልግሎት ሰጪዎች ጋር ግልጽ ግንኙነትን እንቀድማለን።'
          },
          {
            title: 'ፈጠራ እና ምርምር',
            description: 'ኤአይ የሚመራ የመድኃኒት ግኝት፣ ባዮቴክኖሎጂ እና የላቀ ክሊኒካል ሙከራ ዘዴዎችን የሚጠቀሙ ዘመናዊ የምርምር እና ልማት ላቦራቶሪዎች። ለተወሳሰቡ የሕክምና ሁኔታዎች ቀጣይ ትውልድ ሕክምናዎችን ለማዳበር በከፍተኛ ሁኔታ እንኢንቨስት እናደርጋለን።'
          }
        ]
      },
      values: {
        title: 'የእኛ ዋና እሴቶች',
        items: [
          {
            title: 'ብቃት',
            description: 'በፋርማሲውቲካል እድገት ውስጥ ከፍተኛ ደረጃዎችን ለማሟላት ቆርጥ መሆናችን'
          },
          {
            title: 'መተማመን',
            description: 'በታማኝነት እና በአስተማማኝነት ላይ የተመሰረቱ ዘላቂ ግንኙነቶችን መገንባት'
          },
          {
            title: 'ፈጠራ',
            description: 'በጤና አገልግሎቶች ውስጥ የተለያዩ ቴክኖሎጂዎችን ስለምናቀብል'
          }
        ]
      },
      stats: [
        { number: '10+', label: 'ዓመታት ልምድ' },
        { number: '500+', label: 'የተለያዩ ደንበኞች' },
        { number: '50+', label: 'የተገለገሉ አገሮች' }
      ],
      team: {
        title: 'አመራሮቻችንን ያውቁ',
        subtitle: 'የእኛ የተወደዱ ባለሙያዎች ቡድን በፋርማሲውቲካል ውስጥ በአሥርተ ዓመታት ልምድ አንድ ላይ ያመጣል።',
        members: [
          {
            name: 'ዶ/ር ሳራ ጆንሰን',
            role: 'ዋና ሥራ አስፈፃሚ እና ዋና ሳይንቲስት',
            description: 'በፋርማሲውቲካል ምርምር ብቃት እና ስትራቴጂክ ራእይ ኖቫኩርን እየመራ።',
            expertise: ['የሕክምና ግኝት', 'ክሊኒካል ምርምር', 'የምርመራ ጉዳዮች']
          }
        ]
      },
      cta: {
        title: 'ከእኛ ጋር ለመስራት ዝግጁ ነዎት?',
        button: 'ያግኙን'
      }
    }
  };

  const t = content[language];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50">

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
                           radial-gradient(circle at 80% 80%, rgba(99, 102, 241, 0.1) 0%, transparent 50%)`
        }}></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">{t.hero.title}</h1>
            <p className="text-xl md:text-2xl text-blue-100 font-light">
              {t.hero.subtitle}
            </p>
          </div>
        </div>
      </div>

      {/* Motto Section */}
      <div className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{t.motto.title}</h2>
          <p className="text-xl md:text-2xl font-light italic">{t.motto.text}</p>
        </div>
      </div>


      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Story Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-2xl">📖</span>
                </div>
                <h2 className="text-3xl font-bold text-gray-800">{t.story.title}</h2>
              </div>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                {t.story.paragraphs.map((para, index) => (
                  <p key={index}>{para}</p>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-2xl">🧬</span>
                </div>
                <h2 className="text-3xl font-bold text-gray-800">{t.expertise.title}</h2>
              </div>
              <ul className="space-y-4">
                {t.expertise.items.map((item, index) => (
                  <li key={index} className="flex items-start group">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-0.5 group-hover:bg-blue-600 transition-colors duration-300">
                      <svg className="w-3 h-3 text-blue-600 group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-600 flex-1">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Why Choose Us Section */}
          <div className="rounded-2xl shadow-lg p-8 mb-20 hover:shadow-xl transition-shadow duration-300" style={{ backgroundColor: '#1c4e78' }}>
            <h2 className="text-3xl font-bold text-white text-center mb-8">{t.whyChooseUs.title}</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {t.whyChooseUs.items.map((item, index) => {
                const icons = [<Shield size={32} />, <Users size={32} />, <Lightbulb size={32} />];
                const gradients = [
                  'from-blue-500 to-cyan-400',
                  'from-teal-500 to-green-400',
                  'from-purple-500 to-blue-400'
                ];

                return (
                  <div
                    key={index}
                    className="rounded-xl p-6 border-2 border-transparent hover:scale-105 hover:shadow-2xl hover:brightness-110 transition-all duration-300 cursor-pointer"
                    style={{ backgroundColor: '#2a6d94' }}
                  >
                    <div className={`w-16 h-16 bg-gradient-to-br ${gradients[index]} rounded-xl flex items-center justify-center text-white mb-4 mx-auto shadow-md hover:shadow-lg transition-shadow duration-300`}>
                      {icons[index]}
                    </div>
                    <h3 className="mb-3 text-center text-lg text-white font-semibold hover:font-bold transition-all duration-300">
                      {item.title}
                    </h3>
                    <p className="text-gray-100 leading-relaxed text-center text-sm hover:text-white transition-colors duration-300">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-20">
            {t.stats.map((stat, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300">
                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600 text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl shadow-2xl p-12 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">{t.cta.title}</h2>
            <a href="/contact">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:transform hover:scale-105 shadow-lg">
                {t.cta.button}
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
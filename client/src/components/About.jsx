 import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Trophy, Handshake, Sparkles, Shield, Users, Lightbulb } from 'lucide-react';

export default function About() {
  const { language } = useLanguage();
  const [expandedCard, setExpandedCard] = useState(null);

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
      whyChooseUs: {
        title: 'Why Choose Us?',
        items: [
          {
            title: 'Quality & Safety',
            description: 'Ensuring the highest standards of quality, safety, and regulatory compliance in every product we deliver.'
          },
          {
            title: 'Trusted Expertise',
            description: 'Backed by experienced professionals dedicated to reliability, transparency, and patient well-being.'
          },
          {
            title: 'Innovation & Research',
            description: 'Driven by continuous research, advanced technology, and innovative solutions in pharmaceutical science.'
          }
        ]
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
            title: 'ዓለም አቀፍ ስራ ብቃት',
            description: 'በፋርማሲውቲካል ምርምር እና እድገት ከአሥር ዓመታት በላይ ልምድ በ50+ አገሮች ላይ።'
          },
          {
            title: 'የተለያዩ ቴክኖሎጂ',
            description: 'ኤአይ ምርምር፣ ባዮቴክኖሎጂ እና የላቀ ክሊኒካል ሙከራዎችን ለተለያዩ ሕክምናዎች በመስራት።'
          },
          {
            title: 'የጥሩ ሁኔታ ማረጋገጫ',
            description: 'ጂኤምፒ የተረጋገጡ ቦታዎች በሁሉም ምርቶቻችን ውስጥ የተለያዩ ደረጃዎችን የሚያረጋግጡ።'
          },
          {
            title: 'የተለያዩ አቀራረብ አቀራረብ',
            description: 'እያንዳንዱ ሕክምና በተለያዩ ውጤቶች እና የሕይወት ጥሩ ሁኔታ እንደ ዋና ትኩረት ተሰማራ።'
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

      {/* Vision Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-8">{t.vision.title}</h2>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">{t.vision.text}</p>
          </div>
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
          <div className="py-16 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-blue-900">{t.whyChooseUs.title}</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {t.whyChooseUs.items.map((item, index) => {
                  const icons = [<Shield size={32} />, <Users size={32} />, <Lightbulb size={32} />];
                  const gradients = [
                    'from-blue-500 to-cyan-400',
                    'from-teal-500 to-green-400',
                    'from-purple-500 to-blue-400'
                  ];
                  const isExpanded = expandedCard === index;

                  return (
                    <div
                      key={index}
                      onClick={() => setExpandedCard(isExpanded ? null : index)}
                      className={`bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer hover:transform hover:scale-105 border border-white/20 ${
                        isExpanded ? 'ring-2 ring-blue-500' : ''
                      }`}
                    >
                      <div className="p-8">
                        <div className={`w-16 h-16 bg-gradient-to-br ${gradients[index]} rounded-2xl flex items-center justify-center text-white mb-6 mx-auto shadow-lg`}>
                          {icons[index]}
                        </div>
                        <h3 className={`mb-4 text-center transition-all duration-300 text-xl ${isExpanded ? 'text-blue-900 font-black' : 'text-gray-600 font-bold'}`}>{item.title}</h3>
                        <p className={`text-gray-600 leading-relaxed text-center transition-all duration-300 ${
                          isExpanded ? 'line-clamp-none' : 'line-clamp-3'
                        }`}>
                          {item.description}
                        </p>
                        <div className="text-center mt-4">
                          <span className="text-blue-600 font-medium text-sm">
                            {isExpanded ? 'Click to collapse' : 'Click to expand'}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl shadow-2xl p-10 mb-20 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">{t.values.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {t.values.items.map((value, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover:transform hover:scale-105">
                  <div className={`w-16 h-16 bg-gradient-to-br ${index === 0 ? 'from-yellow-400 to-orange-500' :
                      index === 1 ? 'from-green-400 to-emerald-500' :
                        'from-purple-400 to-pink-500'
                    } rounded-2xl flex items-center justify-center text-3xl mb-4 shadow-lg mx-auto`}>
                    {index === 0 ? <Trophy size={30} className="text-white" /> : index === 1 ? <Handshake size={30} className="text-white" /> : <Sparkles size={30} className="text-white" />}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-center">{value.title}</h3>
                  <p className="text-blue-100 text-center leading-relaxed">{value.description}</p>
                </div>
              ))}
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

          {/* Staff Members Section */}
          <div className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">{t.team.title}</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">{t.team.subtitle}</p>
            </div>
            <div className="flex justify-center">
              {t.team.members.map((member, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 w-full max-w-md p-6">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-full flex items-center justify-center text-3xl text-white font-bold mx-auto mb-4">
                      {member.name.charAt(0)}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">{member.name}</h3>
                    <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {member.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4 justify-center">
                      {member.expertise.map((skill, i) => (
                        <span key={i} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                          {skill}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-4 justify-center">
                      <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                      </a>
                      <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
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
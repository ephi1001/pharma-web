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
        text: 'To be the number one recognized and reliable supplier of complete ranges of top quality yet affordable pharmaceuticals and medical supplies throughout the country. To be one of the Best Regulatory and marketing Service providing Company in our region'
      },
      mission: {
        title: 'Our Mission',
        text: 'Import and distribute high-quality pharmaceutical products ethically throughout Ethiopia to address shortages. Provide regulatory services, market access, and technical representation. Contribute to national health policy through product availability. Understand client needs for maximum satisfaction. Be profitable and an exemplary public-private partner.'
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
            title: 'Quality products and service',
            description: ''
          },
          {
            title: 'partnership',
            description: ''
          },
          {
            title: 'Commitment',
            description: ''
          },
          {
            title: 'Continues Learning',
            description: ''
          },
          {
            title: 'Integrity',
            description: ''
          },
          {
            title: 'Positive team spirit',
            description: ''
          },
          {
            title: 'Loyalty',
            description: ''
          },
          {
            title: 'Lending a hand to others',
            description: ''
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
      vision: {
        title: 'የእኛ ራእይ',
        text: 'በፋርማሲውቲካል ፈጠራ ውስጥ ዓለም አቀፍ አንድ አንድ ለመሆን ፣ የሚያገኝ ፣ የሚሰራ እና የሚያስተያዩ የጤና አገልግሎቶችን በመስጠት ሕይወቶችን በዓለም አቀፍ ለማሳደግ።'
      },
      mission: {
        title: 'የእኛ ተልእኮ',
        text: 'የተለያዩ ፋርማሲውቲካል መፍትሄዎችን በመስጠት የሕክምና አገልግሎትን ለማሳደግ ፣ የጤና እኩልነትን ለማሳደግ እና በዓለም አቀፍ ሕክምና እድገቶች ለመሳተፍ።'
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
    <div className="h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50">
          <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
            <h2 className="text-4xl font-bold text-white mb-20 z-10 p-4 bg-black/30 rounded-lg backdrop-blur-sm">Our Core Identity</h2>
            <div id="card-area" className="relative w-full max-w-7xl h-full flex items-center justify-center">
              
              {/* Vision Card - Left, Red */}
              <div className="absolute left-[10%] lg:left-[15%] top-1/2 -translate-y-1/2 w-80 lg:w-96 min-h-[400px] bg-rose-500 text-white rounded-3xl p-8 shadow-2xl transform -rotate-6 transition-transform hover:scale-105 hover:z-30 duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-white/20 rounded-full">
                     <Lightbulb className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">{t.vision.title}</h3>
                </div>
                <p className="text-lg leading-relaxed font-medium">{t.vision.text}</p>
              </div>

              {/* Mission Card - Center, Yellow, On Top */}
              <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-80 lg:w-96 min-h-[400px] bg-amber-400 text-black rounded-3xl p-8 shadow-2xl transform rotate-2 z-20 transition-transform hover:scale-105 hover:z-30 duration-300">
                 <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-black/10 rounded-full">
                     <Trophy className="w-6 h-6 text-black" />
                  </div>
                   <h3 className="text-2xl font-bold">{t.mission.title}</h3>
                </div>
                <p className="text-lg leading-relaxed font-medium">{t.mission.text}</p>
              </div>

              {/* Values Card - Right, Blue */}
              <div className="absolute right-[10%] lg:right-[15%] top-1/2 -translate-y-1/2 w-80 lg:w-96 min-h-[400px] bg-sky-400 text-black rounded-3xl p-8 shadow-2xl transform rotate-6 transition-transform hover:scale-105 hover:z-30 duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-black/10 rounded-full">
                     <Handshake className="w-6 h-6 text-black" />
                  </div>
                  <h3 className="text-2xl font-bold">{t.values.title}</h3>
                </div>
                <ul className="space-y-3">
                  {t.values.items.slice(0, 6).map((item, index) => (
                    <li key={index} className="flex items-center gap-2 font-medium">
                      <span className="w-2 h-2 bg-black rounded-full" />
                      {item.title}
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </section>
    </div>
  );
}
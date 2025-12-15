import { useLanguage } from '../contexts/LanguageContext';
import { Trophy, Handshake, Sparkles, Shield, Users, Lightbulb } from 'lucide-react';

export default function About() {
  const { language } = useLanguage();

  const content = {
    en: {
      hero: {
        title: 'About Morya Pharma',
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
      history: {
        title: 'Morya Pharma',
        text: 'Morya Pharma founded by 2 entrepreneurs who have well experienced background of pharmaceutical and marketing profession. Our company fulfill all the legal requirements set by Ethiopian Ministry of Health (MOH), Ethiopian Food and Drug Administration (EFDA) and Ethiopian ministry of trade. Major area of our business focus is distribution, foreign company representation, regulatory and marketing service. Proactive management and effective leadership style are one of our most valued features that puts us at the forefront. Meeting the growing requirements of our customers and the health sector development goals of the government of Ethiopia is our core competence.'
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
      history: {
        title: 'የኩባንያ ታሪክ',
        text: 'በ2010 የተመሰረተው ኤቢአር ፋርማ በሳይንሳዊ ግኝት እና ተደራሽ የጤና እንክብካቤ መካከል ያለውን ክፍተት ለመድፈን በተልዕኮ ተጀመረ። ባለፉት አስርት ዓመታት ውስጥ ለጥራት፣ ለፈጠራ እና ለሥነ ምግባራዊ ስርጭት ባለን ቁርጠኝነት የምንታወቅ ግንባር ቀደም አቅራቢ ሆነናል።'
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50">
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
        <h2 className="text-4xl font-bold text-white mb-20 z-10 p-4 bg-black/30 rounded-lg backdrop-blur-sm">Our Core Identity</h2>
        <div id="card-area" className="relative w-full max-w-7xl h-full flex flex-col lg:flex-row flex-wrap items-center justify-center gap-6 py-10 lg:py-20">

          {/* History Card - New Card */}
          <div className="w-full max-w-sm lg:w-80 min-h-[400px] bg-white/80 backdrop-blur-md border border-[#DBC498] text-gray-900 rounded-3xl p-8 shadow-xl transform transition-transform hover:scale-105 duration-300 flex flex-col items-center">
            <div className="flex items-center gap-3 mb-6 justify-center w-full border-b border-[#DBC498]/20 pb-4">
              <div className="p-3 bg-[#DBC498]/20 rounded-full">
                <Sparkles className="w-6 h-6 text-[#9A7B4F]" />
              </div>
              <h3 className="text-2xl font-playfair font-bold text-[#5C4D35]">{t.history.title}</h3>
            </div>
            <div className="text-base font-lora font-medium leading-normal space-y-4 text-center text-gray-700">
              <p>{t.history.text}</p>
            </div>
          </div>

          {/* Vision Card */}
          <div className="w-full max-w-sm lg:w-80 min-h-[400px] bg-white/80 backdrop-blur-md border border-[#CBB682] text-gray-900 rounded-3xl p-8 shadow-xl transform transition-transform hover:scale-105 duration-300 flex flex-col items-center">
            <div className="flex items-center gap-3 mb-6 justify-center w-full border-b border-[#CBB682]/20 pb-4">
              <div className="p-3 bg-[#CBB682]/20 rounded-full">
                <Lightbulb className="w-6 h-6 text-[#8C7644]" />
              </div>
              <h3 className="text-2xl font-playfair font-bold text-[#5C4D35]">{t.vision.title}</h3>
            </div>
            <div className="text-lg font-lora font-medium leading-relaxed space-y-4 text-center text-gray-700">
              <p>To be the number one recognized and reliable supplier of complete ranges of top quality yet affordable pharmaceuticals and medical supplies throughout the country.</p>
              <p>To be one of the Best Regulatory and marketing Service providing Company in our region.</p>
            </div>
          </div>

          {/* Mission Card */}
          <div className="w-full max-w-sm lg:w-80 min-h-[400px] bg-white/80 backdrop-blur-md border border-[#A08C5B] text-gray-900 rounded-3xl p-8 shadow-xl transform transition-transform hover:scale-105 duration-300 flex flex-col items-center">
            <div className="flex items-center gap-3 mb-6 justify-center w-full border-b border-[#A08C5B]/20 pb-4">
              <div className="p-3 bg-[#A08C5B]/20 rounded-full">
                <Trophy className="w-6 h-6 text-[#756238]" />
              </div>
              <h3 className="text-2xl font-playfair font-bold text-[#5C4D35]">{t.mission.title}</h3>
            </div>
            <div className="text-lg font-lora font-medium leading-relaxed text-center text-gray-700">
              <p>To ethically import and distribute high-quality pharmaceuticals to address national shortages, while providing premier regulatory services. We are dedicated to ensuring product availability, achieving maximum client satisfaction, and being an exemplary corporate partner.</p>
            </div>
          </div>

          {/* Values Card */}
          <div className="w-full max-w-sm lg:w-80 min-h-[400px] bg-white/80 backdrop-blur-md border border-[#DBC498] text-gray-900 rounded-3xl p-8 shadow-xl transform transition-transform hover:scale-105 duration-300 flex flex-col items-center">
            <div className="flex items-center gap-3 mb-6 justify-center w-full border-b border-[#DBC498]/20 pb-4">
              <div className="p-3 bg-[#DBC498]/20 rounded-full">
                <Handshake className="w-6 h-6 text-[#9A7B4F]" />
              </div>
              <h3 className="text-2xl font-playfair font-bold text-[#5C4D35]">{t.values.title}</h3>
            </div>
            <ul className="text-lg font-lora font-medium leading-relaxed space-y-1 list-none p-0 text-center text-gray-700">
              <li>Quality products and service</li>
              <li>Partnership</li>
              <li>Commitment</li>
              <li>Continuous Learning</li>
              <li>Integrity</li>
              <li>Positive team spirit</li>
              <li>Loyalty</li>
              <li>Lending a hand to others</li>
            </ul>
          </div>

        </div>
      </section>
    </div>
  );
}
// Updated Values content and Vision font
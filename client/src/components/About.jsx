import { useLanguage } from '../contexts/LanguageContext';
import { Target, Heart, Scale, Crown, Star, ShieldCheck, Award, Globe } from 'lucide-react';

export default function About() {
  const { language } = useLanguage();

  const content = {
    en: {
      about: {
        title: "About Morya Pharma",
        text: "Morya Pharma was founded by two entrepreneurs with extensive experience in pharmaceuticals and marketing. We comply with all legal requirements set by Ethiopia's Ministry of Health, Food and Drug Administration, and Ministry of Trade. Our core business focuses on distribution, foreign company representation, and regulatory and marketing products. With proactive management and effective leadership, we meet growing customer needs and support Ethiopia's health sector development goals."
      },
      vision: {
        title: "Our Vision",
        text: "To be the number one recognized and reliable supplier of complete ranges of top quality yet affordable pharmaceuticals and medical supplies throughout the country.\nTo be one of the Best Regulatory and marketing Product providing Company in our region"
      },
      mission: {
        title: "Our Mission",
        items: [
          "Import and distribute high-quality pharmaceuticals ethically",
          "Provide comprehensive regulatory and market products",
          "Support national health policy goals",
          "Meet clients' holistic needs effectively",
          "Ensure profitability via customer satisfaction",
          "Act as exemplary corporate citizen"
        ]
      },
      values: {
        title: "Core Values",
        items: [
          "Quality products and product",
          "partnership",
          "Commitment",
          "Continues Learning",
          "Integrity",
          "Positive team spirit",
          "Loyalty",
          "Lending a hand to others."
        ]
      }
    },
    am: {
      about: {
        title: "ስለ ሞርያ ፋርማ",
        text: "ሞርያ ፋርማ በፋርማሲዩቲካል ዓለም ውስጥ የታላቅነት ምልክት ነው። በታማኝነት እና በሳይንሳዊ ፈጠራ መሰረት የተመሰረተን፣ ዓለም አቀፍ የጤና እድገቶችን ከአካባቢያዊ ተደራሽነት ጋር ለማገናኘት ቆርጠን ተነስተናል።"
      },
      vision: {
        title: "ራዕያችን",
        text: "በጥራት፣ በተመጣጣኝ ዋጋ እና በሥነ-ምግባር አገልግሎት ወርቃማ ደረጃን በማውጣት በዓለም አቀፍ ደረጃ የሚታወቅ የፋርማሲዩቲካል መፍትሄዎች መሪ መሆን።"
      },
      mission: {
        title: "ተልዕኳችን",
        text: "ፕሪሚየም የፋርማሲዩቲካል ምርቶችን በማስመጣት እና በማሰራጨት የጤና አጠባበቅ ተደራሽነትን ማሻሻል።"
      },
      values: {
        title: "እሴቶቻችን",
        items: [
          "ዓለም አቀፍ ብቃት",
          "ታማኝነት",
          "ሳይንሳዊ ፈጠራ",
          "ርህራሄ",
          "ታማኝ አጋርነት"
        ]
      }
    }
  };

  const t = content[language] || content['en'];

  return (
    <div className="relative w-full py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-slate-50 to-white">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#DBC498]/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-900/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Main Header / About Section */}
        <div className="text-center mb-24 animate-fade-in-up">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-[#DBC498]/10 rounded-full border border-[#DBC498]/20">
              <Crown className="w-10 h-10 text-[#B89865]" />
            </div>
          </div>
          <h2 className="text-5xl md:text-7xl font-playfair font-bold text-slate-800 mb-8 tracking-tight">
            {t.about.title}
          </h2>
          <div className="w-32 h-[2px] bg-gradient-to-r from-transparent via-[#DBC498] to-transparent mx-auto mb-10"></div>
          <p className="max-w-4xl mx-auto text-xl md:text-2xl font-lora text-slate-600 leading-relaxed font-light">
            {t.about.text}
          </p>
        </div>

        {/* Cards Section - Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">

          {/* Vision Card - Light & Elegant */}
          <div className="group relative p-10 bg-white shadow-[0_15px_30px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_25px_50px_-12px_rgba(184,152,101,0.15)] rounded-3xl border border-slate-100 transition-all duration-700 hover:-translate-y-2 overflow-hidden flex flex-col">
            <div className="absolute top-0 left-0 w-1 h-full bg-[#DBC498] group-hover:w-2 transition-all duration-300"></div>
            <div className="absolute -right-10 -top-10 text-slate-50 opacity-50 transform rotate-12 group-hover:rotate-45 transition-transform duration-700">
              <Globe size={200} strokeWidth={0.5} />
            </div>

            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-[#F3E5AB]/20 rounded-2xl flex items-center justify-center rotate-3 group-hover:rotate-0 transition-all duration-500">
                  <Award className="w-8 h-8 text-[#B89865]" />
                </div>
              </div>

              <h3 className="text-3xl font-playfair font-bold text-slate-800 mb-6">{t.vision.title}</h3>
              <p className="font-lora text-slate-600 leading-relaxed text-lg italic opacity-90">
                {t.vision.text.split('\n').map((line, idx) => (
                  <span key={idx}>
                    <span className="inline-block w-2 h-2 rounded-full bg-[#DBC498] mr-3 mt-1"></span>
                    {line}
                    {idx < t.vision.text.split('\n').length - 1 && <br />}
                  </span>
                ))}
              </p>
            </div>
          </div>

          {/* Mission Card - Dark & Bold (Centerpiece) */}
          <div className="group relative p-10 bg-slate-900 shadow-[0_20px_40px_-10px_rgba(15,23,42,0.5)] hover:shadow-[0_25px_60px_-10px_rgba(15,23,42,0.6)] rounded-3xl border border-slate-800 transition-all duration-700 hover:-translate-y-3 overflow-hidden text-white lg:scale-105 z-20 flex flex-col justify-between">
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#DBC498] to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900 to-[#DBC498]/10 opacity-50"></div>
            <div className="absolute -right-5 -bottom-5 text-white opacity-5">
              <Target size={180} strokeWidth={1} />
            </div>

            <div className="relative z-10">
              <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-8 border border-white/10 backdrop-blur-sm group-hover:bg-white/10 transition-colors">
                <Star className="w-8 h-8 text-[#F3E5AB]" />
              </div>
              <h3 className="text-3xl font-playfair font-bold text-white mb-6 tracking-wide">{t.mission.title}</h3>

              <ul className="space-y-5 font-lora text-slate-300">
                {t.mission.items.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-4 group/item">
                    <span className="w-2 h-2 rounded-full bg-[#DBC498] group-hover/item:scale-150 transition-transform duration-300"></span>
                    <span className="text-lg font-medium group-hover/item:text-[#F3E5AB] transition-colors duration-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative z-10 mt-8 pt-6 border-t border-white/10 flex items-center gap-3">
              <span className="h-[1px] w-8 bg-[#DBC498]"></span>
              <span className="text-[#DBC498] text-sm uppercase tracking-widest font-medium">Morya Promise</span>
            </div>
          </div>

          {/* Values Card - Clean List */}
          <div className="group relative p-10 bg-white shadow-[0_15px_30px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_25px_50px_-12px_rgba(184,152,101,0.15)] rounded-3xl border border-slate-100 transition-all duration-700 hover:-translate-y-2 overflow-hidden flex flex-col">
            <div className="absolute top-0 right-0 w-1 h-full bg-[#DBC498] group-hover:w-2 transition-all duration-300"></div>
            <div className="absolute -left-10 -bottom-10 text-slate-50 opacity-50 transform -rotate-12 group-hover:rotate-0 transition-transform duration-700">
              <Heart size={200} strokeWidth={0.5} />
            </div>

            <div className="relative z-10 h-full">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-[#F3E5AB]/20 rounded-2xl flex items-center justify-center -rotate-3 group-hover:rotate-0 transition-all duration-500">
                  <ShieldCheck className="w-8 h-8 text-[#B89865]" />
                </div>
              </div>

              <h3 className="text-3xl font-playfair font-bold text-slate-800 mb-8">{t.values.title}</h3>

              <ul className="space-y-5 font-lora text-slate-600">
                {t.values.items.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-4 group/item">
                    <span className="w-2 h-2 rounded-full bg-[#DBC498] group-hover/item:scale-150 transition-transform duration-300"></span>
                    <span className="text-lg font-medium group-hover/item:text-[#B89865] transition-colors duration-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
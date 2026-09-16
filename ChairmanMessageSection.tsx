import React from 'react';
import {
  Quote,
  ShieldCheck,
  Award,
  CheckCircle2,
  Building2,
  Sparkles,
  ArrowUpRight,
  Phone,
  Mail,
  FileCheck,
  BadgeCheck,
  TrendingUp,
  MapPin,
  Users
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { BalwantLogo } from './BalwantLogo';
import chairmanImg from '../assets/images/chairmandesk.jpeg';
import rebarImg from '../assets/images/tmt_rustfree_bars_final.jpg';
import bundlesImg from '../assets/images/tmt_rustfree_bundles_final.jpg';

interface ChairmanMessageSectionProps {
  onOpenEnquiry?: () => void;
  onOpenDealer?: () => void;
}

export const ChairmanMessageSection: React.FC<ChairmanMessageSectionProps> = ({
  onOpenEnquiry,
  onOpenDealer,
}) => {
  const { language } = useLanguage();

  return (
    <section
      id="chairmans-message-section"
      className="py-16 sm:py-24 bg-gradient-to-b from-[#FFFDF0] via-white to-amber-50/50 text-zinc-900 border-t border-b border-amber-200/80 relative overflow-hidden"
    >
      {/* Decorative background glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFD700]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-white border border-amber-300 px-4 py-1.5 rounded-xs mb-3 shadow-xs">
            <Award className="w-4 h-4 text-amber-700" />
            <span className="font-mono-tech text-xs font-black text-amber-900 uppercase tracking-widest">
              {language === 'hi' ? 'नेतृत्व एवं राष्ट्रीय विजन' : 'LEADERSHIP & NATIONAL VISION'}
            </span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-zinc-900 uppercase tracking-tight">
            {language === 'hi' ? (
              <>
                चेयरमैन का <span className="text-[#D9A700]">संदेश</span>
              </>
            ) : (
              <>
                FROM THE <span className="text-[#D9A700]">CHAIRMAN'S DESK</span>
              </>
            )}
          </h2>

          <p className="text-zinc-700 text-sm sm:text-base mt-2 font-semibold">
            {language === 'hi'
              ? 'मजबूती का निर्माण। व्यापक विस्तार। भारत के साथ प्रगति।'
              : 'Building Strength. Expanding Reach. Growing With India.'}
          </p>
        </div>

        {/* Main Chairman Message Card */}
        <div className="bg-white border-2 border-amber-300 rounded-xs shadow-xl p-6 sm:p-10 lg:p-14 relative text-left">
          {/* Watermark Quote Icon */}
          <Quote className="absolute top-6 right-6 sm:top-10 sm:right-10 w-20 h-20 sm:w-28 sm:h-28 text-amber-100 pointer-events-none -z-0" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-14 items-center relative z-10">
            {/* Left Column: Portrait & Executive Info (lg:col-span-5) */}
            <div className="lg:col-span-5 flex flex-col items-center sm:items-start text-center sm:text-left">
              <div className="relative mb-6 w-full max-w-[380px] sm:max-w-[420px]">
                {/* Visual Container */}
                <div className="w-full rounded-xs bg-white p-2 border-2 border-amber-400 shadow-xl">
                  <div className="w-full flex items-center justify-center">
                    <img
                      src={chairmanImg}
                      alt="P.N Singh - Chairman (Balwant Steel and Power An associate Singh Aluminium Company Limited)"
                      className="w-full h-auto object-contain block rounded-xs"
                      loading="eager"
                      decoding="async"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  {/* Clean Corporate Plaque */}
                  <div className="mt-3 pt-2.5 border-t border-amber-200 bg-amber-50/60 p-3 rounded-xs text-left">
                    <div className="font-display font-black text-zinc-950 text-xl uppercase tracking-tight leading-tight">
                      P.N Singh
                    </div>
                    <div className="mt-1">
                      <span className="inline-block text-[11px] font-mono-tech bg-amber-700 text-white px-2.5 py-0.5 rounded-xs font-bold uppercase tracking-wider">
                        CHAIRMAN
                      </span>
                    </div>
                    <div className="font-display font-bold text-amber-900 text-sm uppercase leading-tight mt-1.5">
                      Balwant Steel and Power
                    </div>
                    <div className="text-[11px] font-bold text-zinc-700 uppercase tracking-wide mt-1">
                      An Associate
                    </div>
                    <div className="font-display font-bold text-amber-900 text-sm uppercase leading-tight mt-0.5">
                      Singh Aluminium Company Limited
                    </div>
                  </div>
                </div>

                {/* 5+ Decades Badge */}
                <div className="absolute -top-3 -right-3 bg-white border-2 border-amber-400 px-3 py-1 rounded-xs shadow-lg flex items-center gap-1.5 z-20">
                  <ShieldCheck className="w-4 h-4 text-amber-700" />
                  <span className="text-[10px] font-mono-tech font-black text-zinc-900 uppercase">
                    5+ DECADES IN STEEL
                  </span>
                </div>
              </div>

              {/* Core Philosophy Box */}
              <div className="w-full bg-[#FFFDF0] border border-amber-200 p-4 rounded-xs text-left mb-6">
                <div className="text-xs font-mono-tech font-bold text-amber-900 uppercase mb-1">
                  {language === 'hi' ? 'हमारा मूल विश्वास' : 'Foundational Belief'}
                </div>
                <div className="font-display font-black text-base sm:text-lg text-zinc-900 leading-snug">
                  “Quality, consistency and trust are the foundation of every lasting structure.”
                </div>
                <p className="text-xs text-zinc-700 mt-1 font-mono-tech font-medium">
                  — P.N Singh, CHAIRMAN • Balwant Steel and Power (An associate Singh Aluminium Company Limited)
                </p>
              </div>

              {/* Call to action buttons */}
              <div className="flex flex-col gap-2.5 w-full">
                <button
                  onClick={onOpenDealer}
                  className="w-full bg-[#FFD700] hover:bg-[#F5C700] text-black font-display font-black text-xs sm:text-sm uppercase tracking-wider py-3 px-4 rounded-xs border border-amber-400 cursor-pointer shadow-md flex items-center justify-center gap-2 transition-all"
                >
                  <Users className="w-4 h-4 text-black" />
                  <span>{language === 'hi' ? 'डीलरशिप के लिए आवेदन करें' : 'Apply for Dealership'}</span>
                </button>
                <button
                  onClick={() => onOpenEnquiry && onOpenEnquiry('Distributorship Application')}
                  className="w-full bg-zinc-900 hover:bg-black text-white font-display font-black text-xs sm:text-sm uppercase tracking-wider py-3 px-4 rounded-xs border border-zinc-800 cursor-pointer shadow-md flex items-center justify-center gap-2 transition-all"
                >
                  <Building2 className="w-4 h-4 text-[#FFD700]" />
                  <span>{language === 'hi' ? 'डिस्ट्रीब्यूटरशिप के लिए आवेदन करें' : 'Apply for Distributorship'}</span>
                </button>
              </div>
            </div>

            {/* Right Column: Full Inspiring Statement (lg:col-span-7) */}
            <div className="lg:col-span-7 space-y-5">
              <div className="border-l-4 border-amber-600 pl-4 py-1">
                <span className="text-xs font-mono-tech text-amber-800 font-bold uppercase tracking-wider block">
                  CHAIRMAN'S MESSAGE
                </span>
                <h3 className="font-display font-black text-2xl sm:text-3xl text-zinc-900 uppercase tracking-tight mt-1">
                  Building Strength. Expanding Reach. Growing With India.
                </h3>
              </div>

              {/* Exact Chairman's Speech Copy */}
              <div className="space-y-4 text-zinc-800 text-sm sm:text-base leading-relaxed">
                <p className="font-medium text-zinc-900 bg-amber-50/70 p-3.5 rounded-xs border border-amber-200">
                  At <strong>Balwant TMT</strong>, our journey of more than five decades in the steel industry has been built on a simple belief — <strong>quality, consistency and trust</strong> are the foundation of every lasting structure.
                </p>

                <p>
                  Today, as we look ahead, our focus is on strengthening our manufacturing capabilities, expanding our distribution network and making <strong>Balwant TMT</strong> accessible to a wider market across India.
                </p>

                <p>
                  Our long-term vision is ambitious. We aim to build our presence across <strong>29 states and 8 Union Territories</strong>, establish a strong network of <strong>500+ distributors and 50,000+ dealers</strong>, and expand our dealership reach across all <strong>808 districts of India</strong>. We have also set a target of achieving <strong>60 Lakh ( 6 million ) Metric tonnes per year by 2027</strong>.
                </p>

                <p>
                  With manufacturing operations associated with <strong>Bhilai, Raipur, Raigarh and Rourkela</strong>, we are building the capabilities and partnerships required to support this growth.
                </p>

                <p>
                  Our commitment, however, goes beyond numbers. Every expansion must be supported by quality manufacturing, responsible business practices, strong technology and long-term relationships with our dealers, distributors, customers and business partners.
                </p>

                <p>
                  India's growth is creating new opportunities every day. We see our responsibility as not only growing with this development, but contributing to it by delivering reinforcement steel that people can depend on.
                </p>

                <p className="text-zinc-900 font-semibold italic">
                  Our vision is clear — to take Balwant TMT from a strong regional presence to a trusted national steel brand.
                </p>
              </div>

              {/* 4 Pillars of National Growth Metric */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3">
                <div className="bg-[#FFFDF0] p-3 rounded-xs border border-amber-200 text-left">
                  <div className="font-display font-black text-xl text-amber-900">29+8</div>
                  <div className="text-[10px] font-mono-tech font-bold text-zinc-700 uppercase">States &amp; UTs</div>
                  <p className="text-[10px] text-zinc-500">Pan-India Footprint</p>
                </div>

                <div className="bg-[#FFFDF0] p-3 rounded-xs border border-amber-200 text-left">
                  <div className="font-display font-black text-xl text-amber-900">808</div>
                  <div className="text-[10px] font-mono-tech font-bold text-zinc-700 uppercase">Districts</div>
                  <p className="text-[10px] text-zinc-500">All-India Reach</p>
                </div>

                <div className="bg-[#FFFDF0] p-3 rounded-xs border border-amber-200 text-left">
                  <div className="font-display font-black text-xl text-amber-900">500+ / 50K+</div>
                  <div className="text-[10px] font-mono-tech font-bold text-zinc-700 uppercase">Channel Network</div>
                  <p className="text-[10px] text-zinc-500">500+ Dist. &amp; 50K+ Dealers</p>
                </div>

                <div className="bg-[#FFFDF0] p-3 rounded-xs border border-amber-200 text-left">
                  <div className="font-display font-black text-xl text-amber-900">60 Lakh MT</div>
                  <div className="text-[10px] font-mono-tech font-bold text-zinc-700 uppercase">Target 2027</div>
                  <p className="text-[10px] text-zinc-500">Per Year Steel Sales</p>
                </div>
              </div>

              {/* Signature block */}
              <div className="pt-4 border-t border-zinc-200 flex items-center justify-between flex-wrap gap-4">
                <div>
                  <div className="font-display font-black text-xl text-zinc-900 uppercase">
                    P.N Singh
                  </div>
                  <div className="text-xs font-mono-tech text-amber-900 font-bold uppercase">
                    CHAIRMAN
                  </div>
                  <div className="text-xs font-display font-bold text-zinc-800 uppercase mt-0.5">
                    Balwant Steel and Power
                  </div>
                  <div className="text-xs font-bold text-zinc-700 uppercase tracking-wide mt-1">
                    An Associate
                  </div>
                  <div className="text-xs font-display font-bold text-zinc-800 uppercase mt-0.5">
                    Singh Aluminium Company Limited
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={onOpenEnquiry}
                    className="inline-flex items-center gap-1.5 text-xs font-mono-tech text-zinc-800 hover:text-amber-800 font-bold bg-zinc-100 hover:bg-amber-100 px-3 py-2 rounded-xs border border-zinc-300 transition-colors cursor-pointer"
                  >
                    <span>Official Quotation &amp; Supply Desk</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-amber-700" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

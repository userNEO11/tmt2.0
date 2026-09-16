import React from 'react';
import { BalwantLogo } from './BalwantLogo';
import { ShieldCheck, Phone, Mail, MapPin, ArrowUpRight, ChevronRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface FooterProps {
  onNavigate: (page: string) => void;
  onOpenEnquiry: (grade?: string) => void;
  onOpenDealer: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenEnquiry, onOpenDealer }) => {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#050507] text-zinc-400 border-t border-white/10 pt-16 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-14 border-b border-white/10 text-left">
          {/* Col 1: Official Logo & Brand Info (lg:col-span-4) */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <button
              onClick={() => onNavigate('home')}
              className="w-44 sm:w-52 mb-6 shadow-xl cursor-pointer text-left"
            >
              <BalwantLogo variant="badge" className="w-full h-auto" />
            </button>

            <p className="text-sm text-zinc-400 leading-relaxed max-w-sm mb-6">
              {t.footer.desc}
            </p>

            <div className="flex items-center gap-2 text-xs font-mono-tech text-white bg-white/5 border border-white/10 px-3 py-2 rounded-xs">
              <ShieldCheck className="w-4 h-4 text-[#FFD700]" />
              <span>IS: 1786 : 2008 BIS LICENSED</span>
            </div>
          </div>

          {/* Col 2: Products (lg:col-span-2) */}
          <div className="lg:col-span-2">
            <h4 className="font-display font-black text-lg text-white uppercase tracking-wider mb-5">
              {t.footer.productsTitle}
            </h4>
            <ul className="space-y-3 text-sm font-medium">
              <li>
                <button
                  onClick={() => onNavigate('products')}
                  className="hover:text-[#FFD700] transition-colors cursor-pointer text-left"
                >
                  Fe 550D High Ductility
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('products')}
                  className="hover:text-[#FFD700] transition-colors cursor-pointer text-left"
                >
                  Fe 600 Heavy Duty
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('products')}
                  className="hover:text-[#FFD700] transition-colors cursor-pointer text-left"
                >
                  Balwant CRS (Corrosion)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('calculator')}
                  className="hover:text-[#FFD700] transition-colors cursor-pointer text-left text-amber-400 font-bold"
                >
                  TMT Steel Calculator
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('technical')}
                  className="hover:text-[#FFD700] transition-colors cursor-pointer text-left"
                >
                  Section Weight Chart
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Quality & Technology (lg:col-span-2) */}
          <div className="lg:col-span-2">
            <h4 className="font-display font-black text-lg text-white uppercase tracking-wider mb-5">
              {t.footer.engineeringTitle}
            </h4>
            <ul className="space-y-3 text-sm font-medium">
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-[#FFD700] transition-colors cursor-pointer text-left"
                >
                  About Balwant TMT
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('chairman')}
                  className="hover:text-[#FFD700] transition-colors cursor-pointer text-left text-amber-400 font-bold"
                >
                  Chairman's Desk
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('process')}
                  className="hover:text-[#FFD700] transition-colors cursor-pointer text-left"
                >
                  Thermex QST Process
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('quality')}
                  className="hover:text-[#FFD700] transition-colors cursor-pointer text-left"
                >
                  NABL Quality Testing
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('projects')}
                  className="hover:text-[#FFD700] transition-colors cursor-pointer text-left"
                >
                  Landmark Projects
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Network & Contact (lg:col-span-4) */}
          <div className="lg:col-span-4">
            <h4 className="font-display font-black text-lg text-white uppercase tracking-wider mb-4">
              {t.footer.connectTitle}
            </h4>

            <div className="space-y-4 text-xs">
              {/* Corporate Office */}
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#FFD700] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-[#FFD700] font-mono-tech font-bold uppercase block text-[11px]">
                    Corporate Office:
                  </span>
                  <span className="text-zinc-300">
                    4/5 Greater Noida Sector 1, Delhi NCR (201301)
                  </span>
                </div>
              </div>

              {/* Eastern Zone Office */}
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#FFD700] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-[#FFD700] font-mono-tech font-bold uppercase block text-[11px]">
                    Eastern Zone Office:
                  </span>
                  <span className="text-zinc-300">
                    Plot No 1 Rajamahal Green Town, Kurud Road, Bhilai, Dist- Durg (C.G) 490024
                  </span>
                </div>
              </div>

              {/* Central Zone Office */}
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#FFD700] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-[#FFD700] font-mono-tech font-bold uppercase block text-[11px]">
                    Central Zone Office:
                  </span>
                  <span className="text-zinc-300">
                    Gomti Nagar, 226010, Lucknow, Uttar Pradesh
                  </span>
                </div>
              </div>

              {/* Phone Numbers */}
              <div className="flex items-start gap-2.5 pt-1 border-t border-white/10">
                <Phone className="w-4 h-4 text-[#FFD700] flex-shrink-0 mt-0.5" />
                <div className="flex flex-wrap gap-x-3 gap-y-1 font-mono-tech">
                  <a href="tel:+918817303963" className="text-white hover:text-[#FFD700] font-bold">
                    +91 8817303963
                  </a>
                  <a href="tel:+918839838970" className="text-white hover:text-[#FFD700] font-bold">
                    +91 8839838970
                  </a>
                  <a href="tel:+919202405958" className="text-white hover:text-[#FFD700] font-bold">
                    +91 9202405958
                  </a>
                  <a href="tel:+919301541867" className="text-white hover:text-[#FFD700] font-bold">
                    +91 9301541867
                  </a>
                  <a href="tel:+916260928005" className="text-white hover:text-[#FFD700] font-bold">
                    +91 6260928005
                  </a>
                </div>
              </div>

              {/* Email Addresses */}
              <div className="flex items-start gap-2.5 pt-1 border-t border-white/10">
                <Mail className="w-4 h-4 text-[#FFD700] flex-shrink-0 mt-0.5" />
                <div className="flex flex-col gap-1 font-mono-tech">
                  <a href="mailto:contact@balwanttmt.com" className="text-zinc-300 hover:text-[#FFD700]">
                    contact@balwanttmt.com
                  </a>
                  <a href="mailto:contact@balwantsteelandpower.in" className="text-zinc-300 hover:text-[#FFD700]">
                    contact@balwantsteelandpower.in
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-2.5">
              <button
                onClick={() => onNavigate('dealers')}
                className="bg-white/10 hover:bg-white/20 text-white text-xs font-mono-tech uppercase px-4 py-2 rounded-xs transition-colors border border-white/10 cursor-pointer"
              >
                {t.footer.locateDealer}
              </button>
              <button
                onClick={() => onNavigate('contact')}
                className="bg-[#FFD700] hover:bg-[#FFE04D] text-black text-xs font-mono-tech font-bold uppercase px-4 py-2 rounded-xs transition-colors cursor-pointer"
              >
                {t.footer.getQuote}
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Legal Line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 font-mono-tech gap-4">
          <div>
            © {new Date().getFullYear()} BALWANT TMT. ALL RIGHTS RESERVED.
          </div>
          <div className="flex items-center gap-6">
            <span className="text-[#FFD700] font-bold">“सरिया नहीं, फौलाद है ये”</span>
            <span className="text-zinc-700">|</span>
            <span>BIS IS:1786 COMPLIANT</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

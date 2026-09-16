import React, { useState, useEffect, useCallback } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  ShieldCheck,
  Flame,
  Building2,
  Home,
  Layers,
  Film,
  X,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

import { BalwantLogo } from './BalwantLogo';

// Import certified Balwant branded steel assets
import millRollingImg from '../assets/images/balwant_mill_slider_1787645597876.jpg';
import rebarBundleImg from '../assets/images/balwant_fe550d_slider_1787645576016.jpg';
import infraImg from '../assets/images/balwant_infra_slider_1787645636350.jpg';
import homeBuilderImg from '../assets/images/tmt_rustfree_bars_final.jpg';
import ribbedDetailImg from '../assets/images/tmt_rustfree_macro_final.jpg';
import yardBundlesImg from '../assets/images/balwant_bundles_slider_1787645616843.jpg';
import embossedBarsImg from '../assets/images/balwant_embossed_bars_1787551863034.jpg';

interface HeroMediaSliderProps {
  onOpenEnquiry: (grade?: string) => void;
  onOpenDealer: () => void;
}

export interface SlideItem {
  id: string;
  type: 'image' | 'video';
  mediaUrl: string;
  posterUrl: string;
  badge: {
    en: string;
    hi: string;
    icon: React.ReactNode;
    color: string;
  };
  title: {
    en: string;
    hi: string;
  };
  headlineAccent: {
    en: string;
    hi: string;
  };
  description: {
    en: string;
    hi: string;
  };
  metrics: {
    label: { en: string; hi: string };
    value: string;
  }[];
  primaryCta: {
    en: string;
    hi: string;
    action: 'enquiry' | 'dealer' | 'technical' | 'products';
  };
  secondaryCta: {
    en: string;
    hi: string;
    action: 'enquiry' | 'dealer' | 'technical' | 'products';
  };
  gradeTag: string;
}

export const HeroMediaSlider: React.FC<HeroMediaSliderProps> = ({
  onOpenEnquiry,
  onOpenDealer,
}) => {
  const { language } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const SLIDE_DURATION = 6000; // 6 seconds per slide

  const slides: SlideItem[] = [
    {
      id: 'slide-fe550d-rebar',
      type: 'image',
      mediaUrl: rebarBundleImg,
      posterUrl: rebarBundleImg,
      badge: {
        en: 'FLAGSHIP PRIMARY STEEL • IS: 1786 : 2008 BIS LICENSED',
        hi: 'प्राइमरी स्टील • IS: 1786 BIS हॉलमार्क सर्टिफाइड',
        icon: <ShieldCheck className="w-3.5 h-3.5 text-[#0080CC]" />,
        color: '#0080CC',
      },
      title: {
        en: 'BALWANT TMT',
        hi: 'बलवंत TMT',
      },
      headlineAccent: {
        en: 'FE 550D DUCTILITY REBAR',
        hi: 'Fe 550D उच्च लचीला सरिया',
      },
      description: {
        en: 'Engineered with deep CNC-cut transverse ribs (AR > 0.075) for 250% stronger mechanical cement bonding and high seismic energy dissipation.',
        hi: 'गहरे CNC कट रिब्स कंक्रीट के साथ अटूट पकड़ बनाते हैं और भूकंप (ज़ोन IV व V) के दौरान इमारतों को ढहने से बचाते हैं।',
      },
      metrics: [
        { label: { en: 'Yield Strength', hi: 'उपज शक्ति' }, value: 'Min 550 N/mm²' },
        { label: { en: 'Elongation', hi: 'इलास्टिक खिंचाव' }, value: 'Min 16.0%' },
        { label: { en: 'Carbon Equiv.', hi: 'वेल्डेबिलिटी' }, value: '< 0.42%' },
      ],
      primaryCta: {
        en: 'Get Fe 550D Quote',
        hi: 'Fe 550D कोटेशन लें',
        action: 'enquiry',
      },
      secondaryCta: {
        en: 'Calculate Tonnage',
        hi: 'सरिया कैलकुलेटर',
        action: 'technical',
      },
      gradeTag: 'Fe 550D Flagship',
    },
    {
      id: 'slide-qst-process',
      type: 'image',
      mediaUrl: millRollingImg,
      posterUrl: millRollingImg,
      badge: {
        en: 'AUTOMATED ROLLING MILL • 1150°C THERMEX QST',
        hi: 'स्वचालित रोलिंग मिल • 1150°C जर्मन थर्मेक्स QST',
        icon: <Flame className="w-3.5 h-3.5 text-[#FFD700]" />,
        color: '#FFD700',
      },
      title: {
        en: 'GERMAN THERMEX QST',
        hi: 'जर्मन थर्मेक्स QST तकनीक',
      },
      headlineAccent: {
        en: 'QUENCHING & SELF-TEMPERING',
        hi: 'कठोर रिंग व लचीला कोर',
      },
      description: {
        en: 'Computerized water-quenched cooling lines forge an ultra-tough tempered Martensite outer rim with a ductile Ferrite-Pearlite shock-absorbing core.',
        hi: 'कंप्यूटराइज्ड वॉटर क्वेंचिंग सिस्टम सरिया को बाहर से मजबूत मार्टेंसाइट और अंदर से लचीला फेराइट-पर्लाइट कोर प्रदान करता है।',
      },
      metrics: [
        { label: { en: 'Billet Temp', hi: 'बिलेट तापमान' }, value: '1150°C' },
        { label: { en: 'UTS / YS Ratio', hi: 'तन्यता अनुपात' }, value: '> 1.20' },
        { label: { en: 'Fire Safety', hi: 'अग्नि सुरक्षा' }, value: '600°C' },
      ],
      primaryCta: {
        en: 'Request Mill Pricing',
        hi: 'फैक्ट्री रेट जानें',
        action: 'enquiry',
      },
      secondaryCta: {
        en: 'Explore QST Tech',
        hi: 'QST तकनीक देखें',
        action: 'technical',
      },
      gradeTag: '1150°C Thermex QST',
    },
    {
      id: 'slide-embossed-branding',
      type: 'image',
      mediaUrl: embossedBarsImg,
      posterUrl: embossedBarsImg,
      badge: {
        en: "GENUINE PRIMARY STEEL • 'BALWANT TMT' BRAND MARK",
        hi: "असली ब्रांड पहचान • हर मीटर पर 'BALWANT TMT' मार्क",
        icon: <ShieldCheck className="w-3.5 h-3.5 text-[#FFD700]" />,
        color: '#FFD700',
      },
      title: {
        en: 'GENUINE EMBOSSED',
        hi: '100% असली प्राइमरी स्टील',
      },
      headlineAccent: {
        en: '“सरिया नहीं, फौलाद है ये”',
        hi: '“सरिया नहीं, फौलाद है ये”',
      },
      description: {
        en: 'Every single meter of Balwant Super TMT bar is hot-embossed with our registered trademark, ensuring guaranteed purity, zero scrap remelting, and 100% authentic BIS certification.',
        hi: 'बलवंत सुपर TMT के प्रत्येक मीटर पर हमारी आधिकारिक मोहर अंकित होती है, जो 100% शुद्ध प्राइमरी बिलेट और BIS प्रमाणन की गारंटी देती है।',
      },
      metrics: [
        { label: { en: 'Hallmark', hi: 'हॉलमार्क' }, value: 'IS:1786 BIS' },
        { label: { en: 'Primary Steel', hi: 'प्राइमरी स्टील' }, value: '100% Virgin' },
        { label: { en: 'Quality Assurance', hi: 'गुणवत्ता' }, value: 'Zero Scrap' },
      ],
      primaryCta: {
        en: 'Verify Authenticity',
        hi: 'असली सरिया पहचानें',
        action: 'technical',
      },
      secondaryCta: {
        en: 'Book Direct Factory',
        hi: 'फैक्ट्री बुकिंग',
        action: 'enquiry',
      },
      gradeTag: 'Official Hallmark',
    },
    {
      id: 'slide-yard-dispatch',
      type: 'image',
      mediaUrl: yardBundlesImg,
      posterUrl: yardBundlesImg,
      badge: {
        en: 'READY STOCK DISPATCH • NABL CERTIFIED STEEL BUNDLES',
        hi: 'तत्काल स्टॉक आपूर्ति • NABL प्रमाणित सरिया बंडल',
        icon: <Building2 className="w-3.5 h-3.5 text-[#0080CC]" />,
        color: '#0080CC',
      },
      title: {
        en: 'DISPATCH READY YARDS',
        hi: 'विशाल स्टॉकयार्ड',
      },
      headlineAccent: {
        en: 'DISTRIBUTOR & PROJECT SUPPLY',
        hi: 'डीलर एवं प्रोजेक्ट सप्लाई',
      },
      description: {
        en: 'State-of-the-art storage and loading infrastructure ensures same-day bulk dispatch with manufacturer test certificates (MTC) for dealers and mega infrastructure projects.',
        hi: 'आधुनिक भंडारण व लोडिंग सुविधा के साथ सभी आकारों में उसी दिन आपूर्ति और आधिकारिक टेस्ट सर्टिफिकेट (MTC) उपलब्ध।',
      },
      metrics: [
        { label: { en: 'Daily Capacity', hi: 'दैनिक क्षमता' }, value: '500+ MT' },
        { label: { en: 'Test Certificate', hi: 'टेस्ट सर्टिफिकेट' }, value: '100% MTC' },
        { label: { en: 'Supply Network', hi: 'सप्लाई नेटवर्क' }, value: 'Pan-State' },
      ],
      primaryCta: {
        en: 'Become a Dealer',
        hi: 'डीलरशिप हेतु संपर्क करें',
        action: 'dealer',
      },
      secondaryCta: {
        en: 'Request Bulk Quotation',
        hi: 'बल्क कोटेशन लें',
        action: 'enquiry',
      },
      gradeTag: 'Stockyard Bundles',
    },
    {
      id: 'slide-infrastructure',
      type: 'image',
      mediaUrl: infraImg,
      posterUrl: infraImg,
      badge: {
        en: 'MEGA INFRASTRUCTURE • HIGHWAYS, METROS & BRIDGES',
        hi: 'राष्ट्रीय इंफ्रास्ट्रक्चर • एक्सप्रेसवे, मेट्रो व पुल',
        icon: <Building2 className="w-3.5 h-3.5 text-[#FFD700]" />,
        color: '#FFD700',
      },
      title: {
        en: 'STRENGTH POWERING',
        hi: 'राष्ट्र निर्माण की फौलादी नींव',
      },
      headlineAccent: {
        en: "INDIA'S MEGACITIES",
        hi: 'विश्वसनीय और दीर्घकालिक',
      },
      description: {
        en: 'Over 18,200+ Metric Tonnes of Balwant structural rebar deployed across critical elevated metro piers, deep river pile cages, and high-rise developments.',
        hi: '18,200+ मीट्रिक टन से अधिक बलवंत सरिया भारत के प्रमुख मेट्रो पियर्स, पुलों और बहुमंजिला इमारतों में मजबूती से तैनात है।',
      },
      metrics: [
        { label: { en: 'Supplied Volume', hi: 'आपूर्ति मात्रा' }, value: '18,200+ MT' },
        { label: { en: 'Seismic Zone', hi: 'भूकंप ज़ोन' }, value: 'Zone IV & V' },
        { label: { en: 'Quality Lab', hi: 'गुणवत्ता लैब' }, value: 'NABL Certified' },
      ],
      primaryCta: {
        en: 'Bulk Project Inquiries',
        hi: 'प्रोजेक्ट बल्क ऑर्डर',
        action: 'enquiry',
      },
      secondaryCta: {
        en: 'View Landmark Sites',
        hi: 'प्रमुख प्रोजेक्ट देखें',
        action: 'products',
      },
      gradeTag: 'Infra Bridges',
    },
    {
      id: 'slide-dream-homes',
      type: 'image',
      mediaUrl: homeBuilderImg,
      posterUrl: homeBuilderImg,
      badge: {
        en: 'RESIDENTIAL REINFORCEMENT • “सरिया नहीं, फौलाद है ये”',
        hi: 'मजबूत आशियाना • “सरिया नहीं, फौलाद है ये”',
        icon: <Home className="w-3.5 h-3.5 text-[#25D366]" />,
        color: '#25D366',
      },
      title: {
        en: 'PROTECTING 25,000+',
        hi: '25,000+ भारतीय घरों का',
      },
      headlineAccent: {
        en: 'INDIAN DREAM HOMES',
        hi: 'अटूट सुरक्षा कवच',
      },
      description: {
        en: 'Flawless 180° cold bendability without micro-fissures ensures effortless on-site fabrication for column footings, ring stirrups, and heavy roof slabs.',
        hi: 'बिना किसी दरार के 180° आसानी से मुड़ने वाला सरिया, कॉलम, रिंग टाई और छत की ढलाई में बेमिसाल मजबूती देता है।',
      },
      metrics: [
        { label: { en: 'Cold Bend Angle', hi: 'कोल्ड बेंड' }, value: '180° Zero Crack' },
        { label: { en: 'Corrosion Shield', hi: 'जंग प्रतिरोध' }, value: 'CRS Grade' },
        { label: { en: 'Homes Built', hi: 'निर्मित घर' }, value: '25,000+' },
      ],
      primaryCta: {
        en: 'Locate Nearest Dealer',
        hi: 'नजदीकी डीलर खोजें',
        action: 'dealer',
      },
      secondaryCta: {
        en: 'Order Direct for Home',
        hi: 'घर के लिए ऑर्डर करें',
        action: 'enquiry',
      },
      gradeTag: 'Dream Homes',
    },
    {
      id: 'slide-ribbed-precision',
      type: 'image',
      mediaUrl: ribbedDetailImg,
      posterUrl: ribbedDetailImg,
      badge: {
        en: 'METALLURGICAL EXCELLENCE • 8MM TO 32MM DIAMETERS',
        hi: 'सटीक डाई रोलिंग • 8mm से 32mm सभी साइज उपलब्ध',
        icon: <Layers className="w-3.5 h-3.5 text-[#FFD700]" />,
        color: '#FFD700',
      },
      title: {
        en: 'PRECISION RIBBED',
        hi: 'सटीक रिब्ड तकनीक',
      },
      headlineAccent: {
        en: 'BOND STRENGTH EXCELLENCE',
        hi: 'कंक्रीट के साथ अटूट बंधन',
      },
      description: {
        en: 'Automated CNC notch grinding on rolling stands produces sharp, consistent rib angles that exceed standard IS requirements for bond stress by 40%.',
        hi: 'अत्याधुनिक CNC रोलिंग स्टैंड्स से निर्मित रिब्स कंक्रीट की पकड़ को 40% अधिक मजबूत बनाकर इमारत को दीर्घायु बनाते हैं।',
      },
      metrics: [
        { label: { en: 'Size Range', hi: 'साइज रेंज' }, value: '8mm - 32mm' },
        { label: { en: 'Rib Area (AR)', hi: 'रिब एरिया' }, value: '> 0.075' },
        { label: { en: 'Tolerance', hi: 'वजन सहिष्णुता' }, value: 'Strict IS 1786' },
      ],
      primaryCta: {
        en: 'Check Live Steel Rates',
        hi: 'आज का सरिया रेट देखें',
        action: 'enquiry',
      },
      secondaryCta: {
        en: 'View Size Chart',
        hi: 'साइज व वजन चार्ट',
        action: 'technical',
      },
      gradeTag: '8mm - 32mm Sizes',
    },
  ];

  const currentSlide = slides[currentIndex];

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  }, [slides.length]);

  // Preload all slide images on mount
  useEffect(() => {
    slides.forEach((slide) => {
      if (slide.mediaUrl) {
        const img = new Image();
        img.src = slide.mediaUrl;
      }
    });
  }, []);

  // Handle Autoplay Timer
  useEffect(() => {
    if (!isPlaying) return;

    const timer = setInterval(() => {
      nextSlide();
    }, SLIDE_DURATION);

    return () => clearInterval(timer);
  }, [isPlaying, nextSlide, currentIndex]);

  // Touch Swipe Handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const minSwipeDistance = 50;
    if (distance > minSwipeDistance) {
      nextSlide();
    } else if (distance < -minSwipeDistance) {
      prevSlide();
    }
    setTouchStart(null);
    setTouchEnd(null);
  };

  return (
    <section
      id="hero-media-slider"
      className="relative w-full bg-[#FFFDF0] border-b border-amber-200/80 overflow-hidden select-none"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Slider Viewport Container */}
      <div className="relative w-full min-h-[400px] sm:min-h-[480px] md:min-h-[540px] lg:min-h-[580px] max-h-[660px] flex items-center justify-center overflow-hidden bg-zinc-900">
        {/* Active Media Background Slide with Instant Transition */}
        <div className="absolute inset-0 w-full h-full">
          <img
            key={currentSlide.id}
            src={currentSlide.mediaUrl}
            alt={currentSlide.title.en}
            className="w-full h-full object-cover object-center filter brightness-[1.02] contrast-[1.05] transition-opacity duration-300"
            loading="eager"
            decoding="async"
            referrerPolicy="no-referrer"
            onError={(e) => {
              const target = e.currentTarget;
              if (target.src !== rebarBundleImg) {
                target.src = rebarBundleImg;
              }
            }}
          />

          {/* Balwant TMT Official Brand Watermark on All Slides */}
          <div className="absolute top-4 right-4 z-20 hidden sm:flex items-center gap-3 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-xs border border-amber-300 shadow-md">
            <div className="h-9 w-auto flex items-center justify-center flex-shrink-0">
              <BalwantLogo variant="compact" className="h-full w-auto" />
            </div>
            <div className="text-left">
              <span className="font-display font-black text-xs text-zinc-900 uppercase tracking-wider block leading-tight">
                BALWANT SUPER TMT
              </span>
              <span className="font-mono-tech text-[10px] text-amber-800 font-bold block leading-tight">
                सरिया नही, फौलाद है ये
              </span>
            </div>
          </div>

          {/* Subtle bottom edge gradient */}
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/60 via-black/20 to-transparent pointer-events-none" />
        </div>

        {/* Clean, Non-Intrusive Floating Caption & Control Bar at bottom */}
        <div className="absolute bottom-5 left-4 sm:left-6 right-4 sm:right-6 z-20 flex flex-wrap items-center justify-between gap-3 pointer-events-none">
          {/* Floating Slide Tag & Title Badge */}
          <div className="inline-flex items-center gap-3 bg-white/95 backdrop-blur-md border border-amber-300 px-3.5 sm:px-4 py-2 rounded-xs shadow-md pointer-events-auto max-w-[85vw] sm:max-w-none">
            <div className="w-2.5 h-2.5 rounded-full bg-[#FFD700] animate-pulse flex-shrink-0" />
            <div className="flex flex-col text-left truncate">
              <span className="font-mono-tech text-[10px] text-amber-800 font-bold uppercase tracking-wider">
                0{currentIndex + 1} / 0{slides.length} • {currentSlide.gradeTag}
              </span>
              <span className="font-display font-black text-xs sm:text-sm text-zinc-900 uppercase tracking-tight truncate">
                {language === 'hi' ? currentSlide.title.hi : currentSlide.title.en} —{' '}
                <span className="text-[#D9A700]">
                  {language === 'hi' ? currentSlide.headlineAccent.hi : currentSlide.headlineAccent.en}
                </span>
              </span>
            </div>
          </div>

          {/* Quick Floating Controls (Pause / Play) */}
          <div className="flex items-center gap-2 pointer-events-auto">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="bg-white/95 hover:bg-amber-50 text-zinc-800 border border-amber-300 px-3 py-1.5 rounded-xs shadow-sm transition-colors cursor-pointer flex items-center gap-1.5 text-xs font-mono-tech font-bold"
              title={isPlaying ? 'Pause Auto Slider' : 'Play Auto Slider'}
            >
              {isPlaying ? (
                <>
                  <Pause className="w-3.5 h-3.5 text-amber-600" />
                  <span className="hidden sm:inline">Pause</span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="hidden sm:inline">Play</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Global Prev / Next Arrows */}
        <button
          id="hero-slider-prev-btn"
          onClick={prevSlide}
          className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-30 w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-white/90 hover:bg-[#FFD700] text-zinc-900 border border-amber-300 flex items-center justify-center transition-colors backdrop-blur-md shadow-md cursor-pointer"
          aria-label="Previous Media Slide"
        >
          <ChevronLeft className="w-5 h-5 text-zinc-900" />
        </button>

        <button
          id="hero-slider-next-btn"
          onClick={nextSlide}
          className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-30 w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-white/90 hover:bg-[#FFD700] text-zinc-900 border border-amber-300 flex items-center justify-center transition-colors backdrop-blur-md shadow-md cursor-pointer"
          aria-label="Next Media Slide"
        >
          <ChevronRight className="w-5 h-5 text-zinc-900" />
        </button>
      </div>

      {/* Bottom Thumbnail & Progress Strip */}
      <div className="relative z-30 bg-white border-t border-zinc-200 px-4 sm:px-6 lg:px-8 py-3">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
          {/* Slide Progress Bars & Thumbnails across all 7 slides */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2 w-full md:max-w-4xl">
            {slides.map((slide, idx) => {
              const isActive = idx === currentIndex;
              return (
                <button
                  key={slide.id}
                  id={`slider-thumb-btn-${idx}`}
                  onClick={() => {
                    setCurrentIndex(idx);
                  }}
                  className={`text-left p-2 rounded-xs transition-colors relative overflow-hidden group cursor-pointer ${
                    isActive
                      ? 'bg-amber-50 border-2 border-[#FFD700]'
                      : 'bg-zinc-50 border border-zinc-200 hover:bg-zinc-100'
                  }`}
                >
                  {/* Progress Line */}
                  {isActive && isPlaying && (
                    <div
                      key={`progress-${idx}`}
                      className="absolute inset-0 bg-[#FFD700]/30 animate-slide-progress pointer-events-none"
                    />
                  )}

                  <div className="relative z-10 flex items-center justify-between">
                    <span
                      className={`text-[10px] sm:text-xs font-mono-tech font-bold uppercase truncate ${
                        isActive ? 'text-amber-900 font-black' : 'text-zinc-600 group-hover:text-black'
                      }`}
                    >
                      0{idx + 1}. {slide.gradeTag}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Micro Info */}
          <div className="hidden md:flex items-center gap-4 text-xs font-mono-tech text-zinc-600">
            <button
              onClick={() => setIsVideoModalOpen(true)}
              className="flex items-center gap-1.5 text-amber-800 hover:text-black bg-amber-50 hover:bg-amber-100 px-3 py-1 rounded-xs border border-amber-300 transition-colors cursor-pointer font-bold"
            >
              <Film className="w-3.5 h-3.5" />
              <span>{language === 'hi' ? 'TMT मेकिंग प्रोसेस' : 'Manufacturing Process'}</span>
            </button>
            <span className="text-zinc-300">|</span>
            <span className="flex items-center gap-1 text-emerald-700 font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              {language === 'hi' ? 'लाइव विजुअल्स' : 'Live TMT Visuals'}
            </span>
          </div>
        </div>
      </div>

      {/* TMT Bar Making Video Player Modal */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-md">
          <div className="bg-white border-2 border-amber-400 rounded-xs max-w-4xl w-full p-4 sm:p-6 shadow-2xl relative overflow-hidden text-zinc-900">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-zinc-200 pb-4 mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xs bg-amber-100 border border-amber-300 flex items-center justify-center text-amber-800">
                  <Film className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-mono-tech text-[10px] sm:text-xs text-amber-800 uppercase tracking-widest block font-bold">
                    Balwant Continuous Mill • 1150°C Thermex QST
                  </span>
                  <h3 className="font-display font-black text-lg sm:text-2xl text-zinc-900 uppercase tracking-tight">
                    TMT Bar Manufacturing Reel
                  </h3>
                </div>
              </div>

              <button
                onClick={() => setIsVideoModalOpen(false)}
                className="p-2 rounded-xs bg-zinc-100 hover:bg-zinc-200 text-zinc-600 hover:text-black transition-colors cursor-pointer"
                title="Close Video"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Main Video Viewport */}
            <div className="relative aspect-video rounded-xs overflow-hidden bg-black border border-amber-300 mb-4 shadow-xl">
              <video
                src="https://assets.mixkit.co/videos/preview/mixkit-molten-steel-being-poured-into-a-mold-41793-large.mp4"
                poster={millRollingImg}
                autoPlay
                loop
                controls
                playsInline
                className="w-full h-full object-cover filter brightness-100 contrast-[1.08]"
              />
              
              {/* Official On-Video Balwant Logo Watermark */}
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3.5 py-2 rounded-xs border border-amber-300 flex items-center gap-3 pointer-events-none shadow-lg">
                <div className="w-9">
                  <BalwantLogo variant="compact" className="w-full h-auto" />
                </div>
                <div>
                  <span className="font-display font-black text-xs text-zinc-900 uppercase tracking-wider block">
                    BALWANT TMT
                  </span>
                  <span className="font-mono-tech text-[10px] text-amber-800 block font-bold">
                    FE 550D HOT ROLLING &amp; QST AUTOMATION
                  </span>
                </div>
              </div>

              {/* Live Process Tag */}
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-xs border border-zinc-300 hidden sm:flex items-center gap-1.5 pointer-events-none">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="font-mono-tech text-[10px] text-zinc-800 font-bold uppercase">
                  1150°C THERMEX QST
                </span>
              </div>
            </div>

            {/* Step Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 text-left">
              <div className="p-2.5 bg-amber-50/60 border border-amber-200 rounded-xs">
                <span className="text-[10px] font-mono-tech text-amber-800 font-bold block">STEP 01</span>
                <span className="text-xs font-bold text-zinc-900 block">1150°C Furnace</span>
                <span className="text-[10px] text-zinc-600">Primary Virgin Billet Reheating</span>
              </div>
              <div className="p-2.5 bg-amber-50/60 border border-amber-200 rounded-xs">
                <span className="text-[10px] font-mono-tech text-amber-800 font-bold block">STEP 02</span>
                <span className="text-xs font-bold text-zinc-900 block">Tandem Rolling</span>
                <span className="text-[10px] text-zinc-600">Multi-stand cross reduction</span>
              </div>
              <div className="p-2.5 bg-amber-50/60 border border-amber-200 rounded-xs">
                <span className="text-[10px] font-mono-tech text-amber-800 font-bold block">STEP 03</span>
                <span className="text-xs font-bold text-zinc-900 block">Thermex QST</span>
                <span className="text-[10px] text-zinc-600">High-pressure water quenching</span>
              </div>
              <div className="p-2.5 bg-amber-50/60 border border-amber-200 rounded-xs">
                <span className="text-[10px] font-mono-tech text-amber-800 font-bold block">STEP 04</span>
                <span className="text-xs font-bold text-zinc-900 block">CNC Rib Cutting</span>
                <span className="text-[10px] text-zinc-600">AR &gt; 0.075 Grip Extrusion</span>
              </div>
            </div>

            {/* Modal Footer CTAs */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-4 mt-4 border-t border-zinc-200">
              <span className="text-xs font-mono-tech text-zinc-600">
                IS: 1786 : 2008 &amp; ISO 9001 Certified Factory Mill
              </span>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => {
                    setIsVideoModalOpen(false);
                    onOpenEnquiry('Fe 550D Factory Direct');
                  }}
                  className="bg-[#FFD700] hover:bg-[#F5C700] text-black font-display font-black text-xs uppercase px-5 py-2.5 rounded-xs transition-colors cursor-pointer border border-amber-300 shadow-xs"
                >
                  Request Factory Pricing
                </button>
                <button
                  onClick={() => setIsVideoModalOpen(false)}
                  className="bg-zinc-100 hover:bg-zinc-200 text-zinc-900 font-display font-bold text-xs uppercase px-4 py-2.5 rounded-xs transition-colors cursor-pointer border border-zinc-300"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
export default HeroMediaSlider;


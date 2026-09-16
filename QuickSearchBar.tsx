import React, { useState, useEffect, useRef } from 'react';
import {
  Search,
  X,
  Package,
  FileText,
  MapPin,
  Building2,
  Cpu,
  ArrowRight,
  ShieldCheck,
  ChevronRight,
  Sparkles,
  Quote
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { ProductGrade, BALWANT_PRODUCTS, KNOWLEDGE_ARTICLES } from '../data/tmtData';

export interface SearchResultItem {
  id: string;
  title: string;
  category: 'product' | 'article' | 'dealer' | 'page' | 'technical';
  subtitle: string;
  badge?: string;
  pageId: string;
  productGrade?: string;
  articleId?: string;
  cityQuery?: string;
}

const SEARCH_DATABASE: SearchResultItem[] = [
  // Products
  {
    id: 'prod-550d',
    title: 'Balwant TMT Fe 550D',
    category: 'product',
    subtitle: 'Flagship high ductility structural rebar (Min 550 N/mm², 16% Elongation)',
    badge: 'Flagship Grade',
    pageId: 'products',
    productGrade: 'Fe 550D',
  },
  {
    id: 'prod-600',
    title: 'Balwant Fe 600 Heavy Infra',
    category: 'product',
    subtitle: 'Ultra high-yield reinforcement steel for expressways & heavy load piers',
    badge: 'Heavy Infrastructure',
    pageId: 'products',
    productGrade: 'Fe 600',
  },
  {
    id: 'prod-crs',
    title: 'Balwant Fe 550D CRS (Corrosion Resistant)',
    category: 'product',
    subtitle: 'Alloyed with Copper, Chrome & Phosphorus for coastal & waterlogged soils',
    badge: 'Anti-Corrosion',
    pageId: 'products',
    productGrade: 'Fe 550D CRS',
  },
  {
    id: 'prod-500d',
    title: 'Balwant Fe 500D Seismic Grade',
    category: 'product',
    subtitle: 'High energy absorption reinforcement for Zone IV & V earthquake zones',
    badge: 'Seismic Safety',
    pageId: 'products',
    productGrade: 'Fe 500D',
  },
  {
    id: 'prod-stirrups',
    title: 'Balwant Factory Ready Stirrups (Rings)',
    category: 'product',
    subtitle: 'Precision CNC-bent column & beam stirrups (8mm & 10mm) with exact 135° hooks',
    badge: 'Zero Site Wastage',
    pageId: 'products',
    productGrade: 'Balwant Pre-formed Stirrups',
  },
  {
    id: 'prod-wire-rods',
    title: 'Balwant High Yield Wire Rods',
    category: 'product',
    subtitle: 'Low-carbon drawing grade wire coils (5.5mm - 12mm) for binding & mesh',
    badge: 'Industrial Coils',
    pageId: 'products',
    productGrade: 'High Yield Wire Rods',
  },
  // Dedicated Estimator Calculator Tool
  {
    id: 'tech-calc',
    title: 'TMT Steel Requirement & Cost Estimator Tool',
    category: 'technical',
    subtitle: 'Calculate exact metric tonnes, bundle breakdown & budget for slabs, beams, columns & footings',
    badge: 'Estimator Tool',
    pageId: 'calculator',
  },
  // Chairman's Desk Page
  {
    id: 'page-chairman',
    title: "From the Chairman's Desk (चेयरमैन का संदेश)",
    category: 'page',
    subtitle: 'Shri Balwant Singh’s 30-year pledge of zero compromise on virgin steel and building safety',
    badge: 'Leadership Desk',
    pageId: 'chairman',
  },
  // Technical articles & guides
  {
    id: 'art-1',
    title: 'Fe 500 vs Fe 550D: Why "D" Saves Lives in Earthquakes',
    category: 'article',
    subtitle: 'Structural engineering guide on ductile energy dissipation and seismic safety',
    badge: 'Civil Engineering',
    pageId: 'technical',
    articleId: 'art-1',
  },
  {
    id: 'art-2',
    title: 'The Science of Rib Geometry: How AR Dictates Concrete Grip',
    category: 'article',
    subtitle: 'High AR ratio rib interlock to prevent concrete slippage and cracking',
    badge: 'Metallurgy Guide',
    pageId: 'technical',
    articleId: 'art-2',
  },
  {
    id: 'art-3',
    title: 'Site Checklist: 5 Quick Tests to Verify Genuine Balwant TMT',
    category: 'article',
    subtitle: 'BIS hallmark inspection, 180° cold bend test, and NABL MTC verification',
    badge: 'Builder Guide',
    pageId: 'quality',
    articleId: 'art-3',
  },
  {
    id: 'tech-weight-chart',
    title: 'Section Weight & Dimension Chart (8mm to 32mm)',
    category: 'technical',
    subtitle: 'Standard IS: 1786 weight per meter, bundle count, and tolerance limits',
    badge: 'Standard Chart',
    pageId: 'technical',
  },
  {
    id: 'tech-process',
    title: 'German Thermex® QST Process & Quenching Line',
    category: 'technical',
    subtitle: '5-stage computerized manufacturing: Continuous billet casting to automated cooling',
    badge: 'Process',
    pageId: 'process',
  },
  {
    id: 'tech-quality',
    title: 'NABL Accredited Quality Laboratory & MTC Testing',
    category: 'technical',
    subtitle: 'Spectrometer chemical analysis, Universal Testing Machine (UTM) stress tests',
    badge: 'Quality Lab',
    pageId: 'quality',
  },
  // Dealer Locations
  {
    id: 'dlr-kanpur',
    title: 'Authorized Dealers in Kanpur (Super Stockist Hub)',
    category: 'dealer',
    subtitle: 'Fazalganj Industrial Area, Transport Nagar, Collectorganj • Same day 50 MT dispatch',
    badge: 'Kanpur Central',
    pageId: 'dealers',
    cityQuery: 'Kanpur',
  },
  {
    id: 'dlr-lucknow',
    title: 'Authorized Dealers in Lucknow',
    category: 'dealer',
    subtitle: 'Transport Nagar, Gomti Nagar Extension, Talkatora Road • Ready Fe 550D inventory',
    badge: 'Lucknow Region',
    pageId: 'dealers',
    cityQuery: 'Lucknow',
  },
  {
    id: 'dlr-varanasi',
    title: 'Authorized Dealers in Varanasi',
    category: 'dealer',
    subtitle: 'Lahartara Industrial Estate, Sigra, GT Road • Complete 8mm-32mm sizes',
    badge: 'Eastern UP',
    pageId: 'dealers',
    cityQuery: 'Varanasi',
  },
  {
    id: 'dlr-prayagraj',
    title: 'Authorized Dealers in Prayagraj (Allahabad)',
    category: 'dealer',
    subtitle: 'Naini Industrial Area, Civil Lines, Phaphamau • Full structural stock',
    badge: 'Prayagraj',
    pageId: 'dealers',
    cityQuery: 'Prayagraj',
  },
  {
    id: 'dlr-gorakhpur',
    title: 'Authorized Dealers in Gorakhpur',
    category: 'dealer',
    subtitle: 'GIDA Industrial Area, Mohaddipur, Golghar • Direct dispatch warehouse',
    badge: 'Gorakhpur',
    pageId: 'dealers',
    cityQuery: 'Gorakhpur',
  },
  {
    id: 'dlr-agra',
    title: 'Authorized Dealers in Agra & Mathura',
    category: 'dealer',
    subtitle: 'Sikandra Industrial Area, Bye-pass Road • CRS and Fe 550D stock',
    badge: 'Western UP',
    pageId: 'dealers',
    cityQuery: 'Agra',
  },
  {
    id: 'dlr-bareilly',
    title: 'Authorized Dealers in Bareilly',
    category: 'dealer',
    subtitle: 'Parsakhera Industrial Area, Civil Lines • Heavy structural bundles',
    badge: 'Bareilly',
    pageId: 'dealers',
    cityQuery: 'Bareilly',
  },
  {
    id: 'dlr-ayodhya',
    title: 'Authorized Dealers in Ayodhya & Faizabad',
    category: 'dealer',
    subtitle: 'Ayodhya Bypass, Civil Lines • Mega infra & residential construction supplies',
    badge: 'Ayodhya Hub',
    pageId: 'dealers',
    cityQuery: 'Ayodhya',
  },
  // Projects
  {
    id: 'proj-infra',
    title: 'Landmark Projects & Expressways Built with Balwant',
    category: 'page',
    subtitle: 'Over 14,500 MT steel in National Elevated Corridors, Metros & River Bridges',
    badge: 'Projects Portfolio',
    pageId: 'projects',
  },
  // Contact & Sales
  {
    id: 'contact-desk',
    title: 'Direct Factory Sales Desk & Toll-Free 1800 120 5500',
    category: 'page',
    subtitle: 'Get instant proforma quotation, order booking, and mill test certificates',
    badge: 'Factory Direct',
    pageId: 'contact',
  },
];

interface QuickSearchBarProps {
  onNavigate: (page: string) => void;
  onSelectProduct?: (productGrade: string) => void;
  onOpenArticle?: (articleId: string) => void;
}

export const QuickSearchBar: React.FC<QuickSearchBarProps> = ({
  onNavigate,
  onSelectProduct,
  onOpenArticle,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const { language } = useLanguage();
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Filter items based on query
  const filteredResults = React.useMemo(() => {
    if (!query.trim()) {
      // Default top suggestions
      return SEARCH_DATABASE.slice(0, 6);
    }
    const q = query.toLowerCase().trim();
    return SEARCH_DATABASE.filter(
      (item) =>
        item.title.toLowerCase().includes(q) ||
        item.subtitle.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q) ||
        (item.badge && item.badge.toLowerCase().includes(q))
    );
  }, [query]);

  // Global shortcut (Ctrl+K or Cmd+K or '/')
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      } else if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
      setSelectedIndex(0);
    }
  }, [isOpen]);

  // Handle arrow navigation in results
  const handleInputKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev < filteredResults.length - 1 ? prev + 1 : 0));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev > 0 ? prev - 1 : filteredResults.length - 1));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (filteredResults[selectedIndex]) {
        handleSelectItem(filteredResults[selectedIndex]);
      }
    }
  };

  const handleSelectItem = (item: SearchResultItem) => {
    setIsOpen(false);
    setQuery('');

    if (item.category === 'product' && item.productGrade && onSelectProduct) {
      onSelectProduct(item.productGrade);
      onNavigate('products');
    } else if (item.category === 'article' && item.articleId && onOpenArticle) {
      onOpenArticle(item.articleId);
    } else {
      onNavigate(item.pageId);
    }
  };

  const getCategoryIcon = (category: SearchResultItem['category']) => {
    switch (category) {
      case 'product':
        return <Package className="w-4 h-4 text-amber-700" />;
      case 'article':
        return <FileText className="w-4 h-4 text-blue-700" />;
      case 'dealer':
        return <MapPin className="w-4 h-4 text-emerald-700" />;
      case 'technical':
        return <Cpu className="w-4 h-4 text-indigo-700" />;
      case 'page':
      default:
        return <Building2 className="w-4 h-4 text-zinc-700" />;
    }
  };

  return (
    <>
      {/* Search trigger button in Navbar */}
      <button
        id="navbar-quick-search-trigger"
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2 bg-zinc-100/90 hover:bg-amber-50/80 border border-zinc-300 hover:border-amber-400 text-zinc-600 hover:text-zinc-900 px-3 py-1.5 rounded-xs transition-all duration-200 cursor-pointer text-left group shadow-2xs"
        title="Search Balwant TMT (Ctrl+K)"
        aria-label="Quick Search"
      >
        <Search className="w-3.5 h-3.5 text-zinc-500 group-hover:text-amber-700 transition-colors" />
        <span className="text-xs font-mono-tech hidden lg:inline-block pr-2">
          {language === 'hi' ? 'खोजें (सरिया, डीलर, तकनीक)...' : 'Search TMT, Dealers, Guides...'}
        </span>
        <span className="text-xs font-mono-tech lg:hidden">
          {language === 'hi' ? 'खोजें' : 'Search'}
        </span>
        <kbd className="hidden sm:inline-flex items-center gap-0.5 bg-white border border-zinc-300 px-1.5 py-0.5 rounded-[3px] text-[10px] font-mono-tech text-zinc-500 group-hover:border-amber-400">
          <span className="text-[9px]">⌘</span>K
        </kbd>
      </button>

      {/* Interactive Modal Search Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-start justify-center p-3 sm:p-6 pt-16 sm:pt-24 animate-fadeIn"
          onClick={() => setIsOpen(false)}
        >
          <div
            ref={containerRef}
            className="w-full max-w-2xl bg-white border border-amber-300 shadow-2xl rounded-xs overflow-hidden text-zinc-900 text-left"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Input Bar */}
            <div className="flex items-center gap-3 px-4 py-3.5 bg-amber-50/50 border-b border-amber-200">
              <Search className="w-5 h-5 text-amber-700 flex-shrink-0" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setSelectedIndex(0);
                }}
                onKeyDown={handleInputKeyDown}
                placeholder={
                  language === 'hi'
                    ? 'खोजें: Fe 550D, कानपुर, सरिया रेट, MTC, चेयरमैन संदेश...'
                    : 'Search products, dealers, calculator, MTC, Fe 550D, Chairman message...'
                }
                className="w-full bg-transparent text-sm sm:text-base font-sans font-medium text-zinc-900 placeholder:text-zinc-400 focus:outline-none"
              />
              {query && (
                <button
                  onClick={() => setQuery('')}
                  className="p-1 hover:bg-zinc-200 rounded-full text-zinc-500 hover:text-black cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
              <button
                onClick={() => setIsOpen(false)}
                className="text-[11px] font-mono-tech uppercase bg-white border border-zinc-300 hover:border-black px-2 py-1 rounded-xs text-zinc-600 hover:text-black cursor-pointer ml-1"
              >
                ESC
              </button>
            </div>

            {/* Quick Filter Categories Chips */}
            <div className="px-4 py-2 bg-[#FFFDF0] border-b border-amber-100 flex items-center gap-2 overflow-x-auto text-[11px] font-mono-tech text-zinc-600">
              <span className="font-bold text-zinc-900 whitespace-nowrap">
                {language === 'hi' ? 'त्वरित खोज:' : 'Popular:'}
              </span>
              <button
                onClick={() => setQuery('Fe 550D')}
                className="bg-white hover:bg-amber-100 border border-amber-200 px-2 py-0.5 rounded-xs transition-colors whitespace-nowrap cursor-pointer"
              >
                Fe 550D
              </button>
              <button
                onClick={() => setQuery('Dealer')}
                className="bg-white hover:bg-amber-100 border border-amber-200 px-2 py-0.5 rounded-xs transition-colors whitespace-nowrap cursor-pointer"
              >
                Dealers / डीलर
              </button>
              <button
                onClick={() => setQuery('Calculator')}
                className="bg-white hover:bg-amber-100 border border-amber-200 px-2 py-0.5 rounded-xs transition-colors whitespace-nowrap cursor-pointer"
              >
                Weight Calculator
              </button>
              <button
                onClick={() => setQuery('Chairman')}
                className="bg-white hover:bg-amber-100 border border-amber-200 px-2 py-0.5 rounded-xs transition-colors whitespace-nowrap cursor-pointer"
              >
                Chairman's Desk
              </button>
              <button
                onClick={() => setQuery('MTC')}
                className="bg-white hover:bg-amber-100 border border-amber-200 px-2 py-0.5 rounded-xs transition-colors whitespace-nowrap cursor-pointer"
              >
                MTC Certificate
              </button>
            </div>

            {/* Results List */}
            <div className="max-h-[60vh] overflow-y-auto p-2 divide-y divide-zinc-100">
              {filteredResults.length === 0 ? (
                <div className="p-8 text-center text-zinc-500">
                  <Package className="w-10 h-10 mx-auto text-zinc-300 mb-2" />
                  <p className="text-sm font-medium text-zinc-700">
                    {language === 'hi'
                      ? 'कोई परिणाम नहीं मिला। कृपया दूसरा शब्द खोजें।'
                      : `No direct matches found for "${query}"`}
                  </p>
                  <p className="text-xs text-zinc-400 mt-1">
                    Try searching for "Fe 550D", "Kanpur", "Thermex", "Weight", or "Chairman"
                  </p>
                </div>
              ) : (
                filteredResults.map((item, idx) => {
                  const isSelected = idx === selectedIndex;
                  return (
                    <div
                      key={item.id}
                      onClick={() => handleSelectItem(item)}
                      onMouseEnter={() => setSelectedIndex(idx)}
                      className={`p-3 rounded-xs flex items-center justify-between gap-3 cursor-pointer transition-all duration-150 ${
                        isSelected
                          ? 'bg-[#FFF9D6] border-l-4 border-l-amber-600'
                          : 'hover:bg-amber-50/60'
                      }`}
                    >
                      <div className="flex items-start gap-3 min-w-0">
                        <div className="p-2 bg-white rounded-xs border border-zinc-200 shadow-2xs flex-shrink-0 mt-0.5">
                          {getCategoryIcon(item.category)}
                        </div>
                        <div className="min-w-0">
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="font-display font-bold text-sm text-zinc-900">
                              {item.title}
                            </span>
                            {item.badge && (
                              <span className="text-[10px] font-mono-tech font-bold uppercase bg-amber-100 text-amber-900 px-1.5 py-0.2 rounded-xs border border-amber-200">
                                {item.badge}
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-zinc-600 truncate mt-0.5 font-medium">
                            {item.subtitle}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-1.5 flex-shrink-0 text-zinc-400">
                        <span className="text-[11px] font-mono-tech uppercase hidden sm:inline-block">
                          {item.pageId}
                        </span>
                        <ChevronRight
                          className={`w-4 h-4 transition-transform ${
                            isSelected ? 'text-amber-800 translate-x-0.5' : ''
                          }`}
                        />
                      </div>
                    </div>
                  );
                })
              )}
            </div>

            {/* Footer helper */}
            <div className="px-4 py-2.5 bg-zinc-50 border-t border-zinc-200 flex items-center justify-between text-[11px] font-mono-tech text-zinc-500">
              <div className="flex items-center gap-3">
                <span>↑↓ to navigate</span>
                <span>↵ to select</span>
                <span>ESC to close</span>
              </div>
              <div className="flex items-center gap-1 text-amber-800 font-bold">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Balwant TMT Portal</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

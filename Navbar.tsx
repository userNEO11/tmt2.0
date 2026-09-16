import React, { useState, useEffect } from 'react';
import { BalwantLogo } from './BalwantLogo';
import { Menu, X, Phone, ShieldCheck, ChevronRight, MapPin, Globe, ArrowUpRight, Sun, Moon, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { QuickSearchBar } from './QuickSearchBar';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  onOpenEnquiry: () => void;
  onOpenDealer: () => void;
  onSelectProduct?: (productGrade: string) => void;
  onOpenArticle?: (articleId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenEnquiry,
  onOpenDealer,
  onSelectProduct,
  onOpenArticle,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const { theme, isDark, toggleTheme, setTheme } = useTheme();

  useEffect(() => {
    let lastScrolled = false;
    const handleScroll = () => {
      const scrolled = window.scrollY > 30;
      if (scrolled !== lastScrolled) {
        lastScrolled = scrolled;
        setIsScrolled(scrolled);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: t.nav.home },
    { id: 'products', label: t.nav.products },
    { id: 'calculator', label: t.nav.calculator || (language === 'hi' ? 'कैलकुलेटर' : 'ESTIMATOR') },
    { id: 'chairman', label: t.nav.chairman || (language === 'hi' ? 'चेयरमैन संदेश' : "CHAIRMAN'S DESK") },
    { id: 'process', label: t.nav.process },
    { id: 'quality', label: t.nav.quality },
    { id: 'dealers', label: language === 'hi' ? 'डीलर नेटवर्क' : 'DEALERS' },
    { id: 'projects', label: t.nav.projects },
    { id: 'technical', label: t.nav.technical },
    { id: 'about', label: t.nav.about },
    { id: 'contact', label: language === 'hi' ? 'संपर्क करें' : 'CONTACT' },
  ];

  const handleNavClick = (pageId: string) => {
    onNavigate(pageId);
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Top micro-bar for BIS certification & Toll Free & Language Switcher */}
      <div className="bg-[#FFFDF0] border-b border-amber-200/80 text-[11px] text-zinc-700 py-1.5 px-4 sm:px-8 hidden md:flex items-center justify-between z-50 relative">
        <div className="flex items-center gap-4 font-mono-tech">
          <div className="flex items-center gap-1.5 text-zinc-800">
            <ShieldCheck className="w-3.5 h-3.5 text-[#D9A700]" />
            <span className="font-bold text-zinc-900">{t.nav.bisCertified}</span>
            <span className="text-amber-300">|</span>
            <span className="text-zinc-600">{t.nav.qstTech}</span>
          </div>
        </div>

        <div className="flex items-center gap-5">
          {/* Top Bar Quick Theme Toggle */}
          <button
            id="topbar-theme-toggle"
            onClick={toggleTheme}
            className="flex items-center gap-1.5 hover:text-amber-700 transition-colors font-mono-tech text-zinc-700 font-semibold cursor-pointer"
            title={isDark ? 'Switch to Default Gold Light Mode' : 'Switch to Industrial Dark Mode'}
            aria-label="Toggle Theme"
          >
            {isDark ? (
              <>
                <Moon className="w-3.5 h-3.5 text-amber-400 fill-amber-400/30" />
                <span className="text-amber-300 font-bold text-[10px] uppercase">Industrial Dark</span>
              </>
            ) : (
              <>
                <Sun className="w-3.5 h-3.5 text-[#D9A700]" />
                <span className="text-zinc-700 text-[10px] uppercase">Light</span>
              </>
            )}
          </button>

          {/* Top Bar Quick Language Switcher */}
          <div className="flex items-center bg-white p-0.5 rounded-xs border border-amber-200 shadow-xs">
            <button
              id="topbar-lang-en"
              onClick={() => setLanguage('en')}
              className={`px-2 py-0.5 text-[10px] font-mono-tech font-bold uppercase transition-colors rounded-xs cursor-pointer ${
                language === 'en'
                  ? 'bg-[#FFD700] text-black shadow-xs font-black'
                  : 'text-zinc-600 hover:text-black'
              }`}
            >
              EN
            </button>
            <button
              id="topbar-lang-hi"
              onClick={() => setLanguage('hi')}
              className={`px-2 py-0.5 text-[10px] font-mono-tech font-bold transition-colors rounded-xs cursor-pointer ${
                language === 'hi'
                  ? 'bg-[#FFD700] text-black shadow-xs font-black'
                  : 'text-zinc-600 hover:text-black'
              }`}
            >
              हिन्दी
            </button>
          </div>

          <button
            onClick={() => handleNavClick('dealers')}
            className="flex items-center gap-1 hover:text-amber-700 transition-colors font-mono-tech text-zinc-700 font-semibold cursor-pointer"
          >
            <MapPin className="w-3.5 h-3.5 text-[#D9A700]" />
            <span>{t.nav.dealerLocator}</span>
          </button>

          <a
            href="tel:+918817303963"
            className="flex items-center gap-1.5 text-zinc-900 font-mono-tech font-bold hover:text-amber-700 transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#D9A700]" />
            <span className="text-zinc-900">+91 8817303963</span>
          </a>
        </div>
      </div>

      {/* Main Navbar */}
      <header
        id="balwant-main-header"
        className={`fixed top-0 md:top-7 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md border-b border-zinc-200 shadow-md py-2.5'
            : 'bg-white/90 backdrop-blur-sm border-b border-zinc-200/60 py-3 sm:py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo - Pure official Balwant brand emblem */}
          <button
            onClick={() => handleNavClick('home')}
            className="group flex items-center focus:outline-none cursor-pointer text-left py-0.5"
            aria-label="Balwant TMT Home"
          >
            <div className="h-12 sm:h-14 md:h-16 w-auto min-w-[130px] max-w-[240px] transition-transform duration-300 group-hover:scale-105 flex items-center justify-start flex-shrink-0">
              <BalwantLogo variant="badge" className="h-full w-auto" />
            </div>
          </button>

          {/* Desktop Navigation Links - Distinct Pages */}
          <nav className="hidden xl:flex items-center gap-1.5">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-[12px] font-mono-tech font-bold tracking-wider uppercase px-3 py-1.5 rounded-xs transition-all duration-200 cursor-pointer relative ${
                    isActive
                      ? 'bg-[#FFD700] text-black shadow-xs font-black'
                      : 'text-zinc-700 hover:text-black hover:bg-amber-50/70'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-1 bg-amber-600 rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action: Search Bar + Theme Toggle + Language Switcher + Enquire Now Button */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* Quick Search Bar */}
            <QuickSearchBar
              onNavigate={handleNavClick}
              onSelectProduct={onSelectProduct}
              onOpenArticle={onOpenArticle}
            />

            {/* Industrial Theme Toggle Button */}
            <button
              id="navbar-theme-toggle"
              onClick={toggleTheme}
              className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-xs border text-xs font-mono-tech font-bold transition-all cursor-pointer select-none ${
                isDark
                  ? 'bg-zinc-900/90 border-amber-400 text-amber-300 hover:bg-zinc-800 shadow-xs shadow-amber-400/20'
                  : 'bg-zinc-100 border-zinc-300 text-zinc-800 hover:text-black hover:bg-zinc-200'
              }`}
              aria-label={isDark ? 'Switch to Default Gold Light mode' : 'Switch to Industrial Dark mode'}
              title={isDark ? 'Industrial Dark Mode Active (Click to switch to Gold Light)' : 'Switch to Industrial Dark Mode'}
            >
              {isDark ? (
                <>
                  <Moon className="w-3.5 h-3.5 text-amber-400 fill-amber-400/30 flex-shrink-0 animate-pulse" />
                  <span className="text-[11px] uppercase tracking-wider text-amber-300 font-bold hidden md:inline">
                    Industrial Dark
                  </span>
                </>
              ) : (
                <>
                  <Sun className="w-3.5 h-3.5 text-amber-600 flex-shrink-0" />
                  <span className="text-[11px] uppercase tracking-wider text-zinc-700 font-bold hidden md:inline">
                    Light
                  </span>
                </>
              )}
            </button>

            {/* Language Switcher Pill */}
            <div className="flex items-center bg-zinc-100 border border-zinc-300 p-1 rounded-xs gap-1">
              <Globe className="w-3.5 h-3.5 text-[#D9A700] ml-1 mr-0.5" />
              <button
                id="navbar-lang-en-btn"
                onClick={() => setLanguage('en')}
                className={`px-2.5 py-1 text-xs font-mono-tech font-bold uppercase transition-all rounded-xs cursor-pointer ${
                  language === 'en'
                    ? 'bg-[#FFD700] text-black shadow-xs font-black'
                    : 'text-zinc-600 hover:text-black hover:bg-zinc-200'
                }`}
              >
                EN
              </button>
              <button
                id="navbar-lang-hi-btn"
                onClick={() => setLanguage('hi')}
                className={`px-2.5 py-1 text-xs font-mono-tech font-bold transition-all rounded-xs cursor-pointer ${
                  language === 'hi'
                    ? 'bg-[#FFD700] text-black shadow-xs font-black'
                    : 'text-zinc-600 hover:text-black hover:bg-zinc-200'
                }`}
              >
                हिन्दी
              </button>
            </div>

            {/* Enquire Now CTA Button */}
            <button
              id="navbar-enquire-btn"
              onClick={onOpenEnquiry}
              className="relative group overflow-hidden bg-[#FFD700] hover:bg-[#F5C700] text-[#111827] font-black text-xs sm:text-sm tracking-wider uppercase px-5 py-2.5 rounded-xs transition-all duration-300 shadow-md shadow-[#FFD700]/30 flex items-center gap-2 cursor-pointer font-display border border-amber-300"
            >
              <span className="relative z-10">{t.nav.enquireNow}</span>
              <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              <div className="absolute top-0 right-0 w-2.5 h-2.5 bg-black/80" />
            </button>
          </div>

          {/* Mobile Actions (Search + Theme Toggle + Language Switcher + Hamburger) */}
          <div className="flex xl:hidden items-center gap-1.5">
            <div className="sm:hidden">
              <QuickSearchBar
                onNavigate={handleNavClick}
                onSelectProduct={onSelectProduct}
                onOpenArticle={onOpenArticle}
              />
            </div>

            {/* Mobile Theme Toggle Button */}
            <button
              id="mobile-header-theme-toggle"
              onClick={toggleTheme}
              className={`p-1.5 rounded-xs border text-xs font-mono-tech font-bold transition-all cursor-pointer ${
                isDark
                  ? 'bg-zinc-900 border-amber-400 text-amber-300'
                  : 'bg-zinc-100 border-zinc-300 text-zinc-700 hover:text-black'
              }`}
              aria-label="Toggle Theme"
              title="Toggle Theme"
            >
              {isDark ? <Moon className="w-4 h-4 text-amber-400" /> : <Sun className="w-4 h-4 text-amber-600" />}
            </button>

            <div className="flex items-center bg-zinc-100 border border-zinc-300 p-0.5 rounded-xs">
              <button
                onClick={() => setLanguage('en')}
                className={`px-2 py-1 text-[11px] font-mono-tech font-bold cursor-pointer ${
                  language === 'en' ? 'bg-[#FFD700] text-black font-black' : 'text-zinc-600'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage('hi')}
                className={`px-2 py-1 text-[11px] font-mono-tech font-bold cursor-pointer ${
                  language === 'hi' ? 'bg-[#FFD700] text-black font-black' : 'text-zinc-600'
                }`}
              >
                हि
              </button>
            </div>

            <button
              onClick={onOpenEnquiry}
              className="hidden xs:inline-flex bg-[#FFD700] text-black font-black text-[11px] px-3 py-1.5 rounded-xs uppercase font-display border border-amber-300 shadow-xs cursor-pointer"
            >
              {t.nav.enquireNow}
            </button>

            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-zinc-700 hover:text-black focus:outline-none cursor-pointer"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-black" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="fixed inset-0 z-50 bg-white/98 backdrop-blur-xl flex flex-col p-6 xl:hidden overflow-y-auto text-zinc-900"
        >
          <div className="flex items-center justify-between pb-6 border-b border-zinc-200">
            <div className="h-12 w-auto min-w-[120px] max-w-[180px] flex items-center">
              <BalwantLogo variant="badge" className="h-full w-auto" />
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-zinc-600 hover:text-black cursor-pointer"
            >
              <X className="w-7 h-7 text-black" />
            </button>
          </div>

          {/* Mobile Drawer Quick Search */}
          <div className="py-3 border-b border-zinc-200">
            <QuickSearchBar
              onNavigate={handleNavClick}
              onSelectProduct={onSelectProduct}
              onOpenArticle={onOpenArticle}
            />
          </div>

          {/* Theme Mode Toggle in Mobile Drawer */}
          <div className="py-3 border-b border-zinc-200 flex items-center justify-between">
            <span className="text-xs font-mono-tech text-zinc-600 uppercase">Theme / थीम:</span>
            <div className="flex items-center bg-zinc-100 border border-zinc-300 p-1 rounded-xs gap-1">
              <button
                onClick={() => setTheme('light')}
                className={`px-2.5 py-1 text-xs font-mono-tech font-bold rounded-xs cursor-pointer flex items-center gap-1 ${
                  !isDark ? 'bg-[#FFD700] text-black font-black shadow-xs' : 'text-zinc-600 hover:text-black'
                }`}
              >
                <Sun className="w-3.5 h-3.5" />
                <span>Light</span>
              </button>
              <button
                onClick={() => setTheme('dark')}
                className={`px-2.5 py-1 text-xs font-mono-tech font-bold rounded-xs cursor-pointer flex items-center gap-1 ${
                  isDark ? 'bg-zinc-900 border border-amber-400 text-amber-300 font-black shadow-xs' : 'text-zinc-600 hover:text-black'
                }`}
              >
                <Moon className="w-3.5 h-3.5 text-amber-400" />
                <span>Industrial</span>
              </button>
            </div>
          </div>

          {/* Language Toggle in Mobile Drawer */}
          <div className="py-3 border-b border-zinc-200 flex items-center justify-between">
            <span className="text-xs font-mono-tech text-zinc-600 uppercase">Select Language / भाषा चुनें:</span>
            <div className="flex items-center bg-zinc-100 border border-zinc-300 p-1 rounded-xs">
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 text-xs font-mono-tech font-bold rounded-xs cursor-pointer ${
                  language === 'en' ? 'bg-[#FFD700] text-black font-black' : 'text-zinc-600'
                }`}
              >
                English
              </button>
              <button
                onClick={() => setLanguage('hi')}
                className={`px-3 py-1 text-xs font-mono-tech font-bold rounded-xs cursor-pointer ${
                  language === 'hi' ? 'bg-[#FFD700] text-black font-black' : 'text-zinc-600'
                }`}
              >
                हिन्दी
              </button>
            </div>
          </div>

          {/* Mobile Page Links */}
          <div className="py-6 flex flex-col gap-2 overflow-y-auto flex-1">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-base font-mono-tech font-bold tracking-wider py-3 px-3 rounded-xs border-b border-zinc-100 flex items-center justify-between text-left cursor-pointer transition-all ${
                    isActive
                      ? 'bg-[#FFD700] text-black font-black shadow-xs'
                      : 'text-zinc-800 hover:bg-amber-50'
                  }`}
                >
                  <span>{item.label}</span>
                  <ChevronRight className="w-4 h-4 text-zinc-400" />
                </button>
              );
            })}
          </div>

          <div className="mt-auto pt-6 border-t border-zinc-200 space-y-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEnquiry();
              }}
              className="w-full bg-[#FFD700] text-black font-display font-black tracking-wider text-base py-3.5 rounded-xs uppercase shadow-md text-center cursor-pointer border border-amber-300"
            >
              {t.nav.enquireNow}
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                handleNavClick('dealers');
              }}
              className="w-full bg-zinc-100 border border-zinc-300 text-zinc-900 font-display font-bold tracking-wider text-sm py-3 rounded-xs uppercase flex items-center justify-center gap-2 cursor-pointer hover:bg-zinc-200"
            >
              <MapPin className="w-4 h-4 text-[#D9A700]" />
              {t.nav.dealerLocator}
            </button>
          </div>
        </div>
      )}
    </>
  );
};

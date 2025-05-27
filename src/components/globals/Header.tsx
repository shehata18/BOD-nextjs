"use client";

import { useLocale, useTranslations } from "next-intl";
import { useState, useEffect } from "react";
import { Link, usePathname, useRouter } from "@/i18n/routing";

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = useTranslations("header");

  const changeLanguage = (locale: string) => {
    router.replace(pathname, { locale });
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (mobileMenuOpen && !(e.target as Element).closest('.mobile-menu-container')) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [mobileMenuOpen]);

  return (
    <header className={`z-50 ${pathname === '/' || pathname === '/about' ? 'absolute top-0 left-0 right-0 bg-transparent' : 'bg-white shadow-lg'}`}>
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="text-2xl font-bold gradient-text">
            BOD
          </Link>
        </div>

        <nav className="hidden md:flex space-x-8">
          <Link href="/" locale={currentLocale} className={`${pathname === '/' || pathname === '/about' ? 'text-white hover:text-gray-200' : 'text-gray-800 hover:text-blue-600'} font-medium relative group ${pathname === '/' ? 'text-white' : ''}`}>
            {t("home")}
            <span className={`absolute bottom-0 left-0 h-0.5 bg-blue-600 transition-all duration-300 ${pathname === '/' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
          </Link>
          <Link href="/about" locale={currentLocale} className={`${pathname === '/' || pathname === '/about' ? 'text-white hover:text-gray-200' : 'text-gray-800 hover:text-blue-600'} font-medium relative group ${pathname === '/about' ? 'text-white' : ''}`}>
            {t("about")}
            <span className={`absolute bottom-0 left-0 h-0.5 bg-blue-600 transition-all duration-300 ${pathname === '/about' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
          </Link>
          <Link href="/subsidiaries" locale={currentLocale} className={`${pathname === '/' || pathname === '/about' ? 'text-white hover:text-gray-200' : 'text-gray-800 hover:text-blue-600'} font-medium relative group ${pathname === '/subsidiaries' ? 'text-blue-800' : ''}`}>
            {t("subsidiaries")}
            <span className={`absolute bottom-0 left-0 h-0.5 bg-blue-600 transition-all duration-300 ${pathname === '/subsidiaries' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
          </Link>
          <Link href="/sectors" locale={currentLocale} className={`${pathname === '/' || pathname === '/about' ? 'text-white hover:text-gray-200' : 'text-gray-800 hover:text-blue-600'} font-medium relative group ${pathname === '/sectors' ? 'text-blue-800' : ''}`}>
            {t("sectors")}
            <span className={`absolute bottom-0 left-0 h-0.5 bg-blue-600 transition-all duration-300 ${pathname === '/sectors' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
          </Link>

          <Link href="/contact" locale={currentLocale} className={`${pathname === '/' || pathname === '/about' ? 'text-white hover:text-gray-200' : 'text-gray-800 hover:text-blue-600'} font-medium relative group ${pathname === '/contact' ? 'text-blue-800' : ''}`}>
            {t("contact")}
            <span className={`absolute bottom-0 left-0 h-0.5 bg-blue-600 transition-all duration-300 ${pathname === '/contact' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <button 
            onClick={() => changeLanguage(currentLocale === 'en' ? 'ar' : 'en')} 
            className={`${pathname === '/' || pathname === '/about' ? 'text-white hover:text-gray-200' : 'text-blue-800 hover:text-blue-600'} flex items-center`}
          >
            <span>{t("language_en")}</span>
            <span className="mx-1">|</span>
            <span>{t("language_ar")}</span>
          </button>
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className={`md:hidden ${pathname === '/' || pathname === '/about' ? 'text-white' : 'text-gray-800'} focus:outline-none mobile-menu-button`}
            aria-label="Toggle mobile menu"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu-container absolute left-0 right-0 ${mobileMenuOpen ? 'block' : 'hidden'} md:hidden bg-white px-4 py-4 shadow-md transition-all duration-300 z-50`}>
        <Link 
          href="/" 
          locale={currentLocale} 
          className={`block py-3 px-2 border-b border-gray-100 hover:bg-gray-50 ${pathname === '/' ? 'text-blue-800 font-medium' : 'text-gray-800'}`}
          onClick={() => setMobileMenuOpen(false)}
        >
          {t("home")}
        </Link>
        <Link 
          href="/about" 
          locale={currentLocale} 
          className={`block py-3 px-2 border-b border-gray-100 hover:bg-gray-50 ${pathname === '/about' ? 'text-blue-800 font-medium' : 'text-gray-800'}`}
          onClick={() => setMobileMenuOpen(false)}
        >
          {t("about")}
        </Link>
        <Link 
          href="/subsidiaries" 
          locale={currentLocale} 
          className={`block py-3 px-2 border-b border-gray-100 hover:bg-gray-50 ${pathname === '/subsidiaries' ? 'text-blue-800 font-medium' : 'text-gray-800'}`}
          onClick={() => setMobileMenuOpen(false)}
        >
          {t("subsidiaries")}
        </Link>
        <Link 
          href="/sectors" 
          locale={currentLocale} 
          className={`block py-3 px-2 border-b border-gray-100 hover:bg-gray-50 ${pathname === '/sectors' ? 'text-blue-800 font-medium' : 'text-gray-800'}`}
          onClick={() => setMobileMenuOpen(false)}
        >
          {t("sectors")}
        </Link>
        <Link 
          href="/contact" 
          locale={currentLocale} 
          className={`block py-3 px-2 hover:bg-gray-50 ${pathname === '/contact' ? 'text-blue-800 font-medium' : 'text-gray-800'}`}
          onClick={() => setMobileMenuOpen(false)}
        >
          {t("contact")}
        </Link>
      </div>
    </header>
  );
}

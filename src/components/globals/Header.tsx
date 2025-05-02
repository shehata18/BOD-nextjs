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
    const handleClickOutside = () => {
      setMobileMenuOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50 glass-card">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="text-2xl font-bold gradient-text">
            BOD
          </Link>
        </div>

        <nav className="hidden md:flex space-x-8">
          <Link href="/" locale={currentLocale} className={`text-gray-800 hover:text-blue-600 font-medium relative group ${pathname === '/' ? 'text-blue-800' : ''}`}>
            {t("home")}
            <span className={`absolute bottom-0 left-0 h-0.5 bg-blue-600 transition-all duration-300 ${pathname === '/' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
          </Link>
          <Link href="/about" locale={currentLocale} className={`text-gray-800 hover:text-blue-600 font-medium relative group ${pathname === '/about' ? 'text-blue-800' : ''}`}>
            {t("about")}
            <span className={`absolute bottom-0 left-0 h-0.5 bg-blue-600 transition-all duration-300 ${pathname === '/about' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
          </Link>
          <Link href="/subsidiaries" locale={currentLocale} className={`text-gray-800 hover:text-blue-600 font-medium relative group ${pathname === '/subsidiaries' ? 'text-blue-800' : ''}`}>
            {t("subsidiaries")}
            <span className={`absolute bottom-0 left-0 h-0.5 bg-blue-600 transition-all duration-300 ${pathname === '/subsidiaries' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
          </Link>
          <Link href="/sectors" locale={currentLocale} className={`text-gray-800 hover:text-blue-600 font-medium relative group ${pathname === '/sectors' ? 'text-blue-800' : ''}`}>
            {t("sectors")}
            <span className={`absolute bottom-0 left-0 h-0.5 bg-blue-600 transition-all duration-300 ${pathname === '/sectors' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
          </Link>
          <Link href="/news" locale={currentLocale} className={`text-gray-800 hover:text-blue-600 font-medium relative group ${pathname === '/news' ? 'text-blue-800' : ''}`}>
            {t("news")}
            <span className={`absolute bottom-0 left-0 h-0.5 bg-blue-600 transition-all duration-300 ${pathname === '/news' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
          </Link>
          <Link href="/careers" locale={currentLocale} className={`text-gray-800 hover:text-blue-600 font-medium relative group ${pathname === '/careers' ? 'text-blue-800' : ''}`}>
            {t("careers")}
            <span className={`absolute bottom-0 left-0 h-0.5 bg-blue-600 transition-all duration-300 ${pathname === '/careers' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
          </Link>
          <Link href="/contact" locale={currentLocale} className={`text-gray-800 hover:text-blue-600 font-medium relative group ${pathname === '/contact' ? 'text-blue-800' : ''}`}>
            {t("contact")}
            <span className={`absolute bottom-0 left-0 h-0.5 bg-blue-600 transition-all duration-300 ${pathname === '/contact' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <button 
            onClick={() => changeLanguage(currentLocale === 'en' ? 'ar' : 'en')} 
            className="text-blue-800 hover:text-blue-600 flex items-center"
          >
            <span>{t("language_en")}</span>
            <span className="mx-1">|</span>
            <span>{t("language_ar")}</span>
          </button>
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className="md:hidden text-gray-800 focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${mobileMenuOpen ? 'block' : 'hidden'} md:hidden bg-white px-4 py-2 shadow-md`}>
        <Link href="/" locale={currentLocale} className={`block py-2 hover:text-blue-600 ${pathname === '/' ? 'text-blue-800' : 'text-gray-800'}`}>{t("home")}</Link>
        <Link href="/about" locale={currentLocale} className={`block py-2 hover:text-blue-600 ${pathname === '/about' ? 'text-blue-800' : 'text-gray-800'}`}>{t("about")}</Link>
        <Link href="/subsidiaries" locale={currentLocale} className={`block py-2 hover:text-blue-600 ${pathname === '/subsidiaries' ? 'text-blue-800' : 'text-gray-800'}`}>{t("subsidiaries")}</Link>
        <Link href="/sectors" locale={currentLocale} className={`block py-2 hover:text-blue-600 ${pathname === '/sectors' ? 'text-blue-800' : 'text-gray-800'}`}>{t("sectors")}</Link>
        <Link href="/news" locale={currentLocale} className={`block py-2 hover:text-blue-600 ${pathname === '/news' ? 'text-blue-800' : 'text-gray-800'}`}>{t("news")}</Link>
        <Link href="/careers" locale={currentLocale} className={`block py-2 hover:text-blue-600 ${pathname === '/careers' ? 'text-blue-800' : 'text-gray-800'}`}>{t("careers")}</Link>
        <Link href="/contact" locale={currentLocale} className={`block py-2 hover:text-blue-600 ${pathname === '/contact' ? 'text-blue-800' : 'text-gray-800'}`}>{t("contact")}</Link>
      </div>
    </header>
  );
}

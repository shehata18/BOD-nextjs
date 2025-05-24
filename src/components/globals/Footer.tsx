"use client";

import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import Image from "next/image";

export default function Footer() {
  const currentLocale = useLocale();
  const currentYear = new Date().getFullYear();
  const t = useTranslations("footer");

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="mb-6">
              <Image 
                src="/images/small-bod.png" 
                alt="BOD Logo" 
                width={150} 
                height={70} 
                className="mb-4"
              />
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">{t("company_description")}</p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 p-2 rounded-full text-gray-300 hover:text-white hover:bg-gray-700 transition-all">
                <i className="fab fa-linkedin text-lg"></i>
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full text-gray-300 hover:text-white hover:bg-gray-700 transition-all">
                <i className="fab fa-twitter text-lg"></i>
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full text-gray-300 hover:text-white hover:bg-gray-700 transition-all">
                <i className="fab fa-facebook text-lg"></i>
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full text-gray-300 hover:text-white hover:bg-gray-700 transition-all">
                <i className="fab fa-instagram text-lg"></i>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 relative pl-3 border-l-4 border-blue-600">{t("quick_links")}</h3>
            <ul className="space-y-3">
              <li><Link href="/" locale={currentLocale} className="text-gray-300 hover:text-white hover:translate-x-1 transition-transform flex items-center">
                <span className="mr-2">→</span> {t("home")}
              </Link></li>
              <li><Link href="/about" locale={currentLocale} className="text-gray-300 hover:text-white hover:translate-x-1 transition-transform flex items-center">
                <span className="mr-2">→</span> {t("about")}
              </Link></li>
              <li><Link href="/subsidiaries" locale={currentLocale} className="text-gray-300 hover:text-white hover:translate-x-1 transition-transform flex items-center">
                <span className="mr-2">→</span> {t("subsidiaries")}
              </Link></li>
              <li><Link href="/sectors" locale={currentLocale} className="text-gray-300 hover:text-white hover:translate-x-1 transition-transform flex items-center">
                <span className="mr-2">→</span> {t("sectors")}
              </Link></li>
              <li><Link href="/contact" locale={currentLocale} className="text-gray-300 hover:text-white hover:translate-x-1 transition-transform flex items-center">
                <span className="mr-2">→</span> {t("contact")}
              </Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 relative pl-3 border-l-4 border-blue-600">{t("contact_info")}</h3>
            <ul className="space-y-4">
              <li className="flex items-start group">
                <div className="bg-gray-800 p-2 rounded-full mr-3 group-hover:bg-blue-600 transition-colors">
                  <i className="fas fa-map-marker-alt text-gray-300 group-hover:text-white"></i>
                </div>
                <span className="text-gray-300 group-hover:text-white transition-colors whitespace-pre-line">
                  {t("address")}
                </span>
              </li>
              <li className="flex items-start group">
                <div className="bg-gray-800 p-2 rounded-full mr-3 group-hover:bg-blue-600 transition-colors">
                  <i className="fas fa-phone text-gray-300 group-hover:text-white"></i>
                </div>
                <span className="text-gray-300 group-hover:text-white transition-colors">{t("phone")}</span>
              </li>
              <li className="flex items-start group">
                <div className="bg-gray-800 p-2 rounded-full mr-3 group-hover:bg-blue-600 transition-colors">
                  <i className="fas fa-envelope text-gray-300 group-hover:text-white"></i>
                </div>
                <span className="text-gray-300 group-hover:text-white transition-colors">{t("email")}</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 relative pl-3 border-l-4 border-blue-600">{t("business_hours")}</h3>
            <ul className="space-y-3">
              <li className="flex justify-between">
                <span className="text-gray-300">Monday - Friday:</span>
                <span className="text-gray-300">9:00 AM - 6:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-300">Saturday:</span>
                <span className="text-gray-300">10:00 AM - 4:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-300">Sunday:</span>
                <span className="text-gray-300">Closed</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm mb-4 md:mb-0">&copy; {currentYear} {t("company_name")}. {t("copyright")}</p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">{t("privacy_policy")}</a>
              <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">{t("terms_of_service")}</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
  
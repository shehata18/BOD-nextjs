"use client";

import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

export default function Footer() {
  const currentLocale = useLocale();
  const currentYear = new Date().getFullYear();
  const t = useTranslations("footer");

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4">{t("company_name")}</h3>
            <p className="text-gray-400 mb-4">{t("company_description")}</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">{t("quick_links")}</h3>
            <ul className="space-y-2">
              <li><Link href="/" locale={currentLocale} className="text-gray-400 hover:text-white">{t("home")}</Link></li>
              <li><Link href="/about" locale={currentLocale} className="text-gray-400 hover:text-white">{t("about")}</Link></li>
              <li><Link href="/subsidiaries" locale={currentLocale} className="text-gray-400 hover:text-white">{t("subsidiaries")}</Link></li>
              <li><Link href="/sectors" locale={currentLocale} className="text-gray-400 hover:text-white">{t("sectors")}</Link></li>
              <li><Link href="/news" locale={currentLocale} className="text-gray-400 hover:text-white">{t("news")}</Link></li>
              <li><Link href="/careers" locale={currentLocale} className="text-gray-400 hover:text-white">{t("careers")}</Link></li>
              <li><Link href="/contact" locale={currentLocale} className="text-gray-400 hover:text-white">{t("contact")}</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">{t("contact_info")}</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <i className="fas fa-map-marker-alt mt-1 mr-3 text-gray-400"></i>
                <span className="text-gray-400">{t("address")}</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-phone mt-1 mr-3 text-gray-400"></i>
                <span className="text-gray-400">{t("phone")}</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-envelope mt-1 mr-3 text-gray-400"></i>
                <span className="text-gray-400">{t("email")}</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">{t("subscribe")}</h3>
            <p className="text-gray-400 mb-4">{t("subscribe_desc")}</p>
            <form className="flex flex-col space-y-3">
              <input 
                type="email" 
                placeholder={t("email_placeholder")}
                className="px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded focus:outline-none focus:border-blue-500" 
              />
              <button 
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition duration-300"
              >
                {t("subscribe_button")}
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">&copy; {currentYear} {t("company_name")}. {t("copyright")}</p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white text-sm">{t("privacy_policy")}</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm">{t("terms_of_service")}</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
  
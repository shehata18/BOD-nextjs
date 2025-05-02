import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import Image from "next/image";

export default function HomePage() {
  const t = useTranslations("home");

  return (
    <>
      {/* Hero Section */ }
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="hero-bg animate-zoom"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl text-white">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-slide-left">
              { t("hero_title") }
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 animate-slide-right">
              { t("bod") } - { t("hero_subtitle") }
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-up">
              <Link href="/about" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-md font-medium transition duration-300 text-lg transform hover:scale-105">
                { t("learn_more") }
              </Link>
              <Link href="/contact" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-800 px-8 py-4 rounded-md font-medium transition duration-300 text-lg transform hover:scale-105">
                { t("contact_us") }
              </Link>
            </div>
          </div>
        </div>
        {/* Scroll Down Indicator */ }
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </section>

      {/* About Section Preview */ }
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12 fade-in-left">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">{ t("about_title") }</h2>
              <p className="text-gray-600 mb-6">
                { t("about_desc1") }
              </p>
              <p className="text-gray-600 mb-6">
                { t("about_desc2") }
              </p>
              <Link href="/about" className="inline-block bg-blue-800 text-white hover:bg-blue-700 px-6 py-3 rounded-md font-medium transition duration-300">
                { t("more_about_us") }
              </Link>
            </div>
            <div className="md:w-1/2 fade-in-right">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                  alt="BOD corporate image"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Subsidiaries Section */ }
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 fade-in-up">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">{ t("subsidiaries_title") }</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              { t("subsidiaries_desc") }
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 stagger-animation">
            {/* Subsidiary 1 - LO Uniforms */ }
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <img src="https://images.unsplash.com/photo-1514866747592-c2d279258a78?ixlib=rb-4.0.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" alt="LO Uniforms" className="max-h-48 w-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{ t("subsidiary1_name") }</h3>
                <p className="text-gray-600 mb-4">
                  { t("subsidiary1_desc") }
                </p>
                <Link href="/subsidiaries/lo-uniforms" className="text-blue-600 hover:text-blue-800 font-medium">
                  { t("learn_more") } →
                </Link>
              </div>
            </div>

            {/* Subsidiary 2 - ASAP Maintenance */ }
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <img src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" alt="ASAP Maintenance" className="max-h-48 w-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{ t("subsidiary2_name") }</h3>
                <p className="text-gray-600 mb-4">
                  { t("subsidiary2_desc") }
                </p>
                <Link href="/subsidiaries/asap-maintenance" className="text-blue-600 hover:text-blue-800 font-medium">
                  { t("learn_more") } →
                </Link>
              </div>
            </div>

            {/* Subsidiary 3 - Graston Medical Clinics */ }
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <img
                  src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                  alt="Graston Medical Clinics"
                  className="max-h-48 w-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{ t("subsidiary3_name") }</h3>
                <p className="text-gray-600 mb-4">
                  { t("subsidiary3_desc") }
                </p>
                <Link href="/subsidiaries/graston-clinics" className="text-blue-600 hover:text-blue-800 font-medium">
                  { t("learn_more") } →
                </Link>
              </div>
            </div>

            {/* Subsidiary 4 - PowerMark Auto */ }
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <img src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" alt="PowerMark Auto" className="max-h-48 w-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{ t("subsidiary4_name") }</h3>
                <p className="text-gray-600 mb-4">
                  { t("subsidiary4_desc") }
                </p>
                <Link href="/subsidiaries/powermark-auto" className="text-blue-600 hover:text-blue-800 font-medium">
                  { t("learn_more") } →
                </Link>
              </div>
            </div>

            {/* Subsidiary 5 - Ramadan Restaurants */ }
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <img
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                  alt="Ramadan Restaurants"
                  className="max-h-48 w-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{ t("subsidiary5_name") }</h3>
                <p className="text-gray-600 mb-4">
                  { t("subsidiary5_desc") }
                </p>
                <Link href="/subsidiaries/ramadan-restaurants" className="text-blue-600 hover:text-blue-800 font-medium">
                  { t("learn_more") } →
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center mt-10 fade-in-up">
            <Link href="/subsidiaries" className="inline-block bg-blue-800 text-white hover:bg-blue-700 px-6 py-3 rounded-md font-medium transition duration-300">
              { t("view_all_subsidiaries") }
            </Link>
          </div>
        </div>
      </section>

      {/* Sectors Section */ }
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 fade-in-up">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">{ t("sectors_title") }</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              { t("sectors_desc") }
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-animation">
            {/* Technology Sector */ }
            <div className="bg-white p-8 rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
              <div className="flex justify-center items-center text-blue-800 text-4xl mb-6">
                <img src="https://cdn-icons-png.flaticon.com/512/3059/3059997.png" alt="Technology Icon" className="w-16 h-16 mb-4" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">{ t("tech_sector") }</h3>
              <p className="text-gray-600 mb-4">
                { t("tech_desc") }
              </p>
              <Link href="/sectors#technology" className="text-blue-800 hover:text-blue-700 font-medium inline-flex items-center">
                { t("learn_more") }
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </Link>
            </div>

            {/* Finance Sector */ }
            <div className="bg-white p-8 rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
              <div className="flex justify-center items-center text-blue-800 text-4xl mb-6">
                <img src="https://cdn-icons-png.flaticon.com/512/2382/2382533.png" alt="Finance Icon" className="w-16 h-16 mb-4" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">{ t("finance_sector") }</h3>
              <p className="text-gray-600 mb-4">
                { t("finance_desc") }
              </p>
              <Link href="/sectors#finance" className="text-blue-800 hover:text-blue-700 font-medium inline-flex items-center">
                { t("learn_more") }
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </Link>
            </div>

            {/* Manufacturing Sector */ }
            <div className="bg-white p-8 rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
              <div className="flex justify-center items-center text-blue-800 text-4xl mb-6">
                <img src="https://cdn-icons-png.flaticon.com/512/1786/1786046.png" alt="Manufacturing Icon" className="w-16 h-16 mb-4" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">{ t("manufacturing_sector") }</h3>
              <p className="text-gray-600 mb-4">
                { t("manufacturing_desc") }
              </p>
              <Link href="/sectors#manufacturing" className="text-blue-800 hover:text-blue-700 font-medium inline-flex items-center">
                { t("learn_more") }
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </Link>
            </div>

            {/* Automotive Sector */ }
            <div className="bg-white p-8 rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
              <div className="flex justify-center items-center text-blue-800 text-4xl mb-6">
                <img src="https://cdn-icons-png.flaticon.com/512/3774/3774278.png" alt="Automotive Icon" className="w-16 h-16 mb-4" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">{ t("automotive_sector") }</h3>
              <p className="text-gray-600 mb-4">
                { t("automotive_desc") }
              </p>
              <Link href="/sectors#automotive" className="text-blue-800 hover:text-blue-700 font-medium inline-flex items-center">
                { t("learn_more") }
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </Link>
            </div>

            {/* Hospitality Sector */ }
            <div className="bg-white p-8 rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
              <div className="flex justify-center items-center text-blue-800 text-4xl mb-6">
                <img src="https://cdn-icons-png.flaticon.com/512/4287/4287725.png" alt="Hospitality Icon" className="w-16 h-16 mb-4" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">{ t("hospitality_sector") }</h3>
              <p className="text-gray-600 mb-4">
                { t("hospitality_desc") }
              </p>
              <Link href="/sectors#hospitality" className="text-blue-800 hover:text-blue-700 font-medium inline-flex items-center">
                { t("learn_more") }
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </Link>
            </div>
          </div>

          <div className="text-center mt-10 fade-in-up">
            <Link href="/sectors" className="inline-block bg-blue-800 text-white hover:bg-blue-700 px-6 py-3 rounded-md font-medium transition duration-300">
              { t("explore_all_sectors") }
            </Link>
          </div>
        </div>
      </section>

      {/* Latest News Section */ }
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-10 fade-in-up">
            <h2 className="text-3xl font-bold text-gray-800">{ t("news_title") }</h2>
            <Link href="/news" className="text-blue-600 hover:text-blue-800 font-medium">{ t("view_all_news") } →</Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 stagger-animation">
            {/* News Item 1 */ }
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                alt="BOD Holdings Acquisition News"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <span className="text-sm text-gray-500 block mb-2">{ t("news1_date") }</span>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{ t("news1_title") }</h3>
                <p className="text-gray-600 mb-4">{ t("news1_excerpt") }</p>
                <Link href="/news#news1" className="text-blue-600 hover:text-blue-800 font-medium">{ t("read_more") } →</Link>
              </div>
            </div>

            {/* News Item 2 */ }
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                alt="Financial Results News"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <span className="text-sm text-gray-500 block mb-2">{ t("news2_date") }</span>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{ t("news2_title") }</h3>
                <p className="text-gray-600 mb-4">{ t("news2_excerpt") }</p>
                <Link href="/news#news2" className="text-blue-600 hover:text-blue-800 font-medium">{ t("read_more") } →</Link>
              </div>
            </div>

            {/* News Item 3 */ }
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
              <img
                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                alt="Sustainability Initiative News"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <span className="text-sm text-gray-500 block mb-2">{ t("news3_date") }</span>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{ t("news3_title") }</h3>
                <p className="text-gray-600 mb-4">{ t("news3_excerpt") }</p>
                <Link href="/news#news3" className="text-blue-600 hover:text-blue-800 font-medium">{ t("read_more") } →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */ }
      <section className="py-16 bg-blue-800 text-white">
        <div className="container mx-auto px-4 text-center scale-up">
          <h2 className="text-3xl font-bold mb-6">{ t("cta_title") }</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            { t("cta_desc") }
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="bg-white text-blue-800 hover:bg-blue-100 px-8 py-3 rounded-md font-medium transition duration-300">
              { t("contact_us") }
            </Link>
            <Link href="/careers" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-800 px-8 py-3 rounded-md font-medium transition duration-300">
              { t("join_team") }
            </Link>
          </div>
    </div>
      </section>
    </>
  );
}

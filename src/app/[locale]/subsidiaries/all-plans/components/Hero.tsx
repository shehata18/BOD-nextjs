"use client";
import { Link } from "@/i18n/routing";
import { useLocale, useTranslations } from "next-intl";

const Hero = () => {
  const allPlans = useTranslations("all_plans");
  const currentLocale = useLocale();
  const t = useTranslations("subsidiaries");
  return (
    <section className="relative h-[90vh] min-h-[600px] overflow-hidden bg-black">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 h-full transform scale-105 animate-slow-zoom">
          <img
            src="https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Exhibition Hall"
            className="absolute inset-0 w-full h-full object-cover object-center opacity-40"
          />
        </div>
        {/* Gradient Overlays */}
        <div className="absolute inset-0 h-full bg-gradient-to-r from-black/80 via-blue-900/50 to-black/80"></div>
        <div className="absolute inset-0 h-full bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.7)_100%)]"></div>
      </div>

      {/* Floating Elements Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-24 h-24 bg-blue-500/20 rounded-full blur-xl left-[15%] top-[20%] animate-float1"></div>
        <div className="absolute w-32 h-32 bg-purple-500/20 rounded-full blur-xl right-[25%] top-[25%] animate-float2"></div>
        <div className="absolute w-20 h-20 bg-yellow-500/20 rounded-full blur-xl left-[35%] bottom-[33%] animate-float3"></div>
        <div className="absolute w-28 h-28 bg-green-500/20 rounded-full blur-xl right-[10%] top-[40%] animate-float4"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center">
        <div className="text-center max-w-5xl mx-auto" data-aos="fade-up">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="block text-blue-400">{t("all_plans_name")}</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto">
            {allPlans("hero_subtitle")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#services"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
            >
              {allPlans("explore_services")}
            </Link>
            <Link
              href={`/${currentLocale}/contact`}
              className="bg-transparent hover:bg-white/10 text-white font-semibold py-3 px-8 rounded-lg border-2 border-white transition duration-300 ease-in-out transform hover:scale-105 backdrop-blur-sm"
            >
              {allPlans("contact_us")}
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <a
          href="#about"
          className="text-white opacity-70 hover:opacity-100 transition duration-300"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            ></path>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;

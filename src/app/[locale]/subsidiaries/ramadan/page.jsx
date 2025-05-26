'use client';

import { useTranslations } from 'next-intl';
import { useEffect } from 'react';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styles from './styles.module.css';

// FontAwesome Configuration
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faMapMarkerAlt, 
    faArrowRight
} from '@fortawesome/free-solid-svg-icons';

export default function RamadanPage() {
    const t = useTranslations("ramadan");

    useEffect(() => {
      // Initialize AOS animation library
      AOS.init({
        duration: 1000,
        once: true,
        offset: 100,
      });

      // Parallax effect for the banner
      const handleScroll = () => {
        const parallaxBg = document.querySelector(".parallax-bg");
        if (parallaxBg) {
          const scrolled = window.pageYOffset;
          parallaxBg.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
      <main>
        {/* Hero Banner */}
        <section className="relative h-screen overflow-hidden flex items-center justify-center">
          {/* Background Image with Gradient Overlay */}
          <div className="absolute inset-0">
            <Image
              src="/images/resturant.jpg"
              alt="Restaurant Banner"
              className="w-full h-full object-cover object-center parallax-bg"
              style={{ opacity: 0.8 }}
              fill
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/80 to-black/60"></div>
          </div>

          {/* Floating Food Icons */}
          <div className="absolute inset-0 pointer-events-none z-20">
            <div
              className="absolute top-24 left-24 w-16 h-16 opacity-80 drop-shadow-xl"
              style={{
                filter: "brightness(0) invert(1)",
                animation: "float 6s ease-in-out infinite",
              }}
            >
              <Image
                src="https://cdn-icons-png.flaticon.com/512/1046/1046874.png"
                alt="Kebab"
                width={64}
                height={64}
              />
            </div>
            <div
              className="absolute top-32 right-32 w-20 h-20 opacity-80 drop-shadow-xl"
              style={{
                filter: "brightness(0) invert(1)",
                animation: "float 8s ease-in-out infinite",
              }}
            >
              <Image
                src="https://cdn-icons-png.flaticon.com/512/1147/1147933.png"
                alt="Biryani"
                width={80}
                height={80}
              />
            </div>
            <div
              className="absolute bottom-32 left-40 w-16 h-16 opacity-80 drop-shadow-xl"
              style={{
                filter: "brightness(0) invert(1)",
                animation: "float 7s ease-in-out infinite",
              }}
            >
              <Image
                src="https://cdn-icons-png.flaticon.com/512/3075/3075977.png"
                alt="Turkish Tea"
                width={64}
                height={64}
              />
            </div>
            <div
              className="absolute bottom-24 right-40 w-16 h-16 opacity-80 drop-shadow-xl"
              style={{
                filter: "brightness(0) invert(1)",
                animation: "float 5s ease-in-out infinite",
              }}
            >
              <Image
                src="https://cdn-icons-png.flaticon.com/512/8006/8006472.png"
                alt="Naan"
                width={64}
                height={64}
              />
            </div>
            <div
              className="absolute top-1/2 left-24 w-14 h-14 opacity-80 drop-shadow-xl"
              style={{
                filter: "brightness(0) invert(1)",
                animation: "float 9s ease-in-out infinite",
              }}
            >
              <Image
                src="https://cdn-icons-png.flaticon.com/512/2515/2515263.png"
                alt="Spices"
                width={56}
                height={56}
              />
            </div>
            <div
              className="absolute top-1/2 right-24 w-14 h-14 opacity-80 drop-shadow-xl"
              style={{
                filter: "brightness(0) invert(1)",
                animation: "float 7s ease-in-out infinite",
              }}
            >
              <Image
                src="https://cdn-icons-png.flaticon.com/512/4825/4825292.png"
                alt="Baklava"
                width={56}
                height={56}
              />
            </div>
          </div>

          {/* Content */}
          <div className="relative z-30 w-full flex flex-col items-center justify-center text-center px-4">
            <h1
              className="text-6xl md:text-8xl font-extrabold mb-6 fade-in"
              style={{
                animationDelay: "0.2s",
                color: "#FFA500",
                textShadow: "2px 2px 4px rgba(0,0,0,0.8)",
              }}
            >
              {t("title")}
            </h1>
            <div
              className="h-1.5 w-48 mx-auto mb-8 fade-in rounded-full shadow-lg"
              style={{ backgroundColor: "#FFA500", animationDelay: "0.4s" }}
            ></div>

            <div
              className="flex flex-wrap justify-center gap-6 fade-in"
              style={{ animationDelay: "1s" }}
            >
              <a
                href="#locations"
                className="relative group overflow-hidden px-8 py-4 rounded-full font-medium inline-flex items-center transition-all transform hover:scale-105 hover:shadow-2xl"
                style={{
                  background: "linear-gradient(90deg, #f59e0b, #ea580c)",
                  boxShadow: "0 4px 15px rgba(234, 88, 12, 0.3)",
                }}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="relative text-white text-lg font-semibold tracking-wide">
                  {t("find_location")}
                  <FontAwesomeIcon
                    icon={faMapMarkerAlt}
                    className="ml-2 group-hover:animate-bounce"
                  />
                </span>
              </a>
            </div>
          </div>
        </section>

        {/* Company Overview */}
        <section className="py-24 bg-white relative overflow-hidden" id="about">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              {/* Image Gallery */}
              <div className="lg:w-1/2" data-aos="fade-right">
                <div className="relative">
                  {/* Main Image */}
                  <Image
                    src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
                    alt="Ramadan Restaurant Interior"
                    width={600}
                    height={400}
                    className={`rounded-lg shadow-2xl w-full ${styles.hoverScale}`}
                    style={{
                      clipPath: "polygon(0 0, 100% 0, 100% 85%, 0% 100%)",
                    }}
                  />

                  {/* Floating Images */}
                  <div
                    className="absolute -bottom-12 -right-12"
                    data-aos="fade-up"
                    data-aos-delay="300"
                  >
                    <Image
                      src="https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
                      alt="Signature Dish"
                      width={192}
                      height={192}
                      className={`rounded-lg shadow-xl ${styles.hoverScale} object-cover`}
                    />
                  </div>

                  <div
                    className="absolute -top-12 -right-12"
                    data-aos="fade-left"
                    data-aos-delay="600"
                  >
                    <Image
                      src="https://images.unsplash.com/photo-1542528180-1c2803fa048c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1167&q=80"
                      alt="Restaurant Ambiance"
                      width={144}
                      height={144}
                      className={`rounded-lg shadow-xl ${styles.hoverScale} object-cover`}
                    />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="lg:w-1/2" data-aos="fade-left">
                <div className="space-y-8">
                  <div>
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">
                      {t("about_title")}
                    </h2>
                    <div className="h-1 w-24 bg-amber-500 mb-8"></div>
                  </div>

                  <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    {t("about_desc")}
                  </p>

                  <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-8 rounded-2xl border border-amber-100/50 space-y-6">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6">
                      {t("culinary_excellence")}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Authentic Recipes */}
                      <div className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                        <h4 className="text-lg font-semibold text-gray-800 mb-2">
                          {t("authentic_recipes")}
                        </h4>
                        <p className="text-gray-600">
                          {t("authentic_recipes_desc")}
                        </p>
                      </div>

                      {/* Master Chefs */}
                      <div className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                        <h4 className="text-lg font-semibold text-gray-800 mb-2">
                          {t("master_chefs")}
                        </h4>
                        <p className="text-gray-600">
                          {t("master_chefs_desc")}
                        </p>
                      </div>

                      {/* Fresh Ingredients */}
                      <div className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                        <h4 className="text-lg font-semibold text-gray-800 mb-2">
                          {t("fresh_ingredients")}
                        </h4>
                        <p className="text-gray-600">
                          {t("fresh_ingredients_desc")}
                        </p>
                      </div>

                      {/* Premium Service */}
                      <div className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                        <h4 className="text-lg font-semibold text-gray-800 mb-2">
                          {t("premium_service")}
                        </h4>
                        <p className="text-gray-600">
                          {t("premium_service_desc")}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-6 pt-6">
                    <a
                      href="#menu"
                      className={`${styles.btnModern} group transition-all ${styles.hoverScale}`}
                    >
                      {t("view_menu")}
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className="ml-2 arowIcon transform group-hover:translate-x-1 transition-transform"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cuisine Categories */}
        <section
          className="py-24 bg-gradient-to-b from-white to-amber-50"
          id="menu"
        >
          <div className="container mx-auto px-4">
            <div
              className="text-center max-w-3xl mx-auto mb-16"
              data-aos="fade-up"
            >
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                {t("cuisines_title")}
              </h2>
              <div className="h-1 w-24 bg-amber-500 mx-auto mb-8"></div>
              <p className="text-gray-600 text-lg">{t("cuisines_subtitle")}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {/* Pakistani Cuisine */}
              <div className="group" data-aos="fade-up" data-aos-delay="100">
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                  <div className="relative h-80 overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1488&q=80"
                      alt="Pakistani Cuisine"
                      width={600}
                      height={320}
                      className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <h3
                      className="absolute bottom-6 left-6 text-2xl font-bold"
                      style={{
                        color: "#FFA500",
                        textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                      }}
                    >
                      {t("pakistani_cuisine")}
                    </h3>
                  </div>
                  <div className="p-8">
                    <p className="text-gray-600 mb-6">
                      {t("pakistani_cuisine_desc")}
                    </p>
                  </div>
                </div>
              </div>

              {/* Turkish Cuisine */}
              <div className="group" data-aos="fade-up" data-aos-delay="200">
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                  <div className="relative h-80 overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1530&q=80"
                      alt="Turkish Cuisine"
                      width={600}
                      height={320}
                      className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <h3
                      className="absolute bottom-6 left-6 text-2xl font-bold"
                      style={{
                        color: "#FFA500",
                        textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                      }}
                    >
                      {t("turkish_cuisine")}
                    </h3>
                  </div>
                  <div className="p-8">
                    <p className="text-gray-600 mb-6">
                      {t("turkish_cuisine_desc")}
                    </p>
                  </div>
                </div>
              </div>

              {/* Traditional Specialties */}
              <div className="group" data-aos="fade-up" data-aos-delay="300">
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                  <div className="relative h-80 overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80"
                      alt="Traditional Specialties"
                      width={600}
                      height={320}
                      className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <h3
                      className="absolute bottom-6 left-6 text-2xl font-bold"
                      style={{
                        color: "#FFA500",
                        textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                      }}
                    >
                      {t("traditional_specialties")}
                    </h3>
                  </div>
                  <div className="p-8">
                    <p className="text-gray-600 mb-6">
                      {t("traditional_specialties_desc")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Restaurant Features */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div
              className="text-center max-w-3xl mx-auto mb-16"
              data-aos="fade-up"
            >
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                {t("features_title")}
              </h2>
              <div className="h-1 w-24 bg-amber-500 mx-auto mb-8"></div>
              <p className="text-gray-600">{t("features_subtitle")}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Feature 1: Private Dining */}
              <div
                className="bg-white rounded-xl shadow-lg overflow-hidden hover-scale transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                    alt="Private Dining Room"
                    width={600}
                    height={192}
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    {t("private_dining")}
                  </h3>
                  <p className="text-gray-600">{t("private_dining_desc")}</p>
                </div>
              </div>

              {/* Feature 2: Outdoor Seating */}
              <div
                className="bg-white rounded-xl shadow-lg overflow-hidden hover-scale transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
                    alt="Outdoor Seating Area"
                    width={600}
                    height={192}
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    {t("outdoor_seating")}
                  </h3>
                  <p className="text-gray-600">{t("outdoor_seating_desc")}</p>
                </div>
              </div>

              {/* Feature 3: Live Cooking */}
              <div
                className="bg-white rounded-xl shadow-lg overflow-hidden hover-scale transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1551218808-94e220e084d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
                    alt="Live Cooking Station"
                    width={600}
                    height={192}
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    {t("live_cooking")}
                  </h3>
                  <p className="text-gray-600">{t("live_cooking_desc")}</p>
                </div>
              </div>

              {/* Feature 4: Prayer Room */}
              <div
                className="bg-white rounded-xl shadow-lg overflow-hidden hover-scale transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1519817914152-22d216bb9170?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                    alt="Prayer Room"
                    width={600}
                    height={192}
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    {t("prayer_room")}
                  </h3>
                  <p className="text-gray-600">{t("prayer_room_desc")}</p>
                </div>
              </div>

              {/* Feature 5: Family Section */}
              <div
                className="bg-white rounded-xl shadow-lg overflow-hidden hover-scale transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                    alt="Family Section"
                    width={600}
                    height={192}
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    {t("family_section")}
                  </h3>
                  <p className="text-gray-600">{t("family_section_desc")}</p>
                </div>
              </div>

              {/* Feature 6: Valet Parking */}
              <div
                className="bg-white rounded-xl shadow-lg overflow-hidden hover-scale transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1609619385002-f40f1df9b7eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                    alt="Valet Parking"
                    width={600}
                    height={192}
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    {t("valet_parking")}
                  </h3>
                  <p className="text-gray-600">{t("valet_parking_desc")}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Locations */}
        <section
          className="py-20 bg-gradient-to-b from-white to-amber-50"
          id="locations"
        >
          <div className="container mx-auto px-4">
            <div
              className="text-center max-w-3xl mx-auto mb-16"
              data-aos="fade-up"
            >
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                {t("locations_title")}
              </h2>
              <div className="h-1 w-24 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto mb-8 rounded-full"></div>
              <p className="text-gray-600 text-lg">{t("locations_subtitle")}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Location 1 */}
              <div
                className={`bg-white rounded-xl shadow-lg overflow-hidden hover:-translate-y-2 transition-all duration-300`}
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="relative">
                  <Image
                    src="https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1285&q=80"
                    alt="Main Branch"
                    width={600}
                    height={256}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                      FLAGSHIP
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {t("main_branch")}
                  </h3>
                  <p className="text-gray-600 mb-4">{t("main_branch_desc")}</p>
                  <div className="space-y-3 text-gray-700">
                    <p className="flex items-start border-l-2 border-amber-500 pl-3">
                      <span className="font-medium mr-2">{t("address")}:</span>
                      <span>123 Dining Street, City Center</span>
                    </p>
                    <p className="flex items-start border-l-2 border-amber-500 pl-3">
                      <span className="font-medium mr-2">{t("contact")}:</span>
                      <span>+1 (123) 456-7890</span>
                    </p>
                    <p className="flex items-start border-l-2 border-amber-500 pl-3">
                      <span className="font-medium mr-2">{t("hours")}:</span>
                      <span>Daily, 11:00 AM - 11:00 PM</span>
                    </p>
                  </div>
                  <div className="mt-6">
                    <a
                      href="#"
                      className="inline-block text-orange-500 font-medium hover:text-orange-600 transition-colors"
                    >
                      {t("get_directions")}{" "}
                      <span className="ml-1 arowIcon">→</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Location 2 */}
              <div
                className={`bg-white rounded-xl shadow-lg overflow-hidden hover:-translate-y-2 transition-all duration-300`}
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="relative">
                  <Image
                    src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                    alt="Eastern District Branch"
                    width={600}
                    height={256}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {t("eastern_district")}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {t("eastern_district_desc")}
                  </p>
                  <div className="space-y-3 text-gray-700">
                    <p className="flex items-start border-l-2 border-amber-500 pl-3">
                      <span className="font-medium mr-2">{t("address")}:</span>
                      <span>456 Eastern Boulevard, East Quarter</span>
                    </p>
                    <p className="flex items-start border-l-2 border-amber-500 pl-3">
                      <span className="font-medium mr-2">{t("contact")}:</span>
                      <span>+1 (123) 456-7891</span>
                    </p>
                    <p className="flex items-start border-l-2 border-amber-500 pl-3">
                      <span className="font-medium mr-2">{t("hours")}:</span>
                      <span>Daily, 11:00 AM - 11:00 PM</span>
                    </p>
                  </div>
                  <div className="mt-6">
                    <a
                      href="#"
                      className="inline-block text-orange-500 font-medium hover:text-orange-600 transition-colors"
                    >
                      {t("get_directions")}{" "}
                      <span className="ml-1 arowIcon">→</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Location 3 */}
              <div
                className={`bg-white rounded-xl shadow-lg overflow-hidden hover:-translate-y-2 transition-all duration-300`}
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="relative">
                  <Image
                    src="https://images.unsplash.com/photo-1544148103-0773bf10d330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                    alt="Northern Heights Branch"
                    width={600}
                    height={256}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                      NEW
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {t("northern_heights")}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {t("northern_heights_desc")}
                  </p>
                  <div className="space-y-3 text-gray-700">
                    <p className="flex items-start border-l-2 border-amber-500 pl-3">
                      <span className="font-medium mr-2">{t("address")}:</span>
                      <span>789 North Street, Heights Mall</span>
                    </p>
                    <p className="flex items-start border-l-2 border-amber-500 pl-3">
                      <span className="font-medium mr-2">{t("contact")}:</span>
                      <span>+1 (123) 456-7892</span>
                    </p>
                    <p className="flex items-start border-l-2 border-amber-500 pl-3">
                      <span className="font-medium mr-2">{t("hours")}:</span>
                      <span>Daily, 11:00 AM - 11:00 PM</span>
                    </p>
                  </div>
                  <div className="mt-6">
                    <a
                      href="#"
                      className="inline-block text-orange-500 font-medium hover:text-orange-600 transition-colors"
                    >
                      {t("get_directions")}{" "}
                      <span className="ml-1 arowIcon">→</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-orange-700"></div>
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1558030006-450675393462?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80')",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          ></div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-md rounded-2xl p-12 shadow-xl border border-white/20">
              <div className="text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-md">
                  {t("cta_title")}
                </h2>
                <div className="h-1 w-32 bg-white mx-auto mb-8 rounded-full opacity-70"></div>
                <p className="text-xl text-white/90 max-w-3xl mx-auto mb-10 leading-relaxed">
                  {t("cta_subtitle")}
                </p>
                <div className="flex flex-wrap justify-center gap-6">
                  <a
                    href="#"
                    className="inline-block bg-white text-orange-700 hover:bg-orange-50 px-8 py-4 rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    {t("make_reservation")}
                  </a>
                  <a
                    href="#"
                    className="inline-block bg-transparent border-2 border-white text-white hover:bg-white hover:text-orange-700 px-8 py-4 rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    {t("order_online")}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
}

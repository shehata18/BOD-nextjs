"use client";

import { useTranslations, useLocale } from "next-intl";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "@/i18n/routing";

export default function PowerMarkAuto() {
    const currentLocale = useLocale();
    const t = useTranslations("subsidiaries.powermark");

    // Force component to re-render when locale changes
    const [translationsLoaded, setTranslationsLoaded] = useState(false);

    // Helper function to safely get translations
    const getTranslation = (key) => {
        try {
            const translation = t(key);
            // If the translation looks like a key, it might not be loaded correctly
            if (translation.includes('subsidiaries.powermark.')) {
                console.error(`Translation key not replaced: ${key}`);
                // For Arabic, provide a fallback
                return currentLocale === 'ar' ?
                    // Hardcoded Arabic translations for critical elements if needed
                    {
                        'title': 'باور مارك للسيارات',
                        'subtitle': 'شريكك الموثوق في العناية بالسيارات والتميز',
                        'explore_services': 'استكشف خدماتنا',
                        'contact_us': 'اتصل بنا'
                    }[key] || translation : translation;
            }
            return translation;
        } catch (error) {
            console.error(`Error getting translation for ${key}:`, error);
            return key;
        }
    };

    useEffect(() => {
        // Try to access a translation to verify it's loaded
        console.log("Current locale:", currentLocale);
        console.log("Title translation:", getTranslation("title"));
        console.log("Subtitle translation:", getTranslation("subtitle"));

        // Mark translations as loaded
        setTranslationsLoaded(true);

        // Initialize AOS
        AOS.init({
            duration: 800,
            once: false,
            mirror: true,
            easing: "ease-in-out",
        });

        // Scroll to top button functionality
        const handleScroll = () => {
            const scrollToTopButton = document.querySelector('.scroll-to-top');
            if (scrollToTopButton) {
                if (window.pageYOffset > 300) {
                    scrollToTopButton.classList.add('active');
                } else {
                    scrollToTopButton.classList.remove('active');
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [currentLocale, t]);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <>
            {/* Hero Section */ }
            <section className="relative h-screen flex items-center justify-center">
                <div className="absolute inset-0">
                    <img src="https://images.unsplash.com/photo-1487754180451-c456f719a1fc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                        alt="Auto Service Banner" className="w-full h-full object-cover filter brightness-50" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/75 via-blue-800/65 to-black/70"></div>
                <div className="relative z-10 text-center px-4" data-aos="fade-up" data-aos-duration="1200">
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight" data-aos="zoom-in"
                        data-aos-delay="300">
                        { getTranslation("title") }
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-8" data-aos="fade-up"
                        data-aos-delay="600">
                        { getTranslation("subtitle") }
                    </p>
                    <div className="flex flex-wrap justify-center gap-4" data-aos="fade-up" data-aos-delay="900">
                        <a
                            href="#services"
                            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                            onClick={ (e) => {
                                e.preventDefault();
                                document.getElementById('services').scrollIntoView({
                                    behavior: 'smooth'
                                });
                            } }
                        >
                            { getTranslation("explore_services") }
                        </a>
                        <Link
                            href="/contact"
                            locale={ currentLocale }
                            className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-medium hover:bg-white hover:text-blue-900 transition-all duration-300 hover:shadow-lg"
                        >
                            { getTranslation("contact_us") }
                        </Link>
                    </div>
                </div>
            </section>

            {/* Excellence in Automotive Care Section */ }
            <section className="py-24 bg-white" id="about">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-1/2" data-aos="fade-right" data-aos-duration="1000">
                            <div className="relative group">
                                <div
                                    className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-blue-400 rounded-3xl opacity-75 blur transition duration-300 group-hover:opacity-100">
                                </div>
                                <div className="relative">
                                    <img src="https://images.pexels.com/photos/3807386/pexels-photo-3807386.jpeg"
                                        alt="Power Mark Auto Service Facility"
                                        className="rounded-2xl shadow-2xl w-full h-[400px] object-cover transform transition duration-300 group-hover:scale-[1.02]"
                                        loading="lazy" />
                                    <div
                                        className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-2xl shadow-xl transform transition duration-300 hover:scale-105 hover:bg-blue-700">
                                        <p className="text-2xl font-bold">{ t("years_experience") }</p>
                                        <p className="text-sm">{ t("of_excellence") }</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/2" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200">
                            <h2 className="text-4xl font-bold text-gray-900 mb-6">{ t("excellence_title") }</h2>
                            <p className="text-xl text-gray-600 mb-8 leading-relaxed">{ t("excellence_desc") }</p>
                            <div className="grid grid-cols-2 gap-6 mb-8">
                                <div className="bg-gray-50 p-6 rounded-xl transform transition duration-300 hover:scale-105 hover:shadow-lg"
                                    data-aos="zoom-in" data-aos-delay="400">
                                    <i className="fas fa-tools text-3xl text-blue-600 mb-4"></i>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">{ t("expert_technicians_title") }</h3>
                                    <p className="text-gray-600">{ t("expert_technicians_desc") }</p>
                                </div>
                                <div className="bg-gray-50 p-6 rounded-xl transform transition duration-300 hover:scale-105 hover:shadow-lg"
                                    data-aos="zoom-in" data-aos-delay="600">
                                    <i className="fas fa-award text-3xl text-blue-600 mb-4"></i>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">{ t("quality_guaranteed_title") }</h3>
                                    <p className="text-gray-600">{ t("quality_guaranteed_desc") }</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */ }
            <section className="py-24 bg-gradient-to-b from-white to-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16" data-aos="fade-up">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{ t("why_choose_title") }</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            { t("why_choose_subtitle") }
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                        {/* Feature 1: Expert Team */ }
                        <div className="group" data-aos="fade-up" data-aos-delay="100">
                            <div
                                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden">
                                <div
                                    className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-bl-full transform transition-transform group-hover:scale-150 duration-500">
                                </div>
                                <div className="relative z-10">
                                    <div
                                        className="mb-6 flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-2xl transform transition-transform group-hover:rotate-6 duration-300">
                                        <i className="fas fa-users-cog text-2xl"></i>
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{ t("feature1_title") }</h3>
                                    <p className="text-gray-600 mb-4">{ t("feature1_desc") }</p>
                                    <ul className="space-y-3">
                                        <li className="flex items-center text-gray-600">
                                            <i className="fas fa-check-circle text-blue-600 mr-2"></i>
                                            { t("feature1_point1") }
                                        </li>
                                        <li className="flex items-center text-gray-600">
                                            <i className="fas fa-check-circle text-blue-600 mr-2"></i>
                                            { t("feature1_point2") }
                                        </li>
                                        <li className="flex items-center text-gray-600">
                                            <i className="fas fa-check-circle text-blue-600 mr-2"></i>
                                            { t("feature1_point3") }
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Feature 2: Advanced Technology */ }
                        <div className="group" data-aos="fade-up" data-aos-delay="200">
                            <div
                                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden">
                                <div
                                    className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-bl-full transform transition-transform group-hover:scale-150 duration-500">
                                </div>
                                <div className="relative z-10">
                                    <div
                                        className="mb-6 flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-2xl transform transition-transform group-hover:rotate-6 duration-300">
                                        <i className="fas fa-microchip text-2xl"></i>
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{ t("feature2_title") }</h3>
                                    <p className="text-gray-600 mb-4">{ t("feature2_desc") }</p>
                                    <ul className="space-y-3">
                                        <li className="flex items-center text-gray-600">
                                            <i className="fas fa-check-circle text-blue-600 mr-2"></i>
                                            { t("feature2_point1") }
                                        </li>
                                        <li className="flex items-center text-gray-600">
                                            <i className="fas fa-check-circle text-blue-600 mr-2"></i>
                                            { t("feature2_point2") }
                                        </li>
                                        <li className="flex items-center text-gray-600">
                                            <i className="fas fa-check-circle text-blue-600 mr-2"></i>
                                            { t("feature2_point3") }
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Feature 3: Quality Guarantee */ }
                        <div className="group" data-aos="fade-up" data-aos-delay="300">
                            <div
                                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden">
                                <div
                                    className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-bl-full transform transition-transform group-hover:scale-150 duration-500">
                                </div>
                                <div className="relative z-10">
                                    <div
                                        className="mb-6 flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-2xl transform transition-transform group-hover:rotate-6 duration-300">
                                        <i className="fas fa-award text-2xl"></i>
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{ t("feature3_title") }</h3>
                                    <p className="text-gray-600 mb-4">{ t("feature3_desc") }</p>
                                    <ul className="space-y-3">
                                        <li className="flex items-center text-gray-600">
                                            <i className="fas fa-check-circle text-blue-600 mr-2"></i>
                                            { t("feature3_point1") }
                                        </li>
                                        <li className="flex items-center text-gray-600">
                                            <i className="fas fa-check-circle text-blue-600 mr-2"></i>
                                            { t("feature3_point2") }
                                        </li>
                                        <li className="flex items-center text-gray-600">
                                            <i className="fas fa-check-circle text-blue-600 mr-2"></i>
                                            { t("feature3_point3") }
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Stats Section */ }
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16" data-aos="fade-up" data-aos-delay="400">
                        <div
                            className="text-center p-6 bg-white rounded-2xl shadow-lg transform transition-transform hover:scale-105 duration-300">
                            <div className="text-blue-600 text-4xl font-bold mb-2">{ t("stat1_value") }</div>
                            <div className="text-gray-600">{ t("stat1_title") }</div>
                        </div>
                        <div
                            className="text-center p-6 bg-white rounded-2xl shadow-lg transform transition-transform hover:scale-105 duration-300">
                            <div className="text-blue-600 text-4xl font-bold mb-2">{ t("stat2_value") }</div>
                            <div className="text-gray-600">{ t("stat2_title") }</div>
                        </div>
                        <div
                            className="text-center p-6 bg-white rounded-2xl shadow-lg transform transition-transform hover:scale-105 duration-300">
                            <div className="text-blue-600 text-4xl font-bold mb-2">{ t("stat3_value") }</div>
                            <div className="text-gray-600">{ t("stat3_title") }</div>
                        </div>
                        <div
                            className="text-center p-6 bg-white rounded-2xl shadow-lg transform transition-transform hover:scale-105 duration-300">
                            <div className="text-blue-600 text-4xl font-bold mb-2">{ t("stat4_value") }</div>
                            <div className="text-gray-600">{ t("stat4_title") }</div>
                        </div>
                    </div>

                    {/* Trust Badges */ }
                    <div className="flex flex-wrap justify-center items-center gap-8 mt-16" data-aos="fade-up"
                        data-aos-delay="500">
                        <div className="flex items-center bg-white px-6 py-3 rounded-xl shadow-md">
                            <i className="fas fa-certificate text-blue-600 text-2xl mr-3"></i>
                            <span className="text-gray-700 font-medium">{ t("trust_badge1") }</span>
                        </div>
                        <div className="flex items-center bg-white px-6 py-3 rounded-xl shadow-md">
                            <i className="fas fa-tools text-blue-600 text-2xl mr-3"></i>
                            <span className="text-gray-700 font-medium">{ t("trust_badge2") }</span>
                        </div>
                        <div className="flex items-center bg-white px-6 py-3 rounded-xl shadow-md">
                            <i className="fas fa-shield-alt text-blue-600 text-2xl mr-3"></i>
                            <span className="text-gray-700 font-medium">{ t("trust_badge3") }</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Premium Services Section */ }
            <section className="py-24 bg-gray-50" id="services">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16" data-aos="fade-up">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">{ t("services_title") }</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            { t("services_subtitle") }
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Service Card 1: Routine Maintenance */ }
                        <div className="service-card group" data-aos="fade-up" data-aos-delay="200">
                            <div
                                className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition duration-500 hover:scale-105">
                                <div className="relative">
                                    <img src="https://images.pexels.com/photos/3807455/pexels-photo-3807455.jpeg"
                                        alt={ t("service1_title") }
                                        className="w-full h-48 object-cover transform transition duration-500 group-hover:scale-110" />
                                    <div
                                        className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition duration-300">
                                    </div>
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center mb-4">
                                        <i
                                            className="fas fa-oil-can text-3xl text-blue-600 mr-4 transform transition duration-300 group-hover:scale-110"></i>
                                        <h3 className="text-xl font-bold text-gray-900">{ t("service1_title") }</h3>
                                    </div>
                                    <p className="text-gray-600 mb-4">
                                        { t("service1_desc") }
                                    </p>
                                    <ul className="space-y-2 text-gray-600">
                                        <li className="flex items-center transform transition duration-300 hover:translate-x-2">
                                            <i className="fas fa-check text-blue-600 mr-2"></i>
                                            { t("service1_feature1") }
                                        </li>
                                        <li className="flex items-center transform transition duration-300 hover:translate-x-2">
                                            <i className="fas fa-check text-blue-600 mr-2"></i>
                                            { t("service1_feature2") }
                                        </li>
                                        <li className="flex items-center transform transition duration-300 hover:translate-x-2">
                                            <i className="fas fa-check text-blue-600 mr-2"></i>
                                            { t("service1_feature3") }
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Service Card 2: Express Service */ }
                        <div className="service-card group" data-aos="fade-up" data-aos-delay="300">
                            <div
                                className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition duration-500 hover:scale-105">
                                <div className="relative">
                                    <img src="https://images.pexels.com/photos/3806249/pexels-photo-3806249.jpeg"
                                        alt={ t("service2_title") }
                                        className="w-full h-48 object-cover transform transition duration-500 group-hover:scale-110" />
                                    <div
                                        className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition duration-300">
                                    </div>
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center mb-4">
                                        <i
                                            className="fas fa-clock text-3xl text-blue-600 mr-4 transform transition duration-300 group-hover:scale-110"></i>
                                        <h3 className="text-xl font-bold text-gray-900">{ t("service2_title") }</h3>
                                    </div>
                                    <p className="text-gray-600 mb-4">
                                        { t("service2_desc") }
                                    </p>
                                    <ul className="space-y-2 text-gray-600">
                                        <li className="flex items-center transform transition duration-300 hover:translate-x-2">
                                            <i className="fas fa-check text-blue-600 mr-2"></i>
                                            { t("service2_feature1") }
                                        </li>
                                        <li className="flex items-center transform transition duration-300 hover:translate-x-2">
                                            <i className="fas fa-check text-blue-600 mr-2"></i>
                                            { t("service2_feature2") }
                                        </li>
                                        <li className="flex items-center transform transition duration-300 hover:translate-x-2">
                                            <i className="fas fa-check text-blue-600 mr-2"></i>
                                            { t("service2_feature3") }
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Service Card 3: Mechanical Repairs */ }
                        <div className="service-card group" data-aos="fade-up" data-aos-delay="400">
                            <div
                                className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition duration-500 hover:scale-105">
                                <div className="relative">
                                    <img src="https://images.pexels.com/photos/3807386/pexels-photo-3807386.jpeg"
                                        alt={ t("service3_title") }
                                        className="w-full h-48 object-cover transform transition duration-500 group-hover:scale-110" />
                                    <div
                                        className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition duration-300">
                                    </div>
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center mb-4">
                                        <i
                                            className="fas fa-wrench text-3xl text-blue-600 mr-4 transform transition duration-300 group-hover:scale-110"></i>
                                        <h3 className="text-xl font-bold text-gray-900">{ t("service3_title") }</h3>
                                    </div>
                                    <p className="text-gray-600 mb-4">
                                        { t("service3_desc") }
                                    </p>
                                    <ul className="space-y-2 text-gray-600">
                                        <li className="flex items-center transform transition duration-300 hover:translate-x-2">
                                            <i className="fas fa-check text-blue-600 mr-2"></i>
                                            { t("service3_feature1") }
                                        </li>
                                        <li className="flex items-center transform transition duration-300 hover:translate-x-2">
                                            <i className="fas fa-check text-blue-600 mr-2"></i>
                                            { t("service3_feature2") }
                                        </li>
                                        <li className="flex items-center transform transition duration-300 hover:translate-x-2">
                                            <i className="fas fa-check text-blue-600 mr-2"></i>
                                            { t("service3_feature3") }
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Service Card 4: Performance Upgrades */ }
                        <div className="service-card group" data-aos="fade-up" data-aos-delay="500">
                            <div
                                className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition duration-500 hover:scale-105">
                                <div className="relative">
                                    <img src="https://images.pexels.com/photos/3807811/pexels-photo-3807811.jpeg"
                                        alt={ t("service4_title") }
                                        className="w-full h-48 object-cover transform transition duration-500 group-hover:scale-110" />
                                    <div
                                        className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition duration-300">
                                    </div>
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center mb-4">
                                        <i
                                            className="fas fa-tachometer-alt text-3xl text-blue-600 mr-4 transform transition duration-300 group-hover:scale-110"></i>
                                        <h3 className="text-xl font-bold text-gray-900">{ t("service4_title") }</h3>
                                    </div>
                                    <p className="text-gray-600 mb-4">
                                        { t("service4_desc") }
                                    </p>
                                    <ul className="space-y-2 text-gray-600">
                                        <li className="flex items-center transform transition duration-300 hover:translate-x-2">
                                            <i className="fas fa-check text-blue-600 mr-2"></i>
                                            { t("service4_feature1") }
                                        </li>
                                        <li className="flex items-center transform transition duration-300 hover:translate-x-2">
                                            <i className="fas fa-check text-blue-600 mr-2"></i>
                                            { t("service4_feature2") }
                                        </li>
                                        <li className="flex items-center transform transition duration-300 hover:translate-x-2">
                                            <i className="fas fa-check text-blue-600 mr-2"></i>
                                            { t("service4_feature3") }
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Service Card 5: Diagnostic Services */ }
                        <div className="service-card group" data-aos="fade-up" data-aos-delay="600">
                            <div
                                className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition duration-500 hover:scale-105">
                                <div className="relative">
                                    <img src="https://images.pexels.com/photos/3806249/pexels-photo-3806249.jpeg"
                                        alt={ t("service5_title") }
                                        className="w-full h-48 object-cover transform transition duration-500 group-hover:scale-110" />
                                    <div
                                        className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition duration-300">
                                    </div>
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center mb-4">
                                        <i
                                            className="fas fa-laptop text-3xl text-blue-600 mr-4 transform transition duration-300 group-hover:scale-110"></i>
                                        <h3 className="text-xl font-bold text-gray-900">{ t("service5_title") }</h3>
                                    </div>
                                    <p className="text-gray-600 mb-4">
                                        { t("service5_desc") }
                                    </p>
                                    <ul className="space-y-2 text-gray-600">
                                        <li className="flex items-center transform transition duration-300 hover:translate-x-2">
                                            <i className="fas fa-check text-blue-600 mr-2"></i>
                                            { t("service5_feature1") }
                                        </li>
                                        <li className="flex items-center transform transition duration-300 hover:translate-x-2">
                                            <i className="fas fa-check text-blue-600 mr-2"></i>
                                            { t("service5_feature2") }
                                        </li>
                                        <li className="flex items-center transform transition duration-300 hover:translate-x-2">
                                            <i className="fas fa-check text-blue-600 mr-2"></i>
                                            { t("service5_feature3") }
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Service Card 6: Preventive Maintenance */ }
                        <div className="service-card group" data-aos="fade-up" data-aos-delay="700">
                            <div
                                className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition duration-500 hover:scale-105">
                                <div className="relative">
                                    <img src="https://images.pexels.com/photos/3807433/pexels-photo-3807433.jpeg"
                                        alt={ t("service6_title") }
                                        className="w-full h-48 object-cover transform transition duration-500 group-hover:scale-110" />
                                    <div
                                        className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition duration-300">
                                    </div>
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center mb-4">
                                        <i
                                            className="fas fa-shield-alt text-3xl text-blue-600 mr-4 transform transition duration-300 group-hover:scale-110"></i>
                                        <h3 className="text-xl font-bold text-gray-900">{ t("service6_title") }</h3>
                                    </div>
                                    <p className="text-gray-600 mb-4">
                                        { t("service6_desc") }
                                    </p>
                                    <ul className="space-y-2 text-gray-600">
                                        <li className="flex items-center transform transition duration-300 hover:translate-x-2">
                                            <i className="fas fa-check text-blue-600 mr-2"></i>
                                            { t("service6_feature1") }
                                        </li>
                                        <li className="flex items-center transform transition duration-300 hover:translate-x-2">
                                            <i className="fas fa-check text-blue-600 mr-2"></i>
                                            { t("service6_feature2") }
                                        </li>
                                        <li className="flex items-center transform transition duration-300 hover:translate-x-2">
                                            <i className="fas fa-check text-blue-600 mr-2"></i>
                                            { t("service6_feature3") }
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Customization Studio Section */ }
            <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
                {/* Background Decoration */ }
                <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-blue-50 to-transparent"></div>
                <div className="absolute -bottom-10 right-0 w-72 h-72 bg-blue-50 rounded-full opacity-50"></div>
                <div className="absolute bottom-40 left-10 w-40 h-40 bg-blue-100 rounded-full opacity-30"></div>

                <div className="container mx-auto px-4 relative">
                    <div className="text-center mb-16" data-aos="fade-up">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">{ t("customization_title") }</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            { t("customization_subtitle") }
                        </p>
                    </div>

                    <div className="flex flex-col lg:flex-row items-stretch gap-8 mb-16">
                        {/* Left Side - Large Project Showcase */ }
                        <div className="lg:w-1/2" data-aos="fade-right" data-aos-duration="1000">
                            <div className="relative h-full group">
                                <div className="relative h-full overflow-hidden rounded-3xl shadow-xl">
                                    <img
                                        src="https://images.unsplash.com/photo-1610647752706-3bb12232b3ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                                        alt="Custom Vehicle Project"
                                        className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex flex-col justify-end p-8 text-white">
                                        <div className="transform transition duration-500 translate-y-4 group-hover:translate-y-0">
                                            <h3 className="text-3xl font-bold mb-3">{ t("customization_showcase_title") }</h3>
                                            <p className="mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                                { t("customization_showcase_desc") }
                                            </p>
                                            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full inline-flex items-center transition duration-300">
                                                <span>{ t("view_gallery") }</span>
                                                <i className="fas fa-arrow-right ml-2"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Side - Customization Options */ }
                        <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Custom Option 1 */ }
                            <div className="custom-option group" data-aos="zoom-in" data-aos-delay="200">
                                <div className="bg-white rounded-2xl shadow-lg p-6 h-full transform transition duration-300 hover:-translate-y-2 hover:shadow-xl flex flex-col">
                                    <div className="mb-4 text-center bg-blue-50 w-16 h-16 mx-auto rounded-xl flex items-center justify-center">
                                        <i className="fas fa-paint-brush text-2xl text-blue-600 transform transition duration-300 group-hover:scale-110"></i>
                                    </div>
                                    <h3 className="text-xl font-bold text-center text-gray-900 mb-3">{ t("customization_option1_title") }</h3>
                                    <p className="text-gray-600 text-center mb-4 flex-grow">
                                        { t("customization_option1_desc") }
                                    </p>
                                    <ul className="space-y-2 text-gray-600 mb-4">
                                        <li className="flex items-center">
                                            <i className="fas fa-check text-blue-600 mr-2"></i>
                                            { t("customization_option1_feature1") }
                                        </li>
                                        <li className="flex items-center">
                                            <i className="fas fa-check text-blue-600 mr-2"></i>
                                            { t("customization_option1_feature2") }
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {/* Custom Option 2 */ }
                            <div className="custom-option group" data-aos="zoom-in" data-aos-delay="300">
                                <div className="bg-white rounded-2xl shadow-lg p-6 h-full transform transition duration-300 hover:-translate-y-2 hover:shadow-xl flex flex-col">
                                    <div className="mb-4 text-center bg-blue-50 w-16 h-16 mx-auto rounded-xl flex items-center justify-center">
                                        <i className="fas fa-car-alt text-2xl text-blue-600 transform transition duration-300 group-hover:scale-110"></i>
                                    </div>
                                    <h3 className="text-xl font-bold text-center text-gray-900 mb-3">{ t("customization_option2_title") }</h3>
                                    <p className="text-gray-600 text-center mb-4 flex-grow">
                                        { t("customization_option2_desc") }
                                    </p>
                                    <ul className="space-y-2 text-gray-600 mb-4">
                                        <li className="flex items-center">
                                            <i className="fas fa-check text-blue-600 mr-2"></i>
                                            { t("customization_option2_feature1") }
                                        </li>
                                        <li className="flex items-center">
                                            <i className="fas fa-check text-blue-600 mr-2"></i>
                                            { t("customization_option2_feature2") }
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {/* Custom Option 3 */ }
                            <div className="custom-option group" data-aos="zoom-in" data-aos-delay="400">
                                <div className="bg-white rounded-2xl shadow-lg p-6 h-full transform transition duration-300 hover:-translate-y-2 hover:shadow-xl flex flex-col">
                                    <div className="mb-4 text-center bg-blue-50 w-16 h-16 mx-auto rounded-xl flex items-center justify-center">
                                        <i className="fas fa-music text-2xl text-blue-600 transform transition duration-300 group-hover:scale-110"></i>
                                    </div>
                                    <h3 className="text-xl font-bold text-center text-gray-900 mb-3">{ t("customization_option3_title") }</h3>
                                    <p className="text-gray-600 text-center mb-4 flex-grow">
                                        { t("customization_option3_desc") }
                                    </p>
                                    <ul className="space-y-2 text-gray-600 mb-4">
                                        <li className="flex items-center">
                                            <i className="fas fa-check text-blue-600 mr-2"></i>
                                            { t("customization_option3_feature1") }
                                        </li>
                                        <li className="flex items-center">
                                            <i className="fas fa-check text-blue-600 mr-2"></i>
                                            { t("customization_option3_feature2") }
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {/* Custom Option 4 */ }
                            <div className="custom-option group" data-aos="zoom-in" data-aos-delay="500">
                                <div className="bg-white rounded-2xl shadow-lg p-6 h-full transform transition duration-300 hover:-translate-y-2 hover:shadow-xl flex flex-col">
                                    <div className="mb-4 text-center bg-blue-50 w-16 h-16 mx-auto rounded-xl flex items-center justify-center">
                                        <i className="fas fa-cogs text-2xl text-blue-600 transform transition duration-300 group-hover:scale-110"></i>
                                    </div>
                                    <h3 className="text-xl font-bold text-center text-gray-900 mb-3">{ t("customization_option4_title") }</h3>
                                    <p className="text-gray-600 text-center mb-4 flex-grow">
                                        { t("customization_option4_desc") }
                                    </p>
                                    <ul className="space-y-2 text-gray-600 mb-4">
                                        <li className="flex items-center">
                                            <i className="fas fa-check text-blue-600 mr-2"></i>
                                            { t("customization_option4_feature1") }
                                        </li>
                                        <li className="flex items-center">
                                            <i className="fas fa-check text-blue-600 mr-2"></i>
                                            { t("customization_option4_feature2") }
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Process Timeline */ }
                    <div className="mt-16" data-aos="fade-up">
                        <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">{ t("customization_process_title") }</h3>

                        <div className="relative">
                            {/* Timeline Line */ }
                            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200 z-0"></div>

                            <div className="grid md:grid-cols-4 gap-8">
                                {/* Step 1 */ }
                                <div className="md:col-span-2 md:text-right relative" data-aos="fade-right" data-aos-delay="100">
                                    <div className="hidden md:block absolute right-0 top-6 transform translate-x-1/2 w-6 h-6 rounded-full border-4 border-blue-600 bg-white z-10"></div>
                                    <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition duration-300 md:mr-8">
                                        <h4 className="text-xl font-bold text-blue-600 mb-2">{ t("customization_step1_title") }</h4>
                                        <p className="text-gray-600">{ t("customization_step1_desc") }</p>
                                    </div>
                                </div>
                                <div className="md:col-span-2 hidden md:block"></div>

                                {/* Step 2 */ }
                                <div className="md:col-span-2 hidden md:block"></div>
                                <div className="md:col-span-2 relative" data-aos="fade-left" data-aos-delay="200">
                                    <div className="hidden md:block absolute left-0 top-6 transform -translate-x-1/2 w-6 h-6 rounded-full border-4 border-blue-600 bg-white z-10"></div>
                                    <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition duration-300 md:ml-8">
                                        <h4 className="text-xl font-bold text-blue-600 mb-2">{ t("customization_step2_title") }</h4>
                                        <p className="text-gray-600">{ t("customization_step2_desc") }</p>
                                    </div>
                                </div>

                                {/* Step 3 */ }
                                <div className="md:col-span-2 md:text-right relative" data-aos="fade-right" data-aos-delay="300">
                                    <div className="hidden md:block absolute right-0 top-6 transform translate-x-1/2 w-6 h-6 rounded-full border-4 border-blue-600 bg-white z-10"></div>
                                    <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition duration-300 md:mr-8">
                                        <h4 className="text-xl font-bold text-blue-600 mb-2">{ t("customization_step3_title") }</h4>
                                        <p className="text-gray-600">{ t("customization_step3_desc") }</p>
                                    </div>
                                </div>
                                <div className="md:col-span-2 hidden md:block"></div>

                                {/* Step 4 */ }
                                <div className="md:col-span-2 hidden md:block"></div>
                                <div className="md:col-span-2 relative" data-aos="fade-left" data-aos-delay="400">
                                    <div className="hidden md:block absolute left-0 top-6 transform -translate-x-1/2 w-6 h-6 rounded-full border-4 border-blue-600 bg-white z-10"></div>
                                    <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition duration-300 md:ml-8">
                                        <h4 className="text-xl font-bold text-blue-600 mb-2">{ t("customization_step4_title") }</h4>
                                        <p className="text-gray-600">{ t("customization_step4_desc") }</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* CTA */ }
                    <div className="mt-16 text-center" data-aos="fade-up">
                        <Link
                            href="/contact"
                            locale={ currentLocale }
                            className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                            <i className="fas fa-palette mr-2"></i>
                            { t("customization_cta_button") }
                        </Link>
                        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                            { t("customization_cta_desc") }
                        </p>
                    </div>
                </div>
            </section>

            {/* CTA Section */ }
            <section className="relative py-24 bg-blue-900 text-white overflow-hidden">
                <div className="absolute inset-0">
                    <img src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                        alt="Car Background" className="w-full h-full object-cover opacity-20" />
                </div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center max-w-4xl mx-auto" data-aos="fade-up">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">{ t("cta_title") }</h2>
                        <p className="text-xl mb-8">
                            { t("cta_desc") }
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link
                                href="/contact"
                                locale={ currentLocale }
                                className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-4 rounded-full font-medium transition duration-300 transform hover:scale-105"
                            >
                                { t("cta_button1") }
                            </Link>
                            <Link
                                href="/contact"
                                locale={ currentLocale }
                                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-full font-medium transition duration-300"
                            >
                                { t("cta_button2") }
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Scroll to top button */ }
            <div className="scroll-to-top" onClick={ scrollToTop }>
                <i className="fas fa-chevron-up"></i>
            </div>
        </>
    );
}

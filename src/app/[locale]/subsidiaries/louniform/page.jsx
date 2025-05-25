"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function LOUniformsPage() {
    const t = useTranslations("subsidiaries");

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    const [showScrollTop, setShowScrollTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setShowScrollTop(true);
            } else {
                setShowScrollTop(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <main className="bg-white min-h-screen">
            {/* Hero Section with Animation Elements */ }
            <section className="relative h-[80vh] bg-black">
                {/* Background Image */ }
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.pexels.com/photos/325876/pexels-photo-325876.jpeg"
                        alt="Professional uniforms background"
                        className="w-full h-full object-cover"
                        onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAwIiBoZWlnaHQ9IjUwMCIgdmlld0JveD0iMCAwIDUwMCA1MDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iIzFhMjA0NCI+PC9yZWN0Pjwvc3ZnPg==';
                        }}
                    />
                </div>

                {/* Gradient Overlay */ }
                <div className="absolute inset-0 z-0 bg-gradient-to-r from-blue-900/80 to-black/70" />

                {/* Floating Fashion Animation Elements */ }
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute w-20 h-20 text-white/40 left-[15%] top-[20%] animate-float1">
                        <i className="fas fa-tshirt text-5xl"></i>
                    </div>
                    <div className="absolute w-20 h-20 text-white/40 right-[25%] top-[25%] animate-float2">
                        <i className="fas fa-hat-cowboy text-5xl"></i>
                    </div>
                    <div className="absolute w-20 h-20 text-white/40 left-[35%] bottom-[33%] animate-float3">
                        <i className="fas fa-socks text-5xl"></i>
                    </div>
                    <div className="absolute w-20 h-20 text-white/40 right-[10%] top-[40%] animate-float4">
                        <i className="fas fa-shoe-prints text-5xl"></i>
                    </div>
                    <div className="absolute w-20 h-20 text-white/40 left-[10%] bottom-[20%] animate-float5">
                        <i className="fas fa-vest text-5xl"></i>
                    </div>
                    <div className="absolute w-20 h-20 text-white/40 right-[35%] bottom-[30%] animate-float6">
                        <i className="fas fa-glasses text-5xl"></i>
                    </div>
                    <div className="absolute w-20 h-20 text-white/40 left-[50%] top-[15%] animate-float7">
                        <i className="fas fa-hard-hat text-5xl"></i>
                    </div>
                    <div className="absolute w-20 h-20 text-white/40 right-[20%] bottom-[15%] animate-float8">
                        <i className="fas fa-user-tie text-5xl"></i>
                    </div>
                </div>

                <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-white">
                    <h1 className="text-5xl md:text-7xl font-bold mb-8" data-aos="fade-down">{ t("lo_uniforms_name") }</h1>
                    <p className="text-xl md:text-2xl mb-10 text-white" data-aos="fade-up" data-aos-delay="200">{ t("lo_uniforms_desc") }</p>
                    <div className="flex flex-col sm:flex-row gap-4" data-aos="fade-up" data-aos-delay="400">
                        <Link href="#contact" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
                            { t("explore_products_btn") }
                        </Link>
                        <Link href="#contact" className="bg-transparent hover:bg-white text-white hover:text-blue-600 font-semibold py-3 px-8 rounded-lg border-2 border-white transition duration-300 ease-in-out transform hover:scale-105">
                            { t("contact_us") }
                        </Link>
                    </div>
                </div>
            </section>

            {/* About Section - Modern Design */ }
            <section id="about" className="py-24 bg-gradient-to-b from-gray-50 to-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-sm uppercase font-bold text-blue-600 tracking-widest mb-2" data-aos="fade-up">{ t("lo_uniforms_about_title") }</h2>
                        <h3 className="text-4xl font-bold text-gray-900 mb-6" data-aos="fade-up" data-aos-delay="100">{ t("lo_uniforms_about_heading") }</h3>
                    </div>

                    {/* Modern Image and Content Layout */ }
                    <div className="relative">
                        {/* Background Design Element */ }
                        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-50 rounded-3xl -z-10 hidden lg:block" data-aos="fade-left"></div>

                        <div className="flex flex-col lg:flex-row gap-10 items-center">
                            {/* Image Section with Overlapping Elements */ }
                            <div className="w-full lg:w-5/12 relative" data-aos="fade-up">
                                <div className="rounded-xl overflow-hidden shadow-2xl relative z-20">
                                    <img
                                        src="https://images.pexels.com/photos/7679454/pexels-photo-7679454.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                                        alt="Fashion Designer at Work"
                                        className="w-full h-[500px] object-cover"
                                        onError={ (e) => {
                                            e.target.onerror = null;
                                            e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAwIiBoZWlnaHQ9IjUwMCIgdmlld0JveD0iMCAwIDUwMCA1MDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iI2YwZjRmOCI+PC9yZWN0Pjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMzYiIGZpbGw9IiM5OWI0ZDQiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGRvbWluYW50LWJhc2VsaW5lPSJjZW50cmFsIj5MTyBVbmlmb3JtczwvdGV4dD48L3N2Zz4=';
                                        } }
                                    />
                                </div>

                                {/* Decorative Elements */ }
                                <div className="absolute -bottom-5 -left-5 w-24 h-24 bg-blue-600 rounded-full opacity-60 z-10 hidden md:block"></div>
                                <div className="absolute -top-5 -right-5 w-16 h-16 bg-yellow-400 rounded-full opacity-60 z-10 hidden md:block"></div>

                                {/* Feature Highlight Box */ }
                                <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-4 z-30 hidden md:block" data-aos="fade-up" data-aos-delay="300">
                                    <div className="flex items-center gap-3">
                                        <div className="bg-blue-100 rounded-full p-3">
                                            <i className="fas fa-tshirt text-blue-600 text-xl"></i>
                                        </div>
                                        <div>
                                            <div className="font-medium text-gray-900">{ t("lo_uniforms_quality_badge") }</div>
                                            <div className="text-sm text-gray-600">{ t("lo_uniforms_quality_badge_desc") }</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Content Section with Modern Typography */ }
                            <div className="w-full lg:w-7/12 lg:pl-12" data-aos="fade-left">
                                <div className="lg:max-w-2xl">
                                    <div className="mb-6">
                                        <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-3">{ t("lo_uniforms_established") }</span>
                                        <h4 className="text-2xl font-bold text-gray-900 mb-4">{ t("lo_uniforms_about_brand_heading") }</h4>
                                    </div>

                                    <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                                        { t("lo_uniforms_about_p1") }
                                    </p>

                                    <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                                        { t("lo_uniforms_about_p2") }
                                    </p>

                                    {/* Feature Points */ }
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                                        <div className="flex items-start">
                                            <div className="flex-shrink-0 mr-4 mt-1">
                                                <div className="h-8 w-8 bg-blue-100 rounded-full flex items-center justify-center">
                                                    <i className="fas fa-check text-blue-600"></i>
                                                </div>
                                            </div>
                                            <div>
                                                <h5 className="font-semibold text-gray-900 mb-1">{ t("lo_uniforms_feature1_title") }</h5>
                                                <p className="text-gray-700">{ t("lo_uniforms_feature1_desc") }</p>
                                            </div>
                                        </div>

                                        <div className="flex items-start">
                                            <div className="flex-shrink-0 mr-4 mt-1">
                                                <div className="h-8 w-8 bg-blue-100 rounded-full flex items-center justify-center">
                                                    <i className="fas fa-check text-blue-600"></i>
                                                </div>
                                            </div>
                                            <div>
                                                <h5 className="font-semibold text-gray-900 mb-1">{ t("lo_uniforms_feature2_title") }</h5>
                                                <p className="text-gray-700">{ t("lo_uniforms_feature2_desc") }</p>
                                            </div>
                                        </div>

                                        <div className="flex items-start">
                                            <div className="flex-shrink-0 mr-4 mt-1">
                                                <div className="h-8 w-8 bg-blue-100 rounded-full flex items-center justify-center">
                                                    <i className="fas fa-check text-blue-600"></i>
                                                </div>
                                            </div>
                                            <div>
                                                <h5 className="font-semibold text-gray-900 mb-1">{ t("lo_uniforms_feature3_title") }</h5>
                                                <p className="text-gray-700">{ t("lo_uniforms_feature3_desc") }</p>
                                            </div>
                                        </div>

                                        <div className="flex items-start">
                                            <div className="flex-shrink-0 mr-4 mt-1">
                                                <div className="h-8 w-8 bg-blue-100 rounded-full flex items-center justify-center">
                                                    <i className="fas fa-check text-blue-600"></i>
                                                </div>
                                            </div>
                                            <div>
                                                <h5 className="font-semibold text-gray-900 mb-1">{ t("lo_uniforms_feature4_title") }</h5>
                                                <p className="text-gray-700">{ t("lo_uniforms_feature4_desc") }</p>
                                            </div>
                                        </div>
                                    </div>

                                    <Link href="#contact" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
                                        { t("lo_uniforms_learn_more_process") }
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Industry Expertise Section */ }
                    <div className="mt-24">
                        <h4 className="text-xl font-semibold text-gray-900 mb-8 text-center" data-aos="fade-up">{ t("lo_uniforms_expertise_title") }</h4>
                        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
                            <div className="bg-white rounded-lg shadow-md p-6 text-center transition-transform hover:shadow-lg hover:-translate-y-1" data-aos="fade-up" data-aos-delay="200">
                                <div className="h-20 w-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <i className="fas fa-user-tie text-blue-600 text-2xl"></i>
                                </div>
                                <h5 className="font-semibold text-lg mb-2">{ t("lo_uniforms_corporate") }</h5>
                                <p className="text-gray-600">{ t("lo_uniforms_corporate_desc") }</p>
                            </div>

                            <div className="bg-white rounded-lg shadow-md p-6 text-center transition-transform hover:shadow-lg hover:-translate-y-1" data-aos="fade-up" data-aos-delay="250">
                                <div className="h-20 w-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <i className="fas fa-concierge-bell text-blue-600 text-2xl"></i>
                                </div>
                                <h5 className="font-semibold text-lg mb-2">{ t("lo_uniforms_hospitality") }</h5>
                                <p className="text-gray-600">{ t("lo_uniforms_hospitality_desc") }</p>
                            </div>

                            <div className="bg-white rounded-lg shadow-md p-6 text-center transition-transform hover:shadow-lg hover:-translate-y-1" data-aos="fade-up" data-aos-delay="300">
                                <div className="h-20 w-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <i className="fas fa-heartbeat text-blue-600 text-2xl"></i>
                                </div>
                                <h5 className="font-semibold text-lg mb-2">{ t("lo_uniforms_healthcare") }</h5>
                                <p className="text-gray-600">{ t("lo_uniforms_healthcare_desc") }</p>
                            </div>

                            <div className="bg-white rounded-lg shadow-md p-6 text-center transition-transform hover:shadow-lg hover:-translate-y-1" data-aos="fade-up" data-aos-delay="350">
                                <div className="h-20 w-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <i className="fas fa-graduation-cap text-blue-600 text-2xl"></i>
                                </div>
                                <h5 className="font-semibold text-lg mb-2">{ t("lo_uniforms_education") }</h5>
                                <p className="text-gray-600">{ t("lo_uniforms_education_desc") }</p>
                            </div>

                            <div className="bg-white rounded-lg shadow-md p-6 text-center transition-transform hover:shadow-lg hover:-translate-y-1" data-aos="fade-up" data-aos-delay="400">
                                <div className="h-20 w-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <i className="fas fa-hard-hat text-blue-600 text-2xl"></i>
                                </div>
                                <h5 className="font-semibold text-lg mb-2">{ t("lo_uniforms_industrial") }</h5>
                                <p className="text-gray-600">{ t("lo_uniforms_industrial_desc") }</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Products & Services */ }
            <section id="services" className="py-20">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-sm uppercase font-bold text-blue-600 tracking-widest mb-2" data-aos="fade-up">{ t("lo_uniforms_products_title") }</h2>
                        <h3 className="text-4xl font-bold text-gray-900 mb-6" data-aos="fade-up" data-aos-delay="100">{ t("lo_uniforms_products_heading") }</h3>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="150">{ t("lo_uniforms_products_desc") }</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:shadow-lg hover:-translate-y-1" data-aos="fade-up" data-aos-delay="200">
                            <div className="h-48">
                                <img 
                                    src="https://images.pexels.com/photos/3755706/pexels-photo-3755706.jpeg" 
                                    alt="Professional tailoring"
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                        e.target.onerror = null;
                                        e.target.parentElement.className = 'h-48 bg-blue-100 flex items-center justify-center';
                                        e.target.replaceWith(document.createElement('i')).className = 'fas fa-tshirt text-blue-600 text-5xl';
                                    }}
                                />
                            </div>
                            <div className="p-6">
                                <h4 className="font-semibold text-xl mb-3">{ t("lo_uniforms_service1") }</h4>
                                <p className="text-gray-600 mb-4">{ t("lo_uniforms_tailoring_desc") }</p>
                                <Link href="/contact" className="text-blue-600 hover:text-blue-800 font-medium">
                                    { t("contact_us") } →
                                </Link>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:shadow-lg hover:-translate-y-1" data-aos="fade-up" data-aos-delay="250">
                            <div className="h-48">
                                <img 
                                    src="https://images.pexels.com/photos/1620788/pexels-photo-1620788.jpeg" 
                                    alt="Bulk Manufacturing and Safety Equipment"
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                        e.target.onerror = null;
                                        e.target.parentElement.className = 'h-48 bg-blue-100 flex items-center justify-center';
                                        e.target.replaceWith(document.createElement('i')).className = 'fas fa-industry text-blue-600 text-5xl';
                                    }}
                                />
                            </div>
                            <div className="p-6">
                                <h4 className="font-semibold text-xl mb-3">{ t("lo_uniforms_service2") }</h4>
                                <p className="text-gray-600 mb-4">{ t("lo_uniforms_safety_desc") }</p>
                                <Link href="/contact" className="text-blue-600 hover:text-blue-800 font-medium">
                                    { t("contact_us") } →
                                </Link>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:shadow-lg hover:-translate-y-1" data-aos="fade-up" data-aos-delay="300">
                            <div className="h-48">
                                <img 
                                    src="https://images.pexels.com/photos/5698851/pexels-photo-5698851.jpeg" 
                                    alt="Corporate uniforms"
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                        e.target.onerror = null;
                                        e.target.parentElement.className = 'h-48 bg-blue-100 flex items-center justify-center';
                                        e.target.replaceWith(document.createElement('i')).className = 'fas fa-building text-blue-600 text-5xl';
                                    }}
                                />
                            </div>
                            <div className="p-6">
                                <h4 className="font-semibold text-xl mb-3">{ t("lo_uniforms_service3") }</h4>
                                <p className="text-gray-600 mb-4">{ t("lo_uniforms_distribution_desc") }</p>
                                <Link href="/contact" className="text-blue-600 hover:text-blue-800 font-medium">
                                    { t("contact_us") } →
                                </Link>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:shadow-lg hover:-translate-y-1" data-aos="fade-up" data-aos-delay="350">
                            <div className="h-48">
                                <img 
                                    src="https://images.pexels.com/photos/2760243/pexels-photo-2760243.jpeg" 
                                    alt="Safety wear"
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                        e.target.onerror = null;
                                        e.target.parentElement.className = 'h-48 bg-blue-100 flex items-center justify-center';
                                        e.target.replaceWith(document.createElement('i')).className = 'fas fa-hard-hat text-blue-600 text-5xl';
                                    }}
                                />
                            </div>
                            <div className="p-6">
                                <h4 className="font-semibold text-xl mb-3">{ t("lo_uniforms_service4") }</h4>
                                <p className="text-gray-600 mb-4">{ t("lo_uniforms_safety_desc") }</p>
                                <Link href="/contact" className="text-blue-600 hover:text-blue-800 font-medium">
                                    { t("contact_us") } →
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Industries Served */ }
            <section id="industries" className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-sm uppercase font-bold text-blue-600 tracking-widest mb-2" data-aos="fade-up">{ t("lo_uniforms_industries_title") }</h2>
                        <h3 className="text-4xl font-bold text-gray-900 mb-6" data-aos="fade-up" data-aos-delay="100">{ t("lo_uniforms_industries_heading") }</h3>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="150">{ t("lo_uniforms_industries_desc") }</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-white rounded-lg shadow-md p-6 transition-transform hover:shadow-lg hover:-translate-y-1" data-aos="fade-up" data-aos-delay="200">
                            <div className="text-blue-600 text-4xl mb-4">
                                <i className="fas fa-hotel"></i>
                            </div>
                            <h4 className="font-semibold text-xl mb-3">{ t("lo_uniforms_hospitality_industry") }</h4>
                            <p className="text-gray-600">{ t("lo_uniforms_hospitality_industry_desc") }</p>
                        </div>

                        <div className="bg-white rounded-lg shadow-md p-6 transition-transform hover:shadow-lg hover:-translate-y-1" data-aos="fade-up" data-aos-delay="250">
                            <div className="text-blue-600 text-4xl mb-4">
                                <i className="fas fa-hospital"></i>
                            </div>
                            <h4 className="font-semibold text-xl mb-3">{ t("lo_uniforms_healthcare_industry") }</h4>
                            <p className="text-gray-600">{ t("lo_uniforms_healthcare_industry_desc") }</p>
                        </div>

                        <div className="bg-white rounded-lg shadow-md p-6 transition-transform hover:shadow-lg hover:-translate-y-1" data-aos="fade-up" data-aos-delay="300">
                            <div className="text-blue-600 text-4xl mb-4">
                                <i className="fas fa-building"></i>
                            </div>
                            <h4 className="font-semibold text-xl mb-3">{ t("lo_uniforms_corporate_industry") }</h4>
                            <p className="text-gray-600">{ t("lo_uniforms_corporate_industry_desc") }</p>
                        </div>

                        <div className="bg-white rounded-lg shadow-md p-6 transition-transform hover:shadow-lg hover:-translate-y-1" data-aos="fade-up" data-aos-delay="350">
                            <div className="text-blue-600 text-4xl mb-4">
                                <i className="fas fa-graduation-cap"></i>
                            </div>
                            <h4 className="font-semibold text-xl mb-3">{ t("lo_uniforms_education_industry") }</h4>
                            <p className="text-gray-600">{ t("lo_uniforms_education_industry_desc") }</p>
                        </div>

                        <div className="bg-white rounded-lg shadow-md p-6 transition-transform hover:shadow-lg hover:-translate-y-1" data-aos="fade-up" data-aos-delay="400">
                            <div className="text-blue-600 text-4xl mb-4">
                                <i className="fas fa-industry"></i>
                            </div>
                            <h4 className="font-semibold text-xl mb-3">{ t("lo_uniforms_industrial_industry") }</h4>
                            <p className="text-gray-600">{ t("lo_uniforms_industrial_industry_desc") }</p>
                        </div>

                        <div className="bg-white rounded-lg shadow-md p-6 transition-transform hover:shadow-lg hover:-translate-y-1" data-aos="fade-up" data-aos-delay="450">
                            <div className="text-blue-600 text-4xl mb-4">
                                <i className="fas fa-shield-alt"></i>
                            </div>
                            <h4 className="font-semibold text-xl mb-3">{ t("lo_uniforms_security_industry") }</h4>
                            <p className="text-gray-600">{ t("lo_uniforms_security_industry_desc") }</p>
                        </div>

                        <div className="bg-white rounded-lg shadow-md p-6 transition-transform hover:shadow-lg hover:-translate-y-1" data-aos="fade-up" data-aos-delay="500">
                            <div className="text-blue-600 text-4xl mb-4">
                                <i className="fas fa-store"></i>
                            </div>
                            <h4 className="font-semibold text-xl mb-3">{ t("lo_uniforms_retail_industry") }</h4>
                            <p className="text-gray-600">{ t("lo_uniforms_retail_industry_desc") }</p>
                        </div>

                        <div className="bg-white rounded-lg shadow-md p-6 transition-transform hover:shadow-lg hover:-translate-y-1" data-aos="fade-up" data-aos-delay="550">
                            <div className="text-blue-600 text-4xl mb-4">
                                <i className="fas fa-plane"></i>
                            </div>
                            <h4 className="font-semibold text-xl mb-3">{ t("lo_uniforms_transportation_industry") }</h4>
                            <p className="text-gray-600">{ t("lo_uniforms_transportation_industry_desc") }</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */ }
            <section id="advantages" className="py-20">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-sm uppercase font-bold text-blue-600 tracking-widest mb-2" data-aos="fade-up">{ t("lo_uniforms_advantages_title") }</h2>
                        <h3 className="text-4xl font-bold text-gray-900 mb-6" data-aos="fade-up" data-aos-delay="100">{ t("lo_uniforms_advantages_heading") }</h3>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="150">{ t("lo_uniforms_advantages_desc") }</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                        <div className="bg-white rounded-lg shadow-md p-8 text-center transition-transform hover:shadow-lg hover:-translate-y-1" data-aos="fade-up" data-aos-delay="200">
                            <div className="h-20 w-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <i className="fas fa-medal text-blue-600 text-2xl"></i>
                            </div>
                            <h4 className="font-semibold text-xl mb-4">{ t("lo_uniforms_quality_title") }</h4>
                            <p className="text-gray-600 mb-6">{ t("lo_uniforms_quality_desc") }</p>
                            <div className="bg-blue-50 rounded-lg p-3 text-blue-800 font-medium">
                                { t("lo_uniforms_trusted") }
                            </div>
                        </div>

                        <div className="bg-white rounded-lg shadow-md p-8 text-center transition-transform hover:shadow-lg hover:-translate-y-1" data-aos="fade-up" data-aos-delay="250">
                            <div className="h-20 w-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <i className="fas fa-tshirt text-blue-600 text-2xl"></i>
                            </div>
                            <h4 className="font-semibold text-xl mb-4">{ t("lo_uniforms_image_title") }</h4>
                            <p className="text-gray-600 mb-6">{ t("lo_uniforms_image_desc") }</p>
                            <div className="bg-blue-50 rounded-lg p-3 text-blue-800 font-medium">
                                { t("lo_uniforms_brand_consistency") }
                            </div>
                        </div>

                        <div className="bg-white rounded-lg shadow-md p-8 text-center transition-transform hover:shadow-lg hover:-translate-y-1" data-aos="fade-up" data-aos-delay="300">
                            <div className="h-20 w-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <i className="fas fa-smile text-blue-600 text-2xl"></i>
                            </div>
                            <h4 className="font-semibold text-xl mb-4">{ t("lo_uniforms_comfort_title") }</h4>
                            <p className="text-gray-600 mb-6">{ t("lo_uniforms_comfort_desc") }</p>
                            <div className="bg-blue-50 rounded-lg p-3 text-blue-800 font-medium">
                                100% { t("lo_uniforms_customer_support") }
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-gray-100 rounded-lg p-6 flex items-center transition-all hover:bg-blue-50" data-aos="fade-up" data-aos-delay="350">
                            <div className="h-12 w-12 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                                <i className="fas fa-truck text-white"></i>
                            </div>
                            <div>
                                <h5 className="font-semibold">{ t("lo_uniforms_fast_delivery") }</h5>
                                <p className="text-gray-600 text-sm">{ t("lo_uniforms_fast_delivery_desc") }</p>
                            </div>
                        </div>

                        <div className="bg-gray-100 rounded-lg p-6 flex items-center transition-all hover:bg-blue-50" data-aos="fade-up" data-aos-delay="400">
                            <div className="h-12 w-12 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                                <i className="fas fa-headset text-white"></i>
                            </div>
                            <div>
                                <h5 className="font-semibold">{ t("lo_uniforms_customer_support") }</h5>
                                <p className="text-gray-600 text-sm">{ t("lo_uniforms_customer_support_desc") }</p>
                            </div>
                        </div>

                        <div className="bg-gray-100 rounded-lg p-6 flex items-center transition-all hover:bg-blue-50" data-aos="fade-up" data-aos-delay="450">
                            <div className="h-12 w-12 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                                <i className="fas fa-clipboard-check text-white"></i>
                            </div>
                            <div>
                                <h5 className="font-semibold">{ t("lo_uniforms_quality_assurance") }</h5>
                                <p className="text-gray-600 text-sm">{ t("lo_uniforms_quality_assurance_desc") }</p>
                            </div>
                        </div>

                        <div className="bg-gray-100 rounded-lg p-6 flex items-center transition-all hover:bg-blue-50" data-aos="fade-up" data-aos-delay="500">
                            <div className="h-12 w-12 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                                <i className="fas fa-leaf text-white"></i>
                            </div>
                            <div>
                                <h5 className="font-semibold">{ t("lo_uniforms_sustainability") }</h5>
                                <p className="text-gray-600 text-sm">{ t("lo_uniforms_sustainability_desc") }</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section with Fashion Background */ }
            <section id="contact" className="py-24 relative">
                {/* Background Image */ }
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.pexels.com/photos/3768911/pexels-photo-3768911.jpeg"
                        alt="Fashion workshop background"
                        className="w-full h-full object-cover"
                        onError={ (e) => {
                            e.target.onerror = null;
                            e.target.style.display = 'none';
                            e.target.parentElement.classList.add('bg-blue-600');
                        } }
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-600/80"></div>
                </div>

                {/* Decorative Elements */ }
                <div className="absolute top-12 left-12 w-32 h-32 border-2 border-white/20 rounded-full z-10 hidden lg:block"></div>
                <div className="absolute bottom-12 right-12 w-48 h-48 border-2 border-white/20 rounded-full z-10 hidden lg:block"></div>

                {/* Content */ }
                <div className="container mx-auto px-4 text-center relative z-20">
                    <div className="max-w-3xl mx-auto bg-white/10 backdrop-blur-sm p-10 md:p-16 rounded-2xl border border-white/20">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white" data-aos="fade-up">{ t("lo_uniforms_cta_heading") }</h2>
                        <p className="text-xl mb-10 text-white/90" data-aos="fade-up" data-aos-delay="100">{ t("lo_uniforms_cta_desc") }</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center" data-aos="fade-up" data-aos-delay="200">
                            <Link href="/en/contact" className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
                                { t("lo_uniforms_quote_btn") }
                            </Link>
                            <Link href="tel:+123456789" className="bg-transparent hover:bg-white/10 text-white font-semibold py-4 px-8 rounded-lg border-2 border-white transition duration-300 ease-in-out transform hover:scale-105">
                                { t("lo_uniforms_call_btn") }
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Scroll to Top Button */ }
            { showScrollTop && (
                <button
                    onClick={ scrollToTop }
                    className="fixed bottom-8 right-8 bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-opacity hover:bg-blue-700 z-50"
                    aria-label={ t("back_to_top") }
                >
                    <i className="fas fa-arrow-up"></i>
                </button>
            ) }

            {/* Add CSS for more complex animations */ }
            <style jsx global>{ `
                @keyframes float1 {
                    0%, 100% { transform: translate(0, 0) rotate(0deg); }
                    25% { transform: translate(30px, -40px) rotate(10deg); }
                    50% { transform: translate(60px, 0) rotate(5deg); }
                    75% { transform: translate(30px, 40px) rotate(-5deg); }
                }
                @keyframes float2 {
                    0%, 100% { transform: translate(0, 0) rotate(0deg); }
                    25% { transform: translate(-40px, -30px) rotate(-10deg); }
                    50% { transform: translate(-70px, 0) rotate(-5deg); }
                    75% { transform: translate(-40px, 30px) rotate(5deg); }
                }
                @keyframes float3 {
                    0%, 100% { transform: translate(0, 0) rotate(0deg); }
                    33% { transform: translate(50px, -50px) rotate(15deg); }
                    66% { transform: translate(-50px, 50px) rotate(-15deg); }
                }
                @keyframes float4 {
                    0%, 100% { transform: translate(0, 0) rotate(0deg); }
                    33% { transform: translate(-60px, -40px) rotate(-10deg); }
                    66% { transform: translate(60px, 40px) rotate(10deg); }
                }
                @keyframes float5 {
                    0%, 100% { transform: translate(0, 0) rotate(0deg); }
                    50% { transform: translate(80px, -60px) rotate(20deg); }
                }
                @keyframes float6 {
                    0%, 100% { transform: translate(0, 0) rotate(0deg); }
                    50% { transform: translate(-80px, 60px) rotate(-20deg); }
                }
                @keyframes float7 {
                    0%, 100% { transform: translate(0, 0) rotate(0deg); }
                    25% { transform: translate(70px, 70px) rotate(10deg); }
                    50% { transform: translate(0, 100px) rotate(0deg); }
                    75% { transform: translate(-70px, 70px) rotate(-10deg); }
                }
                @keyframes float8 {
                    0%, 100% { transform: translate(0, 0) rotate(0deg); }
                    25% { transform: translate(-70px, -70px) rotate(-10deg); }
                    50% { transform: translate(0, -100px) rotate(0deg); }
                    75% { transform: translate(70px, -70px) rotate(10deg); }
                }
                .animate-float1 { animation: float1 15s ease-in-out infinite; }
                .animate-float2 { animation: float2 18s ease-in-out infinite; }
                .animate-float3 { animation: float3 20s ease-in-out infinite; }
                .animate-float4 { animation: float4 17s ease-in-out infinite; }
                .animate-float5 { animation: float5 14s ease-in-out infinite; }
                .animate-float6 { animation: float6 16s ease-in-out infinite; }
                .animate-float7 { animation: float7 22s ease-in-out infinite; }
                .animate-float8 { animation: float8 19s ease-in-out infinite; }
            `}</style>
        </main>
    );
}

"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import React from "react";

export default function SectorsPage() {
    const t = useTranslations("sectors");

    return (
        <>
            {/* Enhanced Modern Banner with Dynamic Design */ }
            <section className="relative min-h-[90vh] bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-900 text-white overflow-hidden">
                {/* Dynamic Background Elements */ }
                <div className="absolute inset-0">
                    <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
                    <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
                    <div className="absolute bottom-0 left-1/2 w-[500px] h-[500px] bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
                </div>

                {/* Animated Background Objects */ }
                <div className="absolute inset-0 overflow-hidden">
                    {/* Floating Circles */ }
                    <div className="absolute w-4 h-4 bg-blue-400 rounded-full top-[15%] left-[15%] animate-float opacity-30"></div>
                    <div className="absolute w-6 h-6 bg-indigo-400 rounded-full top-[45%] left-[80%] animate-float animation-delay-1000 opacity-30"></div>
                    <div className="absolute w-8 h-8 bg-purple-400 rounded-full top-[75%] left-[25%] animate-float animation-delay-2000 opacity-30"></div>
                    
                    {/* Floating Squares */ }
                    <div className="absolute w-8 h-8 border-2 border-blue-400 top-[25%] right-[20%] animate-float-rotate opacity-30"></div>
                    <div className="absolute w-12 h-12 border-2 border-indigo-400 top-[60%] right-[30%] animate-float-rotate animation-delay-1500 opacity-30"></div>
                    
                    {/* Animated Lines */ }
                    <div className="absolute h-32 w-[1px] bg-gradient-to-b from-transparent via-blue-400 to-transparent top-[20%] left-[30%] animate-glow"></div>
                    <div className="absolute h-48 w-[1px] bg-gradient-to-b from-transparent via-indigo-400 to-transparent top-[40%] right-[20%] animate-glow animation-delay-1000"></div>
                    
                    {/* Enhanced Dots Grid */ }
                    <div className="absolute grid grid-cols-8 gap-12 top-[5%] left-[20%] opacity-20 transform -rotate-6">
                        {[...Array(48)].map((_, i) => (
                            <div key={i} 
                                 className="w-2 h-2 bg-white rounded-full animate-pulse-bright" 
                                 style={{
                                     animationDelay: `${i * 100}ms`,
                                     opacity: Math.random() * 0.5 + 0.3
                                 }}
                            ></div>
                        ))}
                    </div>
                    <div className="absolute grid grid-cols-8 gap-12 bottom-[15%] right-[10%] opacity-20 transform rotate-6">
                        {[...Array(32)].map((_, i) => (
                            <div key={i} 
                                 className="w-2 h-2 bg-white rounded-full animate-pulse-bright" 
                                 style={{
                                     animationDelay: `${i * 100}ms`,
                                     opacity: Math.random() * 0.5 + 0.3
                                 }}
                            ></div>
                        ))}
                    </div>
                </div>

                {/* Modern Grid Overlay */ }
                <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]"></div>

                {/* Gradient Overlay */ }
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/50 to-transparent"></div>

                {/* Content */ }
                <div className="container mx-auto px-4 h-full relative z-10">
                    <div className="flex flex-col justify-center items-center h-full py-20 text-center">
                        {/* Enhanced Title with Modern Typography */ }
                        <div className="animate-fade-in-up max-w-5xl mb-12">
                            <h1 className="text-6xl md:text-8xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-blue-200 leading-tight tracking-tight">
                                { t("page_title") }
                            </h1>
                            <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-indigo-400 mx-auto rounded-full mb-8 transform hover:scale-110 transition-transform duration-300"></div>
                        </div>

                        {/* Enhanced Description */ }
                        <div className="max-w-4xl text-center animate-fade-in-up animation-delay-300 space-y-12">
                            <p className="text-xl md:text-2xl leading-relaxed text-blue-100/90">
                                { t("page_subtitle") }
                            </p>
                            
                            {/* Modern Call-to-Action Button Container */ }
                            <div className="flex justify-center items-center space-x-6">
                                <a href="#technology" 
                                   className="group relative inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full hover:from-blue-500 hover:to-indigo-500 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl overflow-hidden">
                                    <span className="relative z-10">Explore Sectors</span>
                                    <svg className="w-5 h-5 ml-2 animate-bounce relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                                    </svg>
                                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Enhanced Introduction */ }
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
                        <div className="text-5xl text-blue-800 mb-8">
                            <i className="fas fa-globe"></i>
                        </div>
                        <h2 className="text-4xl font-bold text-gray-800 mb-8">{ t("intro_title") }</h2>
                        <p className="text-xl text-gray-600 leading-relaxed">
                            { t("intro_description") }
                        </p>
                    </div>
                </div>
            </section>

            {/* Technology Sector */ }
            <section id="technology" className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
                        <div className="lg:w-1/2 animate-slide-in-right">
                            <div className="bg-white p-10 rounded-2xl shadow-xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full z-0"></div>
                                <div className="text-blue-800 text-6xl mb-8 relative z-10">
                                    <i className="fas fa-microchip"></i>
                                </div>
                                <h2 className="text-4xl font-bold text-gray-800 mb-6 relative z-10">{ t("tech_sector") }</h2>
                                <p className="text-gray-600 mb-4 relative z-10">{ t("tech_desc") }</p>

                                <div className="mb-6 relative z-10">
                                    <h3 className="text-xl font-bold text-gray-800 mb-3">{ t("key_focus_areas") }</h3>
                                    <ul className="text-gray-600 space-y-2">
                                        <li className="flex items-start">
                                            <i className="fas fa-check-circle text-blue-600 mt-1 mr-2"></i>
                                            <span>{ t("tech_focus1") }</span>
                                        </li>
                                        <li className="flex items-start">
                                            <i className="fas fa-check-circle text-blue-600 mt-1 mr-2"></i>
                                            <span>{ t("tech_focus2") }</span>
                                        </li>
                                        <li className="flex items-start">
                                            <i className="fas fa-check-circle text-blue-600 mt-1 mr-2"></i>
                                            <span>{ t("tech_focus3") }</span>
                                        </li>
                                        <li className="flex items-start">
                                            <i className="fas fa-check-circle text-blue-600 mt-1 mr-2"></i>
                                            <span>{ t("tech_focus4") }</span>
                                        </li>
                                        <li className="flex items-start">
                                            <i className="fas fa-check-circle text-blue-600 mt-1 mr-2"></i>
                                            <span>{ t("tech_focus5") }</span>
                                        </li>
                                    </ul>
                                </div>

                                <p className="text-gray-600 mb-6 relative z-10">
                                    { t("tech_summary") }
                                </p>

                                <Link 
                                    href="/subsidiaries?sector=technology" 
                                    className="inline-block bg-blue-800 text-white hover:bg-blue-700 px-6 py-3 rounded-md font-medium transition duration-300 relative z-10"
                                >
                                    { t("view_tech_companies") }
                                </Link>
                            </div>
                        </div>
                        <div className="lg:w-1/2 animate-slide-in-left">
                            <img
                                src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3"
                                alt="Technology Solutions"
                                className="rounded-2xl shadow-2xl w-full transform hover:scale-105 transition duration-500"
                            />
                        </div>
                    </div>
                </div>
            </section>


            {/* Manufacturing Sector */ }
            <section id="manufacturing" className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
                        <div className="lg:w-1/2 animate-slide-in-left">
                            <div className="bg-white p-10 rounded-2xl shadow-xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full z-0"></div>
                                <div className="text-blue-800 text-6xl mb-8 relative z-10">
                                    <i className="fas fa-industry"></i>
                                </div>
                                <h2 className="text-4xl font-bold text-gray-800 mb-6 relative z-10">{ t("manufacturing_sector") }</h2>
                                <p className="text-gray-600 mb-4 relative z-10">{ t("manufacturing_desc") }</p>

                                <div className="mb-6 relative z-10">
                                    <h3 className="text-xl font-bold text-gray-800 mb-3">{ t("key_focus_areas") }</h3>
                                    <ul className="text-gray-600 space-y-2">
                                        <li className="flex items-start">
                                            <i className="fas fa-check-circle text-blue-600 mt-1 mr-2"></i>
                                            <span>{ t("manufacturing_focus1") }</span>
                                        </li>
                                        <li className="flex items-start">
                                            <i className="fas fa-check-circle text-blue-600 mt-1 mr-2"></i>
                                            <span>{ t("manufacturing_focus2") }</span>
                                        </li>
                                        <li className="flex items-start">
                                            <i className="fas fa-check-circle text-blue-600 mt-1 mr-2"></i>
                                            <span>{ t("manufacturing_focus3") }</span>
                                        </li>
                                        <li className="flex items-start">
                                            <i className="fas fa-check-circle text-blue-600 mt-1 mr-2"></i>
                                            <span>{ t("manufacturing_focus4") }</span>
                                        </li>
                                        <li className="flex items-start">
                                            <i className="fas fa-check-circle text-blue-600 mt-1 mr-2"></i>
                                            <span>{ t("manufacturing_focus5") }</span>
                                        </li>
                                    </ul>
                                </div>

                                <p className="text-gray-600 mb-6 relative z-10">
                                    { t("manufacturing_summary") }
                                </p>

                                <Link 
                                    href="/subsidiaries?sector=manufacturing" 
                                    className="inline-block bg-blue-800 text-white hover:bg-blue-700 px-6 py-3 rounded-md font-medium transition duration-300 relative z-10"
                                >
                                    { t("view_manufacturing_companies") }
                                </Link>
                            </div>
                        </div>
                        <div className="lg:w-1/2 animate-slide-in-right">
                            <img
                                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3"
                                alt="Manufacturing Facilities"
                                className="rounded-2xl shadow-2xl w-full transform hover:scale-105 transition duration-500"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Healthcare Sector */ }
            <section id="healthcare" className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-1/2 animate-slide-in-right">
                            <div className="bg-gray-50 p-10 rounded-2xl shadow-xl relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-32 h-32 bg-blue-50 rounded-br-full z-0"></div>
                                <div className="text-blue-800 text-6xl mb-8 relative z-10">
                                    <i className="fas fa-heartbeat"></i>
                                </div>
                                <h2 className="text-4xl font-bold text-gray-800 mb-6 relative z-10">{ t("healthcare_title") }</h2>
                                <p className="text-gray-600 mb-4 relative z-10">
                                    { t("healthcare_desc") }
                                </p>

                                <div className="mb-6 relative z-10">
                                    <h3 className="text-xl font-bold text-gray-800 mb-3">{ t("key_focus_areas") }</h3>
                                    <ul className="text-gray-600 space-y-2">
                                        <li className="flex items-start">
                                            <i className="fas fa-check-circle text-blue-600 mt-1 mr-2"></i>
                                            <span>{ t("healthcare_focus1") }</span>
                                        </li>
                                        <li className="flex items-start">
                                            <i className="fas fa-check-circle text-blue-600 mt-1 mr-2"></i>
                                            <span>{ t("healthcare_focus2") }</span>
                                        </li>
                                        <li className="flex items-start">
                                            <i className="fas fa-check-circle text-blue-600 mt-1 mr-2"></i>
                                            <span>{ t("healthcare_focus3") }</span>
                                        </li>
                                        <li className="flex items-start">
                                            <i className="fas fa-check-circle text-blue-600 mt-1 mr-2"></i>
                                            <span>{ t("healthcare_focus4") }</span>
                                        </li>
                                        <li className="flex items-start">
                                            <i className="fas fa-check-circle text-blue-600 mt-1 mr-2"></i>
                                            <span>{ t("healthcare_focus5") }</span>
                                        </li>
                                    </ul>
                                </div>

                                <p className="text-gray-600 mb-6 relative z-10">
                                    { t("healthcare_summary") }
                                </p>

                                <Link 
                                    href="/subsidiaries?sector=healthcare" 
                                    className="inline-block bg-blue-800 text-white hover:bg-blue-700 px-6 py-3 rounded-md font-medium transition duration-300 relative z-10"
                                >
                                    { t("view_healthcare_companies") }
                                </Link>
                            </div>
                        </div>
                        <div className="lg:w-1/2 animate-slide-in-left">
                            <img
                                src="https://images.unsplash.com/photo-1516549655169-df83a0774514?ixlib=rb-4.0.3"
                                alt="Healthcare Facilities"
                                className="rounded-2xl shadow-2xl w-full transform hover:scale-105 transition duration-500"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Automotive Sector */ }
            <section id="automotive" className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
                        <div className="lg:w-1/2 animate-slide-in-left">
                            <div className="bg-white p-10 rounded-2xl shadow-xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full z-0"></div>
                                <div className="text-blue-800 text-6xl mb-8 relative z-10">
                                    <i className="fas fa-car"></i>
                                </div>
                                <h2 className="text-4xl font-bold text-gray-800 mb-6 relative z-10">{ t("automotive_sector") }</h2>
                                <p className="text-gray-600 mb-4 relative z-10">{ t("automotive_desc") }</p>

                                <div className="mb-6 relative z-10">
                                    <h3 className="text-xl font-bold text-gray-800 mb-3">{ t("key_focus_areas") }</h3>
                                    <ul className="text-gray-600 space-y-2">
                                        <li className="flex items-start">
                                            <i className="fas fa-check-circle text-blue-600 mt-1 mr-2"></i>
                                            <span>{ t("automotive_focus1") }</span>
                                        </li>
                                        <li className="flex items-start">
                                            <i className="fas fa-check-circle text-blue-600 mt-1 mr-2"></i>
                                            <span>{ t("automotive_focus2") }</span>
                                        </li>
                                        <li className="flex items-start">
                                            <i className="fas fa-check-circle text-blue-600 mt-1 mr-2"></i>
                                            <span>{ t("automotive_focus3") }</span>
                                        </li>
                                        <li className="flex items-start">
                                            <i className="fas fa-check-circle text-blue-600 mt-1 mr-2"></i>
                                            <span>{ t("automotive_focus4") }</span>
                                        </li>
                                        <li className="flex items-start">
                                            <i className="fas fa-check-circle text-blue-600 mt-1 mr-2"></i>
                                            <span>{ t("automotive_focus5") }</span>
                                        </li>
                                    </ul>
                                </div>

                                <p className="text-gray-600 mb-6 relative z-10">
                                    { t("automotive_summary") }
                                </p>

                                <Link 
                                    href="/subsidiaries?sector=automotive" 
                                    className="inline-block bg-blue-800 text-white hover:bg-blue-700 px-6 py-3 rounded-md font-medium transition duration-300 relative z-10"
                                >
                                    { t("view_automotive_companies") }
                                </Link>
                            </div>
                        </div>
                        <div className="lg:w-1/2 animate-slide-in-right">
                            <img
                                src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3"
                                alt="Automotive Solutions"
                                className="rounded-2xl shadow-2xl w-full transform hover:scale-105 transition duration-500"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Hospitality Sector */ }
            <section id="hospitality" className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-1/2 animate-slide-in-right">
                            <div className="bg-gray-50 p-10 rounded-2xl shadow-xl relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-32 h-32 bg-blue-50 rounded-br-full z-0"></div>
                                <div className="text-blue-800 text-6xl mb-8 relative z-10">
                                    <i className="fas fa-utensils"></i>
                                </div>
                                <h2 className="text-4xl font-bold text-gray-800 mb-6 relative z-10">{ t("hospitality_sector") }</h2>
                                <p className="text-gray-600 mb-4 relative z-10">{ t("hospitality_desc") }</p>

                                <div className="mb-6 relative z-10">
                                    <h3 className="text-xl font-bold text-gray-800 mb-3">{ t("key_focus_areas") }</h3>
                                    <ul className="text-gray-600 space-y-2">
                                        <li className="flex items-start">
                                            <i className="fas fa-check-circle text-blue-600 mt-1 mr-2"></i>
                                            <span>{ t("hospitality_focus1") }</span>
                                        </li>
                                        <li className="flex items-start">
                                            <i className="fas fa-check-circle text-blue-600 mt-1 mr-2"></i>
                                            <span>{ t("hospitality_focus2") }</span>
                                        </li>
                                        <li className="flex items-start">
                                            <i className="fas fa-check-circle text-blue-600 mt-1 mr-2"></i>
                                            <span>{ t("hospitality_focus3") }</span>
                                        </li>
                                        <li className="flex items-start">
                                            <i className="fas fa-check-circle text-blue-600 mt-1 mr-2"></i>
                                            <span>{ t("hospitality_focus4") }</span>
                                        </li>
                                        <li className="flex items-start">
                                            <i className="fas fa-check-circle text-blue-600 mt-1 mr-2"></i>
                                            <span>{ t("hospitality_focus5") }</span>
                                        </li>
                                    </ul>
                                </div>

                                <p className="text-gray-600 mb-6 relative z-10">
                                    { t("hospitality_summary") }
                                </p>

                                <Link 
                                    href="/subsidiaries?sector=hospitality" 
                                    className="inline-block bg-blue-800 text-white hover:bg-blue-700 px-6 py-3 rounded-md font-medium transition duration-300 relative z-10"
                                >
                                    { t("view_hospitality_companies") }
                                </Link>
                            </div>
                        </div>
                        <div className="lg:w-1/2 animate-slide-in-left">
                            <img
                                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3"
                                alt="Hospitality Services"
                                className="rounded-2xl shadow-2xl w-full transform hover:scale-105 transition duration-500"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Sector */}
            <section id="services" className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-1/2 animate-slide-in-right">
                            <div className="bg-gray-50 p-10 rounded-2xl shadow-xl relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-32 h-32 bg-blue-50 rounded-br-full z-0"></div>
                                <div className="text-blue-800 text-6xl mb-8 relative z-10">
                                    <i className="fas fa-cogs"></i>
                                </div>
                                <h2 className="text-4xl font-bold text-gray-800 mb-6 relative z-10">{t("services_sector")}</h2>
                                <p className="text-gray-600 mb-4 relative z-10">
                                    {t("services_desc")}
                                </p>

                                <div className="mb-6 relative z-10">
                                    <h3 className="text-xl font-bold text-gray-800 mb-3">{t("key_focus_areas")}</h3>
                                    <ul className="text-gray-600 space-y-2">
                                        <li className="flex items-start">
                                            <i className="fas fa-check-circle text-blue-600 mt-1 mr-2"></i>
                                            <span>{t("services_focus1")}</span>
                                        </li>
                                        <li className="flex items-start">
                                            <i className="fas fa-check-circle text-blue-600 mt-1 mr-2"></i>
                                            <span>{t("services_focus2")}</span>
                                        </li>
                                        <li className="flex items-start">
                                            <i className="fas fa-check-circle text-blue-600 mt-1 mr-2"></i>
                                            <span>{t("services_focus3")}</span>
                                        </li>
                                        <li className="flex items-start">
                                            <i className="fas fa-check-circle text-blue-600 mt-1 mr-2"></i>
                                            <span>{t("services_focus4")}</span>
                                        </li>
                                        <li className="flex items-start">
                                            <i className="fas fa-check-circle text-blue-600 mt-1 mr-2"></i>
                                            <span>{t("services_focus5")}</span>
                                        </li>
                                    </ul>
                                </div>

                                <p className="text-gray-600 mb-6 relative z-10">
                                    {t("services_summary")}
                                </p>

                                <Link 
                                    href="/subsidiaries?sector=services" 
                                    className="inline-block bg-blue-800 text-white hover:bg-blue-700 px-6 py-3 rounded-md font-medium transition duration-300 relative z-10"
                                >
                                    {t("view_services_companies")}
                                </Link>
                            </div>
                        </div>
                        <div className="lg:w-1/2 animate-slide-in-left">
                            <img
                                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3"
                                alt="Business Services"
                                className="rounded-2xl shadow-2xl w-full transform hover:scale-105 transition duration-500"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Retail Sector */}
            <section id="retail" className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
                        <div className="lg:w-1/2 animate-slide-in-left">
                            <div className="bg-white p-10 rounded-2xl shadow-xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full z-0"></div>
                                <div className="text-blue-800 text-6xl mb-8 relative z-10">
                                    <i className="fas fa-shopping-bag"></i>
                                </div>
                                <h2 className="text-4xl font-bold text-gray-800 mb-6 relative z-10">{t("retail_sector")}</h2>
                                <p className="text-gray-600 mb-4 relative z-10">
                                    {t("retail_desc")}
                                </p>

                                <div className="mb-6 relative z-10">
                                    <h3 className="text-xl font-bold text-gray-800 mb-3">{t("key_focus_areas")}</h3>
                                    <ul className="text-gray-600 space-y-2">
                                        <li className="flex items-start">
                                            <i className="fas fa-check-circle text-blue-600 mt-1 mr-2"></i>
                                            <span>{t("retail_focus1")}</span>
                                        </li>
                                        <li className="flex items-start">
                                            <i className="fas fa-check-circle text-blue-600 mt-1 mr-2"></i>
                                            <span>{t("retail_focus2")}</span>
                                        </li>
                                        <li className="flex items-start">
                                            <i className="fas fa-check-circle text-blue-600 mt-1 mr-2"></i>
                                            <span>{t("retail_focus3")}</span>
                                        </li>
                                        <li className="flex items-start">
                                            <i className="fas fa-check-circle text-blue-600 mt-1 mr-2"></i>
                                            <span>{t("retail_focus4")}</span>
                                        </li>
                                        <li className="flex items-start">
                                            <i className="fas fa-check-circle text-blue-600 mt-1 mr-2"></i>
                                            <span>{t("retail_focus5")}</span>
                                        </li>
                                    </ul>
                                </div>

                                <p className="text-gray-600 mb-6 relative z-10">
                                    {t("retail_summary")}
                                </p>

                                <Link 
                                    href="/subsidiaries?sector=retail" 
                                    className="inline-block bg-blue-800 text-white hover:bg-blue-700 px-6 py-3 rounded-md font-medium transition duration-300 relative z-10"
                                >
                                    {t("view_retail_companies")}
                                </Link>
                            </div>
                        </div>
                        <div className="lg:w-1/2 animate-slide-in-right">
                            <img
                                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3"
                                alt="Retail Solutions"
                                className="rounded-2xl shadow-2xl w-full transform hover:scale-105 transition duration-500"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Enhanced Cross-Sector Synergies */ }
            <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-700 text-white">
                <div className="container mx-auto px-4">
                    <div className="animate-fade-in-up">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold mb-6">{ t("synergies_title") }</h2>
                            <div className="w-24 h-1 bg-blue-400 mx-auto rounded-full mb-8"></div>
                            <p className="text-xl max-w-3xl mx-auto leading-relaxed">
                                { t("synergies_desc") }
                            </p>
                        </div>

                        {/* Image Feature */ }
                        <div className="relative overflow-hidden rounded-xl mb-20 shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3"
                                alt="Collaborative Business Meeting"
                                className="w-full h-96 object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-blue-900 to-transparent opacity-90 flex items-end">
                                <div className="p-8 md:p-12">
                                    <h3 className="text-3xl font-bold mb-4">{ t("synergies_feature_title") }</h3>
                                    <p className="text-lg max-w-2xl">{ t("synergies_feature_desc") }</p>
                                </div>
                            </div>
                        </div>

                        {/* Three Column Features */ }
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                            <div className="bg-white rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:transform hover:scale-105">
                                <div className="h-48 overflow-hidden">
                                    <img
                                        src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3"
                                        alt="Strategic Partnerships"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="p-8">
                                    <div className="flex items-start mb-6">
                                        <div className="bg-blue-600 p-3 rounded-lg mr-4">
                                            <i className="fas fa-handshake text-white text-xl"></i>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-800 mb-2">{ t("partnership_title") }</h3>
                                            <h4 className="text-lg font-semibold text-blue-600 mb-3">{ t("partnership_desc_title") }</h4>
                                        </div>
                                    </div>
                                    <p className="text-gray-600">{ t("partnership_desc") }</p>
                                </div>
                            </div>

                            <div className="bg-white rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:transform hover:scale-105">
                                <div className="h-48 overflow-hidden">
                                    <img
                                        src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3"
                                        alt="Innovation Hub"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="p-8">
                                    <div className="flex items-start mb-6">
                                        <div className="bg-blue-600 p-3 rounded-lg mr-4">
                                            <i className="fas fa-lightbulb text-white text-xl"></i>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-800 mb-2">{ t("innovation_title") }</h3>
                                            <h4 className="text-lg font-semibold text-blue-600 mb-3">{ t("innovation_desc_title") }</h4>
                                        </div>
                                    </div>
                                    <p className="text-gray-600">{ t("innovation_desc") }</p>
                                </div>
                            </div>

                            <div className="bg-white rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:transform hover:scale-105">
                                <div className="h-48 overflow-hidden">
                                    <img
                                        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3"
                                        alt="Knowledge Exchange"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="p-8">
                                    <div className="flex items-start mb-6">
                                        <div className="bg-blue-600 p-3 rounded-lg mr-4">
                                            <i className="fas fa-users text-white text-xl"></i>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-800 mb-2">{ t("knowledge_title") }</h3>
                                            <h4 className="text-lg font-semibold text-blue-600 mb-3">{ t("knowledge_desc_title") }</h4>
                                        </div>
                                    </div>
                                    <p className="text-gray-600">{ t("knowledge_desc") }</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Enhanced CTA Section */ }
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 text-center">
                    <div className="animate-fade-in-up">
                        <h2 className="text-4xl font-bold text-gray-800 mb-8">{ t("cta_title") }</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
                            { t("cta_desc") }
                        </p>
                        <div className="flex flex-wrap justify-center gap-6">
                            <Link href="/contact" className="bg-blue-800 text-white hover:bg-blue-700 px-10 py-4 rounded-lg font-medium transition duration-300 transform hover:scale-105">
                                { t("contact_btn") }
                            </Link>
                            <Link href="/subsidiaries" className="bg-gray-100 text-blue-800 hover:bg-gray-200 px-10 py-4 rounded-lg font-medium transition duration-300 transform hover:scale-105">
                                { t("explore_subsidiaries_btn") }
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Animation Styles */ }
            <style jsx>{`
                @keyframes float {
                    0%, 100% {
                        transform: translateY(0);
                    }
                    50% {
                        transform: translateY(-20px);
                    }
                }

                @keyframes float-rotate {
                    0%, 100% {
                        transform: translateY(0) rotate(0deg);
                    }
                    50% {
                        transform: translateY(-20px) rotate(180deg);
                    }
                }

                @keyframes glow {
                    0%, 100% {
                        opacity: 0.3;
                        height: 32px;
                    }
                    50% {
                        opacity: 0.6;
                        height: 48px;
                    }
                }

                .animate-float {
                    animation: float 6s ease-in-out infinite;
                }

                .animate-float-rotate {
                    animation: float-rotate 8s ease-in-out infinite;
                }

                .animate-glow {
                    animation: glow 4s ease-in-out infinite;
                }

                .animation-delay-1000 {
                    animation-delay: 1s;
                }

                .animation-delay-1500 {
                    animation-delay: 1.5s;
                }

                .animation-delay-2000 {
                    animation-delay: 2s;
                }

                .animation-delay-4000 {
                    animation-delay: 4s;
                }

                .bg-grid-white {
                    background-image: linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
                                      linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px);
                }

                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                .animate-fade-in-up {
                    animation: fadeInUp 0.8s ease-out forwards;
                }

                @keyframes pulse-bright {
                    0%, 100% {
                        transform: scale(1);
                        opacity: 0.3;
                    }
                    50% {
                        transform: scale(1.5);
                        opacity: 0.8;
                    }
                }

                .animate-pulse-bright {
                    animation: pulse-bright 3s ease-in-out infinite;
                }
            `}</style>
        </>
    );
}
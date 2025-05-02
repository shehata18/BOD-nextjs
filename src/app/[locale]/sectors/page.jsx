"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import React from "react";

export default function SectorsPage() {
    const t = useTranslations("sectors");

    return (
        <>
            {/* Enhanced Banner with Curved Design and Animations */ }
            <section className="relative min-h-[80vh] bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white overflow-hidden">
                {/* Animated Background Elements */ }
                <div className="absolute inset-0">
                    <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
                    <div className="absolute top-20 right-0 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
                    <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
                </div>

                {/* Curved Overlay */ }
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3')] bg-cover bg-center opacity-10"></div>

                {/* Floating Elements */ }
                <div className="absolute inset-0 overflow-hidden">
                    <div className="floating-icon absolute left-[10%] top-[20%]">
                        <i className="fas fa-microchip text-4xl text-blue-200 opacity-20"></i>
                    </div>
                    <div className="floating-icon absolute left-[85%] top-[40%]">
                        <i className="fas fa-chart-line text-4xl text-blue-200 opacity-20"></i>
                    </div>
                    <div className="floating-icon absolute left-[20%] top-[70%]">
                        <i className="fas fa-industry text-4xl text-blue-200 opacity-20"></i>
                    </div>
                    <div className="floating-icon absolute left-[75%] top-[15%]">
                        <i className="fas fa-heartbeat text-4xl text-blue-200 opacity-20"></i>
                    </div>
                </div>

                {/* Content */ }
                <div className="container mx-auto px-4 h-full relative z-10">
                    <div className="flex flex-col justify-center items-center h-full py-20">
                        {/* Animated Title */ }
                        <div className="text-center animate-fade-in-up">
                            <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
                                { t("page_title") }
                            </h1>
                            <div className="w-24 h-2 bg-blue-400 mx-auto rounded-full mb-8"></div>
                        </div>

                        {/* Animated Description */ }
                        <div className="max-w-4xl text-center animate-fade-in-up animation-delay-300">
                            <p className="text-xl md:text-2xl leading-relaxed text-blue-100">
                                { t("page_subtitle") }
                            </p>
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

                                <Link href="/subsidiaries#technology" className="inline-block bg-blue-800 text-white hover:bg-blue-700 px-6 py-3 rounded-md font-medium transition duration-300 relative z-10">
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

            {/* Finance Sector */ }
            <section id="finance" className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-1/2 animate-slide-in-right">
                            <div className="bg-gray-50 p-10 rounded-2xl shadow-xl relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-32 h-32 bg-blue-50 rounded-br-full z-0"></div>
                                <div className="text-blue-800 text-6xl mb-8 relative z-10">
                                    <i className="fas fa-chart-line"></i>
                                </div>
                                <h2 className="text-4xl font-bold text-gray-800 mb-6 relative z-10">{ t("finance_sector") }</h2>
                                <p className="text-gray-600 mb-4 relative z-10">{ t("finance_desc") }</p>

                                <div className="mb-6 relative z-10">
                                    <h3 className="text-xl font-bold text-gray-800 mb-3">{ t("key_focus_areas") }</h3>
                                    <ul className="text-gray-600 space-y-2">
                                        <li className="flex items-start">
                                            <i className="fas fa-check-circle text-blue-600 mt-1 mr-2"></i>
                                            <span>{ t("finance_focus1") }</span>
                                        </li>
                                        <li className="flex items-start">
                                            <i className="fas fa-check-circle text-blue-600 mt-1 mr-2"></i>
                                            <span>{ t("finance_focus2") }</span>
                                        </li>
                                        <li className="flex items-start">
                                            <i className="fas fa-check-circle text-blue-600 mt-1 mr-2"></i>
                                            <span>{ t("finance_focus3") }</span>
                                        </li>
                                        <li className="flex items-start">
                                            <i className="fas fa-check-circle text-blue-600 mt-1 mr-2"></i>
                                            <span>{ t("finance_focus4") }</span>
                                        </li>
                                        <li className="flex items-start">
                                            <i className="fas fa-check-circle text-blue-600 mt-1 mr-2"></i>
                                            <span>{ t("finance_focus5") }</span>
                                        </li>
                                    </ul>
                                </div>

                                <p className="text-gray-600 mb-6 relative z-10">
                                    { t("finance_summary") }
                                </p>

                                <Link href="/subsidiaries#finance" className="inline-block bg-blue-800 text-white hover:bg-blue-700 px-6 py-3 rounded-md font-medium transition duration-300 relative z-10">
                                    { t("view_finance_companies") }
                                </Link>
                            </div>
                        </div>
                        <div className="lg:w-1/2 animate-slide-in-left">
                            <img
                                src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-4.0.3"
                                alt="Financial Services"
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

                                <Link href="/subsidiaries#manufacturing" className="inline-block bg-blue-800 text-white hover:bg-blue-700 px-6 py-3 rounded-md font-medium transition duration-300 relative z-10">
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

                                <Link href="/subsidiaries#healthcare" className="inline-block bg-blue-800 text-white hover:bg-blue-700 px-6 py-3 rounded-md font-medium transition duration-300 relative z-10">
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

                                <Link href="/subsidiaries#automotive" className="inline-block bg-blue-800 text-white hover:bg-blue-700 px-6 py-3 rounded-md font-medium transition duration-300 relative z-10">
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

                                <Link href="/subsidiaries#hospitality" className="inline-block bg-blue-800 text-white hover:bg-blue-700 px-6 py-3 rounded-md font-medium transition duration-300 relative z-10">
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
            <style jsx>{ `
                @keyframes blob {
                    0% {
                        transform: translate(0px, 0px) scale(1);
                    }
                    33% {
                        transform: translate(30px, -50px) scale(1.1);
                    }
                    66% {
                        transform: translate(-20px, 20px) scale(0.9);
                    }
                    100% {
                        transform: translate(0px, 0px) scale(1);
                    }
                }

                .animate-blob {
                    animation: blob 7s infinite;
                }

                .animation-delay-2000 {
                    animation-delay: 2s;
                }

                .animation-delay-4000 {
                    animation-delay: 4s;
                }

                .animation-delay-300 {
                    animation-delay: 300ms;
                }

                .floating-icon {
                    animation: float 6s ease-in-out infinite;
                }

                @keyframes float {
                    0% {
                        transform: translateY(0px);
                    }
                    50% {
                        transform: translateY(-20px);
                    }
                    100% {
                        transform: translateY(0px);
                    }
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

                @keyframes slideInRight {
                    from {
                        opacity: 0;
                        transform: translateX(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }

                .animate-slide-in-right {
                    animation: slideInRight 0.8s ease-out forwards;
                }

                @keyframes slideInLeft {
                    from {
                        opacity: 0;
                        transform: translateX(-30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }

                .animate-slide-in-left {
                    animation: slideInLeft 0.8s ease-out forwards;
                }
            `}</style>
        </>
    );
}
"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import "@/app/styles/subsidiaries.css";

export default function Subsidiaries() {
    const t = useTranslations("subsidiaries");
    const [activeFilter, setActiveFilter] = useState("all");

    const filterSubsidiaries = (filter) => {
        setActiveFilter(filter);
    };

    return (
        <>
            {/* Page Banner */ }
            <section className="relative h-[100vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-black">
                {/* Background Images with Parallax */ }
                <div className="absolute inset-0 h-full">
                    {/* Main Background Image */ }
                    <div className="absolute inset-0 h-full transform scale-105 animate-slow-zoom">
                        <img
                            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                            alt="Corporate Buildings"
                            className="absolute inset-0 w-full h-full object-center opacity-50"
                        />
                    </div>
                    {/* Overlay Image */ }
                    <div className="absolute inset-0 h-full mix-blend-overlay opacity-40">
                        <img
                            src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                            alt="Business Grid"
                            className="absolute inset-0 w-full h-full object-center"
                        />
                    </div>
                    {/* Gradient Overlays */ }
                    <div className="absolute inset-0 h-full bg-gradient-to-r from-black/95 via-blue-900/85 to-black/95"></div>
                    <div className="absolute inset-0 h-full bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.9)_100%)]"></div>
                </div>

                {/* Content */ }
                <div className="container mx-auto px-4 relative z-10 h-full flex items-center">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="overflow-hidden mb-6">
                            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 animate-fade-in-up">
                                { t("page_title") } <span className="text-blue-400">{ t("page_title_accent") }</span>
                            </h1>
                        </div>
                        <div className="overflow-hidden mb-16">
                            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto font-light leading-relaxed animate-fade-in-up animation-delay-300">
                                { t("page_subtitle") }
                            </p>
                        </div>
                        <div className="animate-fade-in-up animation-delay-600">
                            <Link
                                href="/sectors"
                                className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-gradient-to-r from-blue-600 to-blue-800 overflow-hidden rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                            >
                                <span className="relative flex items-center">
                                    { t("explore_sectors_btn") }
                                    <svg className="w-5 h-5 ml-2 transform transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                    </svg>
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Decorative Elements */ }
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    {/* Animated Circles */ }
                    <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-blob"></div>
                    <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-blue-300/10 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
                    {/* Grid Pattern */ }
                    <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]"></div>
                </div>

                {/* Bottom Fade */ }
                <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-white to-transparent"></div>
            </section>

            {/* Filters Section */ }
            <section className="py-8 border-b border-gray-200 sticky top-0 bg-white z-20 shadow-md">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap justify-center gap-3">
                        <button
                            className={ `px-6 py-2 rounded-full transition-all duration-300 ${activeFilter === "all" ? "bg-blue-800 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}` }
                            onClick={ () => filterSubsidiaries("all") }
                        >
                            { t("filter_all") }
                        </button>

                        <button
                            className={ `px-6 py-2 rounded-full transition-all duration-300 ${activeFilter === "technology" ? "bg-blue-800 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}` }
                            onClick={ () => {
                                filterSubsidiaries("technology");
                                document.getElementById("technology")?.scrollIntoView({ behavior: "smooth" });
                            } }
                        >
                            { t("filter_technology") }
                        </button>

                        <button
                            className={ `px-6 py-2 rounded-full transition-all duration-300 ${activeFilter === "finance" ? "bg-blue-800 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}` }
                            onClick={ () => {
                                filterSubsidiaries("finance");
                                document.getElementById("finance")?.scrollIntoView({ behavior: "smooth" });
                            } }
                        >
                            { t("filter_finance") }
                        </button>

                        <button
                            className={ `px-6 py-2 rounded-full transition-all duration-300 ${activeFilter === "manufacturing" ? "bg-blue-800 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}` }
                            onClick={ () => {
                                filterSubsidiaries("manufacturing");
                                document.getElementById("manufacturing")?.scrollIntoView({ behavior: "smooth" });
                            } }
                        >
                            { t("filter_manufacturing") }
                        </button>

                        <button
                            className={ `px-6 py-2 rounded-full transition-all duration-300 ${activeFilter === "healthcare" ? "bg-blue-800 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}` }
                            onClick={ () => {
                                filterSubsidiaries("healthcare");
                                document.getElementById("healthcare")?.scrollIntoView({ behavior: "smooth" });
                            } }
                        >
                            { t("filter_healthcare") }
                        </button>

                        <button
                            className={ `px-6 py-2 rounded-full transition-all duration-300 ${activeFilter === "services" ? "bg-blue-800 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}` }
                            onClick={ () => {
                                filterSubsidiaries("services");
                                document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
                            } }
                        >
                            { t("filter_services") }
                        </button>

                        <button
                            className={ `px-6 py-2 rounded-full transition-all duration-300 ${activeFilter === "automotive" ? "bg-blue-800 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}` }
                            onClick={ () => {
                                filterSubsidiaries("automotive");
                                document.getElementById("automotive")?.scrollIntoView({ behavior: "smooth" });
                            } }
                        >
                            { t("filter_automotive") }
                        </button>

                        <button
                            className={ `px-6 py-2 rounded-full transition-all duration-300 ${activeFilter === "retail" ? "bg-blue-800 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}` }
                            onClick={ () => {
                                filterSubsidiaries("retail");
                                document.getElementById("retail")?.scrollIntoView({ behavior: "smooth" });
                            } }
                        >
                            { t("filter_retail") }
                        </button>

                        <button
                            className={ `px-6 py-2 rounded-full transition-all duration-300 ${activeFilter === "hospitality" ? "bg-blue-800 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}` }
                            onClick={ () => {
                                filterSubsidiaries("hospitality");
                                document.getElementById("hospitality")?.scrollIntoView({ behavior: "smooth" });
                            } }
                        >
                            { t("filter_hospitality") }
                        </button>
                    </div>
                </div>
            </section>

            {/* Introduction */ }
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <div className="relative inline-block group mb-8">
                            <h2 className="text-4xl font-bold text-gray-800 mb-6">{ t("portfolio_title") }</h2>
                            <div className="absolute left-0 bottom-0 w-full">
                                <div className="h-1 bg-blue-600 transform origin-left transition-all duration-300 ease-out 
                              group-hover:scale-x-110 group-hover:bg-blue-500"></div>
                                <div className="h-px bg-blue-400/50 mt-0.5 transform origin-left transition-all duration-300 ease-out 
                              group-hover:scale-x-150 group-hover:bg-blue-400/30"></div>
                            </div>
                        </div>
                        <p className="text-gray-600 text-lg">{ t("portfolio_desc") }</p>
                    </div>

                    {/* Subsidiaries Grid */ }
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                id: "manufacturing",
                                name: "lo_uniforms_name",
                                category: "manufacturing",
                                image: "/images/LO%20Company.jpg",
                                fallbackImage: "https://images.unsplash.com/photo-1514866747592-c2d279258a78?ixlib=rb-4.0.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
                                description: "lo_uniforms_desc",
                                services: [
                                    "lo_uniforms_service1",
                                    "lo_uniforms_service2", 
                                    "lo_uniforms_service3",
                                    "lo_uniforms_service4"
                                ],
                                link: "/subsidiaries/louniform"
                            },
                            {
                                id: "services",
                                name: "asap_name",
                                category: "services", 
                                image: "/images/ASAP-Comapny.jpg",
                                fallbackImage: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
                                description: "asap_desc",
                                services: [
                                    "asap_service1",
                                    "asap_service2",
                                    "asap_service3", 
                                    "asap_service4",
                                    "asap_service5"
                                ],
                                link: "/subsidiaries/asap"
                            },
                            {
                                id: "healthcare",
                                name: "graston_name",
                                category: "healthcare",
                                image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
                                description: "graston_desc",
                                services: [
                                    "graston_service1",
                                    "graston_service2",
                                    "graston_service3",
                                    "graston_service4",
                                    "graston_service5"
                                ],
                                link: "/subsidiaries/graston"
                            },
                            {
                                id: "automotive",
                                name: "powermark_name",
                                category: "automotive",
                                image: "/images/Power%20Mark%20company%20for%20cars.jpg",
                                fallbackImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
                                description: "powermark_desc",
                                services: [
                                    "powermark_service1",
                                    "powermark_service2",
                                    "powermark_service3",
                                    "powermark_service4",
                                    "powermark_service5"
                                ],
                                link: "/subsidiaries/powermark"
                            },
                            {
                                id: "hospitality",
                                name: "ramadan_name",
                                category: "hospitality",
                                image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
                                description: "ramadan_desc",
                                services: [
                                    "ramadan_offering1",
                                    "ramadan_offering2",
                                    "ramadan_offering3",
                                    "ramadan_offering4",
                                    "ramadan_offering5"
                                ],
                                link: "/subsidiaries/ramadan"
                            },
                            {
                                name: "peak_time_logistics_name",
                                category: "services",
                                image: "https://images.unsplash.com/photo-1615461066841-6116e61058f4?q=80&w=2070&auto=format&fit=crop",
                                description: "peak_time_logistics_desc",
                                services: [
                                    "peak_time_logistics_service1",
                                    "peak_time_logistics_service2",
                                    "peak_time_logistics_service3",
                                    "peak_time_logistics_service4",
                                    "peak_time_logistics_service5"
                                ],
                                link: "/subsidiaries/peak-time-logistics"
                            },
                            {
                                id: "technology",
                                name: "bod_united_name",
                                category: "technology",
                                image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
                                description: "bod_united_desc",
                                services: [
                                    "bod_united_service1",
                                    "bod_united_service2",
                                    "bod_united_service3",
                                    "bod_united_service4"
                                ],
                                link: "/subsidiaries/bod-united"
                            },
                            {
                                name: "seven_eleven_name",
                                category: "retail",
                                image: "https://images.pexels.com/photos/3962294/pexels-photo-3962294.jpeg",
                                description: "seven_eleven_desc",
                                services: [
                                    "seven_eleven_offering1",
                                    "seven_eleven_offering2",
                                    "seven_eleven_offering3",
                                    "seven_eleven_offering4"
                                ],
                                link: "/subsidiaries/seven-eleven"
                            },
                            {
                                name: "alrawaq_alfareed_name",
                                category: "services",
                                image: "https://images.pexels.com/photos/8850709/pexels-photo-8850709.jpeg",
                                description: "alrawaq_alfareed_desc",
                                services: [
                                    "alrawaq_alfareed_service1",
                                    "alrawaq_alfareed_service2",
                                    "alrawaq_alfareed_service3",
                                    "alrawaq_alfareed_service4"
                                ],
                                link: "/subsidiaries/alrawaq-alfareed"
                            },
                            {
                                name: "hrlogin_name",
                                category: "technology",
                                image: "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
                                description: "hrlogin_desc",
                                services: [
                                    "hrlogin_service1",
                                    "hrlogin_service2",
                                    "hrlogin_service3",
                                    "hrlogin_service4"
                                ],
                                link: "/subsidiaries/hrlogin"
                            },
                            {
                                name: "all_plans_name",
                                category: "services",
                                image: "https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                                description: "all_plans_desc",
                                services: [
                                    "all_plans_service1",
                                    "all_plans_service2",
                                    "all_plans_service3",
                                    "all_plans_service4"
                                ],
                                link: "/subsidiaries/all-plans"
                            },
                            {
                                name: "reach_agency_name",
                                category: "technology",
                                image: "/images/REACH_logo.png",
                                fallbackImage: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
                                description: "reach_agency_desc",
                                services: [
                                    "reach_agency_service1",
                                    "reach_agency_service2",
                                    "reach_agency_service3",
                                    "reach_agency_service4"
                                ],
                                link: "https://reachksa.com",
                                external: true
                            }
                        ].map((subsidiary) => (
                            <div
                                key={subsidiary.name}
                                id={subsidiary.id}
                                className="subsidiary-card bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300"
                                style={{ display: activeFilter === "all" || activeFilter === subsidiary.category ? "block" : "none" }}
                            >
                                <div className="h-[250px] bg-gray-200 flex items-center justify-center">
                                    <img
                                        src={subsidiary.image}
                                        alt={t(subsidiary.name)}
                                        className="w-full h-full"
                                        onError={subsidiary.fallbackImage ? (e) => {
                                            e.target.onerror = null;
                                            e.target.src = subsidiary.fallbackImage;
                                        } : undefined}
                                    />
                                </div>
                                <div className="p-6">
                                    <div className="flex justify-between items-center mb-4">
                                        <h3 className="text-xl font-bold text-gray-800">{t(subsidiary.name)}</h3>
                                        <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                                            {t(subsidiary.category)}
                                        </span>
                                    </div>
                                    <p className="text-gray-600 mb-6">{t(subsidiary.description)}</p>
                                    <div className="mb-6">
                                        <h4 className="font-medium text-gray-800 mb-2">{t("key_services")}:</h4>
                                        <ul className="text-gray-600 list-disc list-inside space-y-1">
                                            {subsidiary.services.map((service) => (
                                                <li key={service}>{t(service)}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    {subsidiary.external ? (
                                        <a
                                            href={subsidiary.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-block bg-blue-800 text-white hover:bg-blue-700 px-6 py-2 rounded-md font-medium transition duration-300"
                                        >
                                            {t("learn_more")}
                                        </a>
                                    ) : (
                                        <Link
                                            href={subsidiary.link}
                                            className="inline-block bg-blue-800 text-white hover:bg-blue-700 px-6 py-2 rounded-md font-medium transition duration-300"
                                        >
                                            {t("learn_more")}
                                        </Link>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Acquisition Strategy */ }
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div className="relative">
                                <img
                                    src="https://images.unsplash.com/photo-1553729459-efe14ef6055d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                                    alt="Business Acquisition"
                                    className="rounded-lg shadow-2xl w-full h-[400px]"
                                />
                                <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 to-transparent rounded-lg"></div>
                                {/* Decorative Elements */ }
                                <div className="absolute -top-6 -left-6 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                                <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                            </div>
                            <div className="lg:pl-8">
                                <div className="relative inline-block group mb-8">
                                    <h2 className="text-4xl font-bold text-gray-800 mb-6">{ t("acquisition_title") }</h2>
                                    <div className="absolute left-0 bottom-0 w-full">
                                        <div className="h-1 bg-blue-600 transform origin-left transition-all duration-300 ease-out 
                                  group-hover:scale-x-110 group-hover:bg-blue-500"></div>
                                        <div className="h-px bg-blue-400/50 mt-0.5 transform origin-left transition-all duration-300 ease-out 
                                  group-hover:scale-x-150 group-hover:bg-blue-400/30"></div>
                                    </div>
                                </div>
                                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                    { t("acquisition_desc1") }
                                </p>
                                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                    { t("acquisition_desc2") }
                                </p>
                                <div className="space-y-4">
                                    <div className="flex items-center space-x-3">
                                        <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                                            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                        </div>
                                        <span className="text-gray-700">{ t("acquisition_point1") }</span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                                            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                        </div>
                                        <span className="text-gray-700">{ t("acquisition_point2") }</span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                                            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                        </div>
                                        <span className="text-gray-700">{ t("acquisition_point3") }</span>
                                    </div>
                                </div>
                                <div className="mt-8">
                                    <Link
                                        href="/contact"
                                        className="inline-flex items-center px-8 py-3 text-lg font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg"
                                    >
                                        { t("partnership_cta") }
                                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { useSearchParams } from "next/navigation";
import "@/app/styles/subsidiaries.css";

export default function Subsidiaries() {
    const t = useTranslations("subsidiaries");
    const [activeFilter, setActiveFilter] = useState("all");
    const searchParams = useSearchParams();

    useEffect(() => {
        // Get filter from URL parameter
        const sectorFilter = searchParams.get('sector');
        if (sectorFilter) {
            setActiveFilter(sectorFilter);
            // Smooth scroll to the section after a small delay to ensure rendering
            setTimeout(() => {
                document.getElementById(sectorFilter)?.scrollIntoView({ behavior: "smooth" });
            }, 100);
        }
    }, [searchParams]);

    const filterSubsidiaries = (filter) => {
        setActiveFilter(filter);
        document.getElementById(filter)?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <>
            {/* Page Banner */}
            <section className="relative h-[100vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-black">
                {/* Background Images with Parallax */}
                <div className="absolute inset-0 h-full">
                    {/* Main Background Image */}
                    <div className="absolute inset-0 h-full transform scale-105 animate-slow-zoom">
                        <img
                            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                            alt="Corporate Buildings"
                            className="absolute inset-0 w-full h-full object-cover object-center opacity-50 transform hover:scale-105 transition-transform duration-3000"
                        />
                    </div>
                    {/* Overlay Image with Parallax Effect */}
                    <div className="absolute inset-0 h-full mix-blend-overlay opacity-40 transform hover:scale-105 transition-transform duration-3000">
                        <img
                            src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                            alt="Business Grid"
                            className="absolute inset-0 w-full h-full object-cover object-center"
                        />
                    </div>
                    {/* Enhanced Gradient Overlays */}
                    <div className="absolute inset-0 h-full bg-gradient-to-r from-black/95 via-blue-900/85 to-black/95"></div>
                    <div className="absolute inset-0 h-full bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.9)_100%)]"></div>
                </div>

                {/* Content with Enhanced Animations */}
                <div className="container mx-auto px-4 relative z-10 h-full flex items-center">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="overflow-hidden mb-6">
                            <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 animate-fade-in-up tracking-tight">
                                {t("page_title")} <span className="text-blue-400 relative inline-block group">
                                    {t("page_title_accent")}
                                    <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></span>
                                </span>
                            </h1>
                        </div>
                        <div className="overflow-hidden mb-16">
                            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto font-light leading-relaxed animate-fade-in-up animation-delay-300">
                                {t("page_subtitle")}
                            </p>
                        </div>
                        <div className="animate-fade-in-up animation-delay-600 space-x-4">
                            <Link
                                href="/sectors"
                                className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-gradient-to-r from-blue-600 to-blue-800 overflow-hidden rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl hover:from-blue-500 hover:to-blue-700"
                            >
                                <span className="relative flex items-center">
                                    {t("explore_sectors_btn")}
                                    <svg className="w-5 h-5 ml-2 transform transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                    </svg>
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-transparent transform -skew-x-45 translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                            </Link>
                            <Link
                                href="/contact"
                                className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-blue-500 bg-white/10 backdrop-blur-sm border border-white/20 overflow-hidden rounded-full transition-all duration-300 hover:scale-105 hover:bg-white/20 hover:text-blue-400"
                            >
                                <span className="relative flex items-center">
                                    Contact Us
                                    <svg className="w-5 h-5 ml-2 transform transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                                    </svg>
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Enhanced Decorative Elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    {/* Animated Circles with Glow Effects */}
                    <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-blob mix-blend-overlay"></div>
                    <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-blob animation-delay-2000 mix-blend-overlay"></div>
                    <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-blue-300/10 rounded-full blur-3xl animate-blob animation-delay-4000 mix-blend-overlay"></div>
                    
                    {/* Enhanced Grid Pattern */}
                    <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px] opacity-50"></div>
                    
                    {/* Floating Particles */}
                    <div className="absolute inset-0">
                        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-float"></div>
                        <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-purple-400 rounded-full animate-float animation-delay-2000"></div>
                        <div className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-blue-300 rounded-full animate-float animation-delay-4000"></div>
                    </div>
                </div>

                {/* Enhanced Bottom Fade */}
                <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-white via-white/70 to-transparent"></div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
                    <span className="text-white/50 text-sm mb-2">Scroll to explore</span>
                    <svg className="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                    </svg>
                </div>
            </section>

            {/* Filters Section */}
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

            {/* Introduction */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <div className="relative inline-block group mb-8">
                            <h2 className="text-4xl font-bold text-gray-800 mb-6 relative">
                                {t("portfolio_title")}
                                <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                            </h2>
                        </div>
                        <p className="text-gray-600 text-lg">{t("portfolio_desc")}</p>
                    </div>

                    {/* Enhanced Subsidiaries Grid */}
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
                                image: "/images/BOD Logo.jpg",
                                fallbackImage: "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
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
                                className={`subsidiary-card group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                                    activeFilter === "all" || activeFilter === subsidiary.category ? "opacity-100 scale-100" : "opacity-0 scale-95 hidden"
                                }`}
                            >
                                {/* Image Container with Overlay */}
                                <div className="relative h-[250px] overflow-hidden group">
                                    <img
                                        src={subsidiary.image}
                                        alt={t(subsidiary.name)}
                                        className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-700"
                                        onError={subsidiary.fallbackImage ? (e) => {
                                            e.target.onerror = null;
                                            e.target.src = subsidiary.fallbackImage;
                                        } : undefined}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    
                                    {/* Category Badge */}
                                    <div className="absolute top-4 right-4">
                                        <span className="px-4 py-2 bg-white/90 backdrop-blur-sm text-blue-800 rounded-full text-sm font-medium shadow-lg">
                                            {t(subsidiary.category)}
                                        </span>
                                    </div>
                                </div>

                                <div className="p-8">
                                    {/* Title and Description */}
                                    <div className="mb-6">
                                        <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                                            {t(subsidiary.name)}
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            {t(subsidiary.description)}
                                        </p>
                                    </div>

                                    {/* Services List */}
                                    <div className="mb-8">
                                        <h4 className="font-medium text-gray-800 mb-4 flex items-center">
                                            <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                                            </svg>
                                            {t("key_services")}
                                        </h4>
                                        <ul className="space-y-3">
                                            {subsidiary.services.map((service) => (
                                                <li key={service} className="flex items-center text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                                                    <svg className="w-4 h-4 mr-2 text-blue-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                                    </svg>
                                                    <span>{t(service)}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Action Button */}
                                    {subsidiary.external ? (
                                        <a
                                            href={subsidiary.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center justify-center w-full px-6 py-3 text-base font-medium text-white bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg hover:from-blue-700 hover:to-blue-900 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-lg group"
                                        >
                                            <span>{t("learn_more")}</span>
                                            <svg className="w-5 h-5 ml-2 transform transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                            </svg>
                                        </a>
                                    ) : (
                                        <Link
                                            href={subsidiary.link}
                                            className="inline-flex items-center justify-center w-full px-6 py-3 text-base font-medium text-white bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg hover:from-blue-700 hover:to-blue-900 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-lg group"
                                        >
                                            <span>{t("learn_more")}</span>
                                            <svg className="w-5 h-5 ml-2 transform transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                            </svg>
                                        </Link>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

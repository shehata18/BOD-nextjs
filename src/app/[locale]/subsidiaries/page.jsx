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
                            className="absolute inset-0 w-full h-full object-cover object-center opacity-50"
                        />
                    </div>
                    {/* Overlay Image */ }
                    <div className="absolute inset-0 h-full mix-blend-overlay opacity-40">
                        <img
                            src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                            alt="Business Grid"
                            className="absolute inset-0 w-full h-full object-cover object-center"
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
                        {/* LO Uniforms */ }
                        <div
                            id="manufacturing"
                            className="subsidiary-card bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300"
                            style={ { display: activeFilter === "all" || activeFilter === "manufacturing" ? "block" : "none" } }
                        >
                            <div className="h-48 bg-gray-200 flex items-center justify-center">
                                <img
                                    src="/images/LO%20Company.jpg"
                                    alt="LO Uniforms"
                                    className="w-full h-full object-cover"
                                    onError={ (e) => {
                                        e.target.onerror = null;
                                        e.target.src = "https://images.unsplash.com/photo-1514866747592-c2d279258a78?ixlib=rb-4.0.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80";
                                    } }
                                />
                            </div>
                            <div className="p-6">
                                <div className="flex justify-between items-center mb-4">
                                    <h3 className="text-xl font-bold text-gray-800">{ t("lo_uniforms_name") }</h3>
                                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                                        { t("manufacturing") }
                                    </span>
                                </div>
                                <p className="text-gray-600 mb-6">{ t("lo_uniforms_desc") }</p>
                                <div className="mb-6">
                                    <h4 className="font-medium text-gray-800 mb-2">{ t("key_services") }:</h4>
                                    <ul className="text-gray-600 list-disc list-inside space-y-1">
                                        <li>{ t("lo_uniforms_service1") }</li>
                                        <li>{ t("lo_uniforms_service2") }</li>
                                        <li>{ t("lo_uniforms_service3") }</li>
                                        <li>{ t("lo_uniforms_service4") }</li>
                                    </ul>
                                </div>
                                <Link
                                    href="/subsidiaries/louniform"
                                    className="inline-block bg-blue-800 text-white hover:bg-blue-700 px-6 py-2 rounded-md font-medium transition duration-300"
                                >
                                    { t("learn_more") }
                                </Link>
                            </div>
                        </div>

                        {/* ASAP Maintenance */ }
                        <div
                            id="services"
                            className="subsidiary-card bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300"
                            style={ { display: activeFilter === "all" || activeFilter === "services" ? "block" : "none" } }
                        >
                            <div className="h-48 bg-gray-200 flex items-center justify-center">
                                <img
                                    src="/images/ASAP%20Comapny.jpg"
                                    alt="ASAP Maintenance & Operations"
                                    className="w-full h-full object-cover"
                                    onError={ (e) => {
                                        e.target.onerror = null;
                                        e.target.src = "https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80";
                                    } }
                                />
                            </div>
                            <div className="p-6">
                                <div className="flex justify-between items-center mb-4">
                                    <h3 className="text-xl font-bold text-gray-800">{ t("asap_name") }</h3>
                                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                                        { t("services") }
                                    </span>
                                </div>
                                <p className="text-gray-600 mb-6">{ t("asap_desc") }</p>
                                <div className="mb-6">
                                    <h4 className="font-medium text-gray-800 mb-2">{ t("key_services") }:</h4>
                                    <ul className="text-gray-600 list-disc list-inside space-y-1">
                                        <li>{ t("asap_service1") }</li>
                                        <li>{ t("asap_service2") }</li>
                                        <li>{ t("asap_service3") }</li>
                                        <li>{ t("asap_service4") }</li>
                                        <li>{ t("asap_service5") }</li>
                                    </ul>
                                </div>
                                <Link
                                    href="/subsidiaries/asap"
                                    className="inline-block bg-blue-800 text-white hover:bg-blue-700 px-6 py-2 rounded-md font-medium transition duration-300"
                                >
                                    { t("learn_more") }
                                </Link>
                            </div>
                        </div>

                        {/* Graston Medical Clinics */ }
                        <div
                            id="healthcare"
                            className="subsidiary-card bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300"
                            style={ { display: activeFilter === "all" || activeFilter === "healthcare" ? "block" : "none" } }
                        >
                            <div className="h-48 bg-gray-200 flex items-center justify-center">
                                <img
                                    src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                                    alt="Graston Medical Clinics"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="p-6">
                                <div className="flex justify-between items-center mb-4">
                                    <h3 className="text-xl font-bold text-gray-800">{ t("graston_name") }</h3>
                                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                                        { t("healthcare") }
                                    </span>
                                </div>
                                <p className="text-gray-600 mb-6">{ t("graston_desc") }</p>
                                <div className="mb-6">
                                    <h4 className="font-medium text-gray-800 mb-2">{ t("key_services") }:</h4>
                                    <ul className="text-gray-600 list-disc list-inside space-y-1">
                                        <li>{ t("graston_service1") }</li>
                                        <li>{ t("graston_service2") }</li>
                                        <li>{ t("graston_service3") }</li>
                                        <li>{ t("graston_service4") }</li>
                                        <li>{ t("graston_service5") }</li>
                                    </ul>
                                </div>
                                <Link
                                    href="/subsidiaries/graston"
                                    className="inline-block bg-blue-800 text-white hover:bg-blue-700 px-6 py-2 rounded-md font-medium transition duration-300"
                                >
                                    { t("learn_more") }
                                </Link>
                            </div>
                        </div>

                        {/* PowerMark Auto */ }
                        <div
                            id="automotive"
                            className="subsidiary-card bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300"
                            style={ { display: activeFilter === "all" || activeFilter === "automotive" ? "block" : "none" } }
                        >
                            <div className="h-48 bg-gray-200 flex items-center justify-center">
                                <img
                                    src="/images/Power%20Mark%20company%20for%20cars.jpg"
                                    alt="PowerMark Auto"
                                    className="w-full h-full object-cover"
                                    onError={ (e) => {
                                        e.target.onerror = null;
                                        e.target.src = "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80";
                                    } }
                                />
                            </div>
                            <div className="p-6">
                                <div className="flex justify-between items-center mb-4">
                                    <h3 className="text-xl font-bold text-gray-800">{ t("powermark_name") }</h3>
                                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                                        { t("automotive") }
                                    </span>
                                </div>
                                <p className="text-gray-600 mb-6">{ t("powermark_desc") }</p>
                                <div className="mb-6">
                                    <h4 className="font-medium text-gray-800 mb-2">{ t("key_services") }:</h4>
                                    <ul className="text-gray-600 list-disc list-inside space-y-1">
                                        <li>{ t("powermark_service1") }</li>
                                        <li>{ t("powermark_service2") }</li>
                                        <li>{ t("powermark_service3") }</li>
                                        <li>{ t("powermark_service4") }</li>
                                        <li>{ t("powermark_service5") }</li>
                                    </ul>
                                </div>
                                <Link
                                    href="/subsidiaries/powermark"
                                    className="inline-block bg-blue-800 text-white hover:bg-blue-700 px-6 py-2 rounded-md font-medium transition duration-300"
                                >
                                    { t("learn_more") }
                                </Link>
                            </div>
                        </div>

                        {/* Ramadan Restaurants */ }
                        <div
                            id="hospitality"
                            className="subsidiary-card bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300"
                            style={ { display: activeFilter === "all" || activeFilter === "hospitality" ? "block" : "none" } }
                        >
                            <div className="h-48 bg-gray-200 flex items-center justify-center">
                                <img
                                    src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                                    alt="Ramadan Restaurants"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="p-6">
                                <div className="flex justify-between items-center mb-4">
                                    <h3 className="text-xl font-bold text-gray-800">{ t("ramadan_name") }</h3>
                                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                                        { t("hospitality") }
                                    </span>
                                </div>
                                <p className="text-gray-600 mb-6">{ t("ramadan_desc") }</p>
                                <div className="mb-6">
                                    <h4 className="font-medium text-gray-800 mb-2">{ t("key_offerings") }:</h4>
                                    <ul className="text-gray-600 list-disc list-inside space-y-1">
                                        <li>{ t("ramadan_offering1") }</li>
                                        <li>{ t("ramadan_offering2") }</li>
                                        <li>{ t("ramadan_offering3") }</li>
                                        <li>{ t("ramadan_offering4") }</li>
                                        <li>{ t("ramadan_offering5") }</li>
                                    </ul>
                                </div>
                                <Link
                                    href="/subsidiaries/ramadan"
                                    className="inline-block bg-blue-800 text-white hover:bg-blue-700 px-6 py-2 rounded-md font-medium transition duration-300"
                                >
                                    { t("learn_more") }
                                </Link>
                            </div>
                        </div>

                        {/* Peak Time Logistics */ }
                        <div
                            className="subsidiary-card bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300"
                            style={ { display: activeFilter === "all" || activeFilter === "services" ? "block" : "none" } }
                        >
                            <div className="h-48 bg-gray-200 flex items-center justify-center">
                                <img
                                    src="https://images.unsplash.com/photo-1615461066841-6116e61058f4?q=80&w=2070&auto=format&fit=crop"
                                    alt="Peak Time Logistics"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="p-6">
                                <div className="flex justify-between items-center mb-4">
                                    <h3 className="text-xl font-bold text-gray-800">{ t("peak_time_logistics_name") }</h3>
                                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                                        { t("services") }
                                    </span>
                                </div>
                                <p className="text-gray-600 mb-6">{ t("peak_time_logistics_desc") }</p>
                                <div className="mb-6">
                                    <h4 className="font-medium text-gray-800 mb-2">{ t("key_services") }:</h4>
                                    <ul className="text-gray-600 list-disc list-inside space-y-1">
                                        <li>{ t("peak_time_logistics_service1") }</li>
                                        <li>{ t("peak_time_logistics_service2") }</li>
                                        <li>{ t("peak_time_logistics_service3") }</li>
                                        <li>{ t("peak_time_logistics_service4") }</li>
                                        <li>{ t("peak_time_logistics_service5") }</li>
                                    </ul>
                                </div>
                                <Link
                                    href="/subsidiaries/peak-time-logistics"
                                    className="inline-block bg-blue-800 text-white hover:bg-blue-700 px-6 py-2 rounded-md font-medium transition duration-300"
                                >
                                    { t("learn_more") }
                                </Link>
                            </div>
                        </div>

                        {/* BOD United */ }
                        <div
                            id="technology"
                            className="subsidiary-card bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300"
                            style={ { display: activeFilter === "all" || activeFilter === "technology" ? "block" : "none" } }
                        >
                            <div className="h-48 bg-gray-200 flex items-center justify-center">
                                <img
                                    src="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
                                    alt="BOD United"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="p-6">
                                <div className="flex justify-between items-center mb-4">
                                    <h3 className="text-xl font-bold text-gray-800">{ t("bod_united_name") }</h3>
                                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                                        { t("technology") }
                                    </span>
                                </div>
                                <p className="text-gray-600 mb-6">
                                    { t("bod_united_desc") }
                                </p>
                                <div className="mb-6">
                                    <h4 className="font-medium text-gray-800 mb-2">{ t("key_services") }:</h4>
                                    <ul className="text-gray-600 list-disc list-inside space-y-1">
                                        <li>{ t("bod_united_service1") }</li>
                                        <li>{ t("bod_united_service2") }</li>
                                        <li>{ t("bod_united_service3") }</li>
                                        <li>{ t("bod_united_service4") }</li>
                                    </ul>
                                </div>
                                <Link
                                    href="/subsidiaries/bod-united"
                                    className="inline-block bg-blue-800 text-white hover:bg-blue-700 px-6 py-2 rounded-md font-medium transition duration-300"
                                >
                                    { t("learn_more") }
                                </Link>
                            </div>
                        </div>

                        {/* Seven-Eleven Grocery Supplies */ }
                        <div
                            className="subsidiary-card bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300"
                            style={ { display: activeFilter === "all" || activeFilter === "retail" ? "block" : "none" } }
                        >
                            <div className="h-48 bg-gray-200 flex items-center justify-center">
                                <img
                                    src="https://images.pexels.com/photos/3962294/pexels-photo-3962294.jpeg"
                                    alt="Seven-Eleven Grocery Supplies"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="p-6">
                                <div className="flex justify-between items-center mb-4">
                                    <h3 className="text-xl font-bold text-gray-800">{ t("seven_eleven_name") }</h3>
                                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                                        { t("retail") }
                                    </span>
                                </div>
                                <p className="text-gray-600 mb-6">{ t("seven_eleven_desc") }</p>
                                <div className="mb-6">
                                    <h4 className="font-medium text-gray-800 mb-2">{ t("key_offerings") }:</h4>
                                    <ul className="text-gray-600 list-disc list-inside space-y-1">
                                        <li>{ t("seven_eleven_offering1") }</li>
                                        <li>{ t("seven_eleven_offering2") }</li>
                                        <li>{ t("seven_eleven_offering3") }</li>
                                        <li>{ t("seven_eleven_offering4") }</li>
                                    </ul>
                                </div>
                                <Link
                                    href="/subsidiaries/seven-eleven"
                                    className="inline-block bg-blue-800 text-white hover:bg-blue-700 px-6 py-2 rounded-md font-medium transition duration-300"
                                >
                                    { t("learn_more") }
                                </Link>
                            </div>
                        </div>

                        {/* Alrawaq Alfareed */ }
                        <div
                            className="subsidiary-card bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300"
                            style={ { display: activeFilter === "all" || activeFilter === "services" ? "block" : "none" } }
                        >
                            <div className="h-48 bg-gray-200 flex items-center justify-center">
                                <img
                                    src="https://images.pexels.com/photos/8850709/pexels-photo-8850709.jpeg"
                                    alt="Alrawaq Alfareed"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="p-6">
                                <div className="flex justify-between items-center mb-4">
                                    <h3 className="text-xl font-bold text-gray-800">{ t("alrawaq_alfareed_name") }</h3>
                                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                                        { t("services") }
                                    </span>
                                </div>
                                <p className="text-gray-600 mb-6">{ t("alrawaq_alfareed_desc") }</p>
                                <div className="mb-6">
                                    <h4 className="font-medium text-gray-800 mb-2">{ t("key_services") }:</h4>
                                    <ul className="text-gray-600 list-disc list-inside space-y-1">
                                        <li>{ t("alrawaq_alfareed_service1") }</li>
                                        <li>{ t("alrawaq_alfareed_service2") }</li>
                                        <li>{ t("alrawaq_alfareed_service3") }</li>
                                        <li>{ t("alrawaq_alfareed_service4") }</li>
                                    </ul>
                                </div>
                                <Link
                                    href="/subsidiaries/alrawaq-alfareed"
                                    className="inline-block bg-blue-800 text-white hover:bg-blue-700 px-6 py-2 rounded-md font-medium transition duration-300"
                                >
                                    { t("learn_more") }
                                </Link>
                            </div>
                        </div>

                        {/* HR Login */ }
                        <div
                            className="subsidiary-card bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300"
                            style={{ display: activeFilter === "all" || activeFilter === "technology" ? "block" : "none" }}
                        >
                            <div className="h-48 bg-gray-200 flex items-center justify-center">
                                <img
                                    src="https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                                    alt="HR Login"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="p-6">
                                <div className="flex justify-between items-center mb-4">
                                    <h3 className="text-xl font-bold text-gray-800">{t("hrlogin_name")}</h3>
                                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                                        {t("technology")}
                                    </span>
                                </div>
                                <p className="text-gray-600 mb-6">{t("hrlogin_desc")}</p>
                                <div className="mb-6">
                                    <h4 className="font-medium text-gray-800 mb-2">{t("key_services")}:</h4>
                                    <ul className="text-gray-600 list-disc list-inside space-y-1">
                                        <li>{t("hrlogin_service1")}</li>
                                        <li>{t("hrlogin_service2")}</li>
                                        <li>{t("hrlogin_service3")}</li>
                                        <li>{t("hrlogin_service4")}</li>
                                    </ul>
                                </div>
                                <Link
                                    href="/subsidiaries/hrlogin"
                                    className="inline-block bg-blue-800 text-white hover:bg-blue-700 px-6 py-2 rounded-md font-medium transition duration-300"
                                >
                                    {t("learn_more")}
                                </Link>
                            </div>
                        </div>

                        {/* All Plans */}
                        <div
                            className="subsidiary-card bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300"
                            style={{ display: activeFilter === "all" || activeFilter === "services" ? "block" : "none" }}
                        >
                            <div className="h-48 bg-gray-200 flex items-center justify-center">
                                <img
                                    src="https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                    alt="All Plans"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="p-6">
                                <div className="flex justify-between items-center mb-4">
                                    <h3 className="text-xl font-bold text-gray-800">{t("all_plans_name") || "All Plans"}</h3>
                                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                                        {t("services")}
                                    </span>
                                </div>
                                <p className="text-gray-600 mb-6">{t("all_plans_desc") || "Premier event management and exhibition organization company, specializing in creating memorable corporate events, conferences, and exhibitions with meticulous attention to detail."}</p>
                                <div className="mb-6">
                                    <h4 className="font-medium text-gray-800 mb-2">{t("key_services")}:</h4>
                                    <ul className="text-gray-600 list-disc list-inside space-y-1">
                                        <li>{t("all_plans_service1") || "Exhibition Management"}</li>
                                        <li>{t("all_plans_service2") || "Conference Organization"}</li>
                                        <li>{t("all_plans_service3") || "Creative Design Services"}</li>
                                        <li>{t("all_plans_service4") || "Audio-Visual Production"}</li>
                                    </ul>
                                </div>
                                <Link
                                    href="/subsidiaries/all-plans"
                                    className="inline-block bg-blue-800 text-white hover:bg-blue-700 px-6 py-2 rounded-md font-medium transition duration-300"
                                >
                                    {t("learn_more")}
                                </Link>
                            </div>
                        </div>
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
                                    className="rounded-lg shadow-2xl w-full h-[400px] object-cover"
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

"use client";

import React, { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function NewsPage() {
    const t = useTranslations();

    useEffect(() => {
        // Initialize AOS
        AOS.init({
            duration: 800,
            easing: 'ease-out-cubic',
            once: true,
        });

        // Filter buttons
        const filterButtons = document.querySelectorAll('.filter-button');
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
            });
        });

        // Smooth scroll
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
    }, []);

    return (
        <main className="min-h-screen bg-gray-50">
            {/* Banner Section - Enhanced */ }
            <section className="relative bg-blue-900 text-white py-32 overflow-hidden">
                {/* Background Elements */ }
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 opacity-90"></div>
                <div className="absolute inset-0 bg-[url('/images/news-banner.jpg')] bg-cover bg-center mix-blend-overlay"></div>
                <div className="absolute inset-0 bg-[url('/images/pattern.svg')] bg-repeat opacity-10"></div>

                {/* Curved Shapes */ }
                <div className="absolute bottom-0 left-0 right-0">
                    <svg className="fill-current text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                        <path fillOpacity="0.1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                    </svg>
                    <svg className="fill-current text-white absolute bottom-0 left-0 right-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                        <path fillOpacity="0.2" d="M0,192L48,176C96,160,192,128,288,128C384,128,480,160,576,176C672,192,768,192,864,176C960,160,1056,128,1152,128C1248,128,1344,160,1392,176L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                    </svg>
                </div>

                {/* Animated Floating Elements */ }
                <div className="absolute inset-0 overflow-hidden">
                    <div className="animate-float-slow absolute top-20 left-10 w-20 h-20 bg-blue-500 rounded-full opacity-10"></div>
                    <div className="animate-float-medium absolute top-40 right-20 w-32 h-32 bg-blue-400 rounded-full opacity-10"></div>
                    <div className="animate-float-fast absolute bottom-20 left-1/4 w-16 h-16 bg-blue-300 rounded-full opacity-10"></div>
                </div>

                {/* Content */ }
                <div className="container mx-auto px-4 relative z-10">
                    <div data-aos="fade-up" data-aos-duration="1000" className="max-w-3xl mx-auto text-center">
                        {/* Animated Title */ }
                        <div className="overflow-hidden mb-6">
                            <h1 className="text-5xl md:text-6xl font-bold leading-tight text-center">
                                <span className="inline-block">{ t("news.page_title") }</span>
                            </h1>
                        </div>

                        {/* Animated Description */ }
                        <div className="overflow-hidden mb-12">
                            <p className="text-xl md:text-2xl text-blue-100 animate-fade-in delay-500 max-w-2xl mx-auto">
                                { t("news.page_subtitle") }
                            </p>
                        </div>

                        {/* Animated Buttons */ }
                        <div className="flex flex-wrap justify-center gap-4 animate-fade-in delay-700">
                            <a href="#latest-news" className="group relative px-8 py-3 bg-white text-blue-900 rounded-full font-semibold overflow-hidden transition-all duration-300 hover:scale-105 hover:bg-blue-100">
                                <span className="relative z-10">{ t("news.latest_updates") }</span>
                            </a>
                            <a href="#press-releases" className="group relative px-8 py-3 border-2 border-white text-white rounded-full font-semibold overflow-hidden transition-all duration-300 hover:scale-105 hover:bg-blue-900 hover:text-white">
                                <span className="relative z-10">{ t("news.press_releases") }</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* News Filter - Enhanced - NON-STICKY */ }
            <section id="latest-news" className="py-8 bg-white border-b border-gray-200 z-40">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap items-center justify-between">
                        <div className="w-full md:w-auto mb-4 md:mb-0">
                            <h2 className="text-2xl font-bold text-gray-800" data-aos="fade-right">{ t("news.latest_updates") }</h2>
                        </div>
                        <div className="flex flex-wrap items-center space-x-2" data-aos="fade-left">
                            <button className="filter-button px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 active">
                                { t("news.all_news") }
                            </button>
                            <button className="filter-button px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300">
                                { t("news.press_releases") }
                            </button>
                            <button className="filter-button px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300">
                                { t("news.corporate_news") }
                            </button>
                            <button className="filter-button px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300">
                                { t("news.media_coverage") }
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured News - Enhanced */ }
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Featured Article 1 */ }
                        <div className="news-card bg-white rounded-xl overflow-hidden shadow-lg" data-aos="fade-up" data-aos-delay="100">
                            <div className="relative">
                                <Image
                                    src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                                    alt="BOD Holdings Dubai Headquarters"
                                    width={ 2070 }
                                    height={ 1380 }
                                    className="w-full h-80 object-cover hover-scale"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
                                <div className="absolute top-4 left-4">
                                    <span className="bg-blue-600 text-white text-xs font-semibold px-4 py-2 rounded-full shadow-lg">
                                        { t("news.featured_article1_category") }
                                    </span>
                                    <span className="text-white text-sm ml-3 shadow-text">{ t("news.featured_article1_date") }</span>
                                </div>
                            </div>
                            <div className="p-8">
                                <div className="mb-4">
                                    <h3 className="text-2xl font-bold text-gray-800 mb-4 hover:text-blue-600 transition duration-300">
                                        { t("news.featured_article1_title") }
                                    </h3>
                                    <p className="text-gray-600 mb-6 line-clamp-3">{ t("news.featured_article1_excerpt") }</p>
                                    <Link href="/news/article-1" className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition duration-300 group">
                                        { t("news.read_full_article") }
                                        <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Featured Article 2 */ }
                        <div className="news-card bg-white rounded-xl overflow-hidden shadow-lg" data-aos="fade-up" data-aos-delay="200">
                            <div className="relative">
                                <Image
                                    src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                                    alt="LO Uniforms Partnership"
                                    width={ 2070 }
                                    height={ 1380 }
                                    className="w-full h-80 object-cover hover-scale"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
                                <div className="absolute top-4 left-4">
                                    <span className="bg-green-600 text-white text-xs font-semibold px-4 py-2 rounded-full shadow-lg">
                                        { t("news.featured_article2_category") }
                                    </span>
                                    <span className="text-white text-sm ml-3 shadow-text">{ t("news.featured_article2_date") }</span>
                                </div>
                            </div>
                            <div className="p-8">
                                <div className="mb-4">
                                    <h3 className="text-2xl font-bold text-gray-800 mb-4 hover:text-blue-600 transition duration-300">
                                        { t("news.featured_article2_title") }
                                    </h3>
                                    <p className="text-gray-600 mb-6 line-clamp-3">{ t("news.featured_article2_excerpt") }</p>
                                    <Link href="/news/article-2" className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition duration-300 group">
                                        { t("news.read_full_article") }
                                        <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* News Articles Grid */ }
            <section className="py-12 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* News Item 1 */ }
                        <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 news-card" data-aos="fade-up" data-aos-delay="100">
                            <div className="relative overflow-hidden group h-64">
                                <Image
                                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                                    alt="ASAP Maintenance Contract"
                                    width={ 800 }
                                    height={ 600 }
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                <div className="absolute bottom-4 left-4 right-4">
                                    <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                                        { t("news.news_item1_category") }
                                    </span>
                                    <span className="text-white text-sm ml-3">{ t("news.news_item1_date") }</span>
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-800 mb-3 hover:text-blue-600 transition-colors">
                                    { t("news.news_item1_title") }
                                </h3>
                                <p className="text-gray-600 mb-4 line-clamp-3">{ t("news.news_item1_excerpt") }</p>
                                <Link
                                    href="/news/article-1"
                                    className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors"
                                >
                                    { t("news.read_more") }
                                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </Link>
                            </div>
                        </div>

                        {/* News Item 2 */ }
                        <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 news-card" data-aos="fade-up" data-aos-delay="200">
                            <div className="relative overflow-hidden group h-64">
                                <Image
                                    src="https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                                    alt="Graston Clinics Expansion"
                                    width={ 800 }
                                    height={ 600 }
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                <div className="absolute bottom-4 left-4 right-4">
                                    <span className="bg-green-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                                        { t("news.news_item2_category") }
                                    </span>
                                    <span className="text-white text-sm ml-3">{ t("news.news_item2_date") }</span>
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-800 mb-3 hover:text-blue-600 transition-colors">
                                    { t("news.news_item2_title") }
                                </h3>
                                <p className="text-gray-600 mb-4 line-clamp-3">{ t("news.news_item2_excerpt") }</p>
                                <Link
                                    href="/news/article-2"
                                    className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors"
                                >
                                    { t("news.read_more") }
                                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </Link>
                            </div>
                        </div>

                        {/* News Item 3 */ }
                        <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 news-card" data-aos="fade-up" data-aos-delay="300">
                            <div className="relative overflow-hidden group h-64">
                                <Image
                                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                                    alt="BOD Financial Results"
                                    width={ 800 }
                                    height={ 600 }
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                <div className="absolute bottom-4 left-4 right-4">
                                    <span className="bg-purple-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                                        { t("news.news_item3_category") }
                                    </span>
                                    <span className="text-white text-sm ml-3">{ t("news.news_item3_date") }</span>
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-800 mb-3 hover:text-blue-600 transition-colors">
                                    { t("news.news_item3_title") }
                                </h3>
                                <p className="text-gray-600 mb-4 line-clamp-3">{ t("news.news_item3_excerpt") }</p>
                                <Link
                                    href="/news/article-3"
                                    className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors"
                                >
                                    { t("news.read_more") }
                                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </Link>
                            </div>
                        </div>

                        {/* News Item 4 */ }
                        <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 news-card" data-aos="fade-up" data-aos-delay="400">
                            <div className="relative overflow-hidden group h-64">
                                <Image
                                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                                    alt="Industry Recognition"
                                    width={ 800 }
                                    height={ 600 }
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                <div className="absolute bottom-4 left-4 right-4">
                                    <span className="bg-yellow-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                                        { t("news.news_item4_category") }
                                    </span>
                                    <span className="text-white text-sm ml-3">{ t("news.news_item4_date") }</span>
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-800 mb-3 hover:text-blue-600 transition-colors">
                                    { t("news.news_item4_title") }
                                </h3>
                                <p className="text-gray-600 mb-4 line-clamp-3">{ t("news.news_item4_excerpt") }</p>
                                <Link
                                    href="/news/article-4"
                                    className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors"
                                >
                                    { t("news.read_more") }
                                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </Link>
                            </div>
                        </div>

                        {/* News Item 5 */ }
                        <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 news-card" data-aos="fade-up" data-aos-delay="500">
                            <div className="relative overflow-hidden group h-64">
                                <Image
                                    src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                                    alt="Community Initiative"
                                    width={ 1000 }
                                    height={ 667 }
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                <div className="absolute bottom-4 left-4 right-4">
                                    <span className="bg-red-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                                        { t("news.news_item5_category") }
                                    </span>
                                    <span className="text-white text-sm ml-3">{ t("news.news_item5_date") }</span>
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-800 mb-3 hover:text-blue-600 transition-colors">
                                    { t("news.news_item5_title") }
                                </h3>
                                <p className="text-gray-600 mb-4 line-clamp-3">{ t("news.news_item5_excerpt") }</p>
                                <Link
                                    href="/news/article-5"
                                    className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors"
                                >
                                    { t("news.read_more") }
                                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </Link>
                            </div>
                        </div>

                        {/* News Item 6 */ }
                        <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 news-card" data-aos="fade-up" data-aos-delay="600">
                            <div className="relative overflow-hidden group h-64">
                                <Image
                                    src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                                    alt="Technology Implementation"
                                    width={ 800 }
                                    height={ 533 }
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                <div className="absolute bottom-4 left-4 right-4">
                                    <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                                        { t("news.news_item6_category") }
                                    </span>
                                    <span className="text-white text-sm ml-3">{ t("news.news_item6_date") }</span>
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-800 mb-3 hover:text-blue-600 transition-colors">
                                    { t("news.news_item6_title") }
                                </h3>
                                <p className="text-gray-600 mb-4 line-clamp-3">{ t("news.news_item6_excerpt") }</p>
                                <Link
                                    href="/news/article-6"
                                    className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors"
                                >
                                    { t("news.read_more") }
                                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Pagination */ }
                    <div className="mt-12 flex justify-center">
                        <nav className="inline-flex rounded-lg shadow-sm bg-white" aria-label="Pagination">
                            <button className="px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-50">
                                { t("news.previous") }
                            </button>
                            <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-blue-600">1</button>
                            <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 hover:bg-gray-50">
                                2
                            </button>
                            <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 hover:bg-gray-50">
                                3
                            </button>
                            <button className="px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-50">
                                { t("news.next") }
                            </button>
                        </nav>
                    </div>
                </div>
            </section>

            {/* Media Coverage - Enhanced */ }
            <section id="press-releases" className="py-16 bg-gradient-to-b from-white to-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12" data-aos="fade-up">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">{ t("news.media_coverage") }</h2>
                        <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
                        <p className="text-gray-600 max-w-2xl mx-auto">Discover how BOD Holdings is making headlines and shaping industries through innovation and excellence.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Media Items */ }
                        { [1, 2, 3, 4].map((index) => (
                            <div
                                key={ index }
                                className="group bg-white p-6 rounded-xl border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                                data-aos="fade-up"
                                data-aos-delay={ 100 * index }
                            >
                                <div className="flex items-center justify-between mb-6">
                                    <div className="flex items-center space-x-3">
                                        <div className={ `w-12 h-12 rounded-full ${index === 1 ? 'bg-red-50 text-red-500' :
                                            index === 2 ? 'bg-green-50 text-green-500' :
                                                index === 3 ? 'bg-purple-50 text-purple-500' :
                                                    'bg-yellow-50 text-yellow-500'
                                            } flex items-center justify-center` }>
                                            <i className={ `fas ${index === 1 ? 'fa-newspaper' :
                                                index === 2 ? 'fa-chart-line' :
                                                    index === 3 ? 'fa-microphone-alt' :
                                                        'fa-industry'
                                                } text-xl` }></i>
                                        </div>
                                        <span className="font-semibold text-gray-600">{ t(`news.media_item${index}_source`) }</span>
                                    </div>
                                    <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                                        <i className="fas fa-external-link-alt"></i>
                                    </div>
                                </div>
                                <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                                    { t(`news.media_item${index}_title`) }
                                </h3>
                                <p className="text-gray-500 text-sm mb-4">{ t(`news.media_item${index}_date`) }</p>
                                <Link
                                    href={ `/news/media-${index}` }
                                    className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors"
                                >
                                    { t("news.read_more") }
                                    <i className="fas fa-arrow-right ml-2 transform group-hover:translate-x-1 transition-transform"></i>
                                </Link>
                            </div>
                        )) }
                    </div>

                    <div className="text-center mt-12" data-aos="fade-up" data-aos-delay="500">
                        <Link
                            href="/news/media"
                            className="inline-flex items-center px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors group"
                        >
                            { t("news.view_all_media") }
                            <i className="fas fa-arrow-right ml-2 transform group-hover:translate-x-1 transition-transform"></i>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Newsletter */ }
            <section className="py-12 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl font-bold text-gray-800 mb-6">{ t("news.newsletter_title") }</h2>
                        <p className="text-gray-600 mb-8">{ t("news.newsletter_desc") }</p>

                        <form className="flex flex-col md:flex-row gap-3">
                            <input
                                type="email"
                                placeholder={ t("news.email_placeholder") }
                                className="flex-1 px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <button
                                type="submit"
                                className="px-6 py-3 bg-blue-800 text-white rounded-md hover:bg-blue-700 font-medium transition duration-300"
                            >
                                { t("news.subscribe_button") }
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    );
}

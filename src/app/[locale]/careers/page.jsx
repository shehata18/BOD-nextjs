"use client";

import React, { useEffect } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { initCareersPage } from './careersPage';
import 'aos/dist/aos.css';

const CareersPage = () => {
    const t = useTranslations('careers');
    const currentLocale = useLocale();

    useEffect(() => {
        // Initialize client-side functionality
        initCareersPage();
    }, []);

    return (
        <main>
            {/* Banner */ }
            <section className="relative bg-blue-900 text-white py-24">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-700 opacity-90"></div>
                <div className="absolute inset-0 bg-[url('/images/careers-banner.jpg')] bg-cover bg-center mix-blend-overlay"></div>
                <div id="particles-js" className="absolute inset-0 z-0"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div data-aos="fade-up" data-aos-duration="1000">
                        <h1 className="text-4xl md:text-6xl font-bold mb-4">{ t('join_our') } <span className="text-blue-300">{ t('team') }</span></h1>
                        <p className="text-xl max-w-3xl mb-8">{ t('banner_description') }</p>
                        <a href="#openings" className="bg-white text-blue-800 hover:bg-blue-100 px-8 py-3 rounded-full font-medium transition duration-300 btn-animated inline-flex items-center">
                            { t('view_openings') }
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                        </a>
                    </div>
                </div>
            </section>

            {/* Why Join Us */ }
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center mb-16" data-aos="fade-up">
                        <h2 className="text-3xl font-bold text-gray-800 mb-6 gradient-text">{ t('why_join_title') }</h2>
                        <p className="text-gray-600">{ t('why_join_description') }</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                        <div className="bg-white p-8 rounded-xl shadow-xl hover-card" data-aos="fade-up" data-aos-delay="100">
                            <div className="text-blue-800 text-4xl mb-6 flex justify-center float-animation">
                                <i className="fas fa-chart-line p-4 bg-blue-100 rounded-full"></i>
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-3">{ t('growth_opportunities') }</h3>
                            <p className="text-gray-600">{ t('growth_description') }</p>
                        </div>

                        <div className="bg-white p-8 rounded-xl shadow-xl hover-card" data-aos="fade-up" data-aos-delay="200">
                            <div className="text-blue-800 text-4xl mb-6 flex justify-center float-animation">
                                <i className="fas fa-handshake p-4 bg-blue-100 rounded-full"></i>
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-3">{ t('collaborative_culture') }</h3>
                            <p className="text-gray-600">{ t('collaborative_description') }</p>
                        </div>

                        <div className="bg-white p-8 rounded-xl shadow-xl hover-card" data-aos="fade-up" data-aos-delay="300">
                            <div className="text-blue-800 text-4xl mb-6 flex justify-center float-animation">
                                <i className="fas fa-globe p-4 bg-blue-100 rounded-full"></i>
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-3">{ t('global_impact') }</h3>
                            <p className="text-gray-600">{ t('global_description') }</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Current Openings */ }
            <section id="openings" className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-16 gradient-text" data-aos="fade-up">{ t('current_openings') }</h2>

                    {/* Search and Filter Bar */ }
                    <div className="max-w-4xl mx-auto mb-12 flex flex-wrap gap-4 justify-center items-center" data-aos="fade-up">
                        <div className="relative flex-grow max-w-md">
                            <input type="text" placeholder={ t('search_placeholder') } className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300" />
                            <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                                <i className="fas fa-search"></i>
                            </span>
                        </div>
                        <div className="flex gap-3 flex-wrap">
                            <select name="department" className="px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300">
                                <option value="">{ t('all_departments') }</option>
                                <option value="finance">{ t('finance') }</option>
                                <option value="technology">{ t('technology') }</option>
                                <option value="real-estate">{ t('real_estate') }</option>
                            </select>
                            <select name="location" className="px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300">
                                <option value="">{ t('all_locations') }</option>
                                <option value="remote">{ t('remote') }</option>
                                <option value="onsite">{ t('onsite') }</option>
                                <option value="hybrid">{ t('hybrid') }</option>
                            </select>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
                        {/* Job Card 1 */ }
                        <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 job-card" data-department="finance" data-aos="fade-up" data-aos-delay="100">
                            <div className="p-8">
                                <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                                    <div className="flex-grow">
                                        <div className="flex items-center gap-3 mb-2">
                                            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">{ t('finance') }</span>
                                            <span className="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">{ t('fulltime') }</span>
                                            <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-3 py-1 rounded-full">{ t('remote') }</span>
                                        </div>
                                        <h3 className="text-2xl font-bold text-gray-800 mb-2">{ t('job1_title') }</h3>
                                        <p className="text-gray-600 text-sm mb-4">{ t('finance_department') }</p>
                                    </div>
                                    <div className="flex items-center gap-2 text-gray-600">
                                        <i className="fas fa-map-marker-alt"></i>
                                        <span className="text-sm">{ t('job1_location') }</span>
                                    </div>
                                </div>

                                <div className="mb-6 p-4 bg-blue-50 rounded-xl">
                                    <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                                        <i className="fas fa-briefcase text-blue-600"></i>
                                        { t('key_requirements') }
                                    </h4>
                                    <ul className="space-y-2">
                                        <li className="flex items-center gap-2 text-gray-600">
                                            <i className="fas fa-check-circle text-blue-600"></i>
                                            { t('job1_req1') }
                                        </li>
                                        <li className="flex items-center gap-2 text-gray-600">
                                            <i className="fas fa-check-circle text-blue-600"></i>
                                            { t('job1_req2') }
                                        </li>
                                        <li className="flex items-center gap-2 text-gray-600">
                                            <i className="fas fa-check-circle text-blue-600"></i>
                                            { t('job1_req3') }
                                        </li>
                                    </ul>
                                </div>

                                <div className="flex flex-wrap items-center justify-between gap-4">
                                    <div className="flex items-center gap-4">
                                        <div className="flex items-center gap-1 text-gray-600">
                                            <i className="fas fa-clock"></i>
                                            <span className="text-sm">{ t('job1_posted') }</span>
                                        </div>
                                        <div className="flex items-center gap-1 text-gray-600">
                                            <i className="fas fa-user-friends"></i>
                                            <span className="text-sm">{ t('job1_positions') }</span>
                                        </div>
                                    </div>
                                    <a href="#" className="inline-flex items-center gap-2 bg-blue-800 text-white hover:bg-blue-700 px-6 py-3 rounded-full font-medium transition duration-300 btn-animated">
                                        { t('apply_now') }
                                        <i className="fas fa-arrow-right"></i>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Job Card 2 */ }
                        <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 job-card" data-department="technology" data-aos="fade-up" data-aos-delay="200">
                            <div className="p-8">
                                <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                                    <div className="flex-grow">
                                        <div className="flex items-center gap-3 mb-2">
                                            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">{ t('technology') }</span>
                                            <span className="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">{ t('fulltime') }</span>
                                            <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-3 py-1 rounded-full">{ t('hybrid') }</span>
                                        </div>
                                        <h3 className="text-2xl font-bold text-gray-800 mb-2">{ t('job2_title') }</h3>
                                        <p className="text-gray-600 text-sm mb-4">{ t('technology_department') }</p>
                                    </div>
                                    <div className="flex items-center gap-2 text-gray-600">
                                        <i className="fas fa-map-marker-alt"></i>
                                        <span className="text-sm">{ t('job2_location') }</span>
                                    </div>
                                </div>

                                <div className="mb-6 p-4 bg-blue-50 rounded-xl">
                                    <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                                        <i className="fas fa-briefcase text-blue-600"></i>
                                        { t('key_requirements') }
                                    </h4>
                                    <ul className="space-y-2">
                                        <li className="flex items-center gap-2 text-gray-600">
                                            <i className="fas fa-check-circle text-blue-600"></i>
                                            { t('job2_req1') }
                                        </li>
                                        <li className="flex items-center gap-2 text-gray-600">
                                            <i className="fas fa-check-circle text-blue-600"></i>
                                            { t('job2_req2') }
                                        </li>
                                        <li className="flex items-center gap-2 text-gray-600">
                                            <i className="fas fa-check-circle text-blue-600"></i>
                                            { t('job2_req3') }
                                        </li>
                                    </ul>
                                </div>

                                <div className="flex flex-wrap items-center justify-between gap-4">
                                    <div className="flex items-center gap-4">
                                        <div className="flex items-center gap-1 text-gray-600">
                                            <i className="fas fa-clock"></i>
                                            <span className="text-sm">{ t('job2_posted') }</span>
                                        </div>
                                        <div className="flex items-center gap-1 text-gray-600">
                                            <i className="fas fa-user-friends"></i>
                                            <span className="text-sm">{ t('job2_positions') }</span>
                                        </div>
                                    </div>
                                    <a href="#" className="inline-flex items-center gap-2 bg-blue-800 text-white hover:bg-blue-700 px-6 py-3 rounded-full font-medium transition duration-300 btn-animated">
                                        { t('apply_now') }
                                        <i className="fas fa-arrow-right"></i>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Job Card 3 */ }
                        <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 job-card" data-department="real-estate" data-aos="fade-up" data-aos-delay="300">
                            <div className="p-8">
                                <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                                    <div className="flex-grow">
                                        <div className="flex items-center gap-3 mb-2">
                                            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">{ t('real_estate') }</span>
                                            <span className="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">{ t('fulltime') }</span>
                                            <span className="bg-orange-100 text-orange-800 text-xs font-semibold px-3 py-1 rounded-full">{ t('onsite') }</span>
                                        </div>
                                        <h3 className="text-2xl font-bold text-gray-800 mb-2">{ t('job3_title') }</h3>
                                        <p className="text-gray-600 text-sm mb-4">{ t('real_estate_division') }</p>
                                    </div>
                                    <div className="flex items-center gap-2 text-gray-600">
                                        <i className="fas fa-map-marker-alt"></i>
                                        <span className="text-sm">{ t('job3_location') }</span>
                                    </div>
                                </div>

                                <div className="mb-6 p-4 bg-blue-50 rounded-xl">
                                    <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                                        <i className="fas fa-briefcase text-blue-600"></i>
                                        { t('key_requirements') }
                                    </h4>
                                    <ul className="space-y-2">
                                        <li className="flex items-center gap-2 text-gray-600">
                                            <i className="fas fa-check-circle text-blue-600"></i>
                                            { t('job3_req1') }
                                        </li>
                                        <li className="flex items-center gap-2 text-gray-600">
                                            <i className="fas fa-check-circle text-blue-600"></i>
                                            { t('job3_req2') }
                                        </li>
                                        <li className="flex items-center gap-2 text-gray-600">
                                            <i className="fas fa-check-circle text-blue-600"></i>
                                            { t('job3_req3') }
                                        </li>
                                    </ul>
                                </div>

                                <div className="flex flex-wrap items-center justify-between gap-4">
                                    <div className="flex items-center gap-4">
                                        <div className="flex items-center gap-1 text-gray-600">
                                            <i className="fas fa-clock"></i>
                                            <span className="text-sm">{ t('job3_posted') }</span>
                                        </div>
                                        <div className="flex items-center gap-1 text-gray-600">
                                            <i className="fas fa-user-friends"></i>
                                            <span className="text-sm">{ t('job3_positions') }</span>
                                        </div>
                                    </div>
                                    <a href="#" className="inline-flex items-center gap-2 bg-blue-800 text-white hover:bg-blue-700 px-6 py-3 rounded-full font-medium transition duration-300 btn-animated">
                                        { t('apply_now') }
                                        <i className="fas fa-arrow-right"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Application Process */ }
            <section className="py-20 bg-white relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-70"></div>
                <div className="absolute right-0 top-0 w-1/3 h-1/3 bg-blue-50 rounded-full filter blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute left-0 bottom-0 w-1/4 h-1/4 bg-blue-50 rounded-full filter blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>

                <div className="container mx-auto px-4 relative">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-16" data-aos="fade-up">
                            <span className="text-blue-600 font-semibold text-sm tracking-wider uppercase mb-2 block">{ t('join_our_team') }</span>
                            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">{ t('application_process') }</h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">{ t('process_description') }</p>
                        </div>

                        <div className="relative">
                            {/* Timeline Line */ }
                            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-600 to-blue-900 rounded-full"></div>

                            {/* Step 1 */ }
                            <div className="relative mb-16 timeline-item group" data-aos="fade-right">
                                <div className="md:flex items-center">
                                    <div className="md:w-1/2 pr-8 md:text-right mb-8 md:mb-0">
                                        <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-1">
                                            <span className="text-blue-600 font-semibold text-sm tracking-wider uppercase mb-2 block">{ t('step') } 01</span>
                                            <h3 className="text-2xl font-bold text-gray-800 mb-3">{ t('application_submission') }</h3>
                                            <p className="text-gray-600 mb-4">{ t('step1_description') }</p>
                                            <div className="flex md:justify-end gap-4 text-sm text-gray-500">
                                                <span className="flex items-center gap-1">
                                                    <i className="fas fa-clock"></i>
                                                    { t('step1_time') }
                                                </span>
                                                <span className="flex items-center gap-1">
                                                    <i className="fas fa-check-circle text-green-500"></i>
                                                    { t('quick_process') }
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center">
                                        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-xl shadow-lg border-4 border-white group-hover:scale-110 transition-transform duration-300 timeline-dot">
                                            1
                                        </div>
                                    </div>
                                    <div className="md:w-1/2 pl-0 md:pl-8">
                                        <div className="flex items-center gap-4 text-blue-800 group-hover:text-blue-600 transition-colors duration-300">
                                            <i className="fas fa-file-upload text-3xl"></i>
                                            <div className="text-sm font-medium">{ t('upload_documents') }</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Step 2 */ }
                            <div className="relative mb-16 timeline-item group" data-aos="fade-left">
                                <div className="md:flex items-center">
                                    <div className="md:w-1/2 pr-0 md:pr-8 order-2 md:order-1">
                                        <div className="flex items-center gap-4 text-blue-800 group-hover:text-blue-600 transition-colors duration-300">
                                            <i className="fas fa-phone-alt text-3xl"></i>
                                            <div className="text-sm font-medium">{ t('initial_screening') }</div>
                                        </div>
                                    </div>
                                    <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center">
                                        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-xl shadow-lg border-4 border-white group-hover:scale-110 transition-transform duration-300 timeline-dot">
                                            2
                                        </div>
                                    </div>
                                    <div className="md:w-1/2 pl-8 order-1 md:order-2 mb-8 md:mb-0">
                                        <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-1">
                                            <span className="text-blue-600 font-semibold text-sm tracking-wider uppercase mb-2 block">{ t('step') } 02</span>
                                            <h3 className="text-2xl font-bold text-gray-800 mb-3">{ t('initial_screening_title') }</h3>
                                            <p className="text-gray-600 mb-4">{ t('step2_description') }</p>
                                            <div className="flex gap-4 text-sm text-gray-500">
                                                <span className="flex items-center gap-1">
                                                    <i className="fas fa-clock"></i>
                                                    { t('step2_time') }
                                                </span>
                                                <span className="flex items-center gap-1">
                                                    <i className="fas fa-phone-alt text-blue-500"></i>
                                                    { t('step2_call') }
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Step 3 */ }
                            <div className="relative mb-16 timeline-item group" data-aos="fade-right">
                                <div className="md:flex items-center">
                                    <div className="md:w-1/2 pr-8 md:text-right mb-8 md:mb-0">
                                        <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-1">
                                            <span className="text-blue-600 font-semibold text-sm tracking-wider uppercase mb-2 block">{ t('step') } 03</span>
                                            <h3 className="text-2xl font-bold text-gray-800 mb-3">{ t('interview_process') }</h3>
                                            <p className="text-gray-600 mb-4">{ t('step3_description') }</p>
                                            <div className="flex md:justify-end gap-4 text-sm text-gray-500">
                                                <span className="flex items-center gap-1">
                                                    <i className="fas fa-clock"></i>
                                                    { t('step3_time') }
                                                </span>
                                                <span className="flex items-center gap-1">
                                                    <i className="fas fa-users text-blue-500"></i>
                                                    { t('team_interview') }
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center">
                                        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-xl shadow-lg border-4 border-white group-hover:scale-110 transition-transform duration-300 timeline-dot">
                                            3
                                        </div>
                                    </div>
                                    <div className="md:w-1/2 pl-0 md:pl-8">
                                        <div className="flex items-center gap-4 text-blue-800 group-hover:text-blue-600 transition-colors duration-300">
                                            <i className="fas fa-users text-3xl"></i>
                                            <div className="text-sm font-medium">{ t('meet_team') }</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Step 4 */ }
                            <div className="relative timeline-item group" data-aos="fade-left">
                                <div className="md:flex items-center">
                                    <div className="md:w-1/2 pr-0 md:pr-8 order-2 md:order-1">
                                        <div className="flex items-center gap-4 text-blue-800 group-hover:text-blue-600 transition-colors duration-300">
                                            <i className="fas fa-handshake text-3xl"></i>
                                            <div className="text-sm font-medium">{ t('welcome_aboard') }</div>
                                        </div>
                                    </div>
                                    <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center">
                                        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-xl shadow-lg border-4 border-white group-hover:scale-110 transition-transform duration-300 timeline-dot">
                                            4
                                        </div>
                                    </div>
                                    <div className="md:w-1/2 pl-8 order-1 md:order-2">
                                        <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-1">
                                            <span className="text-blue-600 font-semibold text-sm tracking-wider uppercase mb-2 block">{ t('step') } 04</span>
                                            <h3 className="text-2xl font-bold text-gray-800 mb-3">{ t('decision_offer') }</h3>
                                            <p className="text-gray-600 mb-4">{ t('step4_description') }</p>
                                            <div className="flex gap-4 text-sm text-gray-500">
                                                <span className="flex items-center gap-1">
                                                    <i className="fas fa-clock"></i>
                                                    { t('step4_time') }
                                                </span>
                                                <span className="flex items-center gap-1">
                                                    <i className="fas fa-handshake text-green-500"></i>
                                                    { t('final_offer') }
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Tips Box */ }
                        <div className="mt-16 bg-blue-50 rounded-2xl p-8" data-aos="fade-up">
                            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                                <i className="fas fa-lightbulb text-blue-600"></i>
                                { t('tips_success') }
                            </h3>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="flex items-start gap-3">
                                    <div className="text-blue-600 mt-1">
                                        <i className="fas fa-check-circle"></i>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-800 mb-1">{ t('research_us') }</h4>
                                        <p className="text-gray-600 text-sm">{ t('research_desc') }</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="text-blue-600 mt-1">
                                        <i className="fas fa-check-circle"></i>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-800 mb-1">{ t('be_prepared') }</h4>
                                        <p className="text-gray-600 text-sm">{ t('prepared_desc') }</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="text-blue-600 mt-1">
                                        <i className="fas fa-check-circle"></i>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-800 mb-1">{ t('ask_questions') }</h4>
                                        <p className="text-gray-600 text-sm">{ t('questions_desc') }</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="text-blue-600 mt-1">
                                        <i className="fas fa-check-circle"></i>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-800 mb-1">{ t('follow_up') }</h4>
                                        <p className="text-gray-600 text-sm">{ t('follow_up_desc') }</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */ }
            <section className="py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-700"></div>
                <div className="absolute inset-0 opacity-20 bg-pattern"></div>
                <div className="container mx-auto px-4 text-center relative z-10" data-aos="fade-up">
                    <div className="glass-card max-w-4xl mx-auto py-12 px-8 rounded-2xl">
                        <h2 className="text-3xl font-bold mb-6 text-white">{ t('dont_see_fit') }</h2>
                        <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">{ t('always_looking') }</p>
                        <a href="#" className="bg-white text-blue-800 hover:bg-blue-100 px-8 py-4 rounded-full font-medium transition duration-300 btn-animated inline-flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
                            </svg>
                            { t('submit_resume') }
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default CareersPage;


"use client";

import { useTranslations, useLocale } from "next-intl";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import { Link as NavigationLink } from "@/i18n/routing";

export default function GrastonMedicalClinics() {
    const t = useTranslations("subsidiaries.graston");
    const currentLocale = useLocale();

    useEffect(() => {
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
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <>
            {/* Hero Section */ }
            <section className="hero-section relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 opacity-85"></div>
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80')] bg-cover bg-center mix-blend-overlay"></div>

                {/* Floating Medical Objects */ }
                <div className="floating-objects">
                    <i className="fas fa-heartbeat floating-object float-1"></i>
                    <i className="fas fa-stethoscope floating-object float-2"></i>
                    <i className="fas fa-hand-holding-medical floating-object float-3"></i>
                    <i className="fas fa-notes-medical floating-object float-4"></i>
                    <i className="fas fa-hospital floating-object float-5"></i>
                </div>

                <div className="hero-content" data-aos="fade-up" data-aos-duration="1000">
                    <h1 className="hero-title">{ t("title") }</h1>
                    <p className="hero-subtitle">{ t("subtitle") }</p>
                    <a
                        href="#services"
                        className="hero-button"
                        onClick={ (e) => {
                            e.preventDefault();
                            document.getElementById('services').scrollIntoView({
                                behavior: 'smooth'
                            });
                        } }
                    >
                        { t("explore_services") }
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </a>
                </div>
            </section>

            {/* Company Overview Section */ }
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-1/2" data-aos="fade-right" data-aos-duration="1000">
                            <img src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
                                alt="Graston Medical Clinics" className="rounded-xl shadow-2xl w-full" />
                        </div>
                        <div className="lg:w-1/2" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200">
                            <h2 className="text-4xl font-bold text-gray-800 mb-6">{ t("about_title") }</h2>
                            <div className="w-20 h-1 bg-blue-600 mb-8 rounded-full"></div>
                            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                                { t("about_p1") }
                            </p>
                            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                                { t("about_p2") }
                            </p>
                            <div className="bg-blue-50 p-8 rounded-xl border-l-4 border-blue-600 shadow-md">
                                <h3 className="text-2xl font-bold text-gray-800 mb-6">{ t("core_services_title") }</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="flex items-start transition-transform duration-300 hover:translate-x-2">
                                        <i className="fas fa-check-circle text-blue-600 text-xl mt-1 mr-3"></i>
                                        <span className="text-gray-700">{ t("service1") }</span>
                                    </div>
                                    <div className="flex items-start transition-transform duration-300 hover:translate-x-2">
                                        <i className="fas fa-check-circle text-blue-600 text-xl mt-1 mr-3"></i>
                                        <span className="text-gray-700">{ t("service2") }</span>
                                    </div>
                                    <div className="flex items-start transition-transform duration-300 hover:translate-x-2">
                                        <i className="fas fa-check-circle text-blue-600 text-xl mt-1 mr-3"></i>
                                        <span className="text-gray-700">{ t("service3") }</span>
                                    </div>
                                    <div className="flex items-start transition-transform duration-300 hover:translate-x-2">
                                        <i className="fas fa-check-circle text-blue-600 text-xl mt-1 mr-3"></i>
                                        <span className="text-gray-700">{ t("service4") }</span>
                                    </div>
                                    <div className="flex items-start transition-transform duration-300 hover:translate-x-2">
                                        <i className="fas fa-check-circle text-blue-600 text-xl mt-1 mr-3"></i>
                                        <span className="text-gray-700">{ t("service5") }</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Specialized Services Section */ }
            <section id="services" className="py-24 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="section-title text-4xl font-bold text-center text-gray-800">{ t("specialized_services_title") }</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">
                        {/* Service 1 */ }
                        <div className="service-card bg-white" data-aos="fade-up" data-aos-duration="800">
                            <div className="h-56 overflow-hidden">
                                <img src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
                                    alt={ t("service_graston_title") }
                                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" />
                            </div>
                            <div className="p-8">
                                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto -mt-16 mb-6 border-4 border-white shadow-lg">
                                    <i className="fas fa-hands service-icon text-blue-600 text-2xl"></i>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">{ t("service_graston_title") }</h3>
                                <p className="text-gray-600 text-center">
                                    { t("service_graston_desc") }
                                </p>
                            </div>
                        </div>

                        {/* Service 2 */ }
                        <div className="service-card bg-white" data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
                            <div className="h-56 overflow-hidden">
                                <img src="https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
                                    alt={ t("service_sports_title") }
                                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" />
                            </div>
                            <div className="p-8">
                                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto -mt-16 mb-6 border-4 border-white shadow-lg">
                                    <i className="fas fa-running service-icon text-blue-600 text-2xl"></i>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">{ t("service_sports_title") }</h3>
                                <p className="text-gray-600 text-center">
                                    { t("service_sports_desc") }
                                </p>
                            </div>
                        </div>

                        {/* Service 3 */ }
                        <div className="service-card bg-white" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
                            <div className="h-56 overflow-hidden">
                                <img src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
                                    alt={ t("service_orthopedic_title") }
                                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" />
                            </div>
                            <div className="p-8">
                                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto -mt-16 mb-6 border-4 border-white shadow-lg">
                                    <i className="fas fa-bone service-icon text-blue-600 text-2xl"></i>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">{ t("service_orthopedic_title") }</h3>
                                <p className="text-gray-600 text-center">
                                    { t("service_orthopedic_desc") }
                                </p>
                            </div>
                        </div>

                        {/* Service 4 */ }
                        <div className="service-card bg-white" data-aos="fade-up" data-aos-duration="800">
                            <div className="h-56 overflow-hidden">
                                <img src="https://images.unsplash.com/photo-1607962837359-5e7e89f86776?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
                                    alt={ t("service_neurological_title") }
                                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" />
                            </div>
                            <div className="p-8">
                                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto -mt-16 mb-6 border-4 border-white shadow-lg">
                                    <i className="fas fa-brain service-icon text-blue-600 text-2xl"></i>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">{ t("service_neurological_title") }</h3>
                                <p className="text-gray-600 text-center">
                                    { t("service_neurological_desc") }
                                </p>
                            </div>
                        </div>

                        {/* Service 5 */ }
                        <div className="service-card bg-white" data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
                            <div className="h-56 overflow-hidden">
                                <img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
                                    alt={ t("service_functional_title") }
                                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" />
                            </div>
                            <div className="p-8">
                                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto -mt-16 mb-6 border-4 border-white shadow-lg">
                                    <i className="fas fa-walking service-icon text-blue-600 text-2xl"></i>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">{ t("service_functional_title") }</h3>
                                <p className="text-gray-600 text-center">
                                    { t("service_functional_desc") }
                                </p>
                            </div>
                        </div>

                        {/* Service 6 */ }
                        <div className="service-card bg-white" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
                            <div className="h-56 overflow-hidden">
                                <img src="https://images.unsplash.com/photo-1588286840104-8957b019727f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
                                    alt={ t("service_pain_title") }
                                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" />
                            </div>
                            <div className="p-8">
                                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto -mt-16 mb-6 border-4 border-white shadow-lg">
                                    <i className="fas fa-heartbeat service-icon text-blue-600 text-2xl"></i>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">{ t("service_pain_title") }</h3>
                                <p className="text-gray-600 text-center">
                                    { t("service_pain_desc") }
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Therapeutic Approach Section */ }
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="section-title text-4xl font-bold text-center text-gray-800">{ t("approach_title") }</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div data-aos="fade-right" data-aos-duration="1000">
                            <img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
                                alt="Physical Therapy Session" className="rounded-xl shadow-xl w-full h-full object-cover" />
                        </div>
                        <div data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200">
                            <h3 className="text-3xl font-bold text-gray-800 mb-6">{ t("patient_centered_title") }</h3>
                            <div className="w-20 h-1 bg-blue-600 mb-8 rounded-full"></div>
                            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                                { t("patient_centered_desc") }
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-start group">
                                    <div className="flex-shrink-0 bg-blue-100 rounded-full p-4 flex items-center justify-center mr-4 
                                            transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
                                        <i className="fas fa-clipboard-check text-blue-800 text-xl transition-all duration-300 group-hover:text-white"></i>
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                                            { t("approach_assessment_title") }</h4>
                                        <p className="text-gray-600">{ t("approach_assessment_desc") }</p>
                                    </div>
                                </div>

                                <div className="flex items-start group">
                                    <div className="flex-shrink-0 bg-blue-100 rounded-full p-4 flex items-center justify-center mr-4 
                                            transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
                                        <i className="fas fa-user-cog text-blue-800 text-xl transition-all duration-300 group-hover:text-white"></i>
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                                            { t("approach_treatment_title") }</h4>
                                        <p className="text-gray-600">{ t("approach_treatment_desc") }</p>
                                    </div>
                                </div>

                                <div className="flex items-start group">
                                    <div className="flex-shrink-0 bg-blue-100 rounded-full p-4 flex items-center justify-center mr-4 
                                            transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
                                        <i className="fas fa-chart-line text-blue-800 text-xl transition-all duration-300 group-hover:text-white"></i>
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                                            { t("approach_monitoring_title") }</h4>
                                        <p className="text-gray-600">{ t("approach_monitoring_desc") }</p>
                                    </div>
                                </div>

                                <div className="flex items-start group">
                                    <div className="flex-shrink-0 bg-blue-100 rounded-full p-4 flex items-center justify-center mr-4 
                                            transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
                                        <i className="fas fa-graduation-cap text-blue-800 text-xl transition-all duration-300 group-hover:text-white"></i>
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                                            { t("approach_education_title") }</h4>
                                        <p className="text-gray-600">{ t("approach_education_desc") }</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */ }
            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="section-title text-4xl font-bold text-center text-gray-800">{ t("team_title") }</h2>
                    <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-16">{ t("team_desc") }</p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-12">
                        {/* Team Member 1 */ }
                        <div className="team-card bg-white overflow-hidden shadow-lg rounded-xl" data-aos="fade-up"
                            data-aos-duration="800">
                            <div className="h-72 overflow-hidden">
                                <img src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1374&q=80"
                                    alt={ t("team_therapists_title") }
                                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
                            </div>
                            <div className="relative px-6 pb-6">
                                <div className="absolute -top-10 left-0 right-0 mx-auto w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center border-4 border-white shadow-lg">
                                    <i className="fas fa-user-md text-white text-2xl"></i>
                                </div>
                                <div className="pt-12 text-center">
                                    <h3 className="text-2xl font-bold text-gray-800 mb-4">{ t("team_therapists_title") }</h3>
                                    <p className="text-gray-600 mb-6">
                                        { t("team_therapists_desc") }
                                    </p>
                                    <div className="flex justify-center space-x-4">
                                        <a href="#"
                                            className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center transition-colors duration-300 hover:bg-blue-600 hover:text-white">
                                            <i className="fab fa-linkedin-in"></i>
                                        </a>
                                        <a href="#"
                                            className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center transition-colors duration-300 hover:bg-blue-600 hover:text-white">
                                            <i className="fas fa-envelope"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Team Member 2 */ }
                        <div className="team-card bg-white overflow-hidden shadow-lg rounded-xl" data-aos="fade-up"
                            data-aos-duration="800" data-aos-delay="100">
                            <div className="h-72 overflow-hidden">
                                <img src="https://images.unsplash.com/photo-1666214280557-f1b5022eb634?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
                                    alt={ t("team_specialists_title") }
                                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
                            </div>
                            <div className="relative px-6 pb-6">
                                <div className="absolute -top-10 left-0 right-0 mx-auto w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center border-4 border-white shadow-lg">
                                    <i className="fas fa-certificate text-white text-2xl"></i>
                                </div>
                                <div className="pt-12 text-center">
                                    <h3 className="text-2xl font-bold text-gray-800 mb-4">{ t("team_specialists_title") }</h3>
                                    <p className="text-gray-600 mb-6">
                                        { t("team_specialists_desc") }
                                    </p>
                                    <div className="flex justify-center space-x-4">
                                        <a href="#"
                                            className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center transition-colors duration-300 hover:bg-blue-600 hover:text-white">
                                            <i className="fab fa-linkedin-in"></i>
                                        </a>
                                        <a href="#"
                                            className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center transition-colors duration-300 hover:bg-blue-600 hover:text-white">
                                            <i className="fas fa-envelope"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Team Member 3 */ }
                        <div className="team-card bg-white overflow-hidden shadow-lg rounded-xl" data-aos="fade-up"
                            data-aos-duration="800" data-aos-delay="200">
                            <div className="h-72 overflow-hidden">
                                <img src="https://images.unsplash.com/photo-1582056615449-5dcb2332b3b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1374&q=80"
                                    alt={ t("team_support_title") }
                                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
                            </div>
                            <div className="relative px-6 pb-6">
                                <div className="absolute -top-10 left-0 right-0 mx-auto w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center border-4 border-white shadow-lg">
                                    <i className="fas fa-hands-helping text-white text-2xl"></i>
                                </div>
                                <div className="pt-12 text-center">
                                    <h3 className="text-2xl font-bold text-gray-800 mb-4">{ t("team_support_title") }</h3>
                                    <p className="text-gray-600 mb-6">
                                        { t("team_support_desc") }
                                    </p>
                                    <div className="flex justify-center space-x-4">
                                        <a href="#"
                                            className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center transition-colors duration-300 hover:bg-blue-600 hover:text-white">
                                            <i className="fab fa-linkedin-in"></i>
                                        </a>
                                        <a href="#"
                                            className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center transition-colors duration-300 hover:bg-blue-600 hover:text-white">
                                            <i className="fas fa-envelope"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Team Section Call to Action */ }
                    <div className="mt-16 text-center" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
                        <NavigationLink href="/careers" locale={ currentLocale } className="inline-flex items-center bg-blue-600 text-white hover:bg-blue-700 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                            <span>{ t("join_team_btn") }</span>
                            <i className="fas fa-arrow-right ml-2"></i>
                        </NavigationLink>
                    </div>
                </div>
            </section>

            {/* Technologies Section */ }
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="section-title text-4xl font-bold text-center text-gray-800">{ t("tech_title") }</h2>
                    <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-16">{ t("tech_desc") }</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                        {/* Technology 1 */ }
                        <div className="technology-card bg-gray-50 p-8 rounded-xl border border-gray-200 shadow-md hover:shadow-xl transition-shadow duration-300"
                            data-aos="fade-up" data-aos-duration="800">
                            <div className="tech-icon-container mb-6 flex justify-center">
                                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                                    <i className="fas fa-wave-square text-white text-2xl"></i>
                                </div>
                            </div>
                            <h3 className="text-2xl font-bold text-center text-gray-800 mb-4">{ t("tech_graston_title") }</h3>
                            <p className="text-gray-600 text-center mb-6">
                                { t("tech_graston_desc") }
                            </p>
                            <div className="tech-feature-list flex flex-col space-y-3">
                                <div className="flex items-center">
                                    <i className="fas fa-check-circle text-green-500 mr-3"></i>
                                    <span className="text-gray-700">{ t("tech_graston_feature1") }</span>
                                </div>
                                <div className="flex items-center">
                                    <i className="fas fa-check-circle text-green-500 mr-3"></i>
                                    <span className="text-gray-700">{ t("tech_graston_feature2") }</span>
                                </div>
                                <div className="flex items-center">
                                    <i className="fas fa-check-circle text-green-500 mr-3"></i>
                                    <span className="text-gray-700">{ t("tech_graston_feature3") }</span>
                                </div>
                            </div>
                        </div>

                        {/* Technology 2 */ }
                        <div className="technology-card bg-gray-50 p-8 rounded-xl border border-gray-200 shadow-md hover:shadow-xl transition-shadow duration-300"
                            data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
                            <div className="tech-icon-container mb-6 flex justify-center">
                                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                                    <i className="fas fa-bolt text-white text-2xl"></i>
                                </div>
                            </div>
                            <h3 className="text-2xl font-bold text-center text-gray-800 mb-4">{ t("tech_electro_title") }</h3>
                            <p className="text-gray-600 text-center mb-6">
                                { t("tech_electro_desc") }
                            </p>
                            <div className="tech-feature-list flex flex-col space-y-3">
                                <div className="flex items-center">
                                    <i className="fas fa-check-circle text-green-500 mr-3"></i>
                                    <span className="text-gray-700">{ t("tech_electro_feature1") }</span>
                                </div>
                                <div className="flex items-center">
                                    <i className="fas fa-check-circle text-green-500 mr-3"></i>
                                    <span className="text-gray-700">{ t("tech_electro_feature2") }</span>
                                </div>
                                <div className="flex items-center">
                                    <i className="fas fa-check-circle text-green-500 mr-3"></i>
                                    <span className="text-gray-700">{ t("tech_electro_feature3") }</span>
                                </div>
                            </div>
                        </div>

                        {/* Technology 3 */ }
                        <div className="technology-card bg-gray-50 p-8 rounded-xl border border-gray-200 shadow-md hover:shadow-xl transition-shadow duration-300"
                            data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
                            <div className="tech-icon-container mb-6 flex justify-center">
                                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                                    <i className="fas fa-magnet text-white text-2xl"></i>
                                </div>
                            </div>
                            <h3 className="text-2xl font-bold text-center text-gray-800 mb-4">{ t("tech_ultrasound_title") }</h3>
                            <p className="text-gray-600 text-center mb-6">
                                { t("tech_ultrasound_desc") }
                            </p>
                            <div className="tech-feature-list flex flex-col space-y-3">
                                <div className="flex items-center">
                                    <i className="fas fa-check-circle text-green-500 mr-3"></i>
                                    <span className="text-gray-700">{ t("tech_ultrasound_feature1") }</span>
                                </div>
                                <div className="flex items-center">
                                    <i className="fas fa-check-circle text-green-500 mr-3"></i>
                                    <span className="text-gray-700">{ t("tech_ultrasound_feature2") }</span>
                                </div>
                                <div className="flex items-center">
                                    <i className="fas fa-check-circle text-green-500 mr-3"></i>
                                    <span className="text-gray-700">{ t("tech_ultrasound_feature3") }</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */ }
            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="section-title text-4xl font-bold text-center text-gray-800">{ t("testimonials_title") }</h2>
                    <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-16">{ t("testimonials_desc") }</p>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
                        {/* Testimonial 1 */ }
                        <div className="testimonial-card bg-white p-8 rounded-xl shadow-lg" data-aos="fade-up" data-aos-duration="800">
                            <div className="mb-6 flex justify-center">
                                <div className="w-20 h-20 bg-blue-100 rounded-full overflow-hidden border-4 border-white shadow-md">
                                    <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=764&q=80"
                                        alt="Patient" className="w-full h-full object-cover" />
                                </div>
                            </div>
                            <div className="flex justify-center mb-4">
                                <div className="flex space-x-1">
                                    <i className="fas fa-star text-yellow-400"></i>
                                    <i className="fas fa-star text-yellow-400"></i>
                                    <i className="fas fa-star text-yellow-400"></i>
                                    <i className="fas fa-star text-yellow-400"></i>
                                    <i className="fas fa-star text-yellow-400"></i>
                                </div>
                            </div>
                            <p className="text-gray-600 text-center mb-6 italic">
                                "{ t("testimonial1") }"
                            </p>
                            <h3 className="text-xl font-bold text-center text-gray-800">{ t("testimonial1_name") }</h3>
                            <p className="text-blue-600 text-center">{ t("testimonial1_title") }</p>
                        </div>

                        {/* Testimonial 2 */ }
                        <div className="testimonial-card bg-white p-8 rounded-xl shadow-lg" data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
                            <div className="mb-6 flex justify-center">
                                <div className="w-20 h-20 bg-blue-100 rounded-full overflow-hidden border-4 border-white shadow-md">
                                    <img src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80"
                                        alt="Patient" className="w-full h-full object-cover" />
                                </div>
                            </div>
                            <div className="flex justify-center mb-4">
                                <div className="flex space-x-1">
                                    <i className="fas fa-star text-yellow-400"></i>
                                    <i className="fas fa-star text-yellow-400"></i>
                                    <i className="fas fa-star text-yellow-400"></i>
                                    <i className="fas fa-star text-yellow-400"></i>
                                    <i className="fas fa-star text-yellow-400"></i>
                                </div>
                            </div>
                            <p className="text-gray-600 text-center mb-6 italic">
                                "{ t("testimonial2") }"
                            </p>
                            <h3 className="text-xl font-bold text-center text-gray-800">{ t("testimonial2_name") }</h3>
                            <p className="text-blue-600 text-center">{ t("testimonial2_title") }</p>
                        </div>

                        {/* Testimonial 3 */ }
                        <div className="testimonial-card bg-white p-8 rounded-xl shadow-lg" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
                            <div className="mb-6 flex justify-center">
                                <div className="w-20 h-20 bg-blue-100 rounded-full overflow-hidden border-4 border-white shadow-md">
                                    <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=688&q=80"
                                        alt="Patient" className="w-full h-full object-cover" />
                                </div>
                            </div>
                            <div className="flex justify-center mb-4">
                                <div className="flex space-x-1">
                                    <i className="fas fa-star text-yellow-400"></i>
                                    <i className="fas fa-star text-yellow-400"></i>
                                    <i className="fas fa-star text-yellow-400"></i>
                                    <i className="fas fa-star text-yellow-400"></i>
                                    <i className="fas fa-star text-yellow-400"></i>
                                </div>
                            </div>
                            <p className="text-gray-600 text-center mb-6 italic">
                                "{ t("testimonial3") }"
                            </p>
                            <h3 className="text-xl font-bold text-center text-gray-800">{ t("testimonial3_name") }</h3>
                            <p className="text-blue-600 text-center">{ t("testimonial3_title") }</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action Section */ }
            <section className="py-24 bg-blue-600 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800"></div>
                <div className="absolute inset-0 opacity-10">
                    <div className="wave-pattern wave-top"></div>
                    <div className="wave-pattern wave-bottom"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-4xl font-bold text-white mb-6" data-aos="fade-up" data-aos-duration="800">
                            { t("cta_title") }
                        </h2>
                        <p className="text-xl text-blue-100 mb-10" data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
                            { t("cta_desc") }
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4"
                            data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
                            <NavigationLink href="/contact" locale={ currentLocale } className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center">
                                <i className="fas fa-calendar-alt mr-2"></i>
                                <span>{ t("cta_appointment_btn") }</span>
                            </NavigationLink>
                            <NavigationLink href="/contact" locale={ currentLocale } className="bg-transparent text-white border-2 border-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center">
                                <i className="fas fa-phone-alt mr-2"></i>
                                <span>{ t("cta_contact_btn") }</span>
                            </NavigationLink>
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

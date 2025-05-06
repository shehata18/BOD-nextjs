"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AllPlansPage() {
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
            {/* Hero Section with Parallax Effect */}
            <section className="relative h-[90vh] min-h-[600px] overflow-hidden bg-black">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0">
                    <div className="absolute inset-0 h-full transform scale-105 animate-slow-zoom">
                        <img
                            src="https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="Exhibition Hall"
                            className="absolute inset-0 w-full h-full object-cover object-center opacity-40"
                        />
                    </div>
                    {/* Gradient Overlays */}
                    <div className="absolute inset-0 h-full bg-gradient-to-r from-black/80 via-blue-900/50 to-black/80"></div>
                    <div className="absolute inset-0 h-full bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.7)_100%)]"></div>
                </div>

                {/* Floating Elements Animation */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute w-24 h-24 bg-blue-500/20 rounded-full blur-xl left-[15%] top-[20%] animate-float1"></div>
                    <div className="absolute w-32 h-32 bg-purple-500/20 rounded-full blur-xl right-[25%] top-[25%] animate-float2"></div>
                    <div className="absolute w-20 h-20 bg-yellow-500/20 rounded-full blur-xl left-[35%] bottom-[33%] animate-float3"></div>
                    <div className="absolute w-28 h-28 bg-green-500/20 rounded-full blur-xl right-[10%] top-[40%] animate-float4"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center">
                    <div className="text-center max-w-5xl mx-auto" data-aos="fade-up">
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                            <span className="block">مؤسسه اول بلانز</span>
                            <span className="block text-blue-400">All Plans</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto">
                            لتنطيم المعارض والمؤتمرات
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="#services" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
                                Explore Our Services
                            </Link>
                            <Link href="#contact" className="bg-transparent hover:bg-white/10 text-white font-semibold py-3 px-8 rounded-lg border-2 border-white transition duration-300 ease-in-out transform hover:scale-105 backdrop-blur-sm">
                                {t("contact_us") || "Contact Us"}
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
                    <a href="#about" className="text-white opacity-70 hover:opacity-100 transition duration-300">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                        </svg>
                    </a>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-24 bg-gradient-to-b from-white to-gray-50">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        {/* Image Column with Decorative Elements */}
                        <div className="w-full lg:w-1/2 relative" data-aos="fade-right">
                            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                                <img 
                                    src="https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                    alt="Conference Planning" 
                                    className="w-full h-[600px] object-cover"
                                />
                            </div>
                            
                            {/* Decorative elements */}
                            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-blue-600/20 rounded-full blur-xl z-0"></div>
                            <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-600/20 rounded-full blur-xl z-0"></div>
                            
                            {/* Feature Box */}
                            <div className="absolute bottom-8 right-8 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 max-w-xs z-20" data-aos="fade-up" data-aos-delay="300">
                                <div className="flex items-start gap-4">
                                    <div className="bg-blue-100 rounded-full p-3 mt-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 text-lg mb-2">Excellence in Execution</h4>
                                        <p className="text-gray-600 text-sm">We transform concepts into unforgettable experiences with meticulous attention to detail.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        {/* Content Column */}
                        <div className="w-full lg:w-1/2" data-aos="fade-left">
                            <div className="mb-8">
                                <span className="text-blue-600 font-semibold uppercase tracking-widest text-sm">About Us</span>
                                <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-4">Creating Extraordinary Events & Exhibitions</h2>
                                <div className="h-1 w-20 bg-blue-600 mb-6"></div>
                                <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                                    All Plans is a premier event management and exhibition organization company, dedicated to creating memorable and impactful experiences. We specialize in designing and executing corporate events, conferences, and exhibitions that leave lasting impressions.
                                </p>
                                <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                                    With our creative team and meticulous planning process, we transform your vision into reality, ensuring every event achieves its objectives while exceeding expectations in presentation and execution.
                                </p>
                            </div>
                            
                            {/* Feature Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 mr-4">
                                        <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Dynamic Planning</h3>
                                        <p className="text-gray-600">Expert strategizing that adapts to your specific event needs and objectives.</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 mr-4">
                                        <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Professional Team</h3>
                                        <p className="text-gray-600">Experienced coordinators, designers, and technicians working seamlessly together.</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 mr-4">
                                        <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Creative Solutions</h3>
                                        <p className="text-gray-600">Innovative designs and concepts that make your event stand out from the crowd.</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 mr-4">
                                        <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Meticulous Execution</h3>
                                        <p className="text-gray-600">Flawless implementation with attention to every detail from start to finish.</p>
                                    </div>
                                </div>
                            </div>
                            
                            <Link href="#services" className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 ease-in-out">
                                Discover Our Services
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section id="services" className="py-24 bg-gray-900 text-white relative overflow-hidden">
                {/* Background Elements */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 w-full h-full bg-grid-white/[0.05] bg-[size:50px_50px]"></div>
                </div>
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/30 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/30 rounded-full blur-3xl"></div>
                
                <div className="container mx-auto px-4 relative z-10">
                    {/* Section Header */}
                    <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
                        <span className="text-blue-400 font-semibold uppercase tracking-widest text-sm">What We Offer</span>
                        <h2 className="text-4xl font-bold text-white mt-2 mb-4">Comprehensive Event Solutions</h2>
                        <div className="h-1 w-20 bg-blue-400 mx-auto mb-6"></div>
                        <p className="text-gray-300 text-lg">
                            From concept to execution, we provide end-to-end services to make your events and exhibitions successful and memorable.
                        </p>
                    </div>
                    
                    {/* Services Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Service 1 */}
                        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] group" data-aos="fade-up" data-aos-delay="100">
                            <div className="h-16 w-16 bg-blue-600/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-600/30 transition-all duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-all duration-300">Exhibition Management</h3>
                            <p className="text-gray-300 mb-6">Full-service exhibition planning including booth design, logistics, vendor coordination, and technical support.</p>
                            <ul className="text-gray-400 space-y-2 mb-6">
                                <li className="flex items-center">
                                    <svg className="w-4 h-4 mr-2 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    Booth Design & Construction
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-4 h-4 mr-2 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    Exhibitor Management
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-4 h-4 mr-2 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    Technical Production
                                </li>
                            </ul>
                        </div>

                        {/* Service 2 */}
                        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] group" data-aos="fade-up" data-aos-delay="200">
                            <div className="h-16 w-16 bg-blue-600/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-600/30 transition-all duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-all duration-300">Conference Organization</h3>
                            <p className="text-gray-300 mb-6">Complete conference planning and management services that handle everything from venue selection to program development.</p>
                            <ul className="text-gray-400 space-y-2 mb-6">
                                <li className="flex items-center">
                                    <svg className="w-4 h-4 mr-2 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    Venue Selection & Setup
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-4 h-4 mr-2 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    Speaker Management
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-4 h-4 mr-2 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    Attendee Registration
                                </li>
                            </ul>
                        </div>

                        {/* Service 3 */}
                        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] group" data-aos="fade-up" data-aos-delay="300">
                            <div className="h-16 w-16 bg-blue-600/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-600/30 transition-all duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-all duration-300">Creative Design Services</h3>
                            <p className="text-gray-300 mb-6">Innovative design solutions for branding, marketing materials, booth designs, and immersive event experiences.</p>
                            <ul className="text-gray-400 space-y-2 mb-6">
                                <li className="flex items-center">
                                    <svg className="w-4 h-4 mr-2 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    Brand Identity Development
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-4 h-4 mr-2 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    Marketing Collateral
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-4 h-4 mr-2 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    3D Space Visualization
                                </li>
                            </ul>
                        </div>

                        {/* Service 4 */}
                        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] group" data-aos="fade-up" data-aos-delay="100">
                            <div className="h-16 w-16 bg-blue-600/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-600/30 transition-all duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-all duration-300">Audio-Visual Production</h3>
                            <p className="text-gray-300 mb-6">Professional audio-visual services to create immersive and engaging presentations and experiences.</p>
                            <ul className="text-gray-400 space-y-2 mb-6">
                                <li className="flex items-center">
                                    <svg className="w-4 h-4 mr-2 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    Sound & Lighting Systems
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-4 h-4 mr-2 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    Visual Presentations
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-4 h-4 mr-2 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    Live Streaming Services
                                </li>
                            </ul>
                        </div>

                        {/* Service 5 */}
                        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] group" data-aos="fade-up" data-aos-delay="200">
                            <div className="h-16 w-16 bg-blue-600/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-600/30 transition-all duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-all duration-300">Sponsorship Management</h3>
                            <p className="text-gray-300 mb-6">Strategic sponsorship acquisition, activation, and relationship management for maximum value and exposure.</p>
                            <ul className="text-gray-400 space-y-2 mb-6">
                                <li className="flex items-center">
                                    <svg className="w-4 h-4 mr-2 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    Sponsor Acquisition
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-4 h-4 mr-2 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    Benefit Fulfillment
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-4 h-4 mr-2 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    ROI Reporting
                                </li>
                            </ul>
                        </div>

                        {/* Service 6 */}
                        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] group" data-aos="fade-up" data-aos-delay="300">
                            <div className="h-16 w-16 bg-blue-600/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-600/30 transition-all duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-all duration-300">Registration & Ticketing</h3>
                            <p className="text-gray-300 mb-6">End-to-end registration and ticketing solutions with customized platforms and on-site support.</p>
                            <ul className="text-gray-400 space-y-2 mb-6">
                                <li className="flex items-center">
                                    <svg className="w-4 h-4 mr-2 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    Online Registration Systems
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-4 h-4 mr-2 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    Badge Production
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-4 h-4 mr-2 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    On-site Check-in Process
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                    {/* Call to Action */}
                    <div className="text-center mt-16" data-aos="fade-up">
                        <Link href="#contact" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-10 rounded-lg transition duration-300 transform hover:scale-105 hover:shadow-lg">
                            Request a Custom Quote
                        </Link>
                    </div>
                </div>
            </section>

            {/* Portfolio Section */}
            <section className="py-24 bg-white relative overflow-hidden">
                {/* Background Elements */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute -top-40 -left-40 w-80 h-80 bg-blue-100 rounded-full opacity-30 blur-3xl"></div>
                    <div className="absolute bottom-40 right-20 w-60 h-60 bg-purple-100 rounded-full opacity-20 blur-3xl"></div>
                </div>
                
                <div className="container mx-auto px-4 relative z-10">
                    {/* Section Header */}
                    <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
                        <span className="text-blue-600 font-semibold uppercase tracking-widest text-sm">Our Projects</span>
                        <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-4">Featured Portfolio</h2>
                        <div className="h-1 w-20 bg-blue-600 mx-auto mb-6"></div>
                        <p className="text-gray-600 text-lg">
                            Explore our showcase of successful events and exhibitions we've organized for clients across various industries.
                        </p>
                    </div>
                    
                    {/* Portfolio Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-6">
                        {/* Project 1 */}
                        <div className="group" data-aos="fade-up" data-aos-delay="100">
                            <div className="relative overflow-hidden rounded-xl aspect-[4/3] shadow-lg mb-5">
                                <img 
                                    src="https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                                    alt="Tech Innovation Summit" 
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6">
                                    <div className="transform translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
                                        <h3 className="text-xl font-bold text-white mb-2">Tech Innovation Summit</h3>
                                        <p className="text-gray-300">A premier technology conference showcasing the latest AI advancements.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-between items-center">
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition duration-300">Tech Innovation Summit</h3>
                                    <p className="text-gray-600">Conference Planning</p>
                                </div>
                                <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center group-hover:bg-blue-600 transition duration-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 group-hover:text-white transition duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        
                        {/* Project 2 */}
                        <div className="group" data-aos="fade-up" data-aos-delay="200">
                            <div className="relative overflow-hidden rounded-xl aspect-[4/3] shadow-lg mb-5">
                                <img 
                                    src="https://images.pexels.com/photos/144428/pexels-photo-144428.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                                    alt="Global Healthcare Exhibition" 
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6">
                                    <div className="transform translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
                                        <h3 className="text-xl font-bold text-white mb-2">Global Healthcare Expo</h3>
                                        <p className="text-gray-300">Medical innovations showcase with international presence.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-between items-center">
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition duration-300">Global Healthcare Expo</h3>
                                    <p className="text-gray-600">Exhibition Management</p>
                                </div>
                                <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center group-hover:bg-blue-600 transition duration-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 group-hover:text-white transition duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        
                        {/* Project 3 */}
                        <div className="group" data-aos="fade-up" data-aos-delay="300">
                            <div className="relative overflow-hidden rounded-xl aspect-[4/3] shadow-lg mb-5">
                                <img 
                                    src="https://images.pexels.com/photos/2897462/pexels-photo-2897462.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                                    alt="Business Leadership Forum" 
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6">
                                    <div className="transform translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
                                        <h3 className="text-xl font-bold text-white mb-2">Business Leadership Forum</h3>
                                        <p className="text-gray-300">Executive conference for industry leaders and innovators.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-between items-center">
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition duration-300">Business Leadership Forum</h3>
                                    <p className="text-gray-600">Conference & Networking</p>
                                </div>
                                <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center group-hover:bg-blue-600 transition duration-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 group-hover:text-white transition duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        
                        {/* Project 4 */}
                        <div className="group" data-aos="fade-up" data-aos-delay="100">
                            <div className="relative overflow-hidden rounded-xl aspect-[4/3] shadow-lg mb-5">
                                <img 
                                    src="https://images.pexels.com/photos/2263436/pexels-photo-2263436.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                                    alt="Music Festival Production" 
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6">
                                    <div className="transform translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
                                        <h3 className="text-xl font-bold text-white mb-2">Harmony Music Festival</h3>
                                        <p className="text-gray-300">Full-scale music festival with multiple stages and experiences.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-between items-center">
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition duration-300">Harmony Music Festival</h3>
                                    <p className="text-gray-600">Event Production</p>
                                </div>
                                <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center group-hover:bg-blue-600 transition duration-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 group-hover:text-white transition duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        
                        {/* Project 5 */}
                        <div className="group" data-aos="fade-up" data-aos-delay="200">
                            <div className="relative overflow-hidden rounded-xl aspect-[4/3] shadow-lg mb-5">
                                <img 
                                    src="https://images.pexels.com/photos/2555635/pexels-photo-2555635.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                                    alt="Food & Hospitality Expo" 
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6">
                                    <div className="transform translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
                                        <h3 className="text-xl font-bold text-white mb-2">Culinary Masters Expo</h3>
                                        <p className="text-gray-300">Premier food and hospitality industry showcase and competition.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-between items-center">
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition duration-300">Culinary Masters Expo</h3>
                                    <p className="text-gray-600">Trade Show & Competition</p>
                                </div>
                                <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center group-hover:bg-blue-600 transition duration-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 group-hover:text-white transition duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        
                        {/* Project 6 */}
                        <div className="group" data-aos="fade-up" data-aos-delay="300">
                            <div className="relative overflow-hidden rounded-xl aspect-[4/3] shadow-lg mb-5">
                                <img 
                                    src="https://images.pexels.com/photos/2977565/pexels-photo-2977565.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                                    alt="Sustainable Energy Symposium" 
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6">
                                    <div className="transform translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
                                        <h3 className="text-xl font-bold text-white mb-2">Green Future Summit</h3>
                                        <p className="text-gray-300">Sustainable energy and environmental innovation conference.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-between items-center">
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition duration-300">Green Future Summit</h3>
                                    <p className="text-gray-600">Sustainability Conference</p>
                                </div>
                                <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center group-hover:bg-blue-600 transition duration-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 group-hover:text-white transition duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* CTA Button */}
                    <div className="mt-16 text-center" data-aos="fade-up">
                        <Link href="/portfolio" className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-semibold py-4 px-10 rounded-full transition duration-300 transform hover:scale-105 hover:shadow-lg group">
                            <span>View All Projects</span>
                            <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-all duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </span>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
                {/* Background Elements */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="hidden lg:block absolute top-1/4 left-0 w-64 h-64 bg-blue-50 rounded-full mix-blend-multiply blur-3xl opacity-70"></div>
                    <div className="hidden lg:block absolute bottom-1/4 right-0 w-64 h-64 bg-purple-50 rounded-full mix-blend-multiply blur-3xl opacity-70"></div>
                </div>
                
                <div className="container mx-auto px-4 relative z-10">
                    {/* Section Header */}
                    <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
                        <span className="text-blue-600 font-semibold uppercase tracking-widest text-sm">Testimonials</span>
                        <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-4">What Our Clients Say</h2>
                        <div className="h-1 w-20 bg-blue-600 mx-auto mb-6"></div>
                        <p className="text-gray-600 text-lg">
                            Don't just take our word for it. Here's what our clients have to say about their experience working with All Plans.
                        </p>
                    </div>
                    
                    {/* Testimonials Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Testimonial 1 */}
                        <div className="bg-white rounded-xl p-8 shadow-xl relative z-10 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl" data-aos="fade-up" data-aos-delay="100">
                            {/* Quote Icon */}
                            <div className="absolute -top-4 -left-4 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                </svg>
                            </div>
                            
                            {/* Stars */}
                            <div className="flex mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                            
                            {/* Content */}
                            <p className="text-gray-700 mb-6 italic">
                                "All Plans transformed our corporate conference into an unforgettable experience. Their attention to detail, creative solutions, and flawless execution exceeded our expectations. We've received countless compliments from attendees."
                            </p>
                            
                            {/* Author */}
                            <div className="flex items-center">
                                <img 
                                    src="https://randomuser.me/api/portraits/women/46.jpg" 
                                    alt="Sarah Johnson" 
                                    className="w-12 h-12 rounded-full object-cover mr-4"
                                />
                                <div>
                                    <h4 className="font-semibold text-gray-900">Sarah Johnson</h4>
                                    <p className="text-gray-600 text-sm">Marketing Director, TechCorp</p>
                                </div>
                            </div>
                        </div>
                        
                        {/* Testimonial 2 */}
                        <div className="bg-white rounded-xl p-8 shadow-xl relative z-10 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl" data-aos="fade-up" data-aos-delay="200">
                            {/* Quote Icon */}
                            <div className="absolute -top-4 -left-4 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                </svg>
                            </div>
                            
                            {/* Stars */}
                            <div className="flex mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                            
                            {/* Content */}
                            <p className="text-gray-700 mb-6 italic">
                                "The exhibition All Plans designed for us attracted twice the expected foot traffic and resulted in a 40% increase in leads compared to previous years. Their strategic approach and innovative design made all the difference."
                            </p>
                            
                            {/* Author */}
                            <div className="flex items-center">
                                <img 
                                    src="https://randomuser.me/api/portraits/men/33.jpg" 
                                    alt="Ahmad Al-Faisal" 
                                    className="w-12 h-12 rounded-full object-cover mr-4"
                                />
                                <div>
                                    <h4 className="font-semibold text-gray-900">Ahmad Al-Faisal</h4>
                                    <p className="text-gray-600 text-sm">CEO, Innovate Medical</p>
                                </div>
                            </div>
                        </div>
                        
                        {/* Testimonial 3 */}
                        <div className="bg-white rounded-xl p-8 shadow-xl relative z-10 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl" data-aos="fade-up" data-aos-delay="300">
                            {/* Quote Icon */}
                            <div className="absolute -top-4 -left-4 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                </svg>
                            </div>
                            
                            {/* Stars */}
                            <div className="flex mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                            
                            {/* Content */}
                            <p className="text-gray-700 mb-6 italic">
                                "Working with All Plans has been a game-changer for our annual industry summit. Their team handled everything professionally from concept to execution, allowing us to focus on content and networking with our attendees."
                            </p>
                            
                            {/* Author */}
                            <div className="flex items-center">
                                <img 
                                    src="https://randomuser.me/api/portraits/women/63.jpg" 
                                    alt="Maha Al-Mutairi" 
                                    className="w-12 h-12 rounded-full object-cover mr-4"
                                />
                                <div>
                                    <h4 className="font-semibold text-gray-900">Maha Al-Mutairi</h4>
                                    <p className="text-gray-600 text-sm">Events Director, Global Finance</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20 bg-blue-800 text-white relative overflow-hidden">
                {/* Background Elements */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-900 to-blue-700"></div>
                    <div className="absolute top-0 left-0 w-full h-full bg-grid-white/[0.03] bg-[size:40px_40px]"></div>
                    <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500 rounded-full opacity-20 blur-3xl"></div>
                    <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-400 rounded-full opacity-20 blur-3xl"></div>
                </div>
                
                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
                        <span className="text-blue-200 font-semibold uppercase tracking-widest text-sm">Our Impact</span>
                        <h2 className="text-5xl font-bold text-white mt-2 mb-6">Numbers That Speak</h2>
                        <div className="h-1 w-24 bg-blue-400 mx-auto mb-8"></div>
                        <p className="text-blue-100 text-xl leading-relaxed">
                            Our exceptional track record reflects our unwavering commitment to excellence and consistent delivery of impactful events and exhibitions.
                        </p>
                    </div>
                    
                    {/* Stats Grid - Enhanced Version */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                        {/* Stat 1 */}
                        <div className="relative" data-aos="fade-up" data-aos-delay="100">
                            <div className="bg-gradient-to-br from-blue-800/50 to-blue-900/50 backdrop-blur-sm p-8 rounded-2xl border border-blue-700/50 hover:border-blue-500/50 transition-all duration-500 h-full transform hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(8,145,178,0.1)]">
                                <div className="flex flex-col items-center">
                                    <div className="relative mb-8">
                                        <div className="absolute inset-0 rounded-full bg-blue-400/20 blur-xl transform scale-150"></div>
                                        <div className="relative w-28 h-28 bg-gradient-to-tr from-blue-500 to-blue-400 rounded-full flex items-center justify-center shadow-lg">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="relative">
                                        <div className="animate-pulse-slow absolute -inset-1 rounded-full bg-blue-400/20 blur-lg opacity-70"></div>
                                        <h3 className="text-6xl font-bold mb-3 inline-flex items-center">
                                            <span className="counter relative" data-count="250">250</span>
                                            <span className="text-blue-300 ml-1">+</span>
                                        </h3>
                                    </div>
                                    <p className="text-blue-100 text-xl font-medium">Happy Clients</p>
                                    <p className="text-blue-200/70 text-center mt-3">Satisfied partners who trust us with their events year after year</p>
                                </div>
                            </div>
                        </div>
                        
                        {/* Stat 2 */}
                        <div className="relative" data-aos="fade-up" data-aos-delay="200">
                            <div className="bg-gradient-to-br from-blue-800/50 to-blue-900/50 backdrop-blur-sm p-8 rounded-2xl border border-blue-700/50 hover:border-blue-500/50 transition-all duration-500 h-full transform hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(8,145,178,0.1)]">
                                <div className="flex flex-col items-center">
                                    <div className="relative mb-8">
                                        <div className="absolute inset-0 rounded-full bg-blue-400/20 blur-xl transform scale-150"></div>
                                        <div className="relative w-28 h-28 bg-gradient-to-tr from-blue-500 to-blue-400 rounded-full flex items-center justify-center shadow-lg">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="relative">
                                        <div className="animate-pulse-slow absolute -inset-1 rounded-full bg-blue-400/20 blur-lg opacity-70"></div>
                                        <h3 className="text-6xl font-bold mb-3 inline-flex items-center">
                                            <span className="counter relative" data-count="500">500</span>
                                            <span className="text-blue-300 ml-1">+</span>
                                        </h3>
                                    </div>
                                    <p className="text-blue-100 text-xl font-medium">Projects Completed</p>
                                    <p className="text-blue-200/70 text-center mt-3">Successful events and exhibitions delivered with excellence</p>
                                </div>
                            </div>
                        </div>
                        
                        {/* Stat 3 */}
                        <div className="relative" data-aos="fade-up" data-aos-delay="300">
                            <div className="bg-gradient-to-br from-blue-800/50 to-blue-900/50 backdrop-blur-sm p-8 rounded-2xl border border-blue-700/50 hover:border-blue-500/50 transition-all duration-500 h-full transform hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(8,145,178,0.1)]">
                                <div className="flex flex-col items-center">
                                    <div className="relative mb-8">
                                        <div className="absolute inset-0 rounded-full bg-blue-400/20 blur-xl transform scale-150"></div>
                                        <div className="relative w-28 h-28 bg-gradient-to-tr from-blue-500 to-blue-400 rounded-full flex items-center justify-center shadow-lg">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="relative">
                                        <div className="animate-pulse-slow absolute -inset-1 rounded-full bg-blue-400/20 blur-lg opacity-70"></div>
                                        <h3 className="text-6xl font-bold mb-3 inline-flex items-center">
                                            <span className="counter relative" data-count="12">12</span>
                                        </h3>
                                    </div>
                                    <p className="text-blue-100 text-xl font-medium">Countries Served</p>
                                    <p className="text-blue-200/70 text-center mt-3">International reach across the MENA region and beyond</p>
                                </div>
                            </div>
                        </div>
                        
                        {/* Stat 4 */}
                        <div className="relative" data-aos="fade-up" data-aos-delay="400">
                            <div className="bg-gradient-to-br from-blue-800/50 to-blue-900/50 backdrop-blur-sm p-8 rounded-2xl border border-blue-700/50 hover:border-blue-500/50 transition-all duration-500 h-full transform hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(8,145,178,0.1)]">
                                <div className="flex flex-col items-center">
                                    <div className="relative mb-8">
                                        <div className="absolute inset-0 rounded-full bg-blue-400/20 blur-xl transform scale-150"></div>
                                        <div className="relative w-28 h-28 bg-gradient-to-tr from-blue-500 to-blue-400 rounded-full flex items-center justify-center shadow-lg">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="relative">
                                        <div className="animate-pulse-slow absolute -inset-1 rounded-full bg-blue-400/20 blur-lg opacity-70"></div>
                                        <h3 className="text-6xl font-bold mb-3 inline-flex items-center">
                                            <span className="counter relative" data-count="98">98</span>
                                            <span className="text-blue-300 ml-1">%</span>
                                        </h3>
                                    </div>
                                    <p className="text-blue-100 text-xl font-medium">Client Satisfaction</p>
                                    <p className="text-blue-200/70 text-center mt-3">Exceptional results that exceed client expectations</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Action Button */}
                    <div className="text-center mt-16" data-aos="fade-up">
                        <Link href="/contact" className="group relative inline-flex items-center gap-2 bg-white text-blue-800 font-semibold py-4 px-10 rounded-full transition duration-300 transform hover:scale-105 hover:shadow-2xl overflow-hidden">
                            <span className="relative z-10">Get Started With Us</span>
                            <span className="relative z-10 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center group-hover:bg-blue-200 transition-all duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-800 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </span>
                            <span className="absolute top-0 left-0 w-0 h-full bg-gradient-to-r from-blue-100 to-white/80 transition-all duration-500 group-hover:w-full"></span>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Scroll to Top Button */}
            {showScrollTop && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 h-12 w-12 bg-blue-600 text-white rounded-full shadow-lg flex items-center justify-center hover:bg-blue-700 transition-all duration-300 z-50 animate-fadeIn"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                    </svg>
                </button>
            )}
        </main>
    );
} 
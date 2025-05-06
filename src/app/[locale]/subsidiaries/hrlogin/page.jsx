"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function HRLoginPage() {
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
            {/* Hero Section */ }
            <section className="relative h-[90vh] bg-gradient-to-r from-indigo-900 via-blue-800 to-indigo-900 overflow-hidden">
                {/* Animated Background Elements */ }
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute w-full h-full bg-[url('https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-10"></div>
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-indigo-900/80 to-transparent"></div>

                    {/* Animated Particles */ }
                    <div className="absolute inset-0">
                        <div className="absolute top-20 left-[15%] w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                        <div className="absolute top-40 left-[25%] w-3 h-3 bg-indigo-300 rounded-full animate-ping animation-delay-200"></div>
                        <div className="absolute top-60 left-[10%] w-2 h-2 bg-purple-400 rounded-full animate-pulse animation-delay-700"></div>
                        <div className="absolute top-80 left-[20%] w-4 h-4 bg-blue-300 rounded-full animate-ping animation-delay-500"></div>
                        <div className="absolute top-20 right-[15%] w-3 h-3 bg-indigo-400 rounded-full animate-ping animation-delay-300"></div>
                        <div className="absolute top-40 right-[25%] w-2 h-2 bg-blue-300 rounded-full animate-pulse animation-delay-100"></div>
                        <div className="absolute top-60 right-[10%] w-4 h-4 bg-purple-300 rounded-full animate-ping animation-delay-600"></div>
                        <div className="absolute top-80 right-[20%] w-2 h-2 bg-indigo-300 rounded-full animate-pulse animation-delay-400"></div>
                    </div>

                    {/* Digital Elements Animation */ }
                    <div className="absolute inset-0">
                        <div className="absolute bottom-10 left-10 w-64 h-64 border border-blue-400/30 rounded-lg transform rotate-12 animate-float1"></div>
                        <div className="absolute bottom-40 right-20 w-40 h-40 border border-indigo-400/20 rounded-lg transform -rotate-12 animate-float2"></div>
                        <div className="absolute top-20 right-40 w-52 h-52 border border-purple-400/20 rounded-lg transform rotate-45 animate-float3"></div>
                    </div>
                </div>

                {/* Hero Content */ }
                <div className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-center">
                    <div className="max-w-2xl mx-auto md:ml-0 md:mr-auto text-center md:text-left">
                        <h4 className="text-blue-300 font-medium mb-6 tracking-wider" data-aos="fade-up">مؤسسه تسجيل الدخول للموارد البشرية</h4>
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6" data-aos="fade-up" data-aos-delay="100">
                            Login Foundation <br />
                            <span className="text-blue-400">for Human Resources</span>
                        </h1>
                        <p className="text-xl text-blue-100 mb-10 max-w-lg" data-aos="fade-up" data-aos-delay="200">
                            Revolutionizing human resources management with innovative digital solutions that streamline your HR operations and enhance workforce productivity.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start" data-aos="fade-up" data-aos-delay="300">
                            <Link href="#services" className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-full hover:shadow-lg hover:scale-105 transition duration-300">
                                Explore Our Services
                            </Link>
                            <Link href="#resources" className="px-8 py-3 bg-transparent border-2 border-blue-400 text-blue-100 font-medium rounded-full hover:bg-blue-700/20 hover:scale-105 transition duration-300">
                                Browse Resources
                            </Link>
                        </div>
                    </div>

                    {/* Floating Dashboard Mockup - Moved to not overlap with description */ }
                    <div className="hidden lg:block absolute bottom-[-100px] right-10 w-[550px] pointer-events-none" data-aos="fade-up-left">
                        <div className="relative">
                            <img
                                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                                alt="HR Dashboard"
                                className="rounded-lg shadow-2xl transform -rotate-6 border-8 border-white"
                            />
                            <div className="absolute -top-6 -right-6 bg-blue-600 text-white py-2 px-4 rounded-lg shadow-lg transform rotate-12">
                                Employee Portal
                            </div>
                            <div className="absolute -bottom-4 -left-4 bg-indigo-600 text-white py-2 px-4 rounded-lg shadow-lg transform -rotate-6">
                                Admin Dashboard
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Wave */ }
                <div className="absolute bottom-0 left-0 w-full">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
                        <path fill="#ffffff" fillOpacity="1" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,213.3C672,224,768,224,864,202.7C960,181,1056,139,1152,138.7C1248,139,1344,181,1392,202.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                    </svg>
                </div>
            </section>

            {/* Services Section */ }
            <section id="services" className="py-28 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-20">
                        <h2 className="text-sm text-indigo-600 uppercase font-bold tracking-wider mb-1" data-aos="fade-up">Our Services</h2>
                        <h3 className="text-4xl font-bold text-gray-900 mb-4" data-aos="fade-up" data-aos-delay="100">Comprehensive HR Solutions</h3>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="200">
                            We provide end-to-end digital HR solutions to streamline your workforce management and enhance productivity.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {/* Service Card 1 */ }
                        <div className="bg-white rounded-xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2" data-aos="fade-up">
                            <div className="h-48 bg-gradient-to-r from-blue-500 to-indigo-600 relative overflow-hidden">
                                <div className="absolute inset-0 bg-blue-800 opacity-20"></div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                                        <i className="fas fa-user-check text-white text-3xl"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="p-10">
                                <h4 className="text-2xl font-semibold text-gray-900 mb-3">Employee Onboarding</h4>
                                <p className="text-gray-600 mb-6">
                                    Streamline your hiring process with our digital onboarding platform that automates document collection, verification, and training assignments.
                                </p>
                                <ul className="space-y-2">
                                    <li className="flex items-center text-gray-700">
                                        <i className="fas fa-check-circle text-indigo-600 mr-2"></i>
                                        Paperless documentation
                                    </li>
                                    <li className="flex items-center text-gray-700">
                                        <i className="fas fa-check-circle text-indigo-600 mr-2"></i>
                                        Identity verification
                                    </li>
                                    <li className="flex items-center text-gray-700">
                                        <i className="fas fa-check-circle text-indigo-600 mr-2"></i>
                                        Automated workflows
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Service Card 2 */ }
                        <div className="bg-white rounded-xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2" data-aos="fade-up" data-aos-delay="100">
                            <div className="h-48 bg-gradient-to-r from-indigo-500 to-purple-600 relative overflow-hidden">
                                <div className="absolute inset-0 bg-indigo-800 opacity-20"></div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                                        <i className="fas fa-fingerprint text-white text-3xl"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="p-10">
                                <h4 className="text-2xl font-semibold text-gray-900 mb-3">Attendance Management</h4>
                                <p className="text-gray-600 mb-6">
                                    Advanced biometric and mobile-based attendance tracking with real-time monitoring, geofencing, and comprehensive reporting.
                                </p>
                                <ul className="space-y-2">
                                    <li className="flex items-center text-gray-700">
                                        <i className="fas fa-check-circle text-indigo-600 mr-2"></i>
                                        Biometric integration
                                    </li>
                                    <li className="flex items-center text-gray-700">
                                        <i className="fas fa-check-circle text-indigo-600 mr-2"></i>
                                        Mobile check-in/out
                                    </li>
                                    <li className="flex items-center text-gray-700">
                                        <i className="fas fa-check-circle text-indigo-600 mr-2"></i>
                                        Overtime calculation
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Service Card 3 */ }
                        <div className="bg-white rounded-xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2" data-aos="fade-up" data-aos-delay="200">
                            <div className="h-48 bg-gradient-to-r from-purple-500 to-pink-600 relative overflow-hidden">
                                <div className="absolute inset-0 bg-purple-800 opacity-20"></div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                                        <i className="fas fa-chart-line text-white text-3xl"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="p-10">
                                <h4 className="text-2xl font-semibold text-gray-900 mb-3">Performance Analytics</h4>
                                <p className="text-gray-600 mb-6">
                                    Data-driven performance evaluation tools with 360° feedback, goal tracking, and AI-powered insights for employee development.
                                </p>
                                <ul className="space-y-2">
                                    <li className="flex items-center text-gray-700">
                                        <i className="fas fa-check-circle text-indigo-600 mr-2"></i>
                                        KPI monitoring
                                    </li>
                                    <li className="flex items-center text-gray-700">
                                        <i className="fas fa-check-circle text-indigo-600 mr-2"></i>
                                        Performance dashboards
                                    </li>
                                    <li className="flex items-center text-gray-700">
                                        <i className="fas fa-check-circle text-indigo-600 mr-2"></i>
                                        Talent development insights
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Service Card 4 */ }
                        <div className="bg-white rounded-xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2" data-aos="fade-up">
                            <div className="h-48 bg-gradient-to-r from-blue-600 to-cyan-600 relative overflow-hidden">
                                <div className="absolute inset-0 bg-blue-800 opacity-20"></div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                                        <i className="fas fa-money-bill-wave text-white text-3xl"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="p-10">
                                <h4 className="text-2xl font-semibold text-gray-900 mb-3">Payroll Management</h4>
                                <p className="text-gray-600 mb-6">
                                    Automated payroll processing with tax compliance, multiple payment methods, and integration with accounting systems.
                                </p>
                                <ul className="space-y-2">
                                    <li className="flex items-center text-gray-700">
                                        <i className="fas fa-check-circle text-indigo-600 mr-2"></i>
                                        Automated calculations
                                    </li>
                                    <li className="flex items-center text-gray-700">
                                        <i className="fas fa-check-circle text-indigo-600 mr-2"></i>
                                        Tax filing assistance
                                    </li>
                                    <li className="flex items-center text-gray-700">
                                        <i className="fas fa-check-circle text-indigo-600 mr-2"></i>
                                        Direct deposit options
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Service Card 5 */ }
                        <div className="bg-white rounded-xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2" data-aos="fade-up" data-aos-delay="100">
                            <div className="h-48 bg-gradient-to-r from-cyan-500 to-teal-600 relative overflow-hidden">
                                <div className="absolute inset-0 bg-cyan-800 opacity-20"></div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                                        <i className="fas fa-laptop-code text-white text-3xl"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="p-10">
                                <h4 className="text-2xl font-semibold text-gray-900 mb-3">E-Learning Platform</h4>
                                <p className="text-gray-600 mb-6">
                                    Customizable training portal with interactive courses, certification tracking, and skills development metrics.
                                </p>
                                <ul className="space-y-2">
                                    <li className="flex items-center text-gray-700">
                                        <i className="fas fa-check-circle text-indigo-600 mr-2"></i>
                                        Custom course creation
                                    </li>
                                    <li className="flex items-center text-gray-700">
                                        <i className="fas fa-check-circle text-indigo-600 mr-2"></i>
                                        Progress tracking
                                    </li>
                                    <li className="flex items-center text-gray-700">
                                        <i className="fas fa-check-circle text-indigo-600 mr-2"></i>
                                        Certification management
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Service Card 6 */ }
                        <div className="bg-white rounded-xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2" data-aos="fade-up" data-aos-delay="200">
                            <div className="h-48 bg-gradient-to-r from-teal-500 to-green-600 relative overflow-hidden">
                                <div className="absolute inset-0 bg-teal-800 opacity-20"></div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                                        <i className="fas fa-headset text-white text-3xl"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="p-10">
                                <h4 className="text-2xl font-semibold text-gray-900 mb-3">Employee Self-Service</h4>
                                <p className="text-gray-600 mb-6">
                                    Web and mobile portals that empower employees to manage their information, request time off, and access company resources.
                                </p>
                                <ul className="space-y-2">
                                    <li className="flex items-center text-gray-700">
                                        <i className="fas fa-check-circle text-indigo-600 mr-2"></i>
                                        Document management
                                    </li>
                                    <li className="flex items-center text-gray-700">
                                        <i className="fas fa-check-circle text-indigo-600 mr-2"></i>
                                        Leave requests
                                    </li>
                                    <li className="flex items-center text-gray-700">
                                        <i className="fas fa-check-circle text-indigo-600 mr-2"></i>
                                        Company announcements
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */ }
            <section className="py-32 bg-gradient-to-b from-indigo-50 to-white relative overflow-hidden">
                {/* Background Decoration */ }
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 left-0 w-full h-full bg-grid-gray-200/50"></div>
                    <div className="absolute -top-40 -right-40 w-80 h-80 bg-indigo-100 rounded-full filter blur-3xl opacity-50"></div>
                    <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-100 rounded-full filter blur-3xl opacity-50"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center mb-20">
                        <h2 className="text-sm text-indigo-600 uppercase font-bold tracking-wider mb-1" data-aos="fade-up">Platform Features</h2>
                        <h3 className="text-4xl font-bold text-gray-900 mb-4" data-aos="fade-up" data-aos-delay="100">Powerful HR Management Tools</h3>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="200">
                            Our comprehensive platform offers a suite of powerful features designed to transform how you manage your human resources.
                        </p>
                    </div>

                    {/* Feature 1 - Dashboard Analytics */ }
                    <div className="flex flex-col lg:flex-row items-center gap-16 mb-36">
                        <div className="w-full lg:w-1/2" data-aos="fade-right">
                            <div className="relative">
                                <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-lg blur opacity-25"></div>
                                <div className="relative bg-white border border-gray-200 rounded-lg shadow-xl overflow-hidden">
                                    <img
                                        src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                                        alt="HR Analytics Dashboard"
                                        className="w-full"
                                    />
                                </div>
                                {/* Floating Elements */ }
                                <div className="absolute -top-5 -right-5 w-20 h-20 bg-indigo-100 rounded-lg transform rotate-12 animate-float opacity-80"></div>
                                <div className="absolute -bottom-5 -left-5 w-16 h-16 bg-blue-100 rounded-lg transform -rotate-12 animate-float animation-delay-500 opacity-80"></div>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2" data-aos="fade-left">
                            <span className="inline-block px-3 py-1 text-xs font-semibold text-indigo-600 bg-indigo-100 rounded-full mb-2">Advanced Analytics</span>
                            <h4 className="text-3xl font-bold text-gray-900 mb-4">Actionable HR Insights Dashboard</h4>
                            <p className="text-lg text-gray-600 mb-6">
                                Get a comprehensive view of your workforce with real-time analytics. Our intuitive dashboard provides key metrics and trends to inform your HR decisions.
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-start">
                                    <div className="flex-shrink-0 bg-indigo-100 p-1 rounded-full mt-1.5">
                                        <svg className="w-4 h-4 text-indigo-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                                        </svg>
                                    </div>
                                    <div className="ml-3">
                                        <h5 className="font-semibold text-gray-900">Customizable Dashboard Widgets</h5>
                                        <p className="text-gray-600">Personalize your view with drag-and-drop widget configuration to focus on metrics that matter most to your organization.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <div className="flex-shrink-0 bg-indigo-100 p-1 rounded-full mt-1.5">
                                        <svg className="w-4 h-4 text-indigo-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                                        </svg>
                                    </div>
                                    <div className="ml-3">
                                        <h5 className="font-semibold text-gray-900">Predictive Workforce Analysis</h5>
                                        <p className="text-gray-600">Leverage AI-powered predictions to anticipate turnover risks, staffing needs, and employee performance trends.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <div className="flex-shrink-0 bg-indigo-100 p-1 rounded-full mt-1.5">
                                        <svg className="w-4 h-4 text-indigo-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                                        </svg>
                                    </div>
                                    <div className="ml-3">
                                        <h5 className="font-semibold text-gray-900">Automated Reporting</h5>
                                        <p className="text-gray-600">Schedule and distribute comprehensive HR reports to key stakeholders with just a few clicks.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Feature 2 - Mobile Experience */ }
                    <div className="flex flex-col-reverse lg:flex-row items-center gap-16 mb-36">
                        <div className="w-full lg:w-1/2" data-aos="fade-right">
                            <span className="inline-block px-3 py-1 text-xs font-semibold text-indigo-600 bg-indigo-100 rounded-full mb-2">Mobile Experience</span>
                            <h4 className="text-3xl font-bold text-gray-900 mb-4">Seamless HR Management on the Go</h4>
                            <p className="text-lg text-gray-600 mb-6">
                                Access your HR platform anytime, anywhere with our responsive mobile application. Manage your workforce from the palm of your hand with full functionality.
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-start">
                                    <div className="flex-shrink-0 bg-indigo-100 p-1 rounded-full mt-1.5">
                                        <svg className="w-4 h-4 text-indigo-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                                        </svg>
                                    </div>
                                    <div className="ml-3">
                                        <h5 className="font-semibold text-gray-900">Biometric Authentication</h5>
                                        <p className="text-gray-600">Secure access with fingerprint and facial recognition for quick login while maintaining data security.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <div className="flex-shrink-0 bg-indigo-100 p-1 rounded-full mt-1.5">
                                        <svg className="w-4 h-4 text-indigo-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                                        </svg>
                                    </div>
                                    <div className="ml-3">
                                        <h5 className="font-semibold text-gray-900">Offline Functionality</h5>
                                        <p className="text-gray-600">Continue working with limited connectivity. Changes sync automatically when connection is restored.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <div className="flex-shrink-0 bg-indigo-100 p-1 rounded-full mt-1.5">
                                        <svg className="w-4 h-4 text-indigo-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                                        </svg>
                                    </div>
                                    <div className="ml-3">
                                        <h5 className="font-semibold text-gray-900">Push Notifications</h5>
                                        <p className="text-gray-600">Stay informed with instant alerts for approvals, team updates, and important HR announcements.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="w-full lg:w-1/2" data-aos="fade-left">
                            <div className="relative">
                                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg blur opacity-25"></div>
                                <div className="relative bg-white border border-gray-200 rounded-lg shadow-xl p-6">
                                    <div className="flex justify-center">
                                        <div className="relative w-64 h-[500px] bg-gray-900 rounded-3xl overflow-hidden border-8 border-gray-800">
                                            <img
                                                src="https://images.unsplash.com/photo-1555421689-3f034debb7a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                                                alt="HR Mobile App"
                                                className="w-full h-full object-cover"
                                            />
                                            {/* Phone Notch */ }
                                            <div className="absolute top-0 inset-x-0 h-6 bg-gray-800 rounded-b-xl"></div>
                                        </div>
                                    </div>
                                </div>
                                {/* Floating Notification */ }
                                <div className="absolute top-16 -right-4 bg-white rounded-lg shadow-lg p-3 w-48 transform rotate-6 animate-float animation-delay-300">
                                    <div className="flex items-center space-x-2">
                                        <div className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center text-white">
                                            <i className="fas fa-bell text-sm"></i>
                                        </div>
                                        <div>
                                            <p className="text-xs font-medium">New Leave Request</p>
                                            <p className="text-xs text-gray-500">From Ahmed S.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Feature 3 - Integration */ }
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="w-full lg:w-1/2" data-aos="fade-right">
                            <div className="relative">
                                <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg blur opacity-25"></div>
                                <div className="relative bg-white border border-gray-200 rounded-lg shadow-xl overflow-hidden">
                                    <div className="p-6">
                                        <div className="grid grid-cols-3 gap-3 mb-6">
                                            <div className="bg-gray-100 p-4 rounded-lg flex flex-col items-center justify-center hover:bg-gray-200 transition-colors duration-300">
                                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Slack_icon_2019.svg/2048px-Slack_icon_2019.svg.png" alt="Slack" className="w-10 h-10 object-contain mb-2" />
                                                <span className="text-xs font-medium">Slack</span>
                                            </div>
                                            <div className="bg-gray-100 p-4 rounded-lg flex flex-col items-center justify-center hover:bg-gray-200 transition-colors duration-300">
                                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Microsoft_Office_Teams_%282018%E2%80%93present%29.svg/2203px-Microsoft_Office_Teams_%282018%E2%80%93present%29.svg.png" alt="Teams" className="w-10 h-10 object-contain mb-2" />
                                                <span className="text-xs font-medium">Teams</span>
                                            </div>
                                            <div className="bg-gray-100 p-4 rounded-lg flex flex-col items-center justify-center hover:bg-gray-200 transition-colors duration-300">
                                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Microsoft_Office_Word_%282019%E2%80%93present%29.svg/2203px-Microsoft_Office_Word_%282019%E2%80%93present%29.svg.png" alt="Office" className="w-10 h-10 object-contain mb-2" />
                                                <span className="text-xs font-medium">Office</span>
                                            </div>
                                            <div className="bg-gray-100 p-4 rounded-lg flex flex-col items-center justify-center hover:bg-gray-200 transition-colors duration-300">
                                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Google_Drive_logo_%282020%29.svg/1024px-Google_Drive_logo_%282020%29.svg.png" alt="GDrive" className="w-10 h-10 object-contain mb-2" />
                                                <span className="text-xs font-medium">G Drive</span>
                                            </div>
                                            <div className="bg-gray-100 p-4 rounded-lg flex flex-col items-center justify-center hover:bg-gray-200 transition-colors duration-300">
                                                <img src="https://cdn.worldvectorlogo.com/logos/quickbooks-4.svg" alt="QuickBooks" className="w-10 h-10 object-contain mb-2" />
                                                <span className="text-xs font-medium">QuickBooks</span>
                                            </div>
                                            <div className="bg-gray-100 p-4 rounded-lg flex flex-col items-center justify-center hover:bg-gray-200 transition-colors duration-300">
                                                <img src="https://cdn.worldvectorlogo.com/logos/salesforce-2.svg" alt="Salesforce" className="w-10 h-10 object-contain mb-2" />
                                                <span className="text-xs font-medium">Salesforce</span>
                                            </div>
                                        </div>
                                        <div className="text-center">
                                            <span className="px-3 py-1 text-xs font-semibold text-indigo-600 bg-indigo-100 rounded-full">+ 50 more integrations</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2" data-aos="fade-left">
                            <span className="inline-block px-3 py-1 text-xs font-semibold text-indigo-600 bg-indigo-100 rounded-full mb-2">Seamless Integration</span>
                            <h4 className="text-3xl font-bold text-gray-900 mb-4">Connect with Your Favorite Tools</h4>
                            <p className="text-lg text-gray-600 mb-6">
                                Our platform integrates with over 50 popular business applications to create a connected ecosystem for your HR operations.
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-start">
                                    <div className="flex-shrink-0 bg-indigo-100 p-1 rounded-full mt-1.5">
                                        <svg className="w-4 h-4 text-indigo-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                                        </svg>
                                    </div>
                                    <div className="ml-3">
                                        <h5 className="font-semibold text-gray-900">API-Driven Architecture</h5>
                                        <p className="text-gray-600">Open API that allows for easy integration with both standard and custom business applications.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <div className="flex-shrink-0 bg-indigo-100 p-1 rounded-full mt-1.5">
                                        <svg className="w-4 h-4 text-indigo-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                                        </svg>
                                    </div>
                                    <div className="ml-3">
                                        <h5 className="font-semibold text-gray-900">No-Code Integration Builder</h5>
                                        <p className="text-gray-600">Drag-and-drop interface for creating custom workflows between different business systems.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <div className="flex-shrink-0 bg-indigo-100 p-1 rounded-full mt-1.5">
                                        <svg className="w-4 h-4 text-indigo-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                                        </svg>
                                    </div>
                                    <div className="ml-3">
                                        <h5 className="font-semibold text-gray-900">Single Sign-On (SSO)</h5>
                                        <p className="text-gray-600">Seamless authentication across all connected applications for enhanced security and user experience.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */ }
            <section className="py-32 bg-gradient-to-br from-indigo-900 to-blue-900 text-white relative overflow-hidden">
                {/* Animated Background */ }
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-10"></div>
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-indigo-900/80 to-transparent"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center mb-20">
                        <h2 className="text-sm text-blue-300 uppercase font-bold tracking-wider mb-1" data-aos="fade-up">Success Stories</h2>
                        <h3 className="text-4xl font-bold text-white mb-4" data-aos="fade-up" data-aos-delay="100">What Our Clients Say</h3>
                        <p className="text-xl text-blue-100 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="200">
                            Organizations across diverse industries have transformed their HR operations with our platform.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {/* Testimonial 1 */ }
                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-10 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1" data-aos="fade-up">
                            <div className="mb-6">
                                <div className="flex text-yellow-400 mb-4">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                </div>
                                <p className="text-blue-100 italic mb-6">
                                    "HR Login has completely transformed how we manage our 1,200+ employees. The attendance tracking and payroll features alone have saved us countless hours each month. The ROI has been exceptional."
                                </p>
                            </div>
                            <div className="flex items-center">
                                <div className="flex-shrink-0 mr-4">
                                    <img
                                        src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80"
                                        alt="HR Director Profile"
                                        className="w-12 h-12 rounded-full object-cover border-2 border-white/20"
                                    />
                                </div>
                                <div>
                                    <h5 className="font-semibold text-white">Sara Al-Khateeb</h5>
                                    <p className="text-blue-200 text-sm">HR Director, Gulf Innovations Group</p>
                                </div>
                            </div>
                        </div>

                        {/* Testimonial 2 */ }
                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-10 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1" data-aos="fade-up" data-aos-delay="100">
                            <div className="mb-6">
                                <div className="flex text-yellow-400 mb-4">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                </div>
                                <p className="text-blue-100 italic mb-6">
                                    "The mobile app has been a game-changer for our field staff. They can clock in/out, request leave, and access their pay slips from anywhere. The implementation process was smooth and the support team is incredibly responsive."
                                </p>
                            </div>
                            <div className="flex items-center">
                                <div className="flex-shrink-0 mr-4">
                                    <img
                                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
                                        alt="Operations Manager Profile"
                                        className="w-12 h-12 rounded-full object-cover border-2 border-white/20"
                                    />
                                </div>
                                <div>
                                    <h5 className="font-semibold text-white">Mohammed Al-Harbi</h5>
                                    <p className="text-blue-200 text-sm">Operations Manager, Riyadh Construction Co.</p>
                                </div>
                            </div>
                        </div>

                        {/* Testimonial 3 */ }
                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-10 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1" data-aos="fade-up" data-aos-delay="200">
                            <div className="mb-6">
                                <div className="flex text-yellow-400 mb-4">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star-half-alt"></i>
                                </div>
                                <p className="text-blue-100 italic mb-6">
                                    "As a rapidly growing startup, we needed an HR system that could scale with us. The HR Login platform has handled our growth from 15 to 150 employees seamlessly, and the analytics tools have provided valuable insights for our expansion planning."
                                </p>
                            </div>
                            <div className="flex items-center">
                                <div className="flex-shrink-0 mr-4">
                                    <img
                                        src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
                                        alt="HR Manager Profile"
                                        className="w-12 h-12 rounded-full object-cover border-2 border-white/20"
                                    />
                                </div>
                                <div>
                                    <h5 className="font-semibold text-white">Layla Mahmoud</h5>
                                    <p className="text-blue-200 text-sm">People Operations, TechWave Solutions</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Client Logos */ }
                    <div className="mt-24" data-aos="fade-up">
                        <h4 className="text-center text-lg font-medium text-blue-200 mb-8">Trusted by Leading Organizations</h4>
                        <div className="flex flex-wrap justify-center items-center gap-10 opacity-70">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Aramco_Logo.svg/1200px-Aramco_Logo.svg.png" alt="Client Logo" className="h-12 grayscale brightness-[10]" />
                            <img src="https://seeklogo.com/images/S/saudi-telecom-company-stc-logo-C1C41A28DD-seeklogo.com.png" alt="Client Logo" className="h-10 grayscale brightness-[10]" />
                            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/0/03/Almarai_logo.svg/1200px-Almarai_logo.svg.png" alt="Client Logo" className="h-10 grayscale brightness-[10]" />
                            <img src="https://logos-world.net/wp-content/uploads/2022/01/SABB-Logo.png" alt="Client Logo" className="h-10 grayscale brightness-[10]" />
                            <img src="https://seeklogo.com/images/S/Saudi_Airlines-logo-22F50C311A-seeklogo.com.png" alt="Client Logo" className="h-12 grayscale brightness-[10]" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Resources Hub Section */ }
            <section id="resources" className="py-32 bg-white relative">
                <div className="container mx-auto px-6">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-20">
                            <h2 className="text-sm text-indigo-600 uppercase font-bold tracking-wider mb-1" data-aos="fade-up">Knowledge Center</h2>
                            <h3 className="text-4xl font-bold text-gray-900 mb-4" data-aos="fade-up" data-aos-delay="100">HR Resources Hub</h3>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="200">
                                Access industry-leading guides, templates, and research to optimize your HR processes and stay ahead of workforce trends.
                            </p>
                        </div>

                        {/* Resources Categories */ }
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-20">
                            <div className="bg-indigo-50 rounded-xl p-8 text-center hover:bg-indigo-100 transition-colors duration-300" data-aos="fade-up">
                                <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <i className="fas fa-book text-white text-2xl"></i>
                                </div>
                                <h4 className="text-xl font-semibold text-gray-900 mb-2">Research Reports</h4>
                                <p className="text-gray-600">In-depth analysis on workforce trends and best practices</p>
                            </div>

                            <div className="bg-blue-50 rounded-xl p-8 text-center hover:bg-blue-100 transition-colors duration-300" data-aos="fade-up" data-aos-delay="100">
                                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <i className="fas fa-file-alt text-white text-2xl"></i>
                                </div>
                                <h4 className="text-xl font-semibold text-gray-900 mb-2">HR Templates</h4>
                                <p className="text-gray-600">Ready-to-use documents for every HR process</p>
                            </div>

                            <div className="bg-purple-50 rounded-xl p-8 text-center hover:bg-purple-100 transition-colors duration-300" data-aos="fade-up" data-aos-delay="200">
                                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <i className="fas fa-video text-white text-2xl"></i>
                                </div>
                                <h4 className="text-xl font-semibold text-gray-900 mb-2">Webinars</h4>
                                <p className="text-gray-600">Live and on-demand sessions with HR experts</p>
                            </div>

                            <div className="bg-pink-50 rounded-xl p-8 text-center hover:bg-pink-100 transition-colors duration-300" data-aos="fade-up" data-aos-delay="300">
                                <div className="w-16 h-16 bg-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <i className="fas fa-calculator text-white text-2xl"></i>
                                </div>
                                <h4 className="text-xl font-semibold text-gray-900 mb-2">HR Tools</h4>
                                <p className="text-gray-600">Interactive calculators and assessment tools</p>
                            </div>
                        </div>

                        {/* Featured Resources */ }
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">
                            {/* Resource 1 */ }
                            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300" data-aos="fade-up">
                                <div className="h-48 bg-gradient-to-r from-indigo-500 to-blue-500 relative">
                                    <img
                                        src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                                        alt="Resource Cover"
                                        className="w-full h-full object-cover object-center opacity-80"
                                    />
                                    <div className="absolute top-4 left-4 bg-indigo-600 text-white text-xs font-semibold px-2 py-1 rounded">
                                        REPORT
                                    </div>
                                </div>
                                <div className="p-8">
                                    <h4 className="text-xl font-semibold text-gray-900 mb-2">2023 HR Technology Trends Report</h4>
                                    <p className="text-gray-600 mb-4">Explore the latest innovations shaping the future of human resources management.</p>
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm text-gray-500">15 min read</span>
                                        <a href="#" className="text-indigo-600 font-medium hover:text-indigo-800 transition-colors">
                                            Download PDF <i className="fas fa-arrow-right ml-1"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Resource 2 */ }
                            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300" data-aos="fade-up" data-aos-delay="100">
                                <div className="h-48 bg-gradient-to-r from-blue-500 to-cyan-500 relative">
                                    <img
                                        src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                                        alt="Resource Cover"
                                        className="w-full h-full object-cover object-center opacity-80"
                                    />
                                    <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded">
                                        TEMPLATE
                                    </div>
                                </div>
                                <div className="p-8">
                                    <h4 className="text-xl font-semibold text-gray-900 mb-2">Employee Onboarding Toolkit</h4>
                                    <p className="text-gray-600 mb-4">Complete set of templates and checklists for a seamless onboarding experience.</p>
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm text-gray-500">8 templates</span>
                                        <a href="#" className="text-indigo-600 font-medium hover:text-indigo-800 transition-colors">
                                            Access Now <i className="fas fa-arrow-right ml-1"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Resource 3 */ }
                            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300" data-aos="fade-up" data-aos-delay="200">
                                <div className="h-48 bg-gradient-to-r from-purple-500 to-pink-500 relative">
                                    <img
                                        src="https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                                        alt="Resource Cover"
                                        className="w-full h-full object-cover object-center opacity-80"
                                    />
                                    <div className="absolute top-4 left-4 bg-purple-600 text-white text-xs font-semibold px-2 py-1 rounded">
                                        WEBINAR
                                    </div>
                                </div>
                                <div className="p-8">
                                    <h4 className="text-xl font-semibold text-gray-900 mb-2">Future of Remote Work Management</h4>
                                    <p className="text-gray-600 mb-4">Expert strategies for building and managing productive remote teams.</p>
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm text-gray-500">60 min video</span>
                                        <a href="#" className="text-indigo-600 font-medium hover:text-indigo-800 transition-colors">
                                            Watch Now <i className="fas fa-play ml-1"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Newsletter Signup */ }
                        <div className="bg-gradient-to-r from-indigo-600 to-blue-600 rounded-2xl shadow-xl overflow-hidden" data-aos="fade-up">
                            <div className="flex flex-col md:flex-row items-center">
                                <div className="w-full md:w-7/12 p-10 md:p-14 text-white">
                                    <h4 className="text-3xl font-bold mb-4">Stay Ahead in HR Innovation</h4>
                                    <p className="text-white/90 mb-6">
                                        Subscribe to our newsletter for the latest HR insights, guides, and industry updates delivered directly to your inbox.
                                    </p>
                                    <form className="flex flex-col sm:flex-row gap-2">
                                        <input
                                            type="email"
                                            placeholder="Your email address"
                                            className="flex-grow px-4 py-3 rounded-lg focus:outline-none"
                                        />
                                        <button
                                            type="submit"
                                            className="bg-white text-indigo-600 font-medium px-6 py-3 rounded-lg hover:bg-indigo-50 transition-colors duration-300"
                                        >
                                            Subscribe
                                        </button>
                                    </form>
                                    <p className="text-sm text-blue-100 mt-3">
                                        We respect your privacy. Unsubscribe at any time.
                                    </p>
                                </div>
                                <div className="w-full md:w-5/12 relative">
                                    <img
                                        src="https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80"
                                        alt="HR Professionals"
                                        className="w-full h-64 md:h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-l from-indigo-900/60 to-transparent"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Scroll to Top Button */ }
            { showScrollTop && (
                <button
                    onClick={ scrollToTop }
                    className="fixed bottom-10 right-10 bg-indigo-600 text-white rounded-full p-4 shadow-lg hover:bg-indigo-700 transition-all duration-300 z-50"
                    data-aos="fade-up"
                >
                    <i className="fas fa-arrow-up"></i>
                </button>
            ) }
        </main>
    );
} 
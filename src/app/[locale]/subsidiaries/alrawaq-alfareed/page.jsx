"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AlRawaqAlFareedPage() {
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
            {/* Hero Section with Parallax Effect */ }
            <section className="relative h-[80vh] bg-black overflow-hidden">
                {/* Background with Parallax Effect */ }
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                        alt="Luxury Hotel Interior"
                        className="w-full h-full object-cover opacity-60"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-black/70"></div>
                </div>

                {/* Floating Hotel Elements Animation */ }
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute w-20 h-20 text-white/30 left-[15%] top-[20%] animate-float1">
                        <i className="fas fa-concierge-bell text-5xl"></i>
                    </div>
                    <div className="absolute w-20 h-20 text-white/30 right-[25%] top-[25%] animate-float2">
                        <i className="fas fa-hotel text-5xl"></i>
                    </div>
                    <div className="absolute w-20 h-20 text-white/30 left-[35%] bottom-[33%] animate-float3">
                        <i className="fas fa-bed text-5xl"></i>
                    </div>
                    <div className="absolute w-20 h-20 text-white/30 right-[10%] top-[40%] animate-float4">
                        <i className="fas fa-utensils text-5xl"></i>
                    </div>
                    <div className="absolute w-20 h-20 text-white/30 left-[10%] bottom-[20%] animate-float5">
                        <i className="fas fa-swimming-pool text-5xl"></i>
                    </div>
                    <div className="absolute w-20 h-20 text-white/30 right-[35%] bottom-[30%] animate-float6">
                        <i className="fas fa-spa text-5xl"></i>
                    </div>
                </div>

                <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-white">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6" data-aos="fade-down">Al Rawaq Al Fareed</h1>
                    <p className="text-2xl md:text-3xl font-light mb-4" data-aos="fade-up" data-aos-delay="100">Hotel Operations & Maintenance</p>
                    <p className="text-xl max-w-2xl mb-10 text-white/90" data-aos="fade-up" data-aos-delay="200">
                        Premium hotel management, operations, and maintenance services that elevate the hospitality experience.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4" data-aos="fade-up" data-aos-delay="300">
                        <Link href="#services" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
                            Our Services
                        </Link>
                        <Link href="#contact" className="bg-transparent hover:bg-white text-white hover:text-blue-600 font-semibold py-3 px-8 rounded-lg border-2 border-white transition duration-300 ease-in-out transform hover:scale-105">
                            Contact Us
                        </Link>
                    </div>
                </div>
            </section>

            {/* About Section - Modern Design */ }
            <section id="about" className="py-24 bg-gradient-to-b from-gray-50 to-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-sm uppercase font-bold text-blue-600 tracking-widest mb-2" data-aos="fade-up">About Us</h2>
                        <h3 className="text-4xl font-bold text-gray-900 mb-6" data-aos="fade-up" data-aos-delay="100">Excellence in Hotel Management</h3>
                    </div>

                    {/* Modern Image and Content Layout */ }
                    <div className="relative">
                        {/* Background Design Element */ }
                        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-50 rounded-3xl -z-10 hidden lg:block" data-aos="fade-left"></div>

                        <div className="flex flex-col lg:flex-row gap-10 items-center">
                            {/* Image Section with Overlapping Elements */ }
                            <div className="w-full lg:w-5/12 relative" data-aos="fade-up">
                                <div className="rounded-xl overflow-hidden shadow-2xl relative z-20">
                                    <img
                                        src="https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
                                        alt="Luxury Hotel Management Team"
                                        className="w-full h-[500px] object-cover"
                                    />
                                </div>

                                {/* Decorative Elements */ }
                                <div className="absolute -bottom-5 -left-5 w-24 h-24 bg-blue-600 rounded-full opacity-60 z-10 hidden md:block"></div>
                                <div className="absolute -top-5 -right-5 w-16 h-16 bg-yellow-400 rounded-full opacity-60 z-10 hidden md:block"></div>

                                {/* Feature Highlight Box */ }
                                <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-4 z-30 hidden md:block" data-aos="fade-up" data-aos-delay="300">
                                    <div className="flex items-center gap-3">
                                        <div className="bg-blue-100 rounded-full p-3">
                                            <i className="fas fa-award text-blue-600 text-xl"></i>
                                        </div>
                                        <div>
                                            <div className="font-medium text-gray-900">Trusted Excellence</div>
                                            <div className="text-sm text-gray-600">Over 200 hotels managed</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Content Section with Modern Typography */ }
                            <div className="w-full lg:w-7/12 lg:pl-12" data-aos="fade-left">
                                <div className="lg:max-w-2xl">
                                    <div className="mb-6">
                                        <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-3">Est. 2010</span>
                                        <h4 className="text-2xl font-bold text-gray-900 mb-4">Transforming Hotel Operations</h4>
                                    </div>

                                    <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                                        Al Rawaq Al Fareed is a leading hotel operations and maintenance company specializing in comprehensive hospitality management services. We pride ourselves on elevating the guest experience through our meticulous attention to detail and commitment to operational excellence.
                                    </p>

                                    <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                                        With our extensive experience in the hospitality industry, we provide end-to-end solutions for hotels of all sizes, from boutique establishments to luxury chains. Our team of seasoned professionals is dedicated to optimizing every aspect of hotel operations, ensuring maximum efficiency, guest satisfaction, and profitability.
                                    </p>

                                    {/* Feature Points */ }
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                                        <div className="flex items-start">
                                            <div className="flex-shrink-0 mr-4 mt-1">
                                                <div className="h-8 w-8 bg-blue-100 rounded-full flex items-center justify-center">
                                                    <i className="fas fa-check text-blue-600"></i>
                                                </div>
                                            </div>
                                            <div>
                                                <h5 className="font-semibold text-gray-900 mb-1">Operational Excellence</h5>
                                                <p className="text-gray-700">Streamlined processes that maximize efficiency</p>
                                            </div>
                                        </div>

                                        <div className="flex items-start">
                                            <div className="flex-shrink-0 mr-4 mt-1">
                                                <div className="h-8 w-8 bg-blue-100 rounded-full flex items-center justify-center">
                                                    <i className="fas fa-check text-blue-600"></i>
                                                </div>
                                            </div>
                                            <div>
                                                <h5 className="font-semibold text-gray-900 mb-1">Skilled Workforce</h5>
                                                <p className="text-gray-700">Professionally trained staff at every level</p>
                                            </div>
                                        </div>

                                        <div className="flex items-start">
                                            <div className="flex-shrink-0 mr-4 mt-1">
                                                <div className="h-8 w-8 bg-blue-100 rounded-full flex items-center justify-center">
                                                    <i className="fas fa-check text-blue-600"></i>
                                                </div>
                                            </div>
                                            <div>
                                                <h5 className="font-semibold text-gray-900 mb-1">Customized Solutions</h5>
                                                <p className="text-gray-700">Tailored approaches for each property's unique needs</p>
                                            </div>
                                        </div>

                                        <div className="flex items-start">
                                            <div className="flex-shrink-0 mr-4 mt-1">
                                                <div className="h-8 w-8 bg-blue-100 rounded-full flex items-center justify-center">
                                                    <i className="fas fa-check text-blue-600"></i>
                                                </div>
                                            </div>
                                            <div>
                                                <h5 className="font-semibold text-gray-900 mb-1">Preventive Maintenance</h5>
                                                <p className="text-gray-700">Proactive approach to facility upkeep</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section with Animated Cards */ }
            <section id="services" className="py-24 bg-blue-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-20">
                        <h2 className="text-sm uppercase font-bold text-blue-600 tracking-widest mb-2" data-aos="fade-up">What We Offer</h2>
                        <h3 className="text-4xl font-bold text-gray-900 mb-6" data-aos="fade-up" data-aos-delay="100">Our Comprehensive Services</h3>
                        <p className="text-lg text-gray-700 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="200">
                            We provide a full spectrum of hotel management and maintenance services designed to optimize operations and enhance guest experiences.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Service Card 1 */ }
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2" data-aos="fade-up">
                            <div className="h-48 bg-blue-600 relative overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80"
                                    alt="Hotel Operations Management"
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                                <div className="absolute bottom-4 left-4 right-4">
                                    <h4 className="text-xl font-bold text-white">Hotel Operations Management</h4>
                                </div>
                            </div>
                            <div className="p-6">
                                <p className="text-gray-700 mb-4">
                                    Comprehensive management of day-to-day hotel operations, including front desk, housekeeping, food & beverage, and overall guest services to ensure smooth functionality and exceptional guest experiences.
                                </p>
                                <ul className="space-y-2 mb-6">
                                    <li className="flex items-center text-gray-700">
                                        <i className="fas fa-check-circle text-blue-600 mr-2"></i>
                                        Staff management & training
                                    </li>
                                    <li className="flex items-center text-gray-700">
                                        <i className="fas fa-check-circle text-blue-600 mr-2"></i>
                                        Operational procedures development
                                    </li>
                                    <li className="flex items-center text-gray-700">
                                        <i className="fas fa-check-circle text-blue-600 mr-2"></i>
                                        Quality control systems
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Service Card 2 */ }
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2" data-aos="fade-up" data-aos-delay="100">
                            <div className="h-48 bg-blue-600 relative overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                                    alt="Facility Maintenance"
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                                <div className="absolute bottom-4 left-4 right-4">
                                    <h4 className="text-xl font-bold text-white">Facility Maintenance</h4>
                                </div>
                            </div>
                            <div className="p-6">
                                <p className="text-gray-700 mb-4">
                                    Complete maintenance solutions that keep hotel facilities in pristine condition, from preventive maintenance programs to emergency repairs, ensuring all systems operate at peak efficiency.
                                </p>
                                <ul className="space-y-2 mb-6">
                                    <li className="flex items-center text-gray-700">
                                        <i className="fas fa-check-circle text-blue-600 mr-2"></i>
                                        Preventive maintenance scheduling
                                    </li>
                                    <li className="flex items-center text-gray-700">
                                        <i className="fas fa-check-circle text-blue-600 mr-2"></i>
                                        HVAC and electrical systems
                                    </li>
                                    <li className="flex items-center text-gray-700">
                                        <i className="fas fa-check-circle text-blue-600 mr-2"></i>
                                        Plumbing and infrastructure upkeep
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Service Card 3 */ }
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2" data-aos="fade-up" data-aos-delay="200">
                            <div className="h-48 bg-blue-600 relative overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1584132967334-10e028bd69f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                                    alt="Contract Management"
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                                <div className="absolute bottom-4 left-4 right-4">
                                    <h4 className="text-xl font-bold text-white">Contract Management</h4>
                                </div>
                            </div>
                            <div className="p-6">
                                <p className="text-gray-700 mb-4">
                                    Expert negotiation and management of hotel contracts, from vendor agreements to management contracts, ensuring favorable terms and seamless execution of all contractual obligations.
                                </p>
                                <ul className="space-y-2 mb-6">
                                    <li className="flex items-center text-gray-700">
                                        <i className="fas fa-check-circle text-blue-600 mr-2"></i>
                                        Vendor relationship management
                                    </li>
                                    <li className="flex items-center text-gray-700">
                                        <i className="fas fa-check-circle text-blue-600 mr-2"></i>
                                        Contract negotiation & optimization
                                    </li>
                                    <li className="flex items-center text-gray-700">
                                        <i className="fas fa-check-circle text-blue-600 mr-2"></i>
                                        Compliance monitoring
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Service Card 4 */ }
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2" data-aos="fade-up">
                            <div className="h-48 bg-blue-600 relative overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                                    alt="Renovation & Remodeling"
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                                <div className="absolute bottom-4 left-4 right-4">
                                    <h4 className="text-xl font-bold text-white">Renovation & Remodeling</h4>
                                </div>
                            </div>
                            <div className="p-6">
                                <p className="text-gray-700 mb-4">
                                    Full-scale renovation and remodeling services that refresh and modernize hotel properties, from guest rooms to public spaces, enhancing appeal and functionality while minimizing operational disruptions.
                                </p>
                                <ul className="space-y-2 mb-6">
                                    <li className="flex items-center text-gray-700">
                                        <i className="fas fa-check-circle text-blue-600 mr-2"></i>
                                        Design consultation
                                    </li>
                                    <li className="flex items-center text-gray-700">
                                        <i className="fas fa-check-circle text-blue-600 mr-2"></i>
                                        Project management
                                    </li>
                                    <li className="flex items-center text-gray-700">
                                        <i className="fas fa-check-circle text-blue-600 mr-2"></i>
                                        Phased implementation plans
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Service Card 5 */ }
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2" data-aos="fade-up" data-aos-delay="100">
                            <div className="h-48 bg-blue-600 relative overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                                    alt="Staff Training & Development"
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                                <div className="absolute bottom-4 left-4 right-4">
                                    <h4 className="text-xl font-bold text-white">Staff Training & Development</h4>
                                </div>
                            </div>
                            <div className="p-6">
                                <p className="text-gray-700 mb-4">
                                    Comprehensive training programs that elevate service standards, enhance staff skills, and ensure consistent delivery of exceptional guest experiences across all hotel departments.
                                </p>
                                <ul className="space-y-2 mb-6">
                                    <li className="flex items-center text-gray-700">
                                        <i className="fas fa-check-circle text-blue-600 mr-2"></i>
                                        Customized training programs
                                    </li>
                                    <li className="flex items-center text-gray-700">
                                        <i className="fas fa-check-circle text-blue-600 mr-2"></i>
                                        Leadership development
                                    </li>
                                    <li className="flex items-center text-gray-700">
                                        <i className="fas fa-check-circle text-blue-600 mr-2"></i>
                                        Service excellence workshops
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Service Card 6 */ }
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2" data-aos="fade-up" data-aos-delay="200">
                            <div className="h-48 bg-blue-600 relative overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1565895405138-6c3a1555da6a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                                    alt="Quality Assurance"
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                                <div className="absolute bottom-4 left-4 right-4">
                                    <h4 className="text-xl font-bold text-white">Quality Assurance</h4>
                                </div>
                            </div>
                            <div className="p-6">
                                <p className="text-gray-700 mb-4">
                                    Rigorous quality control systems that maintain and elevate service standards, identify areas for improvement, and ensure consistent delivery of exceptional guest experiences.
                                </p>
                                <ul className="space-y-2 mb-6">
                                    <li className="flex items-center text-gray-700">
                                        <i className="fas fa-check-circle text-blue-600 mr-2"></i>
                                        Regular audits & inspections
                                    </li>
                                    <li className="flex items-center text-gray-700">
                                        <i className="fas fa-check-circle text-blue-600 mr-2"></i>
                                        Performance metrics tracking
                                    </li>
                                    <li className="flex items-center text-gray-700">
                                        <i className="fas fa-check-circle text-blue-600 mr-2"></i>
                                        Continuous improvement programs
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Portfolio Section */ }
            <section id="portfolio" className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-20">
                        <h2 className="text-sm uppercase font-bold text-blue-600 tracking-widest mb-2" data-aos="fade-up">Our Work</h2>
                        <h3 className="text-4xl font-bold text-gray-900 mb-6" data-aos="fade-up" data-aos-delay="100">Featured Projects</h3>
                        <p className="text-lg text-gray-700 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="200">
                            Discover some of our most successful hotel management projects across the region.
                        </p>
                    </div>

                    {/* Projects Grid with Hover Effect */ }
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Project 1 */ }
                        <div className="group relative overflow-hidden rounded-xl shadow-lg" data-aos="fade-up">
                            <img
                                src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                                alt="Luxury Resort Project"
                                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                <h4 className="text-xl font-bold text-white mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">The Royal Palm Resort</h4>
                                <p className="text-white/90 mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                                    Complete operations management and maintenance for this 5-star luxury resort with 300 rooms.
                                </p>
                                <div className="flex flex-wrap gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-150">
                                    <span className="px-3 py-1 bg-blue-600/80 text-white text-sm rounded-full">Operations</span>
                                    <span className="px-3 py-1 bg-blue-600/80 text-white text-sm rounded-full">Maintenance</span>
                                    <span className="px-3 py-1 bg-blue-600/80 text-white text-sm rounded-full">Staff Training</span>
                                </div>
                            </div>
                        </div>

                        {/* Project 2 */ }
                        <div className="group relative overflow-hidden rounded-xl shadow-lg" data-aos="fade-up" data-aos-delay="100">
                            <img
                                src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                                alt="Boutique Hotel Project"
                                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                <h4 className="text-xl font-bold text-white mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">Azure Boutique Hotel</h4>
                                <p className="text-white/90 mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                                    Renovation and operational overhaul for this exclusive 50-room boutique hotel in the city center.
                                </p>
                                <div className="flex flex-wrap gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-150">
                                    <span className="px-3 py-1 bg-blue-600/80 text-white text-sm rounded-full">Renovation</span>
                                    <span className="px-3 py-1 bg-blue-600/80 text-white text-sm rounded-full">Operations</span>
                                    <span className="px-3 py-1 bg-blue-600/80 text-white text-sm rounded-full">Quality Assurance</span>
                                </div>
                            </div>
                        </div>

                        {/* Project 3 */ }
                        <div className="group relative overflow-hidden rounded-xl shadow-lg" data-aos="fade-up" data-aos-delay="200">
                            <img
                                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                                alt="Business Hotel Project"
                                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                <h4 className="text-xl font-bold text-white mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">Grand Business Tower Hotel</h4>
                                <p className="text-white/90 mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                                    Comprehensive management contract for this 400-room business hotel including conference facilities.
                                </p>
                                <div className="flex flex-wrap gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-150">
                                    <span className="px-3 py-1 bg-blue-600/80 text-white text-sm rounded-full">Contract Management</span>
                                    <span className="px-3 py-1 bg-blue-600/80 text-white text-sm rounded-full">Operations</span>
                                    <span className="px-3 py-1 bg-blue-600/80 text-white text-sm rounded-full">Staff Development</span>
                                </div>
                            </div>
                        </div>

                        {/* Project 4 */ }
                        <div className="group relative overflow-hidden rounded-xl shadow-lg" data-aos="fade-up">
                            <img
                                src="https://images.unsplash.com/photo-1455587734955-081b22074882?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                                alt="Beach Resort Project"
                                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                <h4 className="text-xl font-bold text-white mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">Sapphire Beach Resort</h4>
                                <p className="text-white/90 mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                                    Full-scale renovation and ongoing maintenance for this 250-room beachfront resort property.
                                </p>
                                <div className="flex flex-wrap gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-150">
                                    <span className="px-3 py-1 bg-blue-600/80 text-white text-sm rounded-full">Renovation</span>
                                    <span className="px-3 py-1 bg-blue-600/80 text-white text-sm rounded-full">Maintenance</span>
                                    <span className="px-3 py-1 bg-blue-600/80 text-white text-sm rounded-full">Operations</span>
                                </div>
                            </div>
                        </div>

                        {/* Project 5 */ }
                        <div className="group relative overflow-hidden rounded-xl shadow-lg" data-aos="fade-up" data-aos-delay="100">
                            <img
                                src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                                alt="Urban Hotel Project"
                                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                <h4 className="text-xl font-bold text-white mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">Metropolitan Luxury Hotel</h4>
                                <p className="text-white/90 mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                                    Staff training and operational excellence program for this prestigious urban hotel with 150 rooms.
                                </p>
                                <div className="flex flex-wrap gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-150">
                                    <span className="px-3 py-1 bg-blue-600/80 text-white text-sm rounded-full">Staff Training</span>
                                    <span className="px-3 py-1 bg-blue-600/80 text-white text-sm rounded-full">Operations</span>
                                    <span className="px-3 py-1 bg-blue-600/80 text-white text-sm rounded-full">Quality Assurance</span>
                                </div>
                            </div>
                        </div>

                        {/* Project 6 */ }
                        <div className="group relative overflow-hidden rounded-xl shadow-lg" data-aos="fade-up" data-aos-delay="200">
                            <img
                                src="https://images.unsplash.com/photo-1606402179428-a57976d71fa4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
                                alt="Historic Hotel Project"
                                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                <h4 className="text-xl font-bold text-white mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">Heritage Palace Hotel</h4>
                                <p className="text-white/90 mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                                    Specialized maintenance and operations for this historic 100-room heritage hotel property.
                                </p>
                                <div className="flex flex-wrap gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-150">
                                    <span className="px-3 py-1 bg-blue-600/80 text-white text-sm rounded-full">Heritage Preservation</span>
                                    <span className="px-3 py-1 bg-blue-600/80 text-white text-sm rounded-full">Maintenance</span>
                                    <span className="px-3 py-1 bg-blue-600/80 text-white text-sm rounded-full">Operations</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */ }
            <section id="testimonials" className="py-24 bg-gradient-to-br from-blue-900 to-blue-700 text-white relative overflow-hidden">
                {/* Decorative Elements */ }
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-0 left-0 w-72 h-72 bg-white/5 rounded-full filter blur-3xl"></div>
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full filter blur-3xl"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-sm uppercase font-bold text-blue-300 tracking-widest mb-2" data-aos="fade-up">What Our Clients Say</h2>
                        <h3 className="text-4xl font-bold text-white mb-6" data-aos="fade-up" data-aos-delay="100">Client Testimonials</h3>
                    </div>

                    {/* Testimonials Grid */ }
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Testimonial 1 */ }
                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 shadow-lg hover:bg-white/20 transition-all duration-300" data-aos="fade-up">
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 rounded-full overflow-hidden mr-4 flex-shrink-0">
                                    <img
                                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                                        alt="CEO Portrait"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold text-white">Mohamed Al-Farsi</h4>
                                    <p className="text-blue-200">CEO, Royal Palm Hotels</p>
                                </div>
                            </div>
                            <p className="text-white/90 italic mb-6">
                                "Al Rawaq Al Fareed transformed our hotel operations. Their attention to detail and dedication to excellence has significantly improved our guest satisfaction ratings and operational efficiency."
                            </p>
                            <div className="flex text-yellow-400">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </div>
                        </div>

                        {/* Testimonial 2 */ }
                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 shadow-lg hover:bg-white/20 transition-all duration-300" data-aos="fade-up" data-aos-delay="100">
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 rounded-full overflow-hidden mr-4 flex-shrink-0">
                                    <img
                                        src="https://images.unsplash.com/photo-1573497019236-61f323342eb4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                                        alt="Director Portrait"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold text-white">Sarah Al-Qahtani</h4>
                                    <p className="text-blue-200">Operations Director, Azure Hotels</p>
                                </div>
                            </div>
                            <p className="text-white/90 italic mb-6">
                                "Their maintenance program has been a game-changer for our property. We've seen a 40% reduction in emergency repairs and our facilities have never looked better. Highly recommended!"
                            </p>
                            <div className="flex text-yellow-400">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </div>
                        </div>

                        {/* Testimonial 3 */ }
                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 shadow-lg hover:bg-white/20 transition-all duration-300" data-aos="fade-up" data-aos-delay="200">
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 rounded-full overflow-hidden mr-4 flex-shrink-0">
                                    <img
                                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                                        alt="General Manager Portrait"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold text-white">Ahmad Ibrahim</h4>
                                    <p className="text-blue-200">General Manager, Heritage Palace</p>
                                </div>
                            </div>
                            <p className="text-white/90 italic mb-6">
                                "The contract management services provided by Al Rawaq Al Fareed have been exceptional. Their team's expertise has helped us navigate complex vendor relationships and optimize our operational contracts."
                            </p>
                            <div className="flex text-yellow-400">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star-half-alt"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us - Interactive Section */ }
            <section id="why-choose-us" className="py-24 bg-white relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern opacity-5 bg-fixed"></div>

                {/* Animated Background Elements */ }
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute -top-20 -left-20 w-80 h-80 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
                    <div className="absolute top-60 -right-20 w-80 h-80 bg-yellow-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
                    <div className="absolute -bottom-20 left-1/3 w-80 h-80 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-sm uppercase font-bold text-blue-600 tracking-widest mb-2" data-aos="fade-up">Our Advantages</h2>
                        <h3 className="text-4xl font-bold text-gray-900 mb-6" data-aos="fade-up" data-aos-delay="100">Why Choose Al Rawaq Al Fareed</h3>
                        <p className="text-lg text-gray-700 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="200">
                            We combine expertise, innovation, and dedication to deliver exceptional hotel management services that transform hospitality experiences.
                        </p>
                    </div>

                    {/* Achievement Stats */ }
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
                        <div className="bg-white/80 backdrop-blur rounded-xl shadow-xl p-8 text-center transform transition-all duration-300 hover:scale-105" data-aos="zoom-in">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <i className="fas fa-hotel text-blue-600 text-2xl"></i>
                            </div>
                            <div className="text-5xl font-bold text-blue-600 mb-2">200+</div>
                            <div className="text-gray-700 font-medium">Hotels Managed</div>
                        </div>

                        <div className="bg-white/80 backdrop-blur rounded-xl shadow-xl p-8 text-center transform transition-all duration-300 hover:scale-105" data-aos="zoom-in" data-aos-delay="100">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <i className="fas fa-user-tie text-blue-600 text-2xl"></i>
                            </div>
                            <div className="text-5xl font-bold text-blue-600 mb-2">500+</div>
                            <div className="text-gray-700 font-medium">Skilled Professionals</div>
                        </div>

                        <div className="bg-white/80 backdrop-blur rounded-xl shadow-xl p-8 text-center transform transition-all duration-300 hover:scale-105" data-aos="zoom-in" data-aos-delay="200">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <i className="fas fa-trophy text-blue-600 text-2xl"></i>
                            </div>
                            <div className="text-5xl font-bold text-blue-600 mb-2">15+</div>
                            <div className="text-gray-700 font-medium">Years of Excellence</div>
                        </div>

                        <div className="bg-white/80 backdrop-blur rounded-xl shadow-xl p-8 text-center transform transition-all duration-300 hover:scale-105" data-aos="zoom-in" data-aos-delay="300">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <i className="fas fa-globe text-blue-600 text-2xl"></i>
                            </div>
                            <div className="text-5xl font-bold text-blue-600 mb-2">12+</div>
                            <div className="text-gray-700 font-medium">Countries Served</div>
                        </div>
                    </div>

                    {/* Interactive Process Flow */ }
                    <div className="bg-blue-50 rounded-3xl p-10 shadow-lg" data-aos="fade-up">
                        <h4 className="text-2xl font-bold text-center text-gray-900 mb-12">Our Approach to Excellence</h4>

                        <div className="relative">
                            {/* Connection Line */ }
                            <div className="absolute top-1/2 left-0 right-0 h-1 bg-blue-200 -translate-y-1/2 hidden md:block"></div>

                            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
                                {/* Step 1 */ }
                                <div className="group">
                                    <div className="bg-white rounded-xl shadow-md p-6 text-center relative transition-all duration-300 group-hover:bg-blue-600 group-hover:shadow-xl">
                                        <div className="w-12 h-12 bg-blue-100 group-hover:bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600 group-hover:text-white absolute -top-6 left-1/2 -translate-x-1/2">
                                            <span className="text-xl font-bold">1</span>
                                        </div>
                                        <div className="mt-6">
                                            <h5 className="font-bold text-gray-900 group-hover:text-white mb-2">Analyze</h5>
                                            <p className="text-gray-700 group-hover:text-white/90">Comprehensive assessment of hotel operations and needs</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Step 2 */ }
                                <div className="group">
                                    <div className="bg-white rounded-xl shadow-md p-6 text-center relative transition-all duration-300 group-hover:bg-blue-600 group-hover:shadow-xl">
                                        <div className="w-12 h-12 bg-blue-100 group-hover:bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600 group-hover:text-white absolute -top-6 left-1/2 -translate-x-1/2">
                                            <span className="text-xl font-bold">2</span>
                                        </div>
                                        <div className="mt-6">
                                            <h5 className="font-bold text-gray-900 group-hover:text-white mb-2">Strategize</h5>
                                            <p className="text-gray-700 group-hover:text-white/90">Develop customized solutions and implementation plans</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Step 3 */ }
                                <div className="group">
                                    <div className="bg-white rounded-xl shadow-md p-6 text-center relative transition-all duration-300 group-hover:bg-blue-600 group-hover:shadow-xl">
                                        <div className="w-12 h-12 bg-blue-100 group-hover:bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600 group-hover:text-white absolute -top-6 left-1/2 -translate-x-1/2">
                                            <span className="text-xl font-bold">3</span>
                                        </div>
                                        <div className="mt-6">
                                            <h5 className="font-bold text-gray-900 group-hover:text-white mb-2">Implement</h5>
                                            <p className="text-gray-700 group-hover:text-white/90">Execute strategies with skilled teams and meticulous oversight</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Step 4 */ }
                                <div className="group">
                                    <div className="bg-white rounded-xl shadow-md p-6 text-center relative transition-all duration-300 group-hover:bg-blue-600 group-hover:shadow-xl">
                                        <div className="w-12 h-12 bg-blue-100 group-hover:bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600 group-hover:text-white absolute -top-6 left-1/2 -translate-x-1/2">
                                            <span className="text-xl font-bold">4</span>
                                        </div>
                                        <div className="mt-6">
                                            <h5 className="font-bold text-gray-900 group-hover:text-white mb-2">Optimize</h5>
                                            <p className="text-gray-700 group-hover:text-white/90">Continuous improvement through data-driven refinements</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Values and Benefits */ }
                    <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <div data-aos="fade-right">
                            <div className="relative">
                                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-xl blur-xl opacity-20"></div>
                                <div className="relative bg-white rounded-xl shadow-lg p-8 overflow-hidden">
                                    <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-blue-100 rounded-full opacity-30"></div>

                                    <h4 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                                        <span className="bg-blue-100 rounded-full p-2 mr-3">
                                            <i className="fas fa-heart text-blue-600"></i>
                                        </span>
                                        Our Core Values
                                    </h4>

                                    <ul className="space-y-4">
                                        <li className="flex items-start">
                                            <div className="bg-blue-100 rounded-full p-1 mr-3 mt-1">
                                                <i className="fas fa-check text-blue-600 text-xs"></i>
                                            </div>
                                            <div>
                                                <h5 className="font-semibold text-gray-900">Excellence</h5>
                                                <p className="text-gray-700">We strive for perfection in every aspect of our operations</p>
                                            </div>
                                        </li>
                                        <li className="flex items-start">
                                            <div className="bg-blue-100 rounded-full p-1 mr-3 mt-1">
                                                <i className="fas fa-check text-blue-600 text-xs"></i>
                                            </div>
                                            <div>
                                                <h5 className="font-semibold text-gray-900">Innovation</h5>
                                                <p className="text-gray-700">We continuously adopt new approaches and technologies</p>
                                            </div>
                                        </li>
                                        <li className="flex items-start">
                                            <div className="bg-blue-100 rounded-full p-1 mr-3 mt-1">
                                                <i className="fas fa-check text-blue-600 text-xs"></i>
                                            </div>
                                            <div>
                                                <h5 className="font-semibold text-gray-900">Integrity</h5>
                                                <p className="text-gray-700">We operate with transparency and ethical standards</p>
                                            </div>
                                        </li>
                                        <li className="flex items-start">
                                            <div className="bg-blue-100 rounded-full p-1 mr-3 mt-1">
                                                <i className="fas fa-check text-blue-600 text-xs"></i>
                                            </div>
                                            <div>
                                                <h5 className="font-semibold text-gray-900">Customer Focus</h5>
                                                <p className="text-gray-700">We prioritize client satisfaction and guest experience</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div data-aos="fade-left">
                            <div className="relative">
                                <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-xl blur-xl opacity-20"></div>
                                <div className="relative bg-white rounded-xl shadow-lg p-8 overflow-hidden">
                                    <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-blue-100 rounded-full opacity-30"></div>

                                    <h4 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                                        <span className="bg-blue-100 rounded-full p-2 mr-3">
                                            <i className="fas fa-award text-blue-600"></i>
                                        </span>
                                        Benefits of Partnership
                                    </h4>

                                    <ul className="space-y-4">
                                        <li className="flex items-start">
                                            <div className="bg-blue-100 rounded-full p-1 mr-3 mt-1">
                                                <i className="fas fa-check text-blue-600 text-xs"></i>
                                            </div>
                                            <div>
                                                <h5 className="font-semibold text-gray-900">Increased Profitability</h5>
                                                <p className="text-gray-700">Optimize operations to maximize revenue and reduce costs</p>
                                            </div>
                                        </li>
                                        <li className="flex items-start">
                                            <div className="bg-blue-100 rounded-full p-1 mr-3 mt-1">
                                                <i className="fas fa-check text-blue-600 text-xs"></i>
                                            </div>
                                            <div>
                                                <h5 className="font-semibold text-gray-900">Enhanced Guest Satisfaction</h5>
                                                <p className="text-gray-700">Improved service quality leading to better reviews and loyalty</p>
                                            </div>
                                        </li>
                                        <li className="flex items-start">
                                            <div className="bg-blue-100 rounded-full p-1 mr-3 mt-1">
                                                <i className="fas fa-check text-blue-600 text-xs"></i>
                                            </div>
                                            <div>
                                                <h5 className="font-semibold text-gray-900">Operational Excellence</h5>
                                                <p className="text-gray-700">Streamlined processes and efficient management systems</p>
                                            </div>
                                        </li>
                                        <li className="flex items-start">
                                            <div className="bg-blue-100 rounded-full p-1 mr-3 mt-1">
                                                <i className="fas fa-check text-blue-600 text-xs"></i>
                                            </div>
                                            <div>
                                                <h5 className="font-semibold text-gray-900">Property Value Preservation</h5>
                                                <p className="text-gray-700">Proactive maintenance to protect and enhance your investment</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Call to Action */ }
                    <div className="mt-20 text-center" data-aos="zoom-in">
                        <Link href="mailto:info@alrawaqalfareed.com" className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 shadow-lg">
                            <span>Connect With Our Team</span>
                            <i className="fas fa-arrow-right ml-2"></i>
                        </Link>
                        <p className="text-gray-600 mt-4">or email us at info@alrawaqalfareed.com</p>
                    </div>
                </div>
            </section>

            {/* Scroll to Top Button */ }
            { showScrollTop && (
                <button
                    onClick={ scrollToTop }
                    className="fixed bottom-8 right-8 bg-blue-600 text-white rounded-full p-3 shadow-lg hover:bg-blue-700 transition-all duration-300 z-50"
                    data-aos="fade-up"
                >
                    <i className="fas fa-arrow-up"></i>
                </button>
            ) }
        </main>
    );
} 
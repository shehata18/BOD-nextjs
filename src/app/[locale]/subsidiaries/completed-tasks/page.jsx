"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { useEffect, useState } from "react";
import AOS from "aos";
import { motion } from "framer-motion";

export default function CompletedTasks() {
    const t = useTranslations("subsidiaries");
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        // Initialize animations
        if (typeof AOS !== 'undefined' && AOS.refresh) {
            AOS.refresh();
        }

        // Set loaded state for animations
        setIsLoaded(true);

        // Parallax scrolling effect
        const handleScroll = () => {
            const parallaxElements = document.querySelectorAll('.parallax');
            parallaxElements.forEach(element => {
                const speed = element.getAttribute('data-speed') || 0.2;
                const yPos = -(window.scrollY * speed);
                element.style.transform = `translateY(${yPos}px)`;
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Animation variants for staggered animations
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { type: "spring", stiffness: 100 }
        }
    };

    return (
        <>
            {/* Hero Banner - Modern full-screen with video/parallax */ }
            <section className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-black">
                {/* Parallax background layers */ }
                <div className="absolute inset-0 h-full parallax" data-speed="0.1">
                    <div className="absolute inset-0 h-full transform scale-105 animate-slow-zoom">
                        <img
                            src="/images/CT%20Company.jpg"
                            alt="Completed Tasks"
                            className="absolute inset-0 w-full h-full object-cover object-center opacity-50"
                        />
                    </div>
                </div>

                {/* Gradient overlays for depth */ }
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-800/70 to-blue-900/90"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.6)_100%)]"></div>

                {/* Animated pattern overlay */ }
                <div className="absolute inset-0 bg-grid-white/[0.03] bg-[size:50px_50px]"></div>

                {/* Floating elements */ }
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-blob"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
                </div>

                {/* Content */ }
                <div className="container mx-auto px-6 relative z-10 mt-[-5vh]">
                    <motion.div
                        initial={ { opacity: 0, y: 50 } }
                        animate={ { opacity: 1, y: 0 } }
                        transition={ { duration: 0.8, ease: "easeOut" } }
                        className="max-w-5xl mx-auto"
                    >
                        <div className="text-center mb-8">
                            <motion.div
                                initial={ { scale: 0.8, opacity: 0 } }
                                animate={ { scale: 1, opacity: 1 } }
                                transition={ { duration: 0.5, delay: 0.2 } }
                                className="inline-block mb-3 px-4 py-1 bg-white/10 backdrop-blur-md rounded-full text-blue-200 text-sm font-medium"
                            >
                                المهام المنجزة التجارية
                            </motion.div>
                            <motion.h1
                                initial={ { y: 20, opacity: 0 } }
                                animate={ { y: 0, opacity: 1 } }
                                transition={ { duration: 0.7, delay: 0.3 } }
                                className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight"
                            >
                                Completed <span className="text-blue-300">Tasks</span>
                            </motion.h1>
                            <motion.p
                                initial={ { y: 20, opacity: 0 } }
                                animate={ { y: 0, opacity: 1 } }
                                transition={ { duration: 0.7, delay: 0.5 } }
                                className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed"
                            >
                                Efficient business solutions and comprehensive commercial services tailored for your organization's success
                            </motion.p>
                        </div>

                        <motion.div
                            initial={ { opacity: 0 } }
                            animate={ { opacity: 1 } }
                            transition={ { duration: 1, delay: 0.8 } }
                            className="flex flex-wrap justify-center gap-4 mt-10"
                        >
                            <Link
                                href="/contact"
                                className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-gradient-to-r from-blue-600 to-blue-800 overflow-hidden rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-blue-500/30"
                            >
                                <span className="relative flex items-center">
                                    Get Started
                                    <svg className="w-5 h-5 ml-2 transform transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                    </svg>
                                </span>
                            </Link>
                            <a
                                href="#about"
                                className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-blue-100 bg-white/10 backdrop-blur-md overflow-hidden rounded-full transition-all duration-300 hover:bg-white/20 hover:scale-105"
                            >
                                <span className="relative flex items-center">
                                    Learn More
                                    <svg className="w-5 h-5 ml-2 transform transition-transform duration-300 group-hover:translate-y-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                                    </svg>
                                </span>
                            </a>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Scroll indicator */ }
                <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
                    <motion.div
                        initial={ { opacity: 0 } }
                        animate={ { opacity: 1 } }
                        transition={ { delay: 1.2, duration: 1 } }
                        className="flex flex-col items-center"
                    >
                        <span className="text-blue-200 text-sm mb-2">Scroll to discover</span>
                        <motion.div
                            animate={ { y: [0, 10, 0] } }
                            transition={ { repeat: Infinity, duration: 1.5 } }
                            className="w-6 h-10 border-2 border-blue-200 rounded-full flex justify-center pt-1"
                        >
                            <motion.div
                                animate={ { height: ["0%", "30%", "0%"] } }
                                transition={ { repeat: Infinity, duration: 1.5 } }
                                className="w-1 bg-blue-200 rounded-full"
                            />
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* About Company - Glass morphism cards */ }
            <section id="about" className="py-24 bg-gradient-to-b from-white to-gray-50">
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <motion.div
                            initial={ { opacity: 0, y: 20 } }
                            whileInView={ { opacity: 1, y: 0 } }
                            viewport={ { once: true } }
                            transition={ { duration: 0.6 } }
                        >
                            <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">About Us</span>
                            <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">Excellence in <span className="text-blue-700">Business Solutions</span></h2>
                            <div className="h-1 w-20 bg-blue-600 mx-auto mb-6"></div>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                Discover how Completed Tasks delivers exceptional business services designed to transform your organization's performance and potential.
                            </p>
                        </motion.div>
                    </div>

                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <motion.div
                            className="lg:w-1/2"
                            initial={ { opacity: 0, x: -50 } }
                            whileInView={ { opacity: 1, x: 0 } }
                            viewport={ { once: true } }
                            transition={ { duration: 0.8 } }
                        >
                            <div className="relative">
                                <img
                                    src="/images/CT%20Company.jpg"
                                    alt="Completed Tasks Team"
                                    className="rounded-xl shadow-2xl z-10 relative"
                                />
                                <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-blue-100 rounded-xl -z-10"></div>
                                <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-600 rounded-lg -z-10"></div>
                            </div>
                        </motion.div>

                        <motion.div
                            className="lg:w-1/2"
                            initial={ { opacity: 0, x: 50 } }
                            whileInView={ { opacity: 1, x: 0 } }
                            viewport={ { once: true } }
                            transition={ { duration: 0.8, delay: 0.2 } }
                        >
                            <h3 className="text-3xl font-bold text-gray-900 mb-6">About Completed Tasks</h3>
                            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                                مؤسسة المهام المنجزة التجارية (Completed Tasks) is a dynamic business solutions provider
                                dedicated to helping organizations streamline operations, enhance efficiency, and achieve
                                their strategic objectives through targeted commercial services.
                            </p>
                            <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                                With a focus on delivering tangible results and measurable business improvements, CT has
                                established itself as a trusted partner for businesses across various sectors looking to
                                optimize their performance and growth potential.
                            </p>

                            <motion.div
                                className="bg-white p-8 rounded-xl shadow-xl border border-gray-100"
                                initial={ { opacity: 0, y: 20 } }
                                whileInView={ { opacity: 1, y: 0 } }
                                viewport={ { once: true } }
                                transition={ { duration: 0.6, delay: 0.4 } }
                            >
                                <h4 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                                    <span className="inline-block p-2 bg-blue-600 text-white rounded-md mr-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z" clipRule="evenodd" />
                                        </svg>
                                    </span>
                                    Core Services
                                </h4>

                                <motion.ul
                                    variants={ containerVariants }
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={ { once: true } }
                                    className="grid grid-cols-1 md:grid-cols-2 gap-4"
                                >
                                    { [
                                        "Business Consultation",
                                        "Process Optimization",
                                        "Commercial Services",
                                        "Project Management",
                                        "Business Development",
                                        "Digital Transformation"
                                    ].map((service, index) => (
                                        <motion.li key={ index } variants={ itemVariants } className="flex items-start">
                                            <div className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mr-3 mt-0.5">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                            <span className="text-gray-700">{ service }</span>
                                        </motion.li>
                                    )) }
                                </motion.ul>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Services - Interactive modern cards */ }
            <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
                {/* Background shapes */ }
                <div className="absolute top-0 left-0 right-0 h-32 bg-gray-50"></div>
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-50 rounded-full"></div>
                    <div className="absolute bottom-40 left-20 w-64 h-64 bg-blue-50 rounded-full"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <motion.div
                        className="text-center max-w-3xl mx-auto mb-20"
                        initial={ { opacity: 0, y: 20 } }
                        whileInView={ { opacity: 1, y: 0 } }
                        viewport={ { once: true } }
                        transition={ { duration: 0.6 } }
                    >
                        <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">Our Services</span>
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">Premium Business Solutions</h2>
                        <div className="h-1 w-20 bg-blue-600 mx-auto mb-6"></div>
                        <p className="text-gray-600 text-lg">
                            Comprehensive business services designed to optimize your operations and drive sustainable growth
                        </p>
                    </motion.div>

                    <motion.div
                        variants={ containerVariants }
                        initial="hidden"
                        whileInView="visible"
                        viewport={ { once: true } }
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        { [
                            {
                                icon: "chart-line",
                                title: "Strategic Consulting",
                                description: "Expert guidance on business strategy, market positioning, and organizational development to help businesses achieve sustainable growth."
                            },
                            {
                                icon: "cogs",
                                title: "Process Optimization",
                                description: "Comprehensive assessment and improvement of business processes to enhance efficiency, reduce costs, and maximize operational productivity."
                            },
                            {
                                icon: "tasks",
                                title: "Project Management",
                                description: "Professional project planning, execution, and monitoring services to ensure successful delivery of business initiatives within scope and budget."
                            },
                            {
                                icon: "handshake",
                                title: "Business Development",
                                description: "Strategic business growth services including market analysis, partnership development, and implementation of expansion strategies."
                            },
                            {
                                icon: "file-contract",
                                title: "Commercial Services",
                                description: "Comprehensive commercial support including contract management, procurement assistance, vendor relations, and strategy implementation."
                            },
                            {
                                icon: "users",
                                title: "Organizational Enhancement",
                                description: "Targeted strategies to improve organizational structure, team performance, and workplace culture to drive business effectiveness."
                            }
                        ].map((service, index) => (
                            <motion.div
                                key={ index }
                                variants={ itemVariants }
                                className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                            >
                                <div className="h-24 bg-gradient-to-r from-blue-600 to-blue-800 flex items-center justify-center group-hover:from-blue-700 group-hover:to-blue-900 transition-all duration-300">
                                    <motion.div
                                        whileHover={ { rotateY: 180 } }
                                        transition={ { duration: 0.5 } }
                                        className="text-white text-5xl"
                                    >
                                        <i className={ `fas fa-${service.icon}` }></i>
                                    </motion.div>
                                </div>
                                <div className="p-8">
                                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-700 transition-colors duration-300">{ service.title }</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        { service.description }
                                    </p>
                                    <div className="mt-6 flex justify-end">
                                        <span className="inline-flex items-center text-blue-600 font-medium group-hover:text-blue-800 transition-colors duration-300">
                                            Learn more
                                            <svg className="w-4 h-4 ml-2 transform transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </motion.div>
                        )) }
                    </motion.div>
                </div>
            </section>

            {/* Why Choose Us - Animated cards with counter */ }
            <section className="py-24 bg-gradient-to-r from-blue-900 to-blue-800 text-white relative overflow-hidden">
                {/* Background patterns */ }
                <div className="absolute inset-0 bg-grid-white/[0.03] bg-[size:60px_60px]"></div>
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-1/3 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-1/3 right-10 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <motion.div
                        className="text-center max-w-3xl mx-auto mb-20"
                        initial={ { opacity: 0, y: 20 } }
                        whileInView={ { opacity: 1, y: 0 } }
                        viewport={ { once: true } }
                        transition={ { duration: 0.6 } }
                    >
                        <span className="inline-block px-3 py-1 bg-white/10 backdrop-blur-sm text-blue-100 rounded-full text-sm font-medium mb-4">Why Choose Us</span>
                        <h2 className="text-4xl font-bold text-white mb-6">The Completed Tasks Advantage</h2>
                        <div className="h-1 w-20 bg-blue-300 mx-auto mb-6"></div>
                        <p className="text-blue-100 text-lg">
                            Our proven approach delivers exceptional results for businesses of all sizes across diverse industries
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        { [
                            {
                                icon: "award",
                                title: "Proven Results",
                                description: "Our track record speaks for itself, with measurable improvements in business performance and efficiency for our diverse client portfolio.",
                                stat: "98%",
                                statLabel: "client satisfaction"
                            },
                            {
                                icon: "user-tie",
                                title: "Expert Team",
                                description: "Our team of experienced business consultants and industry specialists bring valuable insights and practical solutions to every engagement.",
                                stat: "15+",
                                statLabel: "years experience"
                            },
                            {
                                icon: "puzzle-piece",
                                title: "Tailored Approach",
                                description: "We recognize that every business is unique, which is why we customize our solutions to address your specific challenges and objectives.",
                                stat: "200+",
                                statLabel: "projects completed"
                            }
                        ].map((feature, index) => (
                            <motion.div
                                key={ index }
                                initial={ { opacity: 0, y: 30 } }
                                whileInView={ { opacity: 1, y: 0 } }
                                viewport={ { once: true } }
                                transition={ { duration: 0.6, delay: index * 0.2 } }
                                className="bg-white/10 backdrop-blur-md rounded-xl p-8 hover:bg-white/15 transition-all duration-300 border border-white/5"
                            >
                                <div className="mb-6">
                                    <div className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-blue-400 to-blue-600 rounded-lg shadow-lg mb-6">
                                        <i className={ `fas fa-${feature.icon} text-2xl text-white` }></i>
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-4">{ feature.title }</h3>
                                    <p className="text-blue-100 leading-relaxed mb-6">
                                        { feature.description }
                                    </p>
                                </div>

                                <div className="mt-auto pt-6 border-t border-white/10">
                                    <div className="flex items-baseline">
                                        <span className="text-3xl font-bold text-blue-300 mr-2">{ feature.stat }</span>
                                        <span className="text-blue-200">{ feature.statLabel }</span>
                                    </div>
                                </div>
                            </motion.div>
                        )) }
                    </div>
                </div>
            </section>

            {/* CTA - Modern gradient with interactive elements */ }
            <section className="py-20 bg-white relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-white"></div>

                <div className="container mx-auto px-6 relative z-10">
                    <motion.div
                        className="max-w-5xl mx-auto bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl overflow-hidden shadow-xl"
                        initial={ { opacity: 0, y: 50 } }
                        whileInView={ { opacity: 1, y: 0 } }
                        viewport={ { once: true } }
                        transition={ { duration: 0.8 } }
                    >
                        <div className="flex flex-col md:flex-row">
                            <div className="md:w-3/5 p-12 text-white">
                                <motion.h2
                                    className="text-3xl md:text-4xl font-bold mb-6 leading-tight"
                                    initial={ { opacity: 0, x: -20 } }
                                    whileInView={ { opacity: 1, x: 0 } }
                                    viewport={ { once: true } }
                                    transition={ { duration: 0.5, delay: 0.2 } }
                                >
                                    Ready to Transform Your Business Performance?
                                </motion.h2>
                                <motion.p
                                    className="text-blue-100 text-lg mb-8 leading-relaxed"
                                    initial={ { opacity: 0, x: -20 } }
                                    whileInView={ { opacity: 1, x: 0 } }
                                    viewport={ { once: true } }
                                    transition={ { duration: 0.5, delay: 0.3 } }
                                >
                                    Contact Completed Tasks today to discover how our tailored business solutions can help your organization achieve its full potential.
                                </motion.p>
                                <motion.div
                                    initial={ { opacity: 0, y: 20 } }
                                    whileInView={ { opacity: 1, y: 0 } }
                                    viewport={ { once: true } }
                                    transition={ { duration: 0.5, delay: 0.4 } }
                                >
                                    <Link
                                        href="/contact"
                                        className="inline-flex items-center px-8 py-4 bg-white text-blue-700 rounded-full text-lg font-medium hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                                    >
                                        <span>Get in Touch</span>
                                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                        </svg>
                                    </Link>
                                </motion.div>
                            </div>

                            <div className="md:w-2/5 relative">
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-blue-700/20 backdrop-blur-sm"></div>
                                <div className="absolute inset-0 overflow-hidden">
                                    <div className="h-full w-full flex items-center justify-center p-6">
                                        <img
                                            src="/images/CT%20Company.jpg"
                                            alt="Completed Tasks"
                                            className="h-full w-full object-cover object-center rounded-xl opacity-90"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    );
}

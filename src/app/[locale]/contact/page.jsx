"use client";

import { useTranslations } from "next-intl";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Head from "next/head";
import "../../../app/globals.css"; // Import the CSS with animations

export default function Contact() {
    const t = useTranslations("contact");

    useEffect(() => {
        AOS.init({
            duration: 800,
            easing: "ease-in-out",
            once: true,
            mirror: false
        });
    }, []);

    const toggleFAQ = (event) => {
        const button = event.currentTarget;
        const answer = button.nextElementSibling;
        const icon = button.querySelector("svg");

        // Toggle the answer visibility
        answer.classList.toggle("open");

        // Toggle the icon rotation
        if (!answer.classList.contains("open")) {
            icon.classList.remove("rotate-180");
            icon.classList.add("rotate-0");
        } else {
            icon.classList.remove("rotate-0");
            icon.classList.add("rotate-180");
        }
    };

    return (
        <>
            <Head>
                <title>{ t("page_title") } - BOD Holdings</title>
                <meta
                    name="description"
                    content="Get in touch with BOD Holdings - Contact information, office locations and inquiry form."
                />
            </Head>

            {/* Hero Banner */ }
            <section className="relative hero-background min-h-[90vh] flex items-center justify-center overflow-hidden">
                {/* Curved lines */ }
                <div className="curved-line"></div>
                <div className="curved-line" style={ { transform: "rotate(180deg)" } }></div>

                {/* Animated circles */ }
                <div className="animated-circle" style={ { width: "300px", height: "300px", top: "10%", left: "5%" } }></div>
                <div className="animated-circle" style={ { width: "200px", height: "200px", top: "60%", right: "10%" } }></div>
                <div className="animated-circle" style={ { width: "150px", height: "150px", bottom: "20%", left: "20%" } }></div>

                {/* Geometric shapes */ }
                <div className="geometric-shape" style={ { top: "20%", left: "10%" } }>
                    <svg width="100" height="100" viewBox="0 0 100 100">
                        <polygon points="50,0 100,87 0,87" fill="white" />
                    </svg>
                </div>
                <div className="geometric-shape" style={ { bottom: "30%", right: "15%" } }>
                    <svg width="80" height="80" viewBox="0 0 80 80">
                        <rect width="80" height="80" fill="white" />
                    </svg>
                </div>

                {/* Blur circles for depth */ }
                <div className="blur-circle bg-blue-400" style={ { width: "400px", height: "400px", top: "-100px", left: "-100px" } }></div>
                <div className="blur-circle bg-indigo-500" style={ { width: "350px", height: "350px", bottom: "-50px", right: "-50px" } }></div>

                {/* Animated dots */ }
                { [10, 20, 30, 40, 50, 60, 70, 80, 90].map((left, index) => (
                    <div
                        key={ index }
                        className="animated-dots"
                        style={ {
                            left: `${left}%`,
                            animationDelay: `${(index * 0.5) % 5}s`
                        } }
                    ></div>
                )) }

                {/* Content */ }
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-5xl mx-auto">
                        <div data-aos="fade-up" data-aos-duration="1000" className="text-center hero-text-wrapper">
                            <div className="relative mb-8">
                                <h1 className="text-6xl md:text-7xl font-bold hero-text-animation bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-white leading-tight">
                                    { t("page_title") }
                                </h1>
                                <div className="absolute -top-10 -left-10 w-20 h-20 border-t-2 border-l-2 border-white/20"></div>
                                <div className="absolute -bottom-10 -right-10 w-20 h-20 border-b-2 border-r-2 border-white/20"></div>
                            </div>
                            <div className="hero-subtitle-animation">
                                <p className="text-2xl md:text-3xl text-gray-200 mb-4 leading-relaxed max-w-3xl mx-auto">
                                    { t("page_subtitle") }
                                </p>
                            </div>
                            <div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-12">
                                <a
                                    href="#contact-form"
                                    className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg"
                                >
                                    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-indigo-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                                    <i className="fas fa-paper-plane mr-3 relative z-10"></i>
                                    <span className="relative z-10">{ t("send_message") }</span>
                                </a>
                                <a
                                    href="#global-presence"
                                    className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white border-2 border-white rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg"
                                >
                                    <span className="absolute inset-0 w-full h-full bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
                                    <i className="fas fa-globe mr-3"></i>
                                    <span>{ t("global_offices") }</span>
                                </a>
                            </div>
                            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                                <div className="flex items-center justify-center space-x-4 text-white/80 hover:text-white transition-colors duration-300">
                                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 float-animation">
                                        <i className="fas fa-phone-alt text-xl"></i>
                                    </div>
                                    <span className="text-lg">{ t("support_247") }</span>
                                </div>
                                <div className="flex items-center justify-center space-x-4 text-white/80 hover:text-white transition-colors duration-300">
                                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 float-animation">
                                        <i className="fas fa-clock text-xl"></i>
                                    </div>
                                    <span className="text-lg">{ t("quick_response") }</span>
                                </div>
                                <div className="flex items-center justify-center space-x-4 text-white/80 hover:text-white transition-colors duration-300">
                                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 float-animation">
                                        <i className="fas fa-map-marked-alt text-xl"></i>
                                    </div>
                                    <span className="text-lg">{ t("global_presence") }</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Enhanced wave separator */ }
                <div className="hero-shape">
                    <svg className="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                        viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
                        <defs>
                            <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                        </defs>
                        <g className="parallax">
                            <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7)" />
                            <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
                            <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
                            <use xlinkHref="#gentle-wave" x="48" y="7" fill="#ffffff" />
                        </g>
                    </svg>
                </div>
            </section>

            {/* Contact Information */ }
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
                        {/* Contact Card 1 */ }
                        <div
                            data-aos="fade-up"
                            data-aos-delay="0"
                            className="contact-card bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition duration-300"
                        >
                            <div className="text-blue-600 text-4xl mb-6 flex justify-center float-animation">
                                <i className="fas fa-map-marked-alt"></i>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-4">{ t("visit_us") }</h3>
                            <div className="space-y-2 text-gray-600">
                                <p className="flex items-center justify-center">
                                    <i className="fas fa-building mr-2"></i>
                                    { t("headquarters_address1") }
                                </p>
                                <p className="flex items-center justify-center">
                                    <i className="fas fa-city mr-2"></i>
                                    { t("headquarters_address2") }
                                </p>
                                <p className="flex items-center justify-center">
                                    <i className="fas fa-globe-americas mr-2"></i>
                                    { t("headquarters_address3") }
                                </p>
                            </div>
                        </div>

                        {/* Contact Card 2 */ }
                        <div
                            data-aos="fade-up"
                            data-aos-delay="100"
                            className="contact-card bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition duration-300"
                        >
                            <div className="text-blue-600 text-4xl mb-6 flex justify-center float-animation">
                                <i className="fas fa-headset"></i>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-4">{ t("call_us") }</h3>
                            <div className="space-y-2 text-gray-600">
                                <p className="flex items-center justify-center">
                                    <i className="fas fa-phone-alt mr-2"></i>
                                    { t("main_phone") }
                                </p>
                                <p className="flex items-center justify-center">
                                    <i className="fas fa-comments mr-2"></i>
                                    { t("support_phone") }
                                </p>
                                <p className="flex items-center justify-center">
                                    <i className="fas fa-chart-line mr-2"></i>
                                    { t("investors_phone") }
                                </p>
                            </div>
                        </div>

                        {/* Contact Card 3 */ }
                        <div
                            data-aos="fade-up"
                            data-aos-delay="200"
                            className="contact-card bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition duration-300"
                        >
                            <div className="text-blue-600 text-4xl mb-6 flex justify-center float-animation">
                                <i className="fas fa-envelope-open-text"></i>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-4">{ t("email_us") }</h3>
                            <div className="space-y-2 text-gray-600">
                                <p className="flex items-center justify-center">
                                    <i className="fas fa-envelope mr-2"></i>
                                    { t("main_email") }
                                </p>
                                <p className="flex items-center justify-center">
                                    <i className="fas fa-life-ring mr-2"></i>
                                    { t("support_email") }
                                </p>
                                <p className="flex items-center justify-center">
                                    <i className="fas fa-briefcase mr-2"></i>
                                    { t("careers_email") }
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form & Map */ }
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact Form */ }
                        <div data-aos="fade-right" data-aos-duration="1000" id="contact-form">
                            <div className="bg-white p-8 rounded-xl shadow-lg">
                                <h2 className="text-3xl font-bold text-gray-800 mb-2">{ t("send_us_message") }</h2>
                                <div className="w-20 h-1 bg-blue-600 mb-6"></div>
                                <p className="text-gray-600 mb-8">{ t("form_description") }</p>

                                <form className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="form-group">
                                            <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 mb-2">
                                                <i className="fas fa-user mr-2 text-blue-600"></i>{ t("first_name") } *
                                            </label>
                                            <input
                                                type="text"
                                                id="first-name"
                                                name="first-name"
                                                required
                                                className="form-input w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="last-name" className="block text-sm font-medium text-gray-700 mb-2">
                                                <i className="fas fa-user mr-2 text-blue-600"></i>{ t("last_name") } *
                                            </label>
                                            <input
                                                type="text"
                                                id="last-name"
                                                name="last-name"
                                                required
                                                className="form-input w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
                                            />
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                            <i className="fas fa-envelope mr-2 text-blue-600"></i>{ t("email_address") } *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            required
                                            className="form-input w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                                            <i className="fas fa-phone mr-2 text-blue-600"></i>{ t("phone_number") }
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            className="form-input w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                                            <i className="fas fa-tag mr-2 text-blue-600"></i>{ t("subject") } *
                                        </label>
                                        <input
                                            type="text"
                                            id="subject"
                                            name="subject"
                                            required
                                            className="form-input w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                            <i className="fas fa-comment mr-2 text-blue-600"></i>{ t("message") } *
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows="5"
                                            required
                                            className="form-input w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
                                        ></textarea>
                                    </div>

                                    <div>
                                        <button
                                            type="submit"
                                            className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg hover:bg-blue-700 transition duration-300 flex items-center justify-center font-medium text-lg"
                                        >
                                            <i className="fas fa-paper-plane mr-2"></i>
                                            { t("send_message") }
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>

                        {/* Map */ }
                        <div data-aos="fade-left" data-aos-duration="1000">
                            <div className="bg-white p-8 rounded-xl shadow-lg">
                                <h2 className="text-3xl font-bold text-gray-800 mb-2">{ t("our_location") }</h2>
                                <div className="w-20 h-1 bg-blue-600 mb-6"></div>
                                <p className="text-gray-600 mb-8">{ t("location_description") }</p>

                                <div className="h-[400px] bg-gray-100 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.7307911762034!2d-122.41941548371092!3d37.77492957975935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c6c8f4459%3A0xb10ed6d9b5050fa5!2sTwitter%20HQ!5e0!3m2!1sen!2sus!4v1648581626437!5m2!1sen!2sus"
                                        width="100%"
                                        height="100%"
                                        style={ { border: 0 } }
                                        allowFullScreen=""
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        className="rounded-lg"
                                    ></iframe>
                                </div>

                                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="flex items-start space-x-4">
                                        <div className="flex-shrink-0">
                                            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                                                <i className="fas fa-clock text-blue-600 text-xl"></i>
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold text-gray-800 mb-1">{ t("business_hours") }</h3>
                                            <p className="text-gray-600">{ t("weekday_hours") }</p>
                                            <p className="text-gray-600">{ t("weekend_hours") }</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-4">
                                        <div className="flex-shrink-0">
                                            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                                                <i className="fas fa-parking text-blue-600 text-xl"></i>
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold text-gray-800 mb-1">{ t("parking") }</h3>
                                            <p className="text-gray-600">{ t("free_parking") }</p>
                                            <p className="text-gray-600">{ t("accessible_parking") }</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Global Presence */ }
            <section className="py-20 bg-gray-50" id="global-presence">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16" data-aos="fade-up">
                        <h2 className="text-4xl font-bold text-gray-800 mb-4">{ t("global_presence_title") }</h2>
                        <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">{ t("global_presence_desc") }</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Office 1 */ }
                        <div className="global-office-card" data-aos="fade-up" data-aos-delay="0">
                            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                                <div className="relative h-64">
                                    <img
                                        src="https://images.unsplash.com/photo-1522083165195-3424ed129620"
                                        alt="New York Office"
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="office-overlay">
                                        <div className="text-center p-4">
                                            <i className="fas fa-building text-4xl mb-4"></i>
                                            <p className="text-lg font-semibold">{ t("visit_newyork_office") }</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <div className="flex items-start space-x-4">
                                        <div className="flex-shrink-0">
                                            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                                                <i className="fas fa-city text-blue-600 text-xl"></i>
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-800 mb-2">{ t("new_york_office") }</h3>
                                            <div className="space-y-2 text-gray-600">
                                                <p className="flex items-center">
                                                    <i className="fas fa-map-marker-alt mr-2 text-blue-600"></i>
                                                    { t("new_york_address") }
                                                </p>
                                                <p className="flex items-center">
                                                    <i className="fas fa-phone-alt mr-2 text-blue-600"></i>
                                                    { t("new_york_phone") }
                                                </p>
                                                <p className="flex items-center">
                                                    <i className="fas fa-envelope mr-2 text-blue-600"></i>
                                                    { t("new_york_email") }
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Office 2 */ }
                        <div className="global-office-card" data-aos="fade-up" data-aos-delay="100">
                            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                                <div className="relative h-64">
                                    <img
                                        src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad"
                                        alt="London Office"
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="office-overlay">
                                        <div className="text-center p-4">
                                            <i className="fas fa-building text-4xl mb-4"></i>
                                            <p className="text-lg font-semibold">{ t("visit_london_office") }</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <div className="flex items-start space-x-4">
                                        <div className="flex-shrink-0">
                                            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                                                <i className="fas fa-city text-blue-600 text-xl"></i>
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-800 mb-2">{ t("london_office") }</h3>
                                            <div className="space-y-2 text-gray-600">
                                                <p className="flex items-center">
                                                    <i className="fas fa-map-marker-alt mr-2 text-blue-600"></i>
                                                    { t("london_address") }
                                                </p>
                                                <p className="flex items-center">
                                                    <i className="fas fa-phone-alt mr-2 text-blue-600"></i>
                                                    { t("london_phone") }
                                                </p>
                                                <p className="flex items-center">
                                                    <i className="fas fa-envelope mr-2 text-blue-600"></i>
                                                    { t("london_email") }
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Office 3 */ }
                        <div className="global-office-card" data-aos="fade-up" data-aos-delay="200">
                            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                                <div className="relative h-64">
                                    <img
                                        src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c"
                                        alt="Dubai Office"
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="office-overlay">
                                        <div className="text-center p-4">
                                            <i className="fas fa-building text-4xl mb-4"></i>
                                            <p className="text-lg font-semibold">{ t("visit_dubai_office") }</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <div className="flex items-start space-x-4">
                                        <div className="flex-shrink-0">
                                            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                                                <i className="fas fa-city text-blue-600 text-xl"></i>
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-800 mb-2">{ t("dubai_office") }</h3>
                                            <div className="space-y-2 text-gray-600">
                                                <p className="flex items-center">
                                                    <i className="fas fa-map-marker-alt mr-2 text-blue-600"></i>
                                                    { t("dubai_address") }
                                                </p>
                                                <p className="flex items-center">
                                                    <i className="fas fa-phone-alt mr-2 text-blue-600"></i>
                                                    { t("dubai_phone") }
                                                </p>
                                                <p className="flex items-center">
                                                    <i className="fas fa-envelope mr-2 text-blue-600"></i>
                                                    { t("dubai_email") }
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */ }
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">{ t("faq_title") }</h2>
                        <p className="text-gray-600 max-w-3xl mx-auto">{ t("faq_description") }</p>
                    </div>

                    <div className="max-w-3xl mx-auto space-y-6">
                        {/* FAQ Item 1 */ }
                        <div className="bg-gray-50 rounded-lg p-6 shadow-md">
                            <button
                                className="flex justify-between items-center w-full text-left focus:outline-none"
                                onClick={ toggleFAQ }
                            >
                                <h3 className="text-lg font-medium text-gray-800">{ t("faq1_question") }</h3>
                                <svg
                                    className="w-5 h-5 text-blue-800 transform rotate-0 transition-transform duration-300"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M19 9l-7 7-7-7"
                                    ></path>
                                </svg>
                            </button>
                            <div className="faq-answer mt-4 text-gray-600">
                                { t("faq1_answer") }
                            </div>
                        </div>

                        {/* FAQ Item 2 */ }
                        <div className="bg-gray-50 rounded-lg p-6 shadow-md">
                            <button
                                className="flex justify-between items-center w-full text-left focus:outline-none"
                                onClick={ toggleFAQ }
                            >
                                <h3 className="text-lg font-medium text-gray-800">{ t("faq2_question") }</h3>
                                <svg
                                    className="w-5 h-5 text-blue-800 transform rotate-0 transition-transform duration-300"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M19 9l-7 7-7-7"
                                    ></path>
                                </svg>
                            </button>
                            <div className="faq-answer mt-4 text-gray-600">
                                { t("faq2_answer") }
                            </div>
                        </div>

                        {/* FAQ Item 3 */ }
                        <div className="bg-gray-50 rounded-lg p-6 shadow-md">
                            <button
                                className="flex justify-between items-center w-full text-left focus:outline-none"
                                onClick={ toggleFAQ }
                            >
                                <h3 className="text-lg font-medium text-gray-800">{ t("faq3_question") }</h3>
                                <svg
                                    className="w-5 h-5 text-blue-800 transform rotate-0 transition-transform duration-300"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M19 9l-7 7-7-7"
                                    ></path>
                                </svg>
                            </button>
                            <div className="faq-answer mt-4 text-gray-600">
                                { t("faq3_answer") }
                            </div>
                        </div>

                        {/* FAQ Item 4 */ }
                        <div className="bg-gray-50 rounded-lg p-6 shadow-md">
                            <button
                                className="flex justify-between items-center w-full text-left focus:outline-none"
                                onClick={ toggleFAQ }
                            >
                                <h3 className="text-lg font-medium text-gray-800">{ t("faq4_question") }</h3>
                                <svg
                                    className="w-5 h-5 text-blue-800 transform rotate-0 transition-transform duration-300"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M19 9l-7 7-7-7"
                                    ></path>
                                </svg>
                            </button>
                            <div className="faq-answer mt-4 text-gray-600">
                                { t("faq4_answer") }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

// CSS for animations to be added in global.css or page-specific styles

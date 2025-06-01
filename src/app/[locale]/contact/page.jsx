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
                {/* Page Title */}
                <div className="absolute top-20 md:top-24 left-0 right-0 text-center z-20">
                    <h1 className="text-5xl md:text-6xl font-bold mb-2 tracking-wide 
                        bg-gradient-to-r from-white/90 via-white to-white/90 bg-clip-text text-transparent
                        drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]
                        [text-shadow:_3px_3px_6px_rgb(0_0_0_/_30%),_0_-1px_2px_rgb(255_255_255_/_40%)]
                        transition-all duration-300 hover:scale-105"
                    >
                        {t("contact_us")}
                    </h1>
                    <div className="w-32 h-1 mx-auto bg-gradient-to-r from-transparent via-blue-500 to-transparent 
                        shadow-lg opacity-80"></div>
                </div>

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
                            </div>
                            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                                <div className="flex items-center justify-center space-x-4 text-white/80 hover:text-white transition-colors duration-300">
                                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 float-animation">
                                        <i className="fas fa-shield-alt text-xl"></i>
                                    </div>
                                    <span className="text-lg">{ t("secure_communication") }</span>
                                </div>
                                <div className="flex items-center justify-center space-x-4 text-white/80 hover:text-white transition-colors duration-300">
                                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 float-animation">
                                        <i className="fas fa-clock text-xl"></i>
                                    </div>
                                    <span className="text-lg">{ t("quick_response") }</span>
                                </div>
                                <div className="flex items-center justify-center space-x-4 text-white/80 hover:text-white transition-colors duration-300">
                                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 float-animation">
                                        <i className="fas fa-handshake text-xl"></i>                                    </div>
                                    <span className="text-lg">{ t("personalized_service") }</span>
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
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                        {/* Contact Card 1 */}
                        <div
                            data-aos="fade-up"
                            data-aos-delay="0"
                            className="contact-card bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition duration-300"
                        >
                            <div className="text-blue-600 text-4xl mb-6 flex justify-center float-animation">
                                <i className="fas fa-map-marked-alt"></i>
                            </div>
                            <h3 className="text-3xl font-bold text-gray-800 mb-4">{t("visit_us")}</h3>
                            <div className="space-y-2 text-gray-600">
                                <p className="flex items-center justify-center text-lg">
                                    <i className="fas fa-building mr-2"></i>
                                    {t("headquarters_address1")}
                                </p>
                                <p className="flex items-center justify-center text-lg">
                                    <i className="fas fa-city mr-2"></i>
                                    {t("headquarters_address2")}
                                </p>
                                <p className="flex items-center justify-center text-lg">
                                    <i className="fas fa-globe-americas mr-2"></i>
                                    {t("headquarters_address3")}
                                </p>
                                <p className="flex items-center justify-center text-lg">
                                    <i className="fas fa-mail-bulk mr-2"></i>
                                    {t("headquarters_postal")}
                                </p>
                            </div>
                        </div>

                        {/* Combined Contact Card */}
                        <div
                            data-aos="fade-up"
                            data-aos-delay="100"
                            className="contact-card bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition duration-300"
                        >
                            <div className="text-blue-600 text-4xl mb-6 flex justify-center gap-4 float-animation">
                                <i className="fas fa-headset"></i>
                                <i className="fas fa-envelope-open-text"></i>
                            </div>
                            <div className="space-y-4 text-gray-600">
                                <div className="border-b pb-4">
                                    <h4 className="font-semibold mb-2 text-blue-600 text-xl">
                                        <i className="fas fa-phone-alt mr-2"></i>
                                        {t("call_us")}
                                    </h4>
                                    <p className="flex items-center justify-center text-lg">
                                        0126606621
                                    </p>
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-2 text-blue-600 text-xl">
                                        <i className="fas fa-envelope mr-2"></i>
                                        {t("email_us")}
                                    </h4>
                                    <p className="flex items-center justify-center text-lg">
                                        <i className="fas fa-envelope mr-2"></i>
                                        {t("main_email")}
                                    </p>
                                    <p className="flex items-center justify-center text-lg">
                                        <i className="fas fa-life-ring mr-2"></i>
                                        {t("support_email")}
                                    </p>
                                    <p className="flex items-center justify-center text-lg">
                                        <i className="fas fa-briefcase mr-2"></i>
                                        {t("careers_email")}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form & Map */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <div data-aos="fade-right" data-aos-duration="1000" id="contact-form">
                            <div className="bg-white p-8 rounded-xl shadow-lg">
                                <h2 className="text-4xl font-bold text-gray-800 mb-2">{t("send_us_message")}</h2>
                                <div className="w-20 h-1 bg-blue-600 mb-6"></div>
                                <p className="text-gray-600 mb-8 text-lg">{t("form_description")}</p>

                                <form className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="form-group">
                                            <label htmlFor="first-name" className="block text-lg font-medium text-gray-700 mb-2">
                                                <i className="fas fa-user mr-2 text-blue-600"></i>{t("first_name")} *
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
                                            <label htmlFor="last-name" className="block text-lg font-medium text-gray-700 mb-2">
                                                <i className="fas fa-user mr-2 text-blue-600"></i>{t("last_name")} *
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
                                        <label htmlFor="email" className="block text-lg font-medium text-gray-700 mb-2">
                                            <i className="fas fa-envelope mr-2 text-blue-600"></i>{t("email_address")} *
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
                                        <label htmlFor="phone" className="block text-lg font-medium text-gray-700 mb-2">
                                            <i className="fas fa-phone mr-2 text-blue-600"></i>{t("phone_number")}
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            className="form-input w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="subject" className="block text-lg font-medium text-gray-700 mb-2">
                                            <i className="fas fa-tag mr-2 text-blue-600"></i>{t("subject")} *
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
                                        <label htmlFor="message" className="block text-lg font-medium text-gray-700 mb-2">
                                            <i className="fas fa-comment mr-2 text-blue-600"></i>{t("message")} *
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
                                        src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=21.510332,39.201832&zoom=15"
                                        width="100%"
                                        height="100%"
                                        style={ { border: 0 } }
                                        allowFullScreen=""
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        className="rounded-lg"
                                    ></iframe>
                                </div>
                                <div className="mt-4 text-center">
                                    <a
                                        href="https://maps.google.com/?q=21.510332,39.201832"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
                                    >
                                        <i className="fas fa-external-link-alt mr-2"></i>
                                        {t("view_larger_map")}
                                    </a>
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

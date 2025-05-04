"use client";

import { useTranslations, useLocale } from "next-intl";
import { useEffect, useState } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "@/i18n/routing";
import { motion } from "framer-motion";

export default function SevenElevenPage() {
    const currentLocale = useLocale();
    const t = useTranslations("subsidiaries.seven-eleven");

    // Force component to re-render when locale changes
    const [translationsLoaded, setTranslationsLoaded] = useState(false);

    // Helper function to safely get translations
    const getTranslation = (key, fallback) => {
        try {
            const translation = t(key);
            // If the translation looks like a key, it might not be loaded correctly
            if (translation.includes('subsidiaries.seven-eleven.')) {
                console.error(`Translation key not replaced: ${key}`);
                return fallback || key;
            }
            return translation;
        } catch (error) {
            console.error(`Error getting translation for ${key}:`, error);
            return fallback || key;
        }
    };

    useEffect(() => {
        // Mark translations as loaded
        setTranslationsLoaded(true);

        // Initialize AOS
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
    }, [currentLocale]);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    // Fallback translations for critical elements
    const fallbackTranslations = {
        title: "Seven-Eleven Grocery Supplies",
        subtitle: "Your Trusted Partner for Quality Food Products and Grocery Supplies",
        explore_products: "Explore Our Products",
        contact_us: "Contact Us",
        about_title: "About Seven-Eleven",
        about_desc: "Seven-Eleven is a premier provider of high-quality food products and grocery supplies, serving both retail and wholesale customers. With a commitment to quality, freshness, and exceptional service, we have established ourselves as a trusted name in the grocery supply industry.",
        our_mission_title: "Our Mission",
        our_mission_desc: "To provide consistently high-quality food products and grocery supplies while ensuring excellent customer service and competitive pricing.",
        our_vision_title: "Our Vision",
        our_vision_desc: "To be the leading grocery supplier in the region, known for quality, reliability, and innovation.",
        products_title: "Our Products",
        products_subtitle: "Discover our wide range of high-quality grocery products",
        why_choose_title: "Why Choose Seven-Eleven?",
        why_choose_subtitle: "We're dedicated to quality, freshness, and excellent service"
    };

    return (
        <main className="relative overflow-hidden">
            {/* Scroll to top button */ }
            <button
                className="scroll-to-top fixed bottom-8 right-8 bg-blue-600 text-white p-3 rounded-full shadow-lg z-50 opacity-0 transition-opacity duration-300"
                onClick={ scrollToTop }
            >
                <i className="fas fa-arrow-up"></i>
            </button>

            {/* Hero Section */ }
            <section className="relative min-h-screen flex items-center justify-center">
                <div className="absolute inset-0">
                    <img
                        src="https://images.pexels.com/photos/3962294/pexels-photo-3962294.jpeg"
                        alt="Grocery Store"
                        className="w-full h-full object-cover filter brightness-50"
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/75 via-green-800/65 to-black/70"></div>

                {/* Animated shapes for modern look */ }
                <div className="absolute right-10 top-20 w-64 h-64 rounded-full bg-green-500/20 blur-3xl animate-pulse"></div>
                <div className="absolute left-10 bottom-20 w-80 h-80 rounded-full bg-blue-500/20 blur-3xl animate-pulse" style={ { animationDelay: '1.5s' } }></div>

                <div className="relative z-10 text-center px-4 max-w-6xl mx-auto" data-aos="fade-up" data-aos-duration="1200">
                    <motion.div
                        initial={ { opacity: 0, y: 30 } }
                        animate={ { opacity: 1, y: 0 } }
                        transition={ { duration: 0.8, delay: 0.3 } }
                    >
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                                { getTranslation("title", fallbackTranslations.title) }
                            </span>
                        </h1>
                    </motion.div>

                    <motion.div
                        initial={ { opacity: 0, y: 30 } }
                        animate={ { opacity: 1, y: 0 } }
                        transition={ { duration: 0.8, delay: 0.5 } }
                    >
                        <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-10">
                            { getTranslation("subtitle", fallbackTranslations.subtitle) }
                        </p>
                    </motion.div>

                    <motion.div
                        initial={ { opacity: 0, y: 30 } }
                        animate={ { opacity: 1, y: 0 } }
                        transition={ { duration: 0.8, delay: 0.7 } }
                        className="flex flex-wrap justify-center gap-4"
                    >
                        <a
                            href="#products"
                            className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                            onClick={ (e) => {
                                e.preventDefault();
                                document.getElementById('products').scrollIntoView({
                                    behavior: 'smooth'
                                });
                            } }
                        >
                            { getTranslation("explore_products", fallbackTranslations.explore_products) }
                        </a>
                        <Link
                            href="/contact"
                            locale={ currentLocale }
                            className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-medium hover:bg-white hover:text-green-800 transition-all duration-300 hover:shadow-lg"
                        >
                            { getTranslation("contact_us", fallbackTranslations.contact_us) }
                        </Link>
                    </motion.div>
                </div>

                {/* Scroll indicator */ }
                <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
                    <span className="text-white text-sm mb-2">Scroll to discover</span>
                    <div className="w-8 h-12 border-2 border-white rounded-full flex justify-center p-1">
                        <div className="w-1 h-3 bg-white rounded-full animate-scrollDown"></div>
                    </div>
                </div>
            </section>

            {/* About Section */ }
            <section className="py-24 bg-white" id="about">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-1/2" data-aos="fade-right" data-aos-duration="1000">
                            <div className="relative group">
                                <div className="absolute -inset-2 bg-gradient-to-r from-green-600 to-blue-400 rounded-3xl opacity-75 blur transition duration-300 group-hover:opacity-100"></div>
                                <div className="relative">
                                    <img
                                        src="https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg"
                                        alt="Seven-Eleven Store"
                                        className="rounded-2xl shadow-2xl w-full h-[450px] object-cover transform transition duration-300 group-hover:scale-[1.02]"
                                    />
                                    <div className="absolute -bottom-6 -right-6 bg-green-600 text-white p-6 rounded-2xl shadow-xl transform transition duration-300 hover:scale-105 hover:bg-green-700">
                                        <p className="text-2xl font-bold">15+</p>
                                        <p className="text-sm">Years of Excellence</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/2" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200">
                            <h2 className="text-4xl font-bold text-gray-900 mb-6">{ getTranslation("about_title", fallbackTranslations.about_title) }</h2>
                            <p className="text-xl text-gray-600 mb-8 leading-relaxed">{ getTranslation("about_desc", fallbackTranslations.about_desc) }</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                                <div className="bg-gray-50 p-6 rounded-xl transform transition duration-300 hover:scale-105 hover:shadow-lg"
                                    data-aos="zoom-in" data-aos-delay="400">
                                    <i className="fas fa-bullseye text-3xl text-green-600 mb-4"></i>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">{ getTranslation("our_mission_title", fallbackTranslations.our_mission_title) }</h3>
                                    <p className="text-gray-600">{ getTranslation("our_mission_desc", fallbackTranslations.our_mission_desc) }</p>
                                </div>
                                <div className="bg-gray-50 p-6 rounded-xl transform transition duration-300 hover:scale-105 hover:shadow-lg"
                                    data-aos="zoom-in" data-aos-delay="600">
                                    <i className="fas fa-eye text-3xl text-green-600 mb-4"></i>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">{ getTranslation("our_vision_title", fallbackTranslations.our_vision_title) }</h3>
                                    <p className="text-gray-600">{ getTranslation("our_vision_desc", fallbackTranslations.our_vision_desc) }</p>
                                </div>
                            </div>
                            <div className="flex flex-wrap gap-4 mt-8" data-aos="fade-up" data-aos-delay="700">
                                <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full">
                                    <i className="fas fa-check-circle text-green-600"></i>
                                    <span className="text-gray-700">Quality Assurance</span>
                                </div>
                                <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full">
                                    <i className="fas fa-check-circle text-green-600"></i>
                                    <span className="text-gray-700">Fresh Products</span>
                                </div>
                                <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full">
                                    <i className="fas fa-check-circle text-green-600"></i>
                                    <span className="text-gray-700">Competitive Pricing</span>
                                </div>
                                <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full">
                                    <i className="fas fa-check-circle text-green-600"></i>
                                    <span className="text-gray-700">Wide Selection</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Products Section */ }
            <section className="py-24 bg-gray-50" id="products">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16" data-aos="fade-up">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{ getTranslation("products_title", fallbackTranslations.products_title) }</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            { getTranslation("products_subtitle", fallbackTranslations.products_subtitle) }
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <ProductCard
                            image="https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg"
                            title="Fresh Produce"
                            description="A wide selection of fresh fruits and vegetables sourced from trusted local and international farms."
                            delay={ 100 }
                        />
                        <ProductCard
                            image="https://images.pexels.com/photos/248412/pexels-photo-248412.jpeg"
                            title="Dairy Products"
                            description="High-quality dairy products including milk, cheese, yogurt, and more from premium suppliers."
                            delay={ 300 }
                        />
                        <ProductCard
                            image="https://images.pexels.com/photos/1070946/pexels-photo-1070946.jpeg"
                            title="Bakery Items"
                            description="Freshly baked bread, pastries, and confectioneries made with premium ingredients."
                            delay={ 500 }
                        />
                        <ProductCard
                            image="https://images.pexels.com/photos/2531188/pexels-photo-2531188.jpeg"
                            title="Beverages"
                            description="A comprehensive range of beverages including soft drinks, juices, water, coffee, and tea."
                            delay={ 700 }
                        />
                        <ProductCard
                            image="https://images.pexels.com/photos/6707631/pexels-photo-6707631.jpeg"
                            title="Pantry Essentials"
                            description="Essential pantry items including rice, pasta, oils, spices, sauces, and condiments."
                            delay={ 900 }
                        />
                        <ProductCard
                            image="https://images.pexels.com/photos/3181763/pexels-photo-3181763.jpeg"
                            title="Snacks & Confectionery"
                            description="A delightful selection of snacks, chocolates, candies, and other confectionery items."
                            delay={ 1100 }
                        />
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */ }
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16" data-aos="fade-up">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{ getTranslation("why_choose_title", fallbackTranslations.why_choose_title) }</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            { getTranslation("why_choose_subtitle", fallbackTranslations.why_choose_subtitle) }
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <FeatureCard
                            icon="fas fa-award"
                            title="Premium Quality"
                            description="We offer only the highest quality products that meet our strict standards."
                            delay={ 100 }
                        />
                        <FeatureCard
                            icon="fas fa-truck"
                            title="Fast Delivery"
                            description="Efficient delivery service to ensure your products arrive on time."
                            delay={ 300 }
                        />
                        <FeatureCard
                            icon="fas fa-sync-alt"
                            title="Regular Restocking"
                            description="Frequent restocking to ensure fresh products are always available."
                            delay={ 500 }
                        />
                        <FeatureCard
                            icon="fas fa-hand-holding-usd"
                            title="Competitive Pricing"
                            description="Fair and competitive prices without compromising on quality."
                            delay={ 700 }
                        />
                    </div>
                </div>
            </section>

            {/* Statistics Section */ }
            <section className="py-20 bg-gradient-to-r from-green-700 to-blue-700 text-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                        <StatItem
                            number="1000+"
                            label="Products"
                            icon="fas fa-shopping-basket"
                            delay={ 100 }
                        />
                        <StatItem
                            number="50+"
                            label="Suppliers"
                            icon="fas fa-handshake"
                            delay={ 300 }
                        />
                        <StatItem
                            number="500+"
                            label="Regular Customers"
                            icon="fas fa-users"
                            delay={ 500 }
                        />
                        <StatItem
                            number="15+"
                            label="Years Experience"
                            icon="fas fa-clock"
                            delay={ 700 }
                        />
                    </div>
                </div>
            </section>

            {/* Testimonials Section */ }
            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16" data-aos="fade-up">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Read testimonials from our satisfied customers
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <TestimonialCard
                            quote="Seven-Eleven has been our trusted supplier for over 5 years. Their products are consistently high-quality and their service is exceptional."
                            name="Ahmed Al-Khatib"
                            position="Restaurant Owner"
                            delay={ 100 }
                        />
                        <TestimonialCard
                            quote="What sets Seven-Eleven apart is their attention to detail and commitment to customer satisfaction. They go above and beyond to ensure we get the best products."
                            name="Fatima Al-Saud"
                            position="Hotel Purchasing Manager"
                            delay={ 300 }
                        />
                        <TestimonialCard
                            quote="I've been shopping at Seven-Eleven for years and have always been impressed by their product quality and friendly service. Highly recommended!"
                            name="Mohammad Al-Jasim"
                            position="Regular Customer"
                            delay={ 500 }
                        />
                    </div>
                </div>
            </section>

            {/* Contact CTA Section */ }
            <section className="py-20 bg-blue-600 text-white">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                        <div className="lg:w-2/3" data-aos="fade-right">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Partner with Seven-Eleven?</h2>
                            <p className="text-lg md:text-xl text-blue-100">
                                Contact us today to learn more about our products and services.
                            </p>
                        </div>
                        <div className="lg:w-1/3 flex justify-end" data-aos="fade-left">
                            <Link
                                href="/contact"
                                locale={ currentLocale }
                                className="bg-white text-blue-600 px-8 py-4 rounded-full font-medium hover:bg-blue-50 transition-all duration-300 hover:shadow-lg inline-block"
                            >
                                Contact Us Now
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

function ProductCard({ image, title, description, delay }) {
    return (
        <div className="group" data-aos="fade-up" data-aos-delay={ delay }>
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="h-64 overflow-hidden">
                    <img
                        src={ image }
                        alt={ title }
                        className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                    />
                </div>
                <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors duration-300">{ title }</h3>
                    <p className="text-gray-600">{ description }</p>
                    <div className="mt-6">
                        <a href="#" className="inline-flex items-center text-green-600 font-medium group-hover:text-green-700 transition-colors duration-300">
                            Learn more
                            <i className="fas fa-arrow-right ml-2 transform transition-transform duration-300 group-hover:translate-x-2"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

function FeatureCard({ icon, title, description, delay }) {
    return (
        <div className="group" data-aos="fade-up" data-aos-delay={ delay }>
            <div className="bg-gray-50 rounded-xl p-8 border border-gray-100 hover:border-green-200 hover:bg-white transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 text-green-600 rounded-full mb-6 transform transition-transform duration-300 group-hover:scale-110 group-hover:bg-green-600 group-hover:text-white mx-auto">
                    <i className={ `${icon} text-2xl` }></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors duration-300">{ title }</h3>
                <p className="text-gray-600">{ description }</p>
            </div>
        </div>
    );
}

function StatItem({ number, label, icon, delay }) {
    return (
        <div className="py-6" data-aos="fade-up" data-aos-delay={ delay }>
            <div className="text-center">
                <div className="text-5xl font-bold mb-2 flex items-center justify-center">
                    <i className={ `${icon} mr-3 text-4xl text-green-300` }></i>
                    <span>{ number }</span>
                </div>
                <p className="text-xl text-blue-100">{ label }</p>
            </div>
        </div>
    );
}

function TestimonialCard({ quote, name, position, delay }) {
    return (
        <div className="group" data-aos="fade-up" data-aos-delay={ delay }>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 relative">
                <div className="text-green-600 mb-4">
                    <i className="fas fa-quote-left text-3xl opacity-20"></i>
                </div>
                <p className="text-gray-600 mb-6 italic">"{ quote }"</p>
                <div className="flex items-center">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold text-xl mr-4">
                        { name.charAt(0) }
                    </div>
                    <div>
                        <h4 className="font-bold text-gray-900">{ name }</h4>
                        <p className="text-gray-500 text-sm">{ position }</p>
                    </div>
                </div>
            </div>
        </div>
    );
} 
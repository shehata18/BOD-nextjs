'use client';

import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Link } from '@/i18n/routing';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styles from './styles.module.css';

// FontAwesome Configuration
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faMapMarkerAlt, faPhone, faEnvelope, faCheckCircle,
    faArrowRight, faStar
} from '@fortawesome/free-solid-svg-icons';

export default function RamadanPage() {
    const t = useTranslations('subsidiaries');

    useEffect(() => {
        // Initialize AOS animation library
        AOS.init({
            duration: 1000,
            once: true,
            offset: 100
        });

        // Parallax effect for the banner
        const handleScroll = () => {
            const parallaxBg = document.querySelector('.parallax-bg');
            if (parallaxBg) {
                const scrolled = window.pageYOffset;
                parallaxBg.style.transform = `translateY(${scrolled * 0.5}px)`;
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <main>
            {/* Hero Banner */ }
            <section className="relative h-screen overflow-hidden flex items-center justify-center">
                {/* Background Image with Gradient Overlay */ }
                <div className="absolute inset-0">
                    <Image
                        src="/images/resturant.jpg"
                        alt="Restaurant Banner"
                        className="w-full h-full object-cover object-center parallax-bg"
                        style={ { opacity: 0.8 } }
                        fill
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/80 to-black/60"></div>
                </div>

                {/* Floating Food Icons */ }
                <div className="absolute inset-0 pointer-events-none z-20">
                    <div
                        className="absolute top-24 left-24 w-16 h-16 opacity-80 drop-shadow-xl"
                        style={ { filter: "brightness(0) invert(1)", animation: "float 6s ease-in-out infinite" } }
                    >
                        <Image
                            src="https://cdn-icons-png.flaticon.com/512/1046/1046874.png"
                            alt="Kebab"
                            width={ 64 }
                            height={ 64 }
                        />
                    </div>
                    <div
                        className="absolute top-32 right-32 w-20 h-20 opacity-80 drop-shadow-xl"
                        style={ { filter: "brightness(0) invert(1)", animation: "float 8s ease-in-out infinite" } }
                    >
                        <Image
                            src="https://cdn-icons-png.flaticon.com/512/1147/1147933.png"
                            alt="Biryani"
                            width={ 80 }
                            height={ 80 }
                        />
                    </div>
                    <div
                        className="absolute bottom-32 left-40 w-16 h-16 opacity-80 drop-shadow-xl"
                        style={ { filter: "brightness(0) invert(1)", animation: "float 7s ease-in-out infinite" } }
                    >
                        <Image
                            src="https://cdn-icons-png.flaticon.com/512/3075/3075977.png"
                            alt="Turkish Tea"
                            width={ 64 }
                            height={ 64 }
                        />
                    </div>
                    <div
                        className="absolute bottom-24 right-40 w-16 h-16 opacity-80 drop-shadow-xl"
                        style={ { filter: "brightness(0) invert(1)", animation: "float 5s ease-in-out infinite" } }
                    >
                        <Image
                            src="https://cdn-icons-png.flaticon.com/512/8006/8006472.png"
                            alt="Naan"
                            width={ 64 }
                            height={ 64 }
                        />
                    </div>
                    <div
                        className="absolute top-1/2 left-24 w-14 h-14 opacity-80 drop-shadow-xl"
                        style={ { filter: "brightness(0) invert(1)", animation: "float 9s ease-in-out infinite" } }
                    >
                        <Image
                            src="https://cdn-icons-png.flaticon.com/512/2515/2515263.png"
                            alt="Spices"
                            width={ 56 }
                            height={ 56 }
                        />
                    </div>
                    <div
                        className="absolute top-1/2 right-24 w-14 h-14 opacity-80 drop-shadow-xl"
                        style={ { filter: "brightness(0) invert(1)", animation: "float 7s ease-in-out infinite" } }
                    >
                        <Image
                            src="https://cdn-icons-png.flaticon.com/512/4825/4825292.png"
                            alt="Baklava"
                            width={ 56 }
                            height={ 56 }
                        />
                    </div>
                </div>

                {/* Content */ }
                <div className="relative z-30 w-full flex flex-col items-center justify-center text-center px-4">
                    <h1 className="text-6xl md:text-8xl font-extrabold mb-6 fade-in" style={ { animationDelay: "0.2s", color: "#FFA500", textShadow: "2px 2px 4px rgba(0,0,0,0.8)" } }>
                        <span>Ramadan</span>
                        <br />
                        <span>Restaurants</span>
                    </h1>
                    <div className="h-1.5 w-48 mx-auto mb-8 fade-in rounded-full shadow-lg" style={ { backgroundColor: "#FFA500", animationDelay: "0.4s" } }></div>

                    <div className="flex flex-wrap justify-center gap-6 fade-in" style={ { animationDelay: "1s" } }>
                        <a
                            href="#locations"
                            className="relative group overflow-hidden px-8 py-4 rounded-full font-medium inline-flex items-center transition-all transform hover:scale-105 hover:shadow-2xl"
                            style={ { background: "linear-gradient(90deg, #f59e0b, #ea580c)", boxShadow: "0 4px 15px rgba(234, 88, 12, 0.3)" } }
                        >
                            <span className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                            <span className="relative text-white text-lg font-semibold tracking-wide">
                                Find Location
                                <FontAwesomeIcon icon={ faMapMarkerAlt } className="ml-2 group-hover:animate-bounce" />
                            </span>
                        </a>
                    </div>
                </div>
            </section>

            {/* Company Overview */ }
            <section className="py-24 bg-white relative overflow-hidden" id="about">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        {/* Image Gallery */ }
                        <div className="lg:w-1/2" data-aos="fade-right">
                            <div className="relative">
                                {/* Main Image */ }
                                <Image
                                    src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
                                    alt="Ramadan Restaurant Interior"
                                    width={ 600 }
                                    height={ 400 }
                                    className={ `rounded-lg shadow-2xl w-full ${styles.hoverScale}` }
                                    style={ { clipPath: "polygon(0 0, 100% 0, 100% 85%, 0% 100%)" } }
                                />

                                {/* Floating Images */ }
                                <div className="absolute -bottom-12 -right-12" data-aos="fade-up" data-aos-delay="300">
                                    <Image
                                        src="https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
                                        alt="Signature Dish"
                                        width={ 192 }
                                        height={ 192 }
                                        className={ `rounded-lg shadow-xl ${styles.hoverScale} object-cover` }
                                    />
                                </div>

                                <div className="absolute -top-12 -right-12" data-aos="fade-left" data-aos-delay="600">
                                    <Image
                                        src="https://images.unsplash.com/photo-1542528180-1c2803fa048c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1167&q=80"
                                        alt="Restaurant Ambiance"
                                        width={ 144 }
                                        height={ 144 }
                                        className={ `rounded-lg shadow-xl ${styles.hoverScale} object-cover` }
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Content */ }
                        <div className="lg:w-1/2" data-aos="fade-left">
                            <div className="space-y-8">
                                <div>
                                    <h2 className="text-4xl font-bold text-gray-800 mb-4">Experience the Art of <span className={ styles.textGradient }>Authentic Cuisine</span></h2>
                                    <div className="h-1 w-24 bg-amber-500 mb-8"></div>
                                </div>

                                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                    سلسلة مطاعم رمضان السعيد (Ramadan Restaurants) is more than just a dining establishment
                                    – it's a culinary journey that brings together the finest flavors of Pakistani, Turkish,
                                    and traditional cuisine. Our commitment to authenticity and excellence has made us a
                                    premier destination for food enthusiasts.
                                </p>

                                <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-8 rounded-2xl border border-amber-100/50 space-y-6">
                                    <h3 className="text-2xl font-bold text-gray-800 mb-6">Our Culinary Excellence</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {/* Authentic Recipes */ }
                                        <div className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                                            <h4 className="text-lg font-semibold text-gray-800 mb-2">Authentic Recipes</h4>
                                            <p className="text-gray-600">Traditional cooking methods and premium ingredients</p>
                                        </div>

                                        {/* Master Chefs */ }
                                        <div className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                                            <h4 className="text-lg font-semibold text-gray-800 mb-2">Master Chefs</h4>
                                            <p className="text-gray-600">Expertly trained culinary professionals</p>
                                        </div>

                                        {/* Fresh Ingredients */ }
                                        <div className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                                            <h4 className="text-lg font-semibold text-gray-800 mb-2">Fresh Ingredients</h4>
                                            <p className="text-gray-600">Locally sourced, premium quality produce</p>
                                        </div>

                                        {/* Premium Service */ }
                                        <div className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                                            <h4 className="text-lg font-semibold text-gray-800 mb-2">Premium Service</h4>
                                            <p className="text-gray-600">Exceptional dining experience guaranteed</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-6 pt-6">
                                    <a href="#menu" className={ `${styles.btnModern} group transition-all ${styles.hoverScale}` }>
                                        View Our Menu
                                        <FontAwesomeIcon icon={ faArrowRight } className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Cuisine Categories */ }
            <section className="py-24 bg-gradient-to-b from-white to-amber-50" id="menu">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
                        <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Signature <span className={ styles.textGradient }>Cuisines</span></h2>
                        <div className="h-1 w-24 bg-amber-500 mx-auto mb-8"></div>
                        <p className="text-gray-600 text-lg">Discover our carefully curated selection of authentic dishes, each prepared with passion and tradition.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                        {/* Pakistani Cuisine */ }
                        <div className="group" data-aos="fade-up" data-aos-delay="100">
                            <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                                <div className="relative h-80 overflow-hidden">
                                    <Image
                                        src="https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1488&q=80"
                                        alt="Pakistani Cuisine"
                                        width={ 600 }
                                        height={ 320 }
                                        className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                                    <h3 className="absolute bottom-6 left-6 text-2xl font-bold" style={ { color: "#FFA500", textShadow: "2px 2px 4px rgba(0,0,0,0.5)" } }>
                                        Pakistani Cuisine
                                    </h3>
                                </div>
                                <div className="p-8">
                                    <p className="text-gray-600 mb-6">Experience the rich, aromatic flavors of authentic Pakistani cuisine, featuring a variety of spices, tender meats, and fragrant rice dishes.</p>
                                    <div className="space-y-4">
                                        <h4 className="text-lg font-semibold text-amber-800 mb-3">Signature Dishes</h4>
                                        <ul className="space-y-3">
                                            <li className="flex items-center space-x-3">
                                                <FontAwesomeIcon icon={ faCheckCircle } className="text-amber-500" />
                                                <span className="text-gray-700">Lahori Chicken Karahi</span>
                                            </li>
                                            <li className="flex items-center space-x-3">
                                                <FontAwesomeIcon icon={ faCheckCircle } className="text-amber-500" />
                                                <span className="text-gray-700">Beef Nihari</span>
                                            </li>
                                            <li className="flex items-center space-x-3">
                                                <FontAwesomeIcon icon={ faCheckCircle } className="text-amber-500" />
                                                <span className="text-gray-700">Special Biryani</span>
                                            </li>
                                            <li className="flex items-center space-x-3">
                                                <FontAwesomeIcon icon={ faCheckCircle } className="text-amber-500" />
                                                <span className="text-gray-700">Seekh Kebab</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Turkish Cuisine */ }
                        <div className="group" data-aos="fade-up" data-aos-delay="200">
                            <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                                <div className="relative h-80 overflow-hidden">
                                    <Image
                                        src="https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1530&q=80"
                                        alt="Turkish Cuisine"
                                        width={ 600 }
                                        height={ 320 }
                                        className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                                    <h3 className="absolute bottom-6 left-6 text-2xl font-bold" style={ { color: "#FFA500", textShadow: "2px 2px 4px rgba(0,0,0,0.5)" } }>
                                        Turkish Delights
                                    </h3>
                                </div>
                                <div className="p-8">
                                    <p className="text-gray-600 mb-6">Savor the diverse and flavorful world of Turkish cuisine, with its unique blend of Mediterranean, Middle Eastern, and Central Asian influences.</p>
                                    <div className="space-y-4">
                                        <h4 className="text-lg font-semibold text-amber-800 mb-3">Signature Dishes</h4>
                                        <ul className="space-y-3">
                                            <li className="flex items-center space-x-3">
                                                <FontAwesomeIcon icon={ faCheckCircle } className="text-amber-500" />
                                                <span className="text-gray-700">Authentic Döner Kebab</span>
                                            </li>
                                            <li className="flex items-center space-x-3">
                                                <FontAwesomeIcon icon={ faCheckCircle } className="text-amber-500" />
                                                <span className="text-gray-700">Turkish Pide</span>
                                            </li>
                                            <li className="flex items-center space-x-3">
                                                <FontAwesomeIcon icon={ faCheckCircle } className="text-amber-500" />
                                                <span className="text-gray-700">Iskender Kebab</span>
                                            </li>
                                            <li className="flex items-center space-x-3">
                                                <FontAwesomeIcon icon={ faCheckCircle } className="text-amber-500" />
                                                <span className="text-gray-700">Baklava</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Traditional Specialties */ }
                        <div className="group" data-aos="fade-up" data-aos-delay="300">
                            <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                                <div className="relative h-80 overflow-hidden">
                                    <Image
                                        src="https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80"
                                        alt="Traditional Specialties"
                                        width={ 600 }
                                        height={ 320 }
                                        className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                                    <h3 className="absolute bottom-6 left-6 text-2xl font-bold" style={ { color: "#FFA500", textShadow: "2px 2px 4px rgba(0,0,0,0.5)" } }>
                                        Traditional Specialties
                                    </h3>
                                </div>
                                <div className="p-8">
                                    <p className="text-gray-600 mb-6">Discover our selection of traditional dishes including the aromatic Bukhari rice and tender Mandi, prepared using time-honored methods.</p>
                                    <div className="space-y-4">
                                        <h4 className="text-lg font-semibold text-amber-800 mb-3">Signature Dishes</h4>
                                        <ul className="space-y-3">
                                            <li className="flex items-center space-x-3">
                                                <FontAwesomeIcon icon={ faCheckCircle } className="text-amber-500" />
                                                <span className="text-gray-700">Bukhari Rice with Lamb</span>
                                            </li>
                                            <li className="flex items-center space-x-3">
                                                <FontAwesomeIcon icon={ faCheckCircle } className="text-amber-500" />
                                                <span className="text-gray-700">Chicken Mandi</span>
                                            </li>
                                            <li className="flex items-center space-x-3">
                                                <FontAwesomeIcon icon={ faCheckCircle } className="text-amber-500" />
                                                <span className="text-gray-700">Mixed Grill Platter</span>
                                            </li>
                                            <li className="flex items-center space-x-3">
                                                <FontAwesomeIcon icon={ faCheckCircle } className="text-amber-500" />
                                                <span className="text-gray-700">Traditional Breads</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Restaurant Features */ }
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
                        <h2 className="text-4xl font-bold text-gray-800 mb-4">Restaurant <span className={ styles.textGradient }>Features</span></h2>
                        <div className="h-1 w-24 bg-amber-500 mx-auto mb-8"></div>
                        <p className="text-gray-600">Experience dining excellence with our premium features and services</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Feature 1: Private Dining */ }
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden hover-scale transition-all duration-300"
                            data-aos="fade-up" data-aos-delay="100">
                            <div className="relative h-48 overflow-hidden">
                                <Image
                                    src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                                    alt="Private Dining Room"
                                    width={ 600 }
                                    height={ 192 }
                                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-800 mb-3">Private Dining</h3>
                                <p className="text-gray-600">Exclusive spaces for intimate gatherings and special occasions</p>
                            </div>
                        </div>

                        {/* Feature 2: Outdoor Seating */ }
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden hover-scale transition-all duration-300"
                            data-aos="fade-up" data-aos-delay="200">
                            <div className="relative h-48 overflow-hidden">
                                <Image
                                    src="https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
                                    alt="Outdoor Seating Area"
                                    width={ 600 }
                                    height={ 192 }
                                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-800 mb-3">Outdoor Seating</h3>
                                <p className="text-gray-600">Beautiful garden setting for al fresco dining experience</p>
                            </div>
                        </div>

                        {/* Feature 3: Live Cooking */ }
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden hover-scale transition-all duration-300"
                            data-aos="fade-up" data-aos-delay="300">
                            <div className="relative h-48 overflow-hidden">
                                <Image
                                    src="https://images.unsplash.com/photo-1551218808-94e220e084d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
                                    alt="Live Cooking Station"
                                    width={ 600 }
                                    height={ 192 }
                                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-800 mb-3">Live Cooking</h3>
                                <p className="text-gray-600">Watch our expert chefs prepare your meals right before your eyes</p>
                            </div>
                        </div>

                        {/* Feature 4: Prayer Room */ }
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden hover-scale transition-all duration-300"
                            data-aos="fade-up" data-aos-delay="400">
                            <div className="relative h-48 overflow-hidden">
                                <Image
                                    src="https://images.unsplash.com/photo-1519817914152-22d216bb9170?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                                    alt="Prayer Room"
                                    width={ 600 }
                                    height={ 192 }
                                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-800 mb-3">Prayer Room</h3>
                                <p className="text-gray-600">Dedicated prayer spaces for our valued guests</p>
                            </div>
                        </div>

                        {/* Feature 5: Family Section */ }
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden hover-scale transition-all duration-300"
                            data-aos="fade-up" data-aos-delay="500">
                            <div className="relative h-48 overflow-hidden">
                                <Image
                                    src="https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                                    alt="Family Section"
                                    width={ 600 }
                                    height={ 192 }
                                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-800 mb-3">Family Section</h3>
                                <p className="text-gray-600">Spacious areas designed for family comfort and privacy</p>
                            </div>
                        </div>

                        {/* Feature 6: Valet Parking */ }
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden hover-scale transition-all duration-300"
                            data-aos="fade-up" data-aos-delay="600">
                            <div className="relative h-48 overflow-hidden">
                                <Image
                                    src="https://images.unsplash.com/photo-1609619385002-f40f1df9b7eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                                    alt="Valet Parking"
                                    width={ 600 }
                                    height={ 192 }
                                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-800 mb-3">Valet Parking</h3>
                                <p className="text-gray-600">Complimentary valet service for your convenience</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Locations */ }
            <section className="py-20 bg-gradient-to-b from-white to-amber-50" id="locations">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
                        <h2 className="text-4xl font-bold text-gray-800 mb-4">Our <span style={ { color: "#FFA500" } }>Locations</span></h2>
                        <div className="h-1 w-24 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto mb-8 rounded-full"></div>
                        <p className="text-gray-600 text-lg">Visit us at one of our convenient locations to experience the authentic taste of our cuisine</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Location 1 */ }
                        <div className={ `bg-white rounded-xl shadow-lg overflow-hidden hover:-translate-y-2 transition-all duration-300` }
                            data-aos="fade-up" data-aos-delay="100">
                            <div className="relative">
                                <Image
                                    src="https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1285&q=80"
                                    alt="Main Branch"
                                    width={ 600 }
                                    height={ 256 }
                                    className="w-full h-64 object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                                <div className="absolute bottom-4 left-4 right-4">
                                    <span className="bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">FLAGSHIP</span>
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-800 mb-2">Main Branch</h3>
                                <p className="text-gray-600 mb-4">Our flagship restaurant offering the complete dining experience with all our specialties.</p>
                                <div className="space-y-3 text-gray-700">
                                    <p className="flex items-start border-l-2 border-amber-500 pl-3">
                                        <span className="font-medium mr-2">Address:</span>
                                        <span>123 Dining Street, City Center</span>
                                    </p>
                                    <p className="flex items-start border-l-2 border-amber-500 pl-3">
                                        <span className="font-medium mr-2">Contact:</span>
                                        <span>+1 (123) 456-7890</span>
                                    </p>
                                    <p className="flex items-start border-l-2 border-amber-500 pl-3">
                                        <span className="font-medium mr-2">Hours:</span>
                                        <span>Daily, 11:00 AM - 11:00 PM</span>
                                    </p>
                                </div>
                                <div className="mt-6">
                                    <a href="#" className="inline-block text-orange-500 font-medium hover:text-orange-600 transition-colors">
                                        Get Directions <span className="ml-1">→</span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Location 2 */ }
                        <div className={ `bg-white rounded-xl shadow-lg overflow-hidden hover:-translate-y-2 transition-all duration-300` }
                            data-aos="fade-up" data-aos-delay="200">
                            <div className="relative">
                                <Image
                                    src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                                    alt="Eastern District Branch"
                                    width={ 600 }
                                    height={ 256 }
                                    className="w-full h-64 object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-800 mb-2">Eastern District</h3>
                                <p className="text-gray-600 mb-4">Conveniently located in the eastern part of the city, featuring our complete menu.</p>
                                <div className="space-y-3 text-gray-700">
                                    <p className="flex items-start border-l-2 border-amber-500 pl-3">
                                        <span className="font-medium mr-2">Address:</span>
                                        <span>456 Eastern Boulevard, East Quarter</span>
                                    </p>
                                    <p className="flex items-start border-l-2 border-amber-500 pl-3">
                                        <span className="font-medium mr-2">Contact:</span>
                                        <span>+1 (123) 456-7891</span>
                                    </p>
                                    <p className="flex items-start border-l-2 border-amber-500 pl-3">
                                        <span className="font-medium mr-2">Hours:</span>
                                        <span>Daily, 11:00 AM - 11:00 PM</span>
                                    </p>
                                </div>
                                <div className="mt-6">
                                    <a href="#" className="inline-block text-orange-500 font-medium hover:text-orange-600 transition-colors">
                                        Get Directions <span className="ml-1">→</span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Location 3 */ }
                        <div className={ `bg-white rounded-xl shadow-lg overflow-hidden hover:-translate-y-2 transition-all duration-300` }
                            data-aos="fade-up" data-aos-delay="300">
                            <div className="relative">
                                <Image
                                    src="https://images.unsplash.com/photo-1544148103-0773bf10d330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                                    alt="Northern Heights Branch"
                                    width={ 600 }
                                    height={ 256 }
                                    className="w-full h-64 object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                                <div className="absolute bottom-4 left-4 right-4">
                                    <span className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">NEW</span>
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-800 mb-2">Northern Heights</h3>
                                <p className="text-gray-600 mb-4">Our newest location in the northern district, with expanded family dining areas.</p>
                                <div className="space-y-3 text-gray-700">
                                    <p className="flex items-start border-l-2 border-amber-500 pl-3">
                                        <span className="font-medium mr-2">Address:</span>
                                        <span>789 North Street, Heights Mall</span>
                                    </p>
                                    <p className="flex items-start border-l-2 border-amber-500 pl-3">
                                        <span className="font-medium mr-2">Contact:</span>
                                        <span>+1 (123) 456-7892</span>
                                    </p>
                                    <p className="flex items-start border-l-2 border-amber-500 pl-3">
                                        <span className="font-medium mr-2">Hours:</span>
                                        <span>Daily, 11:00 AM - 11:00 PM</span>
                                    </p>
                                </div>
                                <div className="mt-6">
                                    <a href="#" className="inline-block text-orange-500 font-medium hover:text-orange-600 transition-colors">
                                        Get Directions <span className="ml-1">→</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials */ }
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
                        <h2 className="text-4xl font-bold text-gray-800 mb-4">What Our <span style={ { color: "#FFA500" } }>Customers Say</span></h2>
                        <div className="h-1 w-24 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto mb-8 rounded-full"></div>
                        <p className="text-gray-600 text-lg">Hear from our satisfied guests about their dining experiences</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Testimonial Card 1 */ }
                        <div className="bg-white border border-gray-100 rounded-xl shadow-md p-8 hover:shadow-lg transition-shadow"
                            data-aos="fade-up" data-aos-delay="100">
                            <div className="flex mb-4">
                                <div className="flex mr-2">
                                    { [...Array(5)].map((_, i) => (
                                        <svg key={ i } className="w-5 h-5 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                        </svg>
                                    )) }
                                </div>
                                <span className="text-gray-600 text-sm font-medium">5.0/5.0</span>
                            </div>
                            <blockquote className="mb-6">
                                <p className="text-gray-700 italic">
                                    "The biryani at Ramadan Restaurant is simply outstanding! The flavors are authentic and remind me of the best food I've had in Pakistan. The service is excellent too."
                                </p>
                            </blockquote>
                            <div className="flex items-center border-t border-gray-100 pt-4">
                                <div className="w-10 h-10 flex-shrink-0 mr-3 bg-amber-100 text-amber-700 rounded-full flex items-center justify-center font-semibold">
                                    AS
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-800">Ahmed S.</p>
                                    <p className="text-gray-500 text-sm">Regular Customer</p>
                                </div>
                            </div>
                        </div>

                        {/* Testimonial Card 2 */ }
                        <div className="bg-white border border-gray-100 rounded-xl shadow-md p-8 hover:shadow-lg transition-shadow"
                            data-aos="fade-up" data-aos-delay="200">
                            <div className="flex mb-4">
                                <div className="flex mr-2">
                                    { [...Array(5)].map((_, i) => (
                                        <svg key={ i } className="w-5 h-5 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                        </svg>
                                    )) }
                                </div>
                                <span className="text-gray-600 text-sm font-medium">5.0/5.0</span>
                            </div>
                            <blockquote className="mb-6">
                                <p className="text-gray-700 italic">
                                    "The Turkish dishes are as authentic as they come! The Iskender kebab transported me straight to Istanbul. Perfect ambiance for family dining and celebrations."
                                </p>
                            </blockquote>
                            <div className="flex items-center border-t border-gray-100 pt-4">
                                <div className="w-10 h-10 flex-shrink-0 mr-3 bg-orange-100 text-orange-700 rounded-full flex items-center justify-center font-semibold">
                                    FM
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-800">Fatima M.</p>
                                    <p className="text-gray-500 text-sm">Family Diner</p>
                                </div>
                            </div>
                        </div>

                        {/* Testimonial Card 3 */ }
                        <div className="bg-white border border-gray-100 rounded-xl shadow-md p-8 hover:shadow-lg transition-shadow"
                            data-aos="fade-up" data-aos-delay="300">
                            <div className="flex mb-4">
                                <div className="flex mr-2">
                                    { [...Array(4)].map((_, i) => (
                                        <svg key={ i } className="w-5 h-5 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                        </svg>
                                    )) }
                                    <svg className="w-5 h-5 text-amber-300" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                    </svg>
                                </div>
                                <span className="text-gray-600 text-sm font-medium">4.5/5.0</span>
                            </div>
                            <blockquote className="mb-6">
                                <p className="text-gray-700 italic">
                                    "We ordered catering for our corporate event, and Ramadan Restaurant delivered beyond expectations. The mandi was a huge hit, and the service was professional and timely."
                                </p>
                            </blockquote>
                            <div className="flex items-center border-t border-gray-100 pt-4">
                                <div className="w-10 h-10 flex-shrink-0 mr-3 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center font-semibold">
                                    OJ
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-800">Omar J.</p>
                                    <p className="text-gray-500 text-sm">Business Manager</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */ }
            <section className="py-20 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-orange-700"></div>
                <div className="absolute inset-0 opacity-20"
                    style={ {
                        backgroundImage: "url('https://images.unsplash.com/photo-1558030006-450675393462?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80')",
                        backgroundPosition: "center",
                        backgroundSize: "cover"
                    } }>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-md rounded-2xl p-12 shadow-xl border border-white/20">
                        <div className="text-center">
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-md">Experience Authentic Cuisine Today</h2>
                            <div className="h-1 w-32 bg-white mx-auto mb-8 rounded-full opacity-70"></div>
                            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-10 leading-relaxed">
                                Visit any of our Ramadan Restaurant locations to enjoy a memorable dining experience or
                                place an order for delivery to your doorstep.
                            </p>
                            <div className="flex flex-wrap justify-center gap-6">
                                <a href="#"
                                    className="inline-block bg-white text-orange-700 hover:bg-orange-50 px-8 py-4 rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-lg">
                                    Make a Reservation
                                </a>
                                <a href="#"
                                    className="inline-block bg-transparent border-2 border-white text-white hover:bg-white hover:text-orange-700 px-8 py-4 rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-lg">
                                    Order Online
                                </a>
                            </div>
                            <div className="mt-10 flex justify-center space-x-6">
                                <a href="#" className="text-white/80 hover:text-white transition-colors">
                                    <span className="sr-only">Instagram</span>
                                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path fillRule="evenodd"
                                            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                                            clipRule="evenodd" />
                                    </svg>
                                </a>
                                <a href="#" className="text-white/80 hover:text-white transition-colors">
                                    <span className="sr-only">Twitter</span>
                                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path
                                            d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                                    </svg>
                                </a>
                                <a href="#" className="text-white/80 hover:text-white transition-colors">
                                    <span className="sr-only">Facebook</span>
                                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path fillRule="evenodd"
                                            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                                            clipRule="evenodd" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styles from './styles.module.css';

// FontAwesome Configuration
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false; // Tell Font Awesome to skip adding CSS automatically since it's being imported above

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faTools, faBolt, faTint, faBuilding,
    faFileContract, faClipboardCheck, faHotel,
    faHospital, faIndustry, faGraduationCap,
    faHome, faShoppingCart, faWarehouse,
    faUserTie, faCog, faCheckCircle, faArrowRight,
    faFileAlt, faPhone
} from '@fortawesome/free-solid-svg-icons';

export default function ASAPPage() {
    const t = useTranslations('subsidiaries.asap');

    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true
        });
    }, []);

    // Parallax effect
    useEffect(() => {
        const handleScroll = () => {
            const parallaxBg = document.getElementById('parallax-bg');
            if (parallaxBg) {
                const scrollPosition = window.pageYOffset;
                parallaxBg.style.transform = `translateY(${scrollPosition * 0.4}px)`;
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const services = [
        {
            icon: faTools,
            title: t('service_mechanical.title'),
            description: t('service_mechanical.desc')
        },
        {
            icon: faBolt,
            title: t('service_electrical.title'),
            description: t('service_electrical.desc')
        },
        {
            icon: faTint,
            title: t('service_plumbing.title'),
            description: t('service_plumbing.desc')
        },
        {
            icon: faBuilding,
            title: t('service_facility.title'),
            description: t('service_facility.desc')
        },
        {
            icon: faFileContract,
            title: t('service_contracts.title'),
            description: t('service_contracts.desc')
        },
        {
            icon: faClipboardCheck,
            title: t('service_emergency.title'),
            description: t('service_emergency.desc')
        }
    ];

    const industries = [
        {
            icon: faHotel,
            title: t('industry_hospitality.title'),
            description: t('industry_hospitality.desc')
        },
        {
            icon: faHospital,
            title: t('industry_healthcare.title'),
            description: t('industry_healthcare.desc')
        },
        {
            icon: faBuilding,
            title: t('industry_commercial.title'),
            description: t('industry_commercial.desc')
        },
        {
            icon: faIndustry,
            title: t('industry_industrial.title'),
            description: t('industry_industrial.desc')
        },
        {
            icon: faGraduationCap,
            title: t('industry_education.title'),
            description: t('industry_education.desc')
        },
        {
            icon: faHome,
            title: t('industry_residential.title'),
            description: t('industry_residential.desc')
        },
        {
            icon: faShoppingCart,
            title: t('industry_retail.title'),
            description: t('industry_retail.desc')
        },
        {
            icon: faWarehouse,
            title: t('industry_logistics.title'),
            description: t('industry_logistics.desc')
        }
    ];

    const advantages = [
        {
            icon: faBolt,
            title: t('advantage_response.title'),
            description: t('advantage_response.desc'),
            features: [
                t('advantage_response.feature1'),
                t('advantage_response.feature2'),
                t('advantage_response.feature3')
            ]
        },
        {
            icon: faUserTie,
            title: t('advantage_technicians.title'),
            description: t('advantage_technicians.desc'),
            features: [
                t('advantage_technicians.feature1'),
                t('advantage_technicians.feature2'),
                t('advantage_technicians.feature3')
            ]
        },
        {
            icon: faCog,
            title: t('advantage_solutions.title'),
            description: t('advantage_solutions.desc'),
            features: [
                t('advantage_solutions.feature1'),
                t('advantage_solutions.feature2'),
                t('advantage_solutions.feature3')
            ]
        }
    ];

    const stats = [
        { value: 15, label: t('stats.years') },
        { value: 500, label: t('stats.projects') },
        { value: 50, label: t('stats.team') },
        { value: 98, label: t('stats.satisfaction') }
    ];

    return (
        <main className={ styles.container }>
            {/* Banner with Parallax Effect */ }
            <section className="relative bg-blue-900 text-white py-32 overflow-hidden">
                <div className={ `absolute inset-0 ${styles.gradientOverlay}` }></div>
                <div
                    id="parallax-bg"
                    className={ `absolute inset-0 bg-[url('/images/ASAP-Company.jpg')] bg-cover bg-center mix-blend-overlay ${styles.parallaxBg}` }
                ></div>
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div data-aos="fade-up" data-aos-duration="1000">
                        <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
                            { t('title') }
                        </h1>
                        <div className="h-1 w-32 bg-blue-400 mb-6"></div>
                        <p className="text-xl max-w-3xl mb-8 text-blue-50">
                            { t('subtitle') }
                        </p>
                        <a
                            href="#services"
                            className={ `${styles.btnModern} bg-white text-blue-800 hover:bg-blue-50 px-8 py-3 rounded-md font-medium inline-block` }
                        >
                            { t('explore_services') }
                            <FontAwesomeIcon icon={ faArrowRight } className="ml-2 transition-all group-hover:ml-3" />
                        </a>
                    </div>
                </div>

                {/* Animated wave */ }
                <div className="absolute bottom-0 left-0 w-full overflow-hidden">
                    <svg className="relative block w-full h-16 text-white" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path
                            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V100C0,67,57.55,56.48,121.39,56.44Z"
                            fill="currentColor"
                        ></path>
                    </svg>
                </div>
            </section>

            {/* Company Overview */ }
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row items-center gap-12">
                        <div className="lg:w-1/2 md:w-3/4 mx-auto max-w-md" data-aos="fade-right" data-aos-duration="1000">
                            <div className="relative">
                                <Image
                                    src="/images/ASAP-Comapny.jpg"
                                    alt={ t('title') }
                                    width={ 600 }
                                    height={ 400 }
                                    className="rounded-lg shadow-xl w-full h-auto relative z-10 transform transition-all duration-700 hover:scale-105 object-cover object-center"
                                    style={ { maxHeight: '350px' } }
                                />
                                <div className="absolute -bottom-5 -right-5 w-64 h-64 bg-blue-100 rounded-lg hidden lg:block"></div>
                                <div className="absolute -top-5 -left-5 w-32 h-32 bg-blue-50 rounded-lg hidden lg:block"></div>
                            </div>
                        </div>
                        <div className="lg:w-1/2" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200">
                            <div className="lg:pl-8">
                                <h2 className="text-3xl font-bold text-gray-800 mb-6 relative">
                                    { t('about_title') }
                                    <span className="absolute bottom-0 left-0 w-16 h-1 bg-blue-600"></span>
                                </h2>
                                <p className="text-gray-600 mb-4 text-lg">
                                    { t('about_desc') }
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */ }
            <section id="services" className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16" data-aos="fade-up">
                        <span className="text-blue-600 font-semibold uppercase tracking-wider">{ t('what_we_offer') }</span>
                        <h2 className="text-4xl font-bold text-gray-800 mt-2 mb-4">{ t('services_title') }</h2>
                        <div className="h-1 w-24 bg-blue-600 mx-auto"></div>
                        <p className="max-w-2xl mx-auto mt-6 text-gray-600">
                            { t('services_subtitle') }
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        { services.map((service, index) => (
                            <div
                                key={ index }
                                className={ `${styles.serviceCard} bg-white rounded-lg shadow-md overflow-hidden` }
                                data-aos="fade-up"
                                data-aos-delay={ 100 * (index + 1) }
                            >
                                <div className="h-48 bg-gradient-to-r from-blue-800 to-blue-600 text-white flex items-center justify-center overflow-hidden">
                                    <FontAwesomeIcon icon={ service.icon } className={ `text-6xl ${styles.cardIcon}` } />
                                </div>
                                <div className="p-8">
                                    <h3 className="text-xl font-bold text-gray-800 mb-3">{ service.title }</h3>
                                    <div className="w-12 h-1 bg-blue-600 mb-4"></div>
                                    <p className="text-gray-600">{ service.description }</p>
                                </div>
                            </div>
                        )) }
                    </div>
                </div>
            </section>

            {/* Industries Section */ }
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16" data-aos="fade-up">
                        <span className="text-blue-600 font-semibold uppercase tracking-wider">{ t('our_expertise') }</span>
                        <h2 className="text-4xl font-bold text-gray-800 mt-2 mb-4">{ t('industries_heading') }</h2>
                        <div className="h-1 w-24 bg-blue-600 mx-auto"></div>
                        <p className="max-w-2xl mx-auto mt-6 text-gray-600">
                            { t('industries_desc') }
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        { industries.map((industry, index) => (
                            <div
                                key={ index }
                                className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 text-center transition-all hover:shadow-md hover:-translate-y-1"
                                data-aos="zoom-in"
                                data-aos-delay={ 100 * (index + 1) }
                            >
                                <div className="inline-flex items-center justify-center w-16 h-16 mb-6 bg-blue-100 text-blue-800 rounded-full">
                                    <FontAwesomeIcon icon={ industry.icon } className="text-2xl" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-2">{ industry.title }</h3>
                                <p className="text-gray-600">{ industry.description }</p>
                            </div>
                        )) }
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */ }
            <section className="py-20 bg-gray-50 relative overflow-hidden">
                {/* Background Pattern */ }
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100 rounded-full opacity-50 transform translate-x-1/4 -translate-y-1/4"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-100 rounded-full opacity-50 transform -translate-x-1/4 translate-y-1/4"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center mb-16" data-aos="fade-up">
                        <span className="text-blue-600 font-semibold uppercase tracking-wider">{ t('our_advantages') }</span>
                        <h2 className="text-4xl font-bold text-gray-800 mt-2 mb-4">{ t('why_choose_heading') }</h2>
                        <div className="h-1 w-24 bg-blue-600 mx-auto"></div>
                        <p className="max-w-2xl mx-auto mt-6 text-gray-600">
                            { t('why_choose_desc') }
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        { advantages.map((advantage, index) => (
                            <div
                                key={ index }
                                className="bg-white p-8 rounded-lg shadow-md transition-all hover:shadow-xl hover:-translate-y-1"
                                data-aos="fade-up"
                                data-aos-delay={ 100 * (index + 1) }
                            >
                                <div className="flex items-center mb-6">
                                    <div className="bg-gradient-to-r from-blue-800 to-blue-600 text-white rounded-full p-4 mr-4">
                                        <FontAwesomeIcon icon={ advantage.icon } className="text-xl" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-800">{ advantage.title }</h3>
                                </div>
                                <p className="text-gray-600">{ advantage.description }</p>
                                <ul className="mt-4 space-y-2">
                                    { advantage.features.map((feature, idx) => (
                                        <li key={ idx } className="flex items-start">
                                            <FontAwesomeIcon icon={ faCheckCircle } className="text-blue-600 mt-1 mr-2" />
                                            <span className="text-gray-700">{ feature }</span>
                                        </li>
                                    )) }
                                </ul>
                            </div>
                        )) }
                    </div>

                    {/* Stats */ }
                    <div className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-8 text-center" data-aos="fade-up" data-aos-delay="400">
                        { stats.map((stat, index) => (
                            <div key={ index } className="p-6 bg-white rounded-lg shadow-md">
                                <div className="text-4xl font-bold text-blue-600 mb-2">{ stat.value }</div>
                                <p className="text-gray-700 font-medium">{ stat.label }</p>
                            </div>
                        )) }
                    </div>
                </div>
            </section>

            {/* CTA Section */ }
            <section className={ `py-20 ${styles.ctaBackground} relative overflow-hidden` }>
                {/* Background Elements */ }
                <div className={ styles.ctaPattern }></div>
                <div className={ styles.ctaShapes }>
                    <div className={ styles.ctaShape }></div>
                    <div className={ styles.ctaShape }></div>
                    <div className={ styles.ctaShape }></div>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
                        <h2 className="text-4xl font-bold mb-6">{ t('cta_heading') }</h2>
                        <div className="h-1 w-24 bg-white mx-auto mb-8 opacity-80"></div>
                        <p className="text-xl max-w-3xl mx-auto mb-10 opacity-90">
                            { t('cta_desc') }
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/contact"
                                className={ `${styles.ctaButton} inline-block bg-white text-blue-800 hover:bg-blue-50 px-8 py-4 rounded-md font-medium transition-all duration-300 transform hover:scale-105` }
                            >
                                <FontAwesomeIcon icon={ faFileAlt } className="mr-2" /> { t('request_quote') }
                            </Link>
                            <a
                                href="tel:+123456789"
                                className={ `${styles.ctaButton} inline-block bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-800 px-8 py-4 rounded-md font-medium transition-all duration-300 transform hover:scale-105` }
                            >
                                <FontAwesomeIcon icon={ faPhone } className="mr-2" /> { t('call_now') }
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

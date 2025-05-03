"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { motion } from "framer-motion";
import { Link } from "@/i18n/routing";

export default function PeakTimeLogistics() {
    const t = useTranslations("peak-time-logistics");

    return (
        <main className="min-h-screen overflow-hidden">
            {/* Hero Section */ }
            <section className="relative py-32 bg-blue-900 text-white">
                {/* Background with gradient overlay */ }
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://images.unsplash.com/photo-1580674285054-bed31e145f59?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                        alt="Logistics Background"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-l from-[#1447e630] to-blue-950"></div>
                </div>

                {/* Content */ }
                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        initial={ { opacity: 0, y: 40 } }
                        animate={ { opacity: 1, y: 0 } }
                        transition={ { duration: 0.8 } }
                        className="max-w-4xl"
                    >
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                            { t("hero_title") }
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-200 max-w-3xl">
                            { t("hero_subtitle") }
                        </p>
                    </motion.div>
                </div>

                {/* Decorative Elements */ }
                <div className="absolute right-0 top-20 w-96 h-96 rounded-full bg-blue-500/10 blur-3xl"></div>
                <div className="absolute left-0 bottom-20 w-64 h-64 rounded-full bg-blue-300/10 blur-3xl"></div>
            </section>

            {/* Company Overview */ }
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row items-center gap-12">
                        <motion.div
                            initial={ { opacity: 0, x: -40 } }
                            whileInView={ { opacity: 1, x: 0 } }
                            transition={ { duration: 0.8 } }
                            viewport={ { once: true } }
                            className="lg:w-1/2 relative"
                        >
                            <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-100 rounded-full"></div>
                            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-50 rounded-full"></div>
                            <div className="relative rounded-xl overflow-hidden shadow-2xl">
                                <Image
                                    src="https://images.unsplash.com/photo-1615461066841-6116e61058f4?q=80&w=2070&auto=format&fit=crop"
                                    alt="Peak Time Logistics"
                                    width={ 600 }
                                    height={ 400 }
                                    className="w-full object-cover h-[500px]"
                                    priority
                                />
                            </div>
                        </motion.div>

                        <motion.div
                            initial={ { opacity: 0, x: 40 } }
                            whileInView={ { opacity: 1, x: 0 } }
                            transition={ { duration: 0.8 } }
                            viewport={ { once: true } }
                            className="lg:w-1/2"
                        >
                            <h2 className="text-3xl font-bold text-gray-800 mb-6">{ t("about_title") }</h2>
                            <p className="text-gray-600 mb-4">
                                { t("about_desc1") }
                            </p>
                            <p className="text-gray-600 mb-6">
                                { t("about_desc2") }
                            </p>
                            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 shadow-sm">
                                <h3 className="text-xl font-bold text-gray-800 mb-4">{ t("core_services") }</h3>
                                <ul className="space-y-3">
                                    <li className="flex items-start">
                                        <i className="fas fa-check-circle text-blue-600 mt-1 mr-2"></i>
                                        <span className="text-gray-700">{ t("service1") }</span>
                                    </li>
                                    <li className="flex items-start">
                                        <i className="fas fa-check-circle text-blue-600 mt-1 mr-2"></i>
                                        <span className="text-gray-700">{ t("service2") }</span>
                                    </li>
                                    <li className="flex items-start">
                                        <i className="fas fa-check-circle text-blue-600 mt-1 mr-2"></i>
                                        <span className="text-gray-700">{ t("service3") }</span>
                                    </li>
                                    <li className="flex items-start">
                                        <i className="fas fa-check-circle text-blue-600 mt-1 mr-2"></i>
                                        <span className="text-gray-700">{ t("service4") }</span>
                                    </li>
                                    <li className="flex items-start">
                                        <i className="fas fa-check-circle text-blue-600 mt-1 mr-2"></i>
                                        <span className="text-gray-700">{ t("service5") }</span>
                                    </li>
                                </ul>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Services */ }
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={ { opacity: 0, y: 20 } }
                        whileInView={ { opacity: 1, y: 0 } }
                        transition={ { duration: 0.6 } }
                        viewport={ { once: true } }
                        className="text-center max-w-3xl mx-auto mb-16"
                    >
                        <div className="inline-block px-3 py-1 bg-blue-100 text-blue-600 text-sm font-medium rounded-full mb-4">
                            { t("services_title") }
                        </div>
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">{ t("services_subtitle") }</h2>
                        <p className="text-gray-600 text-lg">
                            { t("services_desc") }
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Service 1 */ }
                        <ServiceCard
                            icon={ <i className="fas fa-motorcycle text-4xl"></i> }
                            title={ t("food_delivery_title") }
                            description={ t("food_delivery_desc") }
                            delay={ 0.1 }
                        />

                        {/* Service 2 */ }
                        <ServiceCard
                            icon={ <i className="fas fa-headset text-4xl"></i> }
                            title={ t("customer_service_title") }
                            description={ t("customer_service_desc") }
                            delay={ 0.2 }
                        />

                        {/* Service 3 */ }
                        <ServiceCard
                            icon={ <i className="fas fa-boxes text-4xl"></i> }
                            title={ t("general_logistics_title") }
                            description={ t("general_logistics_desc") }
                            delay={ 0.3 }
                        />

                        {/* Service 4 */ }
                        <ServiceCard
                            icon={ <i className="fas fa-route text-4xl"></i> }
                            title={ t("route_optimization_title") }
                            description={ t("route_optimization_desc") }
                            delay={ 0.4 }
                        />

                        {/* Service 5 */ }
                        <ServiceCard
                            icon={ <i className="fas fa-chart-line text-4xl"></i> }
                            title={ t("analytics_title") }
                            description={ t("analytics_desc") }
                            delay={ 0.5 }
                        />

                        {/* Service 6 */ }
                        <ServiceCard
                            icon={ <i className="fas fa-users-cog text-4xl"></i> }
                            title={ t("staff_management_title") }
                            description={ t("staff_management_desc") }
                            delay={ 0.6 }
                        />
                    </div>
                </div>
            </section>

            {/* Partnership Section */ }
            <section className="py-20 bg-gradient-to-r from-gray-100 to-white">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={ { opacity: 0, y: 20 } }
                        whileInView={ { opacity: 1, y: 0 } }
                        transition={ { duration: 0.6 } }
                        viewport={ { once: true } }
                        className="text-center max-w-3xl mx-auto mb-16"
                    >
                        <div className="inline-block px-3 py-1 bg-blue-100 text-blue-600 text-sm font-medium rounded-full mb-4">
                            { t("partnership_tag") }
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                            { t("partnership_title") }
                        </h2>
                        <p className="text-gray-600 text-lg">
                            { t("partnership_desc") }
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={ { opacity: 0, x: -30 } }
                            whileInView={ { opacity: 1, x: 0 } }
                            transition={ { duration: 0.6 } }
                            viewport={ { once: true } }
                            className="relative"
                        >
                            <div className="relative shadow-2xl rounded-2xl overflow-hidden h-[500px]">
                                <Image
                                    src="https://images.unsplash.com/photo-1546195643-70f48f9c5b87?q=80&w=2070&auto=format&fit=crop"
                                    alt="Food Delivery Service"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                                <div className="absolute bottom-0 left-0 right-0 p-8 flex justify-between items-end">
                                    <div>
                                        <h3 className="text-white text-2xl font-bold mb-2">
                                            { t("partnership_benefits_title") }
                                        </h3>
                                        <p className="text-white/80 max-w-md">
                                            { t("partnership_benefits_desc") }
                                        </p>
                                    </div>
                                    <div className="bg-white p-4 rounded-xl shadow-lg">
                                        <Image
                                            src="https://cdn.hungerstation.com/hungerstation.com/img/logo-white.png"
                                            alt="Hunger Station Logo"
                                            width={ 120 }
                                            height={ 36 }
                                            className="bg-[#652d91] p-2 rounded"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Decorative elements */ }
                            <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-100 rounded-full -z-10"></div>
                            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-50 rounded-full -z-10"></div>
                        </motion.div>

                        <motion.div
                            initial={ { opacity: 0, x: 30 } }
                            whileInView={ { opacity: 1, x: 0 } }
                            transition={ { duration: 0.6 } }
                            viewport={ { once: true } }
                        >
                            <div className="space-y-6">
                                <PartnershipFeature
                                    image="https://images.unsplash.com/photo-1594835898716-d2dfff5e70e8?q=80&w=2070&auto=format&fit=crop"
                                    title={ t("feature1_title") }
                                    description={ t("feature1_desc") }
                                    index={ 1 }
                                />

                                <PartnershipFeature
                                    image="https://images.unsplash.com/photo-1478098711619-5ab0b478d6e6?q=80&w=2070&auto=format&fit=crop"
                                    title={ t("feature2_title") }
                                    description={ t("feature2_desc") }
                                    index={ 2 }
                                />

                                <PartnershipFeature
                                    image="https://images.unsplash.com/photo-1512075628391-0a39aac66be4?q=80&w=2074&auto=format&fit=crop"
                                    title={ t("feature3_title") }
                                    description={ t("feature3_desc") }
                                    index={ 3 }
                                />

                                <PartnershipFeature
                                    image="https://images.unsplash.com/photo-1606761568499-6d2451b23c66?q=80&w=2074&auto=format&fit=crop"
                                    title={ t("feature4_title") }
                                    description={ t("feature4_desc") }
                                    index={ 4 }
                                />
                            </div>

                            <Link
                                href="/contact"
                                className="inline-flex items-center mt-8 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg"
                            >
                                <i className="fas fa-handshake mr-2"></i>
                                { t("cta_button") }
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Customer Service Excellence */ }
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={ { opacity: 0, y: 20 } }
                        whileInView={ { opacity: 1, y: 0 } }
                        transition={ { duration: 0.6 } }
                        viewport={ { once: true } }
                        className="text-center max-w-3xl mx-auto mb-16"
                    >
                        <div className="inline-block px-3 py-1 bg-blue-100 text-blue-600 text-sm font-medium rounded-full mb-4">
                            { t("customer_service_tag") }
                        </div>
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">{ t("customer_service_excellence_title") }</h2>
                        <p className="text-gray-600 text-lg">
                            { t("customer_service_excellence_desc") }
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <motion.div
                            initial={ { opacity: 0, y: 20 } }
                            whileInView={ { opacity: 1, y: 0 } }
                            transition={ { duration: 0.6, delay: 0.1 } }
                            viewport={ { once: true } }
                            className="bg-white p-8 rounded-lg shadow-md"
                        >
                            <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-6 mx-auto">
                                <i className="fas fa-clock text-2xl"></i>
                            </div>
                            <h3 className="text-xl font-bold text-center mb-4">{ t("support_247_title") }</h3>
                            <p className="text-gray-600 text-center">
                                { t("support_247_desc") }
                            </p>
                        </motion.div>

                        <motion.div
                            initial={ { opacity: 0, y: 20 } }
                            whileInView={ { opacity: 1, y: 0 } }
                            transition={ { duration: 0.6, delay: 0.2 } }
                            viewport={ { once: true } }
                            className="bg-white p-8 rounded-lg shadow-md"
                        >
                            <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-6 mx-auto">
                                <i className="fas fa-user-tie text-2xl"></i>
                            </div>
                            <h3 className="text-xl font-bold text-center mb-4">{ t("trained_professionals_title") }</h3>
                            <p className="text-gray-600 text-center">
                                { t("trained_professionals_desc") }
                            </p>
                        </motion.div>

                        <motion.div
                            initial={ { opacity: 0, y: 20 } }
                            whileInView={ { opacity: 1, y: 0 } }
                            transition={ { duration: 0.6, delay: 0.3 } }
                            viewport={ { once: true } }
                            className="bg-white p-8 rounded-lg shadow-md"
                        >
                            <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-6 mx-auto">
                                <i className="fas fa-globe text-2xl"></i>
                            </div>
                            <h3 className="text-xl font-bold text-center mb-4">{ t("multilingual_support_title") }</h3>
                            <p className="text-gray-600 text-center">
                                { t("multilingual_support_desc") }
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Stats Section */ }
            <section className="py-20 bg-gray-900 text-white">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={ { opacity: 0, y: 20 } }
                        whileInView={ { opacity: 1, y: 0 } }
                        transition={ { duration: 0.6 } }
                        viewport={ { once: true } }
                        className="text-center max-w-3xl mx-auto mb-16"
                    >
                        <div className="inline-block px-3 py-1 bg-blue-100 text-blue-600 text-sm font-medium rounded-full mb-4">
                            { t("stats_tag") }
                        </div>
                        <h2 className="text-3xl font-bold text-white mb-4">{ t("stats_title") }</h2>
                        <p className="text-gray-300 text-lg">
                            { t("stats_desc") }
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <motion.div
                            initial={ { opacity: 0, scale: 0.8 } }
                            whileInView={ { opacity: 1, scale: 1 } }
                            transition={ { duration: 0.5, delay: 0.1 } }
                            viewport={ { once: true } }
                            className="bg-gray-800 p-8 rounded-lg text-center"
                        >
                            <div className="text-5xl font-bold text-blue-400 mb-2">5K+</div>
                            <div className="text-xl text-gray-300">{ t("stat1_title") }</div>
                        </motion.div>

                        <motion.div
                            initial={ { opacity: 0, scale: 0.8 } }
                            whileInView={ { opacity: 1, scale: 1 } }
                            transition={ { duration: 0.5, delay: 0.2 } }
                            viewport={ { once: true } }
                            className="bg-gray-800 p-8 rounded-lg text-center"
                        >
                            <div className="text-5xl font-bold text-blue-400 mb-2">98%</div>
                            <div className="text-xl text-gray-300">{ t("stat2_title") }</div>
                        </motion.div>

                        <motion.div
                            initial={ { opacity: 0, scale: 0.8 } }
                            whileInView={ { opacity: 1, scale: 1 } }
                            transition={ { duration: 0.5, delay: 0.3 } }
                            viewport={ { once: true } }
                            className="bg-gray-800 p-8 rounded-lg text-center"
                        >
                            <div className="text-5xl font-bold text-blue-400 mb-2">24/7</div>
                            <div className="text-xl text-gray-300">{ t("stat3_title") }</div>
                        </motion.div>

                        <motion.div
                            initial={ { opacity: 0, scale: 0.8 } }
                            whileInView={ { opacity: 1, scale: 1 } }
                            transition={ { duration: 0.5, delay: 0.4 } }
                            viewport={ { once: true } }
                            className="bg-gray-800 p-8 rounded-lg text-center"
                        >
                            <div className="text-5xl font-bold text-blue-400 mb-2">50+</div>
                            <div className="text-xl text-gray-300">{ t("stat4_title") }</div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Call to Action */ }
            <section className="py-20 bg-blue-600 text-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.div
                            initial={ { opacity: 0, y: 20 } }
                            whileInView={ { opacity: 1, y: 0 } }
                            transition={ { duration: 0.6 } }
                            viewport={ { once: true } }
                        >
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">{ t("cta_title") }</h2>
                            <p className="text-xl text-blue-100 mb-8">
                                { t("cta_desc") }
                            </p>
                            <Link
                                href="/contact"
                                className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl"
                            >
                                { t("cta_button") }
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>
        </main>
    );
}

// Service Card Component
function ServiceCard({ icon, title, description, delay }) {
    return (
        <motion.div
            initial={ { opacity: 0, y: 30 } }
            whileInView={ { opacity: 1, y: 0 } }
            transition={ { duration: 0.5, delay } }
            viewport={ { once: true } }
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300"
        >
            <div className="h-48 bg-blue-600 text-white flex items-center justify-center">
                <div className="text-center">
                    { icon }
                </div>
            </div>
            <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">{ title }</h3>
                <p className="text-gray-600">
                    { description }
                </p>
            </div>
        </motion.div>
    );
}

// New component for partnership features
function PartnershipFeature({ image, title, description, index }) {
    return (
        <motion.div
            initial={ { opacity: 0, y: 20 } }
            whileInView={ { opacity: 1, y: 0 } }
            transition={ { duration: 0.4, delay: index * 0.1 } }
            viewport={ { once: true } }
            className="flex gap-4 bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
        >
            <div className="flex-shrink-0 w-24 h-24 relative rounded-lg overflow-hidden">
                <Image
                    src={ image }
                    alt={ title }
                    fill
                    className="object-cover"
                />
            </div>
            <div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                    { title }
                </h3>
                <p className="text-gray-600">
                    { description }
                </p>
            </div>
        </motion.div>
    );
}



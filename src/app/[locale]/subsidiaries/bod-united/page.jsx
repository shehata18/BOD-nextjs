"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { motion } from "framer-motion";
import { Link } from "@/i18n/routing";
import ServiceCard from "./ServiceCard";

export default function BodUnitedPage() {
  const t = useTranslations("bod-united");

  return (
    <main className="min-h-screen overflow-hidden">
      {/* Hero Section - Modern Redesign */}
      <section className="relative h-screen flex items-center">
        {/* Background with gradient overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
            alt="Digital Technology Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-black/70"></div>
        </div>

        {/* Geometric shapes for modern look */}
        <div className="absolute right-0 top-20 w-96 h-96 rounded-full bg-blue-600/20 blur-3xl"></div>
        <div className="absolute right-1/3 bottom-20 w-64 h-64 rounded-full bg-purple-500/20 blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                {t("hero_title")}
              </span>{" "}
              {t("hero_subtitle")}
            </h1>

            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mb-10">
              {t("hero_description")}
            </p>

            <div className="flex flex-wrap gap-5">
              <a
                href="#services"
                className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                {t("hero_cta_services")}
              </a>
              <a
                href="#contact"
                className="px-8 py-4 bg-transparent border-2 border-white/30 hover:border-white hover:bg-white/10 text-white rounded-full font-medium transition-all duration-300"
              >
                {t("hero_cta_contact")}
              </a>
            </div>
          </motion.div>
        </div>

        {/* Scrolling indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white/80">
          <span className="text-sm mb-2">{t("hero_scroll_to_explore")}</span>
          <div className="w-1 h-10 rounded-full bg-white/30 relative overflow-hidden">
            <div className="w-full h-1/2 bg-white/80 absolute top-0 animate-scrollDown"></div>
          </div>
        </div>
      </section>

      {/* About Section - Minimal and Professional */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:w-1/2 relative"
            >
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-100 rounded-full"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-50 rounded-full"></div>
              <div className="relative rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="BOD United Modern Office"
                  width={600}
                  height={400}
                  className="w-full object-cover h-[500px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent"></div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <div className="mb-2">
                <span className="text-blue-600 text-sm font-bold uppercase tracking-wider">
                  {t("about_title")}
                </span>
              </div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                {t("about_subtitle")}
              </h2>

              <p className="text-gray-600 mb-6 text-lg">
                {t("about_paragraph1")}
              </p>

              <p className="text-gray-600 mb-8 text-lg">
                {t("about_paragraph2")}
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div className="p-6 bg-gray-50 rounded-xl border border-gray-100 hover:shadow-md transition-all duration-300">
                  <div className="text-blue-600 mb-3">
                    <i className="fas fa-rocket text-2xl"></i>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {t("vision_title")}
                  </h3>
                  <p className="text-gray-600">{t("vision_desc")}</p>
                </div>
                <div className="p-6 bg-gray-50 rounded-xl border border-gray-100 hover:shadow-md transition-all duration-300">
                  <div className="text-blue-600 mb-3">
                    <i className="fas fa-bullseye text-2xl"></i>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {t("mission_title")}
                  </h3>
                  <p className="text-gray-600">{t("mission_desc")}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section - Modern Cards */}
      <section id="services" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-3 py-1 bg-blue-100 text-blue-600 text-sm font-medium rounded-full mb-4">
              {t("services_title")}
            </div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-gray-800 mb-5"
            >
              {t("services_subtitle")}
            </motion.h2>
            <p className="text-gray-600 text-lg">{t("services_description")}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Card 1 - Modern Design */}
            <ServiceCard
              icon={<i className="fas fa-mobile-alt"></i>}
              title={t("service1_title")}
              description={t("service1_desc")}
              features={[
                t("service1_feature1"),
                t("service1_feature2"),
                t("service1_feature3"),
              ]}
              delay={0.1}
              imageUrl="https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            />

            {/* Service Card 2 - Modern Design */}
            <ServiceCard
              icon={<i className="fas fa-chart-line"></i>}
              title={t("service2_title")}
              description={t("service2_desc")}
              features={[
                t("service2_feature1"),
                t("service2_feature2"),
                t("service2_feature3"),
              ]}
              delay={0.2}
              imageUrl="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80"
            />

            {/* Service Card 3 - Modern Design */}
            <ServiceCard
              icon={<i className="fas fa-brain"></i>}
              title={t("service3_title")}
              description={t("service3_desc")}
              features={[
                t("service3_feature1"),
                t("service3_feature2"),
                t("service3_feature3"),
              ]}
              delay={0.3}
              imageUrl="https://images.unsplash.com/photo-1589254065878-42c9da997008?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            />

            {/* Service Card 4 - Modern Design */}
            <ServiceCard
              icon={<i className="fas fa-vr-cardboard"></i>}
              title={t("service4_title")}
              description={t("service4_desc")}
              features={[
                t("service4_feature1"),
                t("service4_feature2"),
                t("service4_feature3"),
              ]}
              delay={0.4}
              imageUrl="https://images.unsplash.com/photo-1617802690992-15d93263d3a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            />

            {/* Service Card 5 - Modern Design */}
            <ServiceCard
              icon={<i className="fas fa-glasses"></i>}
              title={t("service5_title")}
              description={t("service5_desc")}
              features={[
                t("service5_feature1"),
                t("service5_feature2"),
                t("service5_feature3"),
              ]}
              delay={0.5}
              imageUrl="https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            />

            {/* Service Card 6 - Modern Design */}
            <ServiceCard
              icon={<i className="fas fa-digital-tachograph"></i>}
              title={t("service6_title")}
              description={t("service6_desc")}
              features={[
                t("service6_feature1"),
                t("service6_feature2"),
                t("service6_feature3"),
              ]}
              delay={0.6}
              imageUrl="https://images.unsplash.com/photo-1581090700227-1e37b190418e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            />
          </div>
        </div>
      </section>

      {/* Case Studies Section - Modern Visual Design */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-3 py-1 bg-blue-100 text-blue-600 text-sm font-medium rounded-full mb-4">
              {t("portfolio_title")}
            </div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-gray-800 mb-5"
            >
              {t("case_studies_subtitle")}
            </motion.h2>
            <p className="text-gray-600 text-lg">
              {t("case_studies_description")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Case Study 1 - Modern Design */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="group rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-80">
                <Image
                  src="https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2048&q=80"
                  alt="E-commerce Platform Transformation"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute bottom-0 p-8">
                  <span className="inline-block px-3 py-1 text-sm font-medium text-blue-800 bg-blue-100 rounded-full mb-3">
                    {t("case_study1_category")}
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {t("case_study1_title")}
                  </h3>
                  <p className="text-gray-200 mb-4">
                    {t("case_study1_description")}
                  </p>
                </div>
              </div>
              <div className="p-6 bg-white">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                      <i className="fas fa-shopping-cart"></i>
                    </div>
                    <span className="text-gray-500">
                      {t("case_study1_industry")}
                    </span>
                  </div>
                  <a
                    href="#"
                    className="inline-flex items-center text-blue-600 font-medium group"
                  >
                    <span className="mr-2">{t("case_study1_cta")}</span>
                    <i className="fas arowIcon fa-arrow-right transition-transform duration-300 group-hover:translate-x-1"></i>
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Case Study 2 - Modern Design */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
              className="group rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-80">
                <Image
                  src="https://images.unsplash.com/photo-1626379953822-baec19c3accd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="AR Marketing Campaign"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute bottom-0 p-8">
                  <span className="inline-block px-3 py-1 text-sm font-medium text-green-800 bg-green-100 rounded-full mb-3">
                    {t("case_study2_category")}
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {t("case_study2_title")}
                  </h3>
                  <p className="text-gray-200 mb-4">
                    {t("case_study2_description")}
                  </p>
                </div>
              </div>
              <div className="p-6 bg-white">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                      <i className="fas fa-glasses"></i>
                    </div>
                    <span className="text-gray-500">
                      {t("case_study2_industry")}
                    </span>
                  </div>
                  <a
                    href="#"
                    className="inline-flex items-center text-blue-600 font-medium group"
                  >
                    <span className="mr-2">{t("case_study2_cta")}</span>
                    <i className="fas arowIcon fa-arrow-right transition-transform duration-300 group-hover:translate-x-1"></i>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="text-center mt-12">
            <a
              href="#"
              className="inline-flex items-center text-blue-600 font-medium py-2 px-4 border border-blue-200 hover:border-blue-600 rounded-full transition-all duration-300 group"
            >
              <span className="mr-2">{t("case_studies_view_all")}</span>
              <i className="fas arowIcon fa-arrow-right transition-transform duration-300 group-hover:translate-x-1"></i>
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section - Modern and Clean */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute left-1/4 top-0 bg-blue-400/10 w-64 h-64 rounded-full blur-3xl"></div>
          <div className="absolute right-1/3 bottom-0 bg-white/5 w-96 h-96 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-white mb-5"
            >
              {t("impact_title")}
            </motion.h2>
            <div className="h-1 w-20 bg-blue-400 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatItem
              number="15+"
              label={t("impact_years")}
              icon={<i className="fas fa-calendar-alt"></i>}
              delay={0.1}
            />
            <StatItem
              number="200+"
              label={t("impact_projects")}
              icon={<i className="fas fa-project-diagram"></i>}
              delay={0.2}
            />
            <StatItem
              number="50+"
              label={t("impact_team")}
              icon={<i className="fas fa-users"></i>}
              delay={0.3}
            />
            <StatItem
              number="98%"
              label={t("impact_satisfaction")}
              icon={<i className="fas fa-smile"></i>}
              delay={0.4}
            />
          </div>
        </div>
      </section>

      {/* CTA Section - Modernized Redesign */}
      <section
        id="contact"
        className="py-24 bg-gray-50 relative overflow-hidden"
      >
        {/* Background decorative elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-blue-50 to-gray-50 opacity-60"></div>
        <div className="absolute w-full h-full">
          <div className="absolute top-10 left-10 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float-slow"></div>
          <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto overflow-hidden rounded-2xl shadow-2xl bg-white">
            <div className="flex flex-col lg:flex-row">
              {/* Left image column */}
              <div className="lg:w-1/4 relative hidden lg:block">
                <div className="absolute inset-0">
                  <Image
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                    alt="Digital Transformation"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-transparent"></div>
                </div>
              </div>

              {/* Center content column */}
              <div className="lg:w-2/4 p-8 md:p-12 lg:p-16">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                    {t("cta_title")}
                  </h2>
                  <p className="text-lg text-gray-600 mb-8">
                    {t("cta_description")}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      href="/contact"
                      className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center"
                    >
                      <span>{t("cta_primary")}</span>
                      <i className="fas arowIcon px-2 fa-arrow-right transition-transform duration-300 group-hover:translate-x-1"></i>
                    </Link>
                    <a
                      href="#services"
                      className="px-8 py-4 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-lg font-medium transition-all duration-300 flex items-center justify-center"
                    >
                      <span>{t("cta_secondary")}</span>
                      <i className="fas arowIcon px-2 fa-arrow-right transition-transform duration-300 group-hover:translate-x-1"></i>
                    </a>
                  </div>
                </motion.div>
              </div>

              {/* Right image column */}
              <div className="lg:w-1/4 relative hidden lg:block">
                <div className="absolute inset-0">
                  <Image
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                    alt="Business Team"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-l from-blue-600/90 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured On Section - Connect with Home and Subsidiaries */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                {t("featured_company_title")}
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                {t("featured_company_description")}
              </p>
            </motion.div>
          </div>

          <div className="flex flex-wrap justify-center gap-10">
            <Link href="/" className="group">
              <div className="flex flex-col items-center transition-all duration-300 group-hover:transform group-hover:scale-105">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-3 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  <i className="fas fa-home text-xl"></i>
                </div>
                <span className="text-gray-800 font-medium group-hover:text-blue-600 transition-all duration-300">
                  {t("home_page_link")}
                </span>
              </div>
            </Link>

            <Link href="/subsidiaries" className="group">
              <div className="flex flex-col items-center transition-all duration-300 group-hover:transform group-hover:scale-105">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-3 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  <i className="fas fa-building text-xl"></i>
                </div>
                <span className="text-gray-800 font-medium group-hover:text-blue-600 transition-all duration-300">
                  {t("subsidiaries_page_link")}
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

// Modern Service Card Component


// Modern Stat Item Component
function StatItem({ number, label, icon, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="text-center relative"
    >
      <div className="p-6">
        <div className="inline-flex items-center justify-center h-16 w-16 text-2xl text-blue-100 mb-4">
          {icon}
        </div>
        <div className="text-4xl md:text-5xl font-bold text-white mb-2">
          {number}
        </div>
        <div className="text-blue-100">{label}</div>
      </div>
    </motion.div>
  );
}

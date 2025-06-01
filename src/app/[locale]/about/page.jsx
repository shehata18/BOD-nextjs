"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import AnimationObserver from "@/components/AnimationObserver";
import "@/app/styles/about.css";

export default function About() {
  const t = useTranslations("about");

  return (
    <>
      <AnimationObserver />

      {/* Page Banner */ }
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-black">
        {/* Background Image with Overlay */ }
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
            alt="Modern Office Interior"
            className="absolute inset-0 w-full h-full object-cover object-center opacity-70"
          />
          {/* Dark overlay */ }
          <div className="absolute inset-0 bg-black opacity-40"></div>
        </div>

        {/* Content */ }
        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-white">{ t("page_title") }</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed mb-12">
              { t("page_subtitle") }
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-6">
              <a
                href="#our-story"
                className="inline-flex items-center justify-center px-8 py-3 text-lg font-medium text-white bg-blue-600 rounded-full hover:bg-blue-700 transition duration-300"
              >
                { t("discover_journey") }
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                </svg>
              </a>
            </div>
            </div>
        </div>

        {/* Decorative Elements */ }
        <div className="absolute -left-32 top-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -right-32 bottom-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
      </section>

      {/* About Us Content */ }
      <section className="py-16 bg-white" id="our-story">
        <div className="container mx-auto px-4">
          {/* Our Story Section */ }
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="relative order-2 lg:order-1">
              {/* Main Image */ }
              <img
                src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80"
                alt="BOD Holdings Office Building"
                className="rounded-lg shadow-2xl w-full h-[600px] object-cover z-10 relative"
              />

              {/* Decorative Elements */ }
              <div className="absolute -bottom-6 -right-6 bg-blue-800 text-white py-4 px-6 rounded-lg shadow-lg z-20">
                <p className="text-lg font-medium">{ t("established") }</p>
              </div>
              <div className="absolute -top-6 -left-6 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
              <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="space-y-6">
                <div className="relative inline-block group">
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8">
                    { t("our_story_title") }
                  </h2>
                  {/* Animated underline */ }
                  <div className="absolute left-0 bottom-0 w-full">
                    <div className="h-1 bg-blue-600 transform origin-left transition-all duration-300 ease-out 
                                  group-hover:scale-x-110 group-hover:bg-blue-500"></div>
                    <div className="h-px bg-blue-400/50 mt-0.5 transform origin-left transition-all duration-300 ease-out 
                                  group-hover:scale-x-150 group-hover:bg-blue-400/30"></div>
                  </div>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed">
                  { t("our_story_p1") }
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  { t("our_story_p2") }
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  { t("our_story_p3") }
                </p>
                <div className="mt-8 space-x-4">
                  <a
                    href="#mission"
                    className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors duration-300"
                  >
                    { t("learn_more_mission") }
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Mission & Vision */ }
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20" id="mission">
            <div className="bg-gray-50 p-8 rounded-lg shadow-md">
              <div className="text-blue-800 text-4xl mb-4">
                <i className="fa-solid fa-bullseye"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{ t("mission_title") }</h3>
              <p className="text-gray-600">{ t("mission_desc") }</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg shadow-md">
              <div className="text-blue-800 text-4xl mb-4">
                <i className="fa-solid fa-eye"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{ t("vision_title") }</h3>
              <p className="text-gray-600">{ t("vision_desc") }</p>
            </div>
          </div>

          {/* Core Values */ }
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">{ t("core_values_title") }</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-blue-800 text-4xl mb-4 flex justify-center">
                  <i className="fa-solid fa-handshake"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{ t("value1_title") }</h3>
                <p className="text-gray-600">{ t("value1_desc") }</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-blue-800 text-4xl mb-4 flex justify-center">
                  <i className="fa-solid fa-chart-line"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{ t("value2_title") }</h3>
                <p className="text-gray-600">{ t("value2_desc") }</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-blue-800 text-4xl mb-4 flex justify-center">
                  <i className="fa-solid fa-lightbulb"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{ t("value3_title") }</h3>
                <p className="text-gray-600">{ t("value3_desc") }</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-blue-800 text-4xl mb-4 flex justify-center">
                  <i className="fa-solid fa-hands-helping"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{ t("value4_title") }</h3>
                <p className="text-gray-600">{ t("value4_desc") }</p>
              </div>
            </div>
          </div>
          
        </div>
      </section>

      {/* Company Milestones */ }
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-800 text-center mb-4">{ t("milestones_title") }</h2>
          <p className="text-xl text-gray-600 text-center max-w-2xl mx-auto mb-16">{ t("milestones_subtitle") }</p>

          {/* Timeline container */ }
          <div className="timeline-container relative max-w-5xl mx-auto">
            {/* Central timeline line with gradient */ }
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-600 to-blue-900"></div>

            {/* Milestone 1 - Left in LTR, Right in RTL */ }
            <div className="timeline-item mb-16 fade-in-up">
              {/* Circle with number and gradient */ }
              <div className="absolute left-1/2 transform -translate-x-1/2">
                <div className="timeline-circle bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-full w-14 h-14 flex items-center justify-center font-bold text-xl z-10 relative">
                  <i className="fas fa-flag"></i>
                </div>
              </div>

              <div className="md:flex items-center">
                {/* Left content in LTR, Right content in RTL */ }
                <div className="timeline-content md:w-[calc(50%-30px)] rtl:ms-auto rtl:me-0 ltr:me-auto ltr:ms-0 rtl:order-2 ltr:order-1 rtl:text-start ltr:text-end mb-8 md:mb-0 mt-16 md:mt-0">
                  <div className="bg-white p-6 rounded-xl shadow-md hover-card relative overflow-hidden">
                    <div className="milestone-decoration absolute top-0 right-0 w-24 h-24 opacity-5 rtl:right-auto rtl:left-0">
                      <i className="fas fa-flag text-7xl text-blue-800"></i>
                    </div>
                    <span className="inline-block text-sm font-semibold text-blue-600 mb-2 milestone-year">{ t("milestone1_year") }</span>
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">{ t("milestone1_title") }</h3>
                    <p className="text-gray-600 mb-4">{ t("milestone1_desc") }</p>
                  </div>
                </div>
                {/* Empty space for opposite side */ }
                <div className="md:w-[calc(50%-30px)] rtl:order-1 ltr:order-2"></div>
              </div>
            </div>

            {/* Milestone 2 - Right in LTR, Left in RTL */ }
            <div className="timeline-item mb-16 fade-in-up">
              {/* Circle with number and gradient */ }
              <div className="absolute left-1/2 transform -translate-x-1/2">
                <div className="timeline-circle bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-full w-14 h-14 flex items-center justify-center font-bold text-xl z-10 relative">
                  <i className="fas fa-handshake"></i>
                </div>
              </div>

              <div className="md:flex items-center">
                {/* Empty space for opposite side */ }
                <div className="md:w-[calc(50%-30px)] rtl:order-2 ltr:order-1"></div>
                {/* Right content in LTR, Left content in RTL */ }
                <div className="timeline-content md:w-[calc(50%-30px)] rtl:me-auto rtl:ms-0 ltr:ms-auto ltr:me-0 rtl:order-1 ltr:order-2 mb-8 md:mb-0 mt-16 md:mt-0">
                  <div className="bg-white p-6 rounded-xl shadow-md hover-card relative overflow-hidden">
                    <div className="milestone-decoration absolute top-0 right-0 w-24 h-24 opacity-5 rtl:right-auto rtl:left-0">
                      <i className="fas fa-handshake text-7xl text-blue-800"></i>
                    </div>
                    <span className="inline-block text-sm font-semibold text-blue-600 mb-2 milestone-year">{ t("milestone2_year") }</span>
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">{ t("milestone2_title") }</h3>
                    <p className="text-gray-600 mb-4">{ t("milestone2_desc") }</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Milestone 3 - Left in LTR, Right in RTL */ }
            <div className="timeline-item mb-16 fade-in-up">
              {/* Circle with number and gradient */ }
              <div className="absolute left-1/2 transform -translate-x-1/2">
                <div className="timeline-circle bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-full w-14 h-14 flex items-center justify-center font-bold text-xl z-10 relative">
                  <i className="fas fa-globe"></i>
                </div>
              </div>

              <div className="md:flex items-center">
                {/* Left content in LTR, Right content in RTL */ }
                <div className="timeline-content md:w-[calc(50%-30px)] rtl:ms-auto rtl:me-0 ltr:me-auto ltr:ms-0 rtl:order-2 ltr:order-1 rtl:text-start ltr:text-end mb-8 md:mb-0 mt-16 md:mt-0">
                  <div className="bg-white p-6 rounded-xl shadow-md hover-card relative overflow-hidden">
                    <div className="milestone-decoration absolute top-0 right-0 w-24 h-24 opacity-5 rtl:right-auto rtl:left-0">
                      <i className="fas fa-globe text-7xl text-blue-800"></i>
                    </div>
                    <span className="inline-block text-sm font-semibold text-blue-600 mb-2 milestone-year">{ t("milestone3_year") }</span>
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">{ t("milestone3_title") }</h3>
                    <p className="text-gray-600 mb-4">{ t("milestone3_desc") }</p>
                  </div>
                </div>
                {/* Empty space for opposite side */ }
                <div className="md:w-[calc(50%-30px)] rtl:order-1 ltr:order-2"></div>
              </div>
            </div>

            {/* Milestone 4 - Right in LTR, Left in RTL */ }
            <div className="timeline-item fade-in-up">
              {/* Circle with number and gradient */ }
              <div className="absolute left-1/2 transform -translate-x-1/2">
                <div className="timeline-circle bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-full w-14 h-14 flex items-center justify-center font-bold text-xl z-10 relative">
                  <i className="fas fa-microchip"></i>
                </div>
              </div>

              <div className="md:flex items-center">
                {/* Empty space for opposite side */ }
                <div className="md:w-[calc(50%-30px)] rtl:order-2 ltr:order-1"></div>
                {/* Right content in LTR, Left content in RTL */ }
                <div className="timeline-content md:w-[calc(50%-30px)] rtl:me-auto rtl:ms-0 ltr:ms-auto ltr:me-0 rtl:order-1 ltr:order-2 mb-8 md:mb-0 mt-16 md:mt-0">
                  <div className="bg-white p-6 rounded-xl shadow-md hover-card relative overflow-hidden">
                    <div className="milestone-decoration absolute top-0 right-0 w-24 h-24 opacity-5 rtl:right-auto rtl:left-0">
                      <i className="fas fa-microchip text-7xl text-blue-800"></i>
                    </div>
                    <span className="inline-block text-sm font-semibold text-blue-600 mb-2 milestone-year">{ t("milestone4_year") }</span>
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">{ t("milestone4_title") }</h3>
                    <p className="text-gray-600 mb-4">{ t("milestone4_desc") }</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
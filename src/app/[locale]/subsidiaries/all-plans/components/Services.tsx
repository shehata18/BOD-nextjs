import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";

const Services = () => {
  const allPlans = useTranslations("all_plans");
  
  const serviceItems = [
    {
      id: 1,
      title: "service1_title",
      description: "service1_desc",
      features: ["service1_feature1", "service1_feature2", "service1_feature3"],
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
        />
      ),
      delay: "100"
    },
    {
      id: 2,
      title: "service2_title",
      description: "service2_desc",
      features: ["service2_feature1", "service2_feature2", "service2_feature3"],
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      ),
      delay: "200"
    },
    {
      id: 3,
      title: "service3_title",
      description: "service3_desc",
      features: ["service3_feature1", "service3_feature2", "service3_feature3"],
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
        />
      ),
      delay: "300"
    },
    {
      id: 4,
      title: "service4_title",
      description: "service4_desc",
      features: ["service4_feature1", "service4_feature2", "service4_feature3"],
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
        />
      ),
      delay: "100"
    },
    {
      id: 5,
      title: "service5_title",
      description: "service5_desc",
      features: ["service5_feature1", "service5_feature2", "service5_feature3"],
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      ),
      delay: "200"
    },
    {
      id: 6,
      title: "service6_title",
      description: "service6_desc",
      features: ["service6_feature1", "service6_feature2", "service6_feature3"],
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
        />
      ),
      delay: "300"
    }
  ];

  return (
    <section
      id="services"
      className="py-24 bg-gray-900 text-white relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-grid-white/[0.05] bg-[size:50px_50px]"></div>
      </div>
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/30 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/30 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
          <span className="text-blue-400 font-semibold uppercase tracking-widest text-sm">
            {allPlans("services_subtitle")}
          </span>
          <h2 className="text-4xl font-bold text-white mt-2 mb-4">
            {allPlans("services_title")}
          </h2>
          <div className="h-1 w-20 bg-blue-400 mx-auto mb-6"></div>
          <p className="text-gray-300 text-lg">{allPlans("services_desc")}</p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceItems.map((service) => (
            <div
              key={service.id}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] group"
              data-aos="fade-up"
              data-aos-delay={service.delay}
            >
              <div className="h-16 w-16 bg-blue-600/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-600/30 transition-all duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-blue-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {service.icon}
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-all duration-300">
                {allPlans(service.title)}
              </h3>
              <p className="text-gray-300 mb-6">{allPlans(service.description)}</p>
              <ul className="text-gray-400 space-y-2 mb-6">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <svg
                      className="w-4 h-4 mr-2 text-blue-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    {allPlans(feature)}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16" data-aos="fade-up">
          <Link
            href={`/contact`}
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-10 rounded-lg transition duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            {allPlans("request_quote")}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;

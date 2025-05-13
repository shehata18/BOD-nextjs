import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

const About = () => {
    const allPlans = useTranslations("all_plans");
    
    const features = [
      {
        id: 1,
        title: "feature1_title",
        description: "feature1_desc",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-blue-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>
        )
      },
      {
        id: 2,
        title: "feature2_title",
        description: "feature2_desc",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-blue-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
        )
      },
      {
        id: 3,
        title: "feature3_title",
        description: "feature3_desc",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-blue-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
            />
          </svg>
        )
      },
      {
        id: 4,
        title: "feature4_title",
        description: "feature4_desc",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-blue-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
            />
          </svg>
        )
      }
    ];
    
  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Image Column with Decorative Elements */}
          <div className="w-full lg:w-1/2 relative" data-aos="fade-right">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Conference Planning"
                className="w-full h-[600px] object-cover"
              />
            </div>

            {/* Decorative elements */}
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-blue-600/20 rounded-full blur-xl z-0"></div>
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-600/20 rounded-full blur-xl z-0"></div>

            {/* Feature Box */}
            <div
              className="absolute bottom-8 right-8 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 max-w-xs z-20"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 rounded-full p-3 mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-lg mb-2">
                    {allPlans("execution_title")}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {allPlans("execution_desc")}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Content Column */}
          <div className="w-full lg:w-1/2" data-aos="fade-left">
            <div className="mb-8">
              <span className="text-blue-600 font-semibold uppercase tracking-widest text-sm">
                {allPlans("about_title")}
              </span>
              <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-4">
                {allPlans("about_heading")}
              </h2>
              <div className="h-1 w-20 bg-blue-600 mb-6"></div>
              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                {allPlans("about_desc1")}
              </p>
              <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                {allPlans("about_desc2")}
              </p>
            </div>

            {/* Feature Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {features.map((feature) => (
                <div key={feature.id} className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center">
                      {feature.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {allPlans(feature.title)}
                    </h3>
                    <p className="text-gray-600">{allPlans(feature.description)}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="#services"
              className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 ease-in-out"
            >
              {allPlans("discover_services")}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

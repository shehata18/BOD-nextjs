import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

const Portfolio = () => {
  const allPlans = useTranslations("all_plans");
  
  const projects = [
    {
      id: 1,
      image: "https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: allPlans("project1_title"),
      description: allPlans("project1_desc"),
      category: allPlans("project1_category"),
      delay: "100"
    },
    {
      id: 2,
      image: "https://images.pexels.com/photos/144428/pexels-photo-144428.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: allPlans("project2_title"),
      description: allPlans("project2_desc"),
      category: allPlans("project2_category"),
      delay: "200"
    },
    {
      id: 3,
      image: "https://images.pexels.com/photos/2897462/pexels-photo-2897462.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: allPlans("project3_title"),
      description: allPlans("project3_desc"),
      category: allPlans("project3_category"),
      delay: "300"
    },
    {
      id: 4,
      image: "https://images.pexels.com/photos/2263436/pexels-photo-2263436.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: allPlans("project4_title"),
      description: allPlans("project4_desc"),
      category: allPlans("project4_category"),
      delay: "100"
    },
    {
      id: 5,
      image: "https://images.pexels.com/photos/2555635/pexels-photo-2555635.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: allPlans("project5_title"),
      description: allPlans("project5_desc"),
      category: allPlans("project5_category"),
      delay: "200"
    },
    {
      id: 6,
      image: "https://images.pexels.com/photos/2977565/pexels-photo-2977565.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: allPlans("project6_title"),
      description: allPlans("project6_desc"),
      category: allPlans("project6_category"),
      delay: "300"
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-blue-100 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute bottom-40 right-20 w-60 h-60 bg-purple-100 rounded-full opacity-20 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
          <span className="text-blue-600 font-semibold uppercase tracking-widest text-sm">
            {allPlans("portfolio_subtitle")}
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-4">
            {allPlans("portfolio_title")}
          </h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg">{allPlans("portfolio_desc")}</p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-6">
          {projects.map((project) => (
            <div key={project.id} className="group" data-aos="fade-up" data-aos-delay={project.delay}>
              <div className="relative overflow-hidden rounded-xl aspect-[4/3] shadow-lg mb-5">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6">
                  <div className="transform translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-300">{project.description}</p>
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-600">{project.category}</p>
                </div>
                <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center group-hover:bg-blue-600 transition duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 arowIcon text-blue-600 group-hover:text-white transition duration-300"
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
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-16 text-center" data-aos="fade-up">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-semibold py-4 px-10 rounded-full transition duration-300 transform hover:scale-105 hover:shadow-lg group"
          >
            <span className="relative z-10">
              {allPlans("view_all_projects")}
            </span>
            <span className="relative z-10 w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-all duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 arowIcon text-blue-800 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

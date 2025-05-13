import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';

const State = () => {
    const allPlans = useTranslations("all_plans");
    
    const statsData = [
      {
        id: 1,
        count: 250,
        suffix: "+",
        title: "stat1_title",
        description: "stat1_desc",
        delay: "100",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
        )
      },
      {
        id: 2,
        count: 500,
        suffix: "+",
        title: "stat2_title",
        description: "stat2_desc",
        delay: "200",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        )
      },
      {
        id: 3,
        count: 12,
        suffix: "",
        title: "stat3_title",
        description: "stat3_desc",
        delay: "300",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
            />
          </svg>
        )
      },
      {
        id: 4,
        count: 98,
        suffix: "%",
        title: "stat4_title",
        description: "stat4_desc",
        delay: "400",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 text-white"
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
      }
    ];
    
  return (
    <section className="py-20 bg-blue-800 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-900 to-blue-700"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-grid-white/[0.03] bg-[size:40px_40px]"></div>
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-400 rounded-full opacity-20 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
          <span className="text-blue-200 font-semibold uppercase tracking-widest text-sm">
            {allPlans("stats_subtitle")}
          </span>
          <h2 className="text-5xl font-bold text-white mt-2 mb-6">
            {allPlans("stats_title")}
          </h2>
          <div className="h-1 w-24 bg-blue-400 mx-auto mb-8"></div>
          <p className="text-blue-100 text-xl leading-relaxed">
            {allPlans("stats_desc")}
          </p>
        </div>

        {/* Stats Grid - Enhanced Version */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {statsData.map((stat) => (
            <div key={stat.id} className="relative" data-aos="fade-up" data-aos-delay={stat.delay}>
              <div className="bg-gradient-to-br from-blue-800/50 to-blue-900/50 backdrop-blur-sm p-8 rounded-2xl border border-blue-700/50 hover:border-blue-500/50 transition-all duration-500 h-full transform hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(8,145,178,0.1)]">
                <div className="flex flex-col items-center">
                  <div className="relative mb-8">
                    <div className="absolute inset-0 rounded-full bg-blue-400/20 blur-xl transform scale-150"></div>
                    <div className="relative w-28 h-28 bg-gradient-to-tr from-blue-500 to-blue-400 rounded-full flex items-center justify-center shadow-lg">
                      {stat.icon}
                    </div>
                  </div>
                  <div className="relative">
                    <div className="animate-pulse-slow absolute -inset-1 rounded-full bg-blue-400/20 blur-lg opacity-70"></div>
                    <h3 className="text-6xl font-bold mb-3 inline-flex items-center">
                      <span className="counter relative" data-count={stat.count}>
                        {stat.count}
                      </span>
                      {stat.suffix && <span className="text-blue-300 ml-1">{stat.suffix}</span>}
                    </h3>
                  </div>
                  <p className="text-blue-100 text-xl font-medium">
                    {allPlans(stat.title)}
                  </p>
                  <p className="text-blue-200/70 text-center mt-3">
                    {allPlans(stat.description)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Action Button */}
        <div className="text-center mt-16" data-aos="fade-up">
          <Link
            href={`/contact`}
            className="group relative inline-flex items-center gap-2 bg-white text-blue-800 font-semibold py-4 px-10 rounded-full transition duration-300 transform hover:scale-105 hover:shadow-2xl overflow-hidden"
          >
            <span className="relative z-10">{allPlans("cta_button")}</span>
            <span className="relative z-10 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center group-hover:bg-blue-200 transition-all duration-300">
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
}

export default State
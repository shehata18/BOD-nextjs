import { useTranslations } from "next-intl";

const Testimonials = () => {
  const allPlans = useTranslations("all_plans");
  
  const testimonials = [
    {
      id: 1,
      text: "testimonial1_text",
      name: "testimonial1_name",
      position: "testimonial1_position",
      image: "https://randomuser.me/api/portraits/women/46.jpg",
      delay: "100"
    },
    {
      id: 2,
      text: "testimonial2_text",
      name: "testimonial2_name",
      position: "testimonial2_position",
      image: "https://randomuser.me/api/portraits/men/33.jpg",
      delay: "200"
    },
    {
      id: 3,
      text: "testimonial3_text",
      name: "testimonial3_name",
      position: "testimonial3_position",
      image: "https://randomuser.me/api/portraits/women/63.jpg",
      delay: "300"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="hidden lg:block absolute top-1/4 left-0 w-64 h-64 bg-blue-50 rounded-full mix-blend-multiply blur-3xl opacity-70"></div>
        <div className="hidden lg:block absolute bottom-1/4 right-0 w-64 h-64 bg-purple-50 rounded-full mix-blend-multiply blur-3xl opacity-70"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-4">
            {allPlans("testimonials_heading")}
          </h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg">
            {allPlans("testimonials_desc")}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-xl p-8 shadow-xl relative z-10 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              data-aos="fade-up"
              data-aos-delay={testimonial.delay}
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 -left-4 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              {/* Stars */}
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-700 mb-6 italic">
                {allPlans(testimonial.text)}
              </p>

              {/* Author */}
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={allPlans(testimonial.name)}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">
                    {allPlans(testimonial.name)}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {allPlans(testimonial.position)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials
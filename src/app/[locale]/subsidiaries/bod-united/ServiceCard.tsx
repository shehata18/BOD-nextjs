import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";

function ServiceCard({
  icon,
  title,
  description,
  features,
  delay,
  imageUrl,
}: {
  icon: string;
  title: string;
  description: string;
  features: string[];
  delay: number;
  imageUrl: string;
}) {
  const t = useTranslations("bod-united");
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
    >
      <div className="relative h-48">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-20 w-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white text-3xl">
            {icon}
          </div>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
        <p className="text-gray-600 mb-5">{description}</p>
        <div className="border-t border-gray-100 pt-4 mt-4">
          <div className="flex items-center mb-3">
            <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-2">
              <i className="fas fa-check text-xs text-blue-600"></i>
            </div>
            <span className="text-blue-700 font-medium">
              {t("service_key_features")}
            </span>
          </div>
          <ul className="space-y-2 text-gray-600">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <i className="fas fa-chevron-right text-blue-500 mt-1 mr-2 text-xs"></i>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}

export default ServiceCard;

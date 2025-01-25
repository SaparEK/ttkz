'use client';
import { motion } from "framer-motion";
import { Package, Truck, Plane, Ship } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/utils/translations";

const ServicesSection = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const services = [
    {
      icon: Truck,
      title: t.roadFreight,
      description: t.roadFreightDesc,
    },
    {
      icon: Plane,
      title: t.airFreight,
      description: t.airFreightDesc,
    },
    {
      icon: Ship,
      title: t.seaFreight,
      description: t.seaFreightDesc,
    },
    {
      icon: Package,
      title: t.warehousing,
      description: t.warehousingDesc,
    },
  ];

  return (
    <section id="services" className="py-20 bg-secondary">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.services}</h2>
          <div className="w-20 h-1 bg-accent mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="p-6 bg-white rounded-lg hover:shadow-lg transition-shadow duration-300"
            >
              <service.icon className="w-12 h-12 text-accent mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-3 text-center">{service.title}</h3>
              <p className="text-gray-600 text-center">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
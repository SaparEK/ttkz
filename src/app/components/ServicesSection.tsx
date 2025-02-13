'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import { Package, Truck, Globe } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../utils/translations";

const ServicesSection = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const rows = [
    {
      image: "/lovable-uploads/cargo_service_1.jpg",
      title: t.roadFreight,
      description: t.roadFreightDesc,
      reverse: false,
    },
    {
      image: "/lovable-uploads/cargo_service_2.jpg",
      title: t.warehousing,
      description: t.warehousingDesc,
      reverse: true,
    },
    {
      image: "/lovable-uploads/cargo_service_3.jpg",
      title: t.internationalNetwork,
      description: t.networkDesc,
      reverse: false,
    }
  ];

  return (
      <section id="services" className="py-20 bg-gray-200 flex flex-col items-center">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-[tilda-sans]-bold text-gray-900 mb-4">
            {t.services_title}
          </h2>
        </div>
        <div className="container w-full grid grid-rows-3">
          {rows.map((row, index) => (
              <div
                  key={index}
                  className={`flex ${row.reverse ? 'flex-row-reverse' : 'flex-row'} w-full bg-white`}
                  style={{border: index !== rows.length - 1 ? 'none' : '', margin: 0, padding: 0, height: '450px'}}
              >
                <Image
                    src={row.image}
                    alt={row.title}
                    width={500}
                    height={450}
                    className="object-cover w-1/2 h-full"
                />
                <div className="w-1/2 text-center p-10 flex flex-col justify-center">
                  <h3 className="text-[36px] font-bold mb-6 font-[tilda-sans]">
                    {row.title}
                  </h3>
                  <p className="text-[#959595] text-lg font-[tilda-sans] leading-relaxed">
                    {row.description}
                  </p>
                </div>
            </div>
            ))}
        </div>
      </section>
  );
};

export default ServicesSection;
"use client";

import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../utils/translations";
import Image from "next/image";
import { motion } from "framer-motion";

const ServicesSection = () => {
    const { language } = useLanguage();
    const t = translations[language];

    const services = [
        {
            id: 1,
            image: "/lovable-uploads/cargo_service_4.jpg",
            title: t.warehousing,
            description: t.warehousingDesc,
        },
        {
            id: 2,
            image: "/lovable-uploads/cargo_service_5.jpg",
            title: t.roadFreight,
            description: t.roadFreightDesc,
        },
        {
            id: 3,
            image: "/lovable-uploads/support.jpg",
            title: t.support,
            description: t.supportDesc,
        },
    ];

    return (
        <section id="services" className="pb-32  bg-white">
            <div className="container mx-auto px-4 text-center">
                {/* Заголовок секции */}
                <motion.h2 className="text-4xl text-black text-left md:text-5xl mb-6 ">
                    {t.textServices}
                </motion.h2>

                {/* Карточки услуг */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{opacity: 0, y: 20}}
                            whileInView={{opacity: 1, y: 0}}
                            transition={{duration: 0.6, delay: index * 0.2}}
                            viewport={{once: true}}
                            className="rounded-lg overflow-hidden "
                        >
                            {/* Фото увеличено */}
                            <Image
                                src={service.image}
                                alt={service.title}
                                width={600}
                                height={400}
                                className="w-full h-80 object-cover"
                                style={{filter:"blur(1px)"}}
                            />
                            {/* Текст теперь без фона */}
                            <div className="pt-6 text-left">
                                <h3 className="text-3xl mb-3 text-black">
                                    {service.title}
                                </h3>
                                <p className="text-xl text-gray-600">{service.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
            <div className="divider divider-rectangle_three"></div>
        </section>
    );
};

export default ServicesSection;

"use client";

import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../utils/translations";
import Image from "next/image";
import { motion } from "framer-motion";

const Why = () => {
    const { language } = useLanguage();
    const t = translations[language];

    const services = [
        {
            id: 1,
            image: "/lovable-uploads/opit.jpg",
            title: t.why_us_first,
            description: t.why_us_firstDesc,
        },
        {
            id: 2,
            image: "/lovable-uploads/individual.jpg",
            title: t.why_us_two,
            description: t.why_us_twoDesc,
        },
        {
            id: 3,
            image: "/lovable-uploads/cargo_service_6.jpg",
            title: t.why_us_three,
            description: t.why_us_threeDesc,
        },
    ];

    return (
        <section id="services" className="pb-32 bg-black">
            <div className="container mx-auto px-4 text-center text-white">
                {/* Заголовок секции */}
                <motion.h2 className="text-4xl text-left md:text-5xl mb-6">
                    {t.textWhyUs}
                </motion.h2>

                {/* Карточки услуг */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="rounded-lg overflow-hidden cursor-pointer transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:translate-y-[-10px]"  // Анимация движения при наведении
                        >
                            {/* Фото увеличено */}
                            <Image
                                src={service.image}
                                alt={service.title}
                                width={600}
                                height={400}
                                className="w-full h-80 object-cover"
                            />
                            {/* Текст */}
                            <div className="pt-6 text-left">
                                <h3 className="text-3xl mb-3 text-center ">{service.title}</h3>
                                {/* Описание теперь всегда видно */}
                                <motion.p
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}  // Текст всегда видим
                                    transition={{ duration: 0.5 }}
                                    className="text-xl text-white font-[Arial] text-bold text-center"
                                >
                                    {service.description}
                                </motion.p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
            <div className="divider divider-rectangle_seven"></div>
        </section>
    );
};

export default Why;

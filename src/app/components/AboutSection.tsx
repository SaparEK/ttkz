'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "../contexts/LanguageContext";
import { companyInfo } from "../utils/companyInfo";

const AboutSection = () => {
    const { t } = useLanguage();

    const { language } = useLanguage();
    const c = companyInfo[language];

    return (
        <section id="about" className="pt-16 pb-[-50px] bg-black relative">
            <div className="container px-4 lg:px-8 relative mx-auto flex flex-col md:flex-row items-center justify-center">

                {/* Фото – на границе центра */}
                <motion.div
                    whileInView={{ opacity: 1 }}
                    className="w-full md:w-[40%] lg:w-[35%] xl:w-[30%] mb-6 md:mb-0 md:mr-[-10%] z-10"
                >
                    <Image
                        src="/lovable-uploads/cargo_service_3.jpg"
                        alt="About Us"
                        width={500}
                        height={300}
                        className="rounded-lg shadow-lg mx-auto filter blur-sm"
                    />
                </motion.div>

                {/* Текст – слегка левее центра */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="relative bg-[#292929] text-white p-6 md:p-10 w-[90%] sm:w-[80%] md:w-[55%] lg:w-[50%] xl:w-[45%] z-20 md:ml-[-10%]"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl mb-4 tracking-wide">
                        {t("about")}
                    </h2>
                    <div className="w-24 sm:w-32 h-1 bg-accent mb-6"></div>
                    <p className="text-base sm:text-lg leading-relaxed">
                        {c}
                    </p>
                </motion.div>

            </div>
            <div className="divider divider-rectangle_two"></div>
        </section>
    );
};

export default AboutSection;
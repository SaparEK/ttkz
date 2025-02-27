'use client';

import Image from "next/image";
import { useLanguage } from "../contexts/LanguageContext";

const Hero = () => {
    return (
        <section className="h-screen pt-32 pb-16 text-white">
            <div className="absolute inset-0">
                <Image
                    src="/lovable-uploads/background_1.jpg"
                    alt="Truck Placeholder"
                    layout="fill"
                    objectFit="cover"
                    className="opacity-80 filter blur-sm"
                />
            </div>
            <div className="absolute inset-0 bg-black opacity-60"></div>
            <div className="relative z-10 flex flex-col justify-center items-center h-full px-4 md:px-8 text-left">
                <div className="container px-4 lg:px-8 ml-4 md:ml-8 text-left">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">
                        {useLanguage().t("title_text")} {/* Можно заменить на нужный заголовок */}
                    </h1>
                    <p className="text-lg md:text-2xl">
                        {useLanguage().t("subtext")} {/* Здесь можно вставить описание */}
                    </p>
                </div>
            </div>
            <div className="divider"></div>
        </section>
    );
};

export default Hero;

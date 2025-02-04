'use client';

import { Truck } from "lucide-react";
import {useLanguage} from "../contexts/LanguageContext";

const Hero = () => {
    const { t } = useLanguage();

    return (
        <section
            className="h-screen pt-32 pb-16 container-padding bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 text-white">
            <div className="max-w-4xl mx-auto text-center h-full flex flex-col justify-center">
                <div className="mb-6 flex justify-center">
                    <Truck className="w-32 h-32 text-accent animate-float"/>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance leading-tight animate-fade-in">
                    {t('title')}
                </h1>
            </div>
        </section>
    );
};

export default Hero;
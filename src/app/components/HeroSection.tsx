'use client';

// import { Truck } from "lucide-react";
import Image from "next/image";
import gsap from "gsap";
import { useEffect, useRef } from "react";

import { useLanguage } from "../contexts/LanguageContext";

const Hero = () => {
    const truckRef = useRef(null);

    const { t } = useLanguage();
    useEffect(() => {
        const tl = gsap.timeline();

        // Грузовик въезжает слева направо
        tl.fromTo(truckRef.current,
            { x: "-100vw", filter: "blur(10px)" },
            { x: "20vw", filter: "blur(0px)", duration: 2, ease: "power3.out" }
        );

        // После остановки — эффект плавного покачивания вверх-вниз
        tl.to(truckRef.current, { y: -10, repeat: -1, yoyo: true, duration: 1.5, ease: "sine.inOut" });
    }, []);

    return (
        <section
            className="h-screen pt-32 pb-16 container-padding text-white">
            <div className="absolute inset-0">
                <Image
                    src="/lovable-uploads/placeholder.jpg"
                    alt="Truck Placeholder"
                    layout="fill"
                    objectFit="cover"
                    className="opacity-100"
                />
                <div className="absolute inset-0 bg-[#38A480] opacity-80"></div>
            </div>
            <div className="max-w-4xl mx-auto text-center h-full flex flex-col justify-start relative z-10 pt-40">
                <div className="relative w-full h-[200px] overflow-hidden">
                    <div ref={truckRef} className="absolute bottom-0">
                        <Image
                            src="/lovable-uploads/truck1.png"
                            alt="Truck"
                            width={200}
                            height={100}
                            className="drop-shadow-lg"
                        />
                    </div>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance leading-tight animate-fade-in z-20 relative">
                    {t('title')}
                </h1>
            </div>
        </section>
    );
};

export default Hero;

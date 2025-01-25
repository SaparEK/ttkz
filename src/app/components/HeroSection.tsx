'use client';

import { Truck } from "lucide-react";
import {useLanguage} from "@/contexts/LanguageContext";

const Hero = () => {
    const { t } = useLanguage();

    return (
        <section
            className="h-screen pt-32 pb-16 container-padding bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 text-white">
            <div className="max-w-4xl mx-auto text-center h-full flex flex-col justify-center">
                <div className="mb-6 flex justify-center">
                    <Truck className="w-16 h-16 text-accent animate-float"/>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance leading-tight animate-fade-in">
                    {t('title')}
                </h1>
            </div>
        </section>
    );
};

export default Hero;
// import { motion } from "framer-motion";
// import { ArrowRight, Truck } from "lucide-react";
//
// const HeroSection = () => {
//   return (
//     <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
//         <div className="absolute inset-0 z-0">
//             <div className="mb-6 flex justify-center">
//                 <Truck className="w-16 h-16 text-accent animate-float"/>
//             </div>
//             <div
//                 className="absolute inset-0 bg-[url('/lovable-uploads/placeholder.jpg')] bg-cover bg-center opacity-10"
//                 style={{filter: 'brightness(0.7)'}}
//             ></div>
//         </div>
//         <motion.div
//             initial={{opacity: 0, y: 20}}
//             animate={{opacity: 1, y: 0}}
//             transition={{duration: 0.8 }}
//         className="container relative z-10 text-center px-4"
//       >
//         <div className="mb-8">
//           <img
//             src="/lovable-uploads/logotype.png"
//             alt="TTKZ|tuotuokz"
//             className="w-full max-w-[300px] md:max-w-md mx-auto h-auto"
//           />
//         </div>
//       </motion.div>
//     </div>
//   );
// };
//
// export default HeroSection;
// 'use client';
// import {motion} from "framer-motion";
// import {Truck, Globe, Clock} from "lucide-react";
// import {useLanguage} from "../contexts/LanguageContext";
// import {translations} from "../utils/translations";
//
// const AboutSection = () => {
//     const {language} = useLanguage();
//     const t = translations[language];
//
//     const features = [
//         {
//             icon: Truck,
//             title: t.globalLogistics,
//             description: t.logisticsDesc,
//         },
//         {
//             icon: Globe,
//             title: t.internationalNetwork,
//             description: t.networkDesc,
//         },
//         {
//             icon: Clock,
//             title: t.support,
//             description: t.supportDesc,
//         },
//     ];
//
//     return (
//         <section id="about" className="py-32 bg-gradient-to-b from-white to-[#f5f5f5]">
//             <div className="container px-4">
//                 <motion.div
//                     initial={{opacity: 0, y: 20}}
//                     whileInView={{opacity: 1, y: 0}}
//                     transition={{duration: 0.6}}
//                     viewport={{once: true}}
//                     className="text-center mb-16"
//                 >
//                     <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.about}</h2>
//                     <div className="w-20 h-1 bg-accent mx-auto"></div>
//                 </motion.div>
//
//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//                     {features.map((feature, index) => (
//                         <motion.div
//                             key={index}
//                             initial={{opacity: 0, y: 20}}
//                             whileInView={{opacity: 1, y: 0}}
//                             transition={{duration: 0.6, delay: index * 0.2}}
//                             viewport={{once: true}}
//                             className="p-6 rounded-2xl bg-secondary hover:shadow-lg transition-shadow duration-300"
//                         >
//                             <feature.icon className="w-12 h-12 text-accent mb-4 mx-auto"/>
//                             <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
//                             <p className="text-gray-600">{feature.description}</p>
//                         </motion.div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// };
//
// export default AboutSection;
    'use client';

    import { motion } from "framer-motion";
    import Image from "next/image";
    import { useLanguage } from "../contexts/LanguageContext";
    import { translations } from "../utils/translations";
    import {companyInfo} from "../utils/companyInfo";

    const AboutSection = () => {
        const { language } = useLanguage();
        const t = translations[language];
        const c = companyInfo[language];
        return (
            <section id="about" className="py-32 bg-gradient-to-b from-white to-[#f5f5f5]">
                <div className="container px-4 mx-auto flex flex-col md:flex-row items-center gap-12">
                    {/* Фото слева */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="w-full md:w-1/2"
                    >
                        <Image
                            src="/lovable-uploads/cargo_about.jpg"
                            alt="About Us"
                            width={500}
                            height={400}
                            className="rounded-lg shadow-lg"
                        />
                    </motion.div>

                    {/* Текст справа */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="w-full md:w-1/2 text-center font-[tilda-sans]"
                    >
                        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-center tracking-wide font-[tilda-sans]">
                            {t.about}
                        </h2>
                        <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
                        <p className="text-gray-600 text-lg leading-relaxed font-[tilda-sans]">
                            {c}
                        </p>
                    </motion.div>
                </div>
            </section>
        );
    };

    export default AboutSection;


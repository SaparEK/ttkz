'use client';
import { Quote } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { useState } from "react";
import { motion } from "framer-motion";

const Testimonials = () => {
    const { t } = useLanguage();

    // Массив отзывов
    const testimonials = [
        {
            quote: t('firstFeedback'),
            author: t('firstAuthor'),
        },
        {
            quote: t('secondFeedback'),
            author: t('secondAuthor'),
        },
        {
            quote: t('thirdFeedback'),
            author: t('thirdAuthor'),
        }
    ];

    // Состояние для отслеживания текущего отзыва
    const [currentTestimonial, setCurrentTestimonial] = useState(0);

    // Функции для переключения отзывов
    const nextTestimonial = () => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <section id="feedback" className="py-12 md:py-20 px-4 bg-[#292929]">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
                    {/* Кнопка "Назад" */}
                    <button
                        onClick={prevTestimonial}
                        className="bg-mint text-white px-4 py-2 rounded-md hover:bg-mint/80 transition-all"
                    >
                        {"<"}
                    </button>

                    {/* Блок с отзывом */}
                    <motion.div
                        key={currentTestimonial}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.6 }}
                        className="relative overflow-hidden bg-forest-light p-6 md:p-12 rounded-xl transition-all duration-300 hover:bg-[#8E9196]/10 hover:translate-y-[-4px] hover:shadow-lg w-full md:w-[70%] lg:w-[60%]"
                    >
                        <Quote className="text-mint/60 w-6 h-6 md:w-8 md:h-8 mb-4" />
                        <p className="font-normal mb-4 md:mb-6 text-xl md:text-3xl lg:text-4xl text-white text-left">
                            {testimonials[currentTestimonial].quote}
                        </p>
                        <div className="flex items-center gap-4">
                            <p className="font-normal text-lg md:text-2xl lg:text-3xl text-white text-left">
                                - {testimonials[currentTestimonial].author}
                            </p>
                        </div>
                    </motion.div>

                    {/* Кнопка "Вперед" */}
                    <button
                        onClick={nextTestimonial}
                        className="bg-mint text-white px-4 py-2 rounded-md hover:bg-mint/80 transition-all"
                    >
                        {">"}
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
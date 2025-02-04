'use client';
import { Quote } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

const Testimonials = () => {
    const {t} = useLanguage();
    return (
        <section id="feedback" className="py-20 px-4 bg-secondary">
            <div className="container mx-auto">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4">{t('clientsAboutUS')}</h2>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
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
                    ].map((testimonial, index) => (
                        <div
                            key={index}
                            className="bg-forest-light p-8 rounded-xl relative transition-all duration-300 hover:bg-[#8E9196]/10 hover:translate-y-[-4px] hover:shadow-lg"
                        >
                            <Quote className="text-mint/60 w-8 h-8 mb-4" />
                            <p className="font-medium mb-6">{testimonial.quote}</p>
                            <div className="flex items-center gap-4">
                                <div>
                                    <p className="font-medium ">{testimonial.author}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
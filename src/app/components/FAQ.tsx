'use client';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../utils/translations";
import { faqAnswers, faqQuestions } from "../utils/companyInfo";

const FAQ = () => {
    const { language } = useLanguage();
    const t = translations[language];
    const faqs: { question: string; answer: string }[] = [];

    // Заполняем массив faq
    for (let i = 0; i < faqQuestions[language]?.length; i++) {
        const question = faqQuestions[language][i];
        const answer = faqAnswers[language][i];
        faqs.push({ question, answer });
    }

    return (
        <section id="faq" className="section-padding pb-16 md:pb-32 bg-white">
            <div className="divider divider-rectangle_four"></div>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-8 md:mb-16">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl text-gray-900 mb-4">
                        {t.faq}
                    </h2>
                </div>

                <div className="mx-auto max-w-4xl">
                    <Accordion type="single" collapsible className="space-y-4">
                        {faqs.map((faq, index) => (
                            <AccordionItem
                                key={index}
                                value={`item-${index}`}
                                className="bg-gray-50 rounded-lg px-4 sm:px-6 hover:shadow-sm transition-shadow"
                            >
                                <AccordionTrigger className="text-lg text-left sm:text-xl md:text-2xl py-3 sm:py-4 hover:no-underline transition-colors">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-base sm:text-lg text-gray-600 pb-3 sm:pb-4">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
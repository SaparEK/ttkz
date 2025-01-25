'use client';
import { Accordion, AccordionContent, AccordionItem,    AccordionTrigger,} from "@/components/ui/accordion";
import {useLanguage} from "@/contexts/LanguageContext";
import {translations} from "@/utils/translations";
import {faqAnswers, faqQuestions} from "@/utils/companyInfo";

const FAQ = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const {language} = useLanguage();
    const t = translations[language];
    const faqs: { question: string; answer: string }[] = [];

    // Заполняем массив faq
    for (let i = 0; i < faqQuestions[language]?.length; i++) {
        const question = faqQuestions[language][i];
        const answer = faqAnswers[language][i];
        faqs.push({question, answer});
    }

    return (
        <section id="faq" className="section-padding bg-white">
            <div className="container mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        {t.faq}
                    </h2>
                </div>

                <div className="max-w-3xl mx-auto">
                    <Accordion type="single" collapsible className="space-y-4">
                        {faqs.map((faq, index) => (
                            <AccordionItem
                                key={index}
                                value={`item-${index}`}
                                className="bg-gray-50 rounded-lg px-6 hover:shadow-sm transition-shadow"
                            >
                                <AccordionTrigger className="text-left font-semibold py-4 hover:text-primary  hover:no-underline transition-colors">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-gray-600 pb-4">
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
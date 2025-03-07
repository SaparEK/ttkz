'use client';
import { useLanguage } from "../contexts/LanguageContext";

const Location = () => {
    const { t } = useLanguage();

    return (
        <section id="Location" className="relative py-8 md:py-16 container-padding bg-white">
            {/* Контейнер для карты и текста */}
            <div className="container mx-auto px-4 md:px-8">

                {/* Карта и текстовый блок */}
                <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                    {/* Карта (слева) */}
                    <div className="w-full md:w-2/3 h-[300px] md:h-[450px] rounded-lg overflow-hidden shadow-lg">
                        <iframe
                            className="w-full h-full"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d715.2392392285559!2d80.00955036966353!3d44.1873535981926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x387fa6aab048505b%3A0xa29d0ef20abdaf50!2z0YPQuy4g0J_QvtCz0YDQsNC90LjRh9C90LDRjyA2Mywg0JbQsNGA0LrQtdC90YIsINCa0LDQt9Cw0YXRgdGC0LDQvQ!5e0!3m2!1sru!2suk!4v1738599815526!5m2!1sru!2suk"
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>

                    {/* Текстовый блок (справа) */}
                    <div className="w-full md:w-1/3 h-1/3 bg-black text-white p-6 md:p-8 rounded-lg shadow-lg">
                        <h3 className="text-xl md:text-2xl font-bold mb-4">{t('location')}</h3>
                        <p className="text-sm md:text-base text-neutral-300">
                            {t('location_text')}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Location;
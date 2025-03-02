'use client';
import { useState } from "react";
import { Phone, Mail, MessageCircle } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import emailjs from 'emailjs-com'; // Импортируем EmailJS

const Contacts = () => {
    const { t } = useLanguage();

    const [formData, setFormData] = useState({
        to_name: "",
        from_name: "",
        message: "",
    });

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setIsLoading(true);
        setError(null);
        setSuccess(false);

        try {
            // Отправка данных через EmailJS
            const response = await emailjs.send(
                process.env.NEXT_PUBLIC_SERVICE_EMAIL_ID,   // Ваш сервис ID
                process.env.NEXT_PUBLIC_TEMPLATE_EMAIL_ID,   // Ваш шаблон ID
                formData,             // Данные формы
                process.env.NEXT_PUBLIC_EMAIL_KEY        // Ваш user ID (получен при регистрации в EmailJS)
            );

            if (response.status === 200) {
                setSuccess(true);
                setFormData({ to_name: "", from_name: "", message: "" });
            } else {
                throw new Error("Ошибка при отправке формы");
            }
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (err) {
            setError("Ошибка при отправке формы");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section id="contact" className="py-16 container-padding bg-black text-white">
            <div className="mx-auto container">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                    {t('contact')}
                </h2>
                <p className="text-neutral-400 text-center mb-12 max-w-2xl mx-auto">
                    {t('contact_text')}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Форма */}
                    <div className="p-10 w-full">
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-1">{t('name')}</label>
                                    <input
                                        type="text"
                                        name="to_name"
                                        value={formData.to_name}
                                        onChange={handleChange}
                                        className="w-full p-3 bg-[#222222] text-white rounded-lg focus:ring-2 focus:ring-accent focus:outline-none"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-1">{t('email')}</label>
                                    <input
                                        type="email"
                                        name="from_name"
                                        value={formData.from_name}
                                        onChange={handleChange}
                                        className="w-full p-3 bg-[#222222] text-white rounded-lg focus:ring-2 focus:ring-accent focus:outline-none"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-1">{t('message')}</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full p-3 bg-[#222222] text-white rounded-lg h-32 focus:ring-2 focus:ring-accent focus:outline-none"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-accent text-white p-3 rounded-lg hover:bg-opacity-80 transition"
                                disabled={isLoading}
                            >
                                {isLoading ? t('sending') : t('send')}
                            </button>

                            {error && (
                                <p className="text-red-500 text-center mt-4">{error}</p>
                            )}

                            {success && (
                                <p className="text-green-500 text-center mt-4">{t('message_sent')}</p>
                            )}
                        </form>
                    </div>

                    {/* Контакты */}
                    <div className="flex flex-col space-y-6">
                        <a
                            href="tel:+77010701907"
                            className="glass-card p-8 rounded-xl text-center bg-[#222222] hover:shadow-lg transition-all hover:scale-105"
                        >
                            <Phone className="w-8 h-8 text-accent mx-auto mb-4" />
                            <h3 className="font-semibold text-xl mb-2">{t('phone')}</h3>
                            <p className="text-neutral-400">+7 701 070 19 07</p>
                        </a>
                        <a
                            href="mailto:info@tuotuo.kz"
                            className="glass-card p-8 rounded-xl text-center bg-[#222222] hover:shadow-lg transition-all hover:scale-105"
                        >
                            <Mail className="w-8 h-8 text-accent mx-auto mb-4" />
                            <h3 className="font-semibold text-xl mb-2">Email</h3>
                            <p className="text-neutral-400">info@tuotuo.kz</p>
                        </a>
                        <div className="glass-card p-8 rounded-xl text-center bg-[#222222] hover:shadow-lg transition-all hover:scale-105">
                            <MessageCircle className="w-8 h-8 text-accent mx-auto mb-4" />
                            <h3 className="font-semibold text-xl mb-2">{t('socialMedia')}</h3>
                            <div className="flex justify-center gap-4">
                                <a
                                    href="https://t.me/tuotuokz_bot"
                                    className="text-neutral-400 hover:text-accent transition-colors"
                                >
                                    {t('telegram')}
                                </a>
                                <a
                                    href="https://api.whatsapp.com/send?phone=77010701907&text=start"
                                    className="text-neutral-400 hover:text-accent transition-colors"
                                >
                                    {t('whatsApp')}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contacts;

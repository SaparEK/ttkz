'use client';
import { useLanguage } from "../contexts/LanguageContext";

export const LanguageSwitcher = () => {
    const { language, setLanguage } = useLanguage();

    return (
        <div className="flex items-center gap-2">            {/* Кнопка для русского языка */}
            <button
                onClick={() => setLanguage('ru')} // Устанавливаем язык при клике
                className={`px-2 py-1 rounded transition-colors ${
                    language === 'ru' ? 'bg-accent text-white' : 'text-neutral-400 hover:text-white'
                }`}
            >
                RU
            </button>

            {/* Кнопка для английского языка */}
            <button
                onClick={() => setLanguage('en')} // Устанавливаем язык при клике
                className={`px-2 py-1 rounded transition-colors ${
                    language === 'en' ? 'bg-accent text-white' : 'text-neutral-400 hover:text-white'
                }`}
            >
                EN
            </button>
        </div>
    );
};


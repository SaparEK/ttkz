'use client';
import { useLanguage } from "../contexts/LanguageContext";

export const LanguageSwitcher = () => {
    const { language, setLanguage } = useLanguage();

    return (
        <div className="flex items-center gap-2">
            {/* Кнопка для русского языка */}
            <button
                onClick={() => setLanguage('ru')} // Устанавливаем язык при клике
                className={`px-4 py-2 rounded transition-all duration-500 ease-in-out transform ${
                    language === 'ru'
                        ? 'bg-accent text-white scale-105' // При выбранном языке увеличиваем размер кнопки
                        : 'text-neutral-400 hover:text-white hover:scale-105' // Эффект при наведении
                }`}
            >
                RU
            </button>

            {/* Кнопка для английского языка */}
            <button
                onClick={() => setLanguage('en')} // Устанавливаем язык при клике
                className={`px-4 py-2 rounded transition-all duration-300 ease-in-out transform ${
                    language === 'en'
                        ? 'bg-accent text-white scale-105' // При выбранном языке увеличиваем размер кнопки
                        : 'text-neutral-400 hover:text-white hover:scale-105' // Эффект при наведении
                }`}
            >
                EN
            </button>
        </div>
    );
};



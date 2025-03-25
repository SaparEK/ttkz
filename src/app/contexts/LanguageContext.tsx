'use client';
import React, {createContext, useContext, useState} from 'react';

type Language = 'ru' | 'en' | 'ch';

import {translations} from "../utils/translations";

type LanguageContextType = {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({children}: { children: React.ReactNode }) => {
    const [language, setLanguage] = useState<Language>('ru');

    const t = (key: string): string => {
        const keys = key.split('.');
        let result: any = translations[language];

        // Рекурсивно ищем вложенные свойства
        for (const k of keys) {
            result = result[k];
            if (result === undefined) break;
        }

        // Возвращаем найденное значение или исходный ключ
        return typeof result === 'string' ? result : key;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
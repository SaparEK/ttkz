'use client'
import { useLanguage } from "../contexts/LanguageContext";
const Footer = () => {
    const { t } = useLanguage();

    return (
        <footer className="bg-neutral-900/90 text-white">
            <div className="container-padding py-8">
                <div className="text-center text-neutral-400">
                    <p>© 2025 All rights reserved</p>
                    <div className="flex justify-center space-x-6 mt-4">
                        <a
                            href="/policy" // Путь к странице политики конфиденциальности
                            className="hover:underline text-sm"
                        >
                            {t("policy.name")}
                        </a>
                        <span className="text-neutral-400">|</span>
                        <a
                            href="/agreement" // Путь к странице пользовательского соглашения
                            className="hover:underline text-sm"
                        >
                            {t("agreement.name")}
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

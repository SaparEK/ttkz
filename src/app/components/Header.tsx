'use client';

import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { LanguageSwitcher } from "./LanguageSwitcher";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { t } = useLanguage();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
            setIsMenuOpen(false);
        }
    };

    return (
        <div className="container">
            <header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                    scrolled ? "bg-black py-2 shadow-lg" : "bg-transparent py-4"
                }`}
            >
                <nav className="container mx-auto flex h-16 items-center justify-between px-4 lg:px-8">
                    {/* Логотип и заголовок */}
                    <a href="#" className="text-xl font-semibold text-white flex items-center gap-2">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src="/lovable-uploads/eagle.png" alt="Logo" className="h-8 md:h-10" />
                        <span className="text-lg font-bold">{t("title")}</span>
                    </a>

                    {/* Навигация для десктопов */}
                    <div className="hidden md:flex items-center gap-4">
                        {["about", "services", "faq", "contact"].map((section) => (
                            <button
                                key={section}
                                onClick={() => scrollToSection(section)}
                                className="text-white hover:text-white transition-colors border border-transparent hover:border-white px-4 py-1 rounded-lg text-sm md:text-base"
                            >
                                {t(section)}
                            </button>
                        ))}
                        <LanguageSwitcher />
                    </div>

                    {/* Кнопка меню для мобильных */}
                    <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </nav>

                {/* Мобильное меню */}
                {isMenuOpen && (
                    <div className="md:hidden absolute top-16 w-full bg-black/90 backdrop-blur-lg border-b border-neutral-800">
                        <div className="px-4 lg:px-8 py-4 flex flex-col gap-4">
                            {["about", "services", "faq", "contact"].map((section) => (
                                <button
                                    key={section}
                                    onClick={() => scrollToSection(section)}
                                    className="text-neutral-400 hover:text-white transition-colors border border-white px-4 py-2 rounded-lg text-left text-sm"
                                >
                                    {t(section)}
                                </button>
                            ))}
                            <LanguageSwitcher />
                        </div>
                    </div>
                )}
            </header>
        </div>
    );
};

export default Header;

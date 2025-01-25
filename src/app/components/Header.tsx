'use client';
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import {LanguageSwitcher} from "./LanguageSwitcher";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { t } = useLanguage();

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            setIsMenuOpen(false);
        }
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-neutral-900/90 backdrop-blur-lg border-b border-neutral-800">
            <nav className="container-padding mx-auto flex h-16 items-center justify-between">
                <a href="#" className="text-xl font-semibold text-white flex items-center gap-2">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/lovable-uploads/logotype(1).png" alt="Logo" className="h-20 w-auto" />
                </a>

                <div className="hidden md:flex items-center gap-8">
                    <button
                        onClick={() => scrollToSection('about')}
                        className="text-neutral-400 hover:text-white transition-colors"
                    >
                        {t('about')}
                    </button>
                    <button
                        onClick={() => scrollToSection('services')}
                        className="text-neutral-400 hover:text-white transition-colors"
                    >
                        {t('services')}
                    </button>
                    <button
                        onClick={() => scrollToSection('faq')}
                        className="text-neutral-400 hover:text-white transition-colors"
                    >
                        {t('faq')}
                    </button>
                    <button
                        onClick={() => scrollToSection('contact')}
                        className="text-neutral-400 hover:text-white transition-colors"
                    >
                        {t('contact')}
                    </button>
                    <LanguageSwitcher/>
                </div>

                <button
                    className="md:hidden text-white"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X/> : <Menu/>}
                </button>
            </nav>

            {isMenuOpen && (
                <div className="md:hidden absolute top-16 left-0 right-0 bg-neutral-900/90 backdrop-blur-lg border-b border-neutral-800">
                    <div className="container-padding py-4 flex flex-col gap-4">
                        <button
                            onClick={() => scrollToSection('about')}
                            className="text-neutral-400 hover:text-white transition-colors text-left"
                        >
                            {t('about')}
                        </button>
                        <button
                            onClick={() => scrollToSection('services')}
                            className="text-neutral-400 hover:text-white transition-colors text-left"
                        >
                            {t('services')}
                        </button>
                        <button
                            onClick={() => scrollToSection('faq')}
                            className="text-neutral-400 hover:text-white transition-colors text-left"
                        >
                            {t('faq')}
                        </button>
                        <button
                            onClick={() => scrollToSection('contact')}
                            className="text-neutral-400 hover:text-white transition-colors text-left"
                        >
                            {t('contact')}
                        </button>
                        <LanguageSwitcher/>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
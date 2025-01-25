'use client';
import { Phone, Mail, MessageCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Contacts = () => {
  const {t} = useLanguage();
  return (
      <section id="contact" className="py-16 container-padding bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            {t('contact')}
          </h2>
          <p className="text-neutral-600 text-center mb-12 max-w-2xl mx-auto">
            {t('contact_text')}
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <a href="tel:+78001234567" className="glass-card p-8 rounded-xl text-center hover:shadow-lg transition-all hover:scale-105">
              <Phone className="w-8 h-8 text-accent mx-auto mb-4" />
              <h3 className="font-semibold text-xl mb-2">{t('phone')}</h3>
              <p className="text-neutral-600">+7 (800) 123-45-67</p>
            </a>
            <a href="mailto:info@logisticspro.ru" className="glass-card p-8 rounded-xl text-center hover:shadow-lg transition-all hover:scale-105">
              <Mail className="w-8 h-8 text-accent mx-auto mb-4" />
              <h3 className="font-semibold text-xl mb-2">Email</h3>
              <p className="text-neutral-600">info@logisticspro.ru</p>
            </a>
            <div className="glass-card p-8 rounded-xl text-center hover:shadow-lg transition-all hover:scale-105">
              <MessageCircle className="w-8 h-8 text-accent mx-auto mb-4" />
              <h3 className="font-semibold text-xl mb-2">{t('socialMedia')}</h3>
              <div className="flex justify-center gap-4">
                <a href="https://t.me/logisticspro" className="text-neutral-600 hover:text-accent transition-colors">
                  {t('telegram')}
                </a>
                <a href="https://wa.me/78001234567" className="text-neutral-600 hover:text-accent transition-colors">
                  {t('whatsApp')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Contacts;
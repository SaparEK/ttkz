'use client';
import { Phone, Mail, MessageCircle } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

const Contacts = () => {
  const { t } = useLanguage();

  return (
      <section id="contact" className="py-16 container-padding bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            {t('contact')}
          </h2>
          <p className="text-neutral-600 text-center mb-12 max-w-2xl mx-auto">
            {t('contact_text')}
          </p>

          {/* Грид-контейнер для Контактов и Карты */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Левая сторона — Контактная информация */}
            <div className="flex flex-col space-y-6">
              <a
                  href="tel:+78001234567"
                  className="glass-card p-8 rounded-xl text-center hover:shadow-lg transition-all hover:scale-105"
              >
                <Phone className="w-8 h-8 text-accent mx-auto mb-4" />
                <h3 className="font-semibold text-xl mb-2">{t('phone')}</h3>
                <p className="text-neutral-600">+7 777 323 6868</p>
              </a>
              <a
                  href="mailto:info@logisticspro.ru"
                  className="glass-card p-8 rounded-xl text-center hover:shadow-lg transition-all hover:scale-105"
              >
                <Mail className="w-8 h-8 text-accent mx-auto mb-4" />
                <h3 className="font-semibold text-xl mb-2">Email</h3>
                <p className="text-neutral-600">ttkztuotuokz@gmail.com</p>
              </a>
              <div className="glass-card p-8 rounded-xl text-center hover:shadow-lg transition-all hover:scale-105">
                <MessageCircle className="w-8 h-8 text-accent mx-auto mb-4" />
                <h3 className="font-semibold text-xl mb-2">{t('socialMedia')}</h3>
                <div className="flex justify-center gap-4">
                  <a
                      href="https://t.me/tuotuokz_bot"
                      className="text-neutral-600 hover:text-accent transition-colors"
                  >
                    {t('telegram')}
                  </a>
                  <a
                      href="https://wa.me/78001234567"
                      className="text-neutral-600 hover:text-accent transition-colors"
                  >
                    {t('whatsApp')}
                  </a>
                </div>
              </div>
            </div>

            {/* Правая сторона — Карта Google Maps */}
            <div className="w-full h-[500px] md:h-[600px] rounded-xl overflow-hidden shadow-lg">
              <iframe
                  className="w-full h-full"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d715.2392392285559!2d80.00955036966353!3d44.1873535981926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x387fa6aab048505b%3A0xa29d0ef20abdaf50!2z0YPQuy4g0J_QvtCz0YDQsNC90LjRh9C90LDRjyA2Mywg0JbQsNGA0LrQtdC90YIsINCa0LDQt9Cw0YXRgdGC0LDQvQ!5e0!3m2!1sru!2suk!4v1738599815526!5m2!1sru!2suk"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Contacts;

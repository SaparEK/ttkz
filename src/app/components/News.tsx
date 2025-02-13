'use client';
import React, { useState, useEffect } from "react";
import { ScrollArea } from "./ui/scroll-area";
import { Skeleton } from "./ui/skeleton";
import { useLanguage } from "../contexts/LanguageContext";
import Image from 'next/image';

interface NewsItem {
    id: string;
    title: string;
    description: string;
    pubDate: string;
    link: string;
    image: {
        original: string;
        thumb: string;
    };
}

const News = () => {
    const { t } = useLanguage();
    const [news, setNews] = useState<NewsItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [formattedDates, setFormattedDates] = useState<string[]>([]);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await fetch("/api/news");
                if (!response.ok) throw new Error("Ошибка загрузки новостей");

                const data: NewsItem[] = await response.json();
                setNews(data);
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
            } catch (err) {
                setError("Не удалось загрузить новости.");
            } finally {
                setLoading(false);
            }
        };

        fetchNews();
    }, []);

    // Форматируем даты только на клиенте
    useEffect(() => {
        if (news.length > 0) {
            setFormattedDates(
                news.map(item => {
                    return new Date(item.pubDate).toLocaleString("ru-RU", {
                        day: "2-digit",
                        month: "2-digit",
                        year: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                    });
                })
            );
        }
    }, [news]);

    if (error) {
        return (
            <div className="bg-red-50/10 p-4 rounded-lg">
                <p className="text-red-400">{error}</p>
            </div>
        );
    }

    return (
        <section id="news" className="py-16 bg-forest">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        {t('news')}
                    </h2>
                </div>
                <ScrollArea className="h-[500px] rounded-md border border-mint/20">
                    <div className="p-4 space-y-4">
                        {loading ? (
                            <div className="space-y-4">
                                {[...Array(5)].map((_, i) => (
                                    <div key={i} className="p-4 flex items-center gap-4 bg-white/5 rounded-lg">
                                        <Skeleton className="h-10 w-10 rounded-lg bg-white/10"/>
                                        <div className="space-y-2">
                                            <Skeleton className="h-6 w-40 bg-white/10"/>
                                            <Skeleton className="h-4 w-64 bg-white/10"/>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            news.map((item, index) => (
                                <article
                                    key={index}  // Убедитесь, что item.id уникален
                                    className="p-4 flex items-center gap-6 bg-white/5 hover:bg-white/10 transition-colors rounded-lg"
                                >
                                    <div className="relative w-24 h-24 md:w-40 md:h-40">
                                        <Image
                                            src={item.image.original}
                                            alt={item.title}
                                            fill // Заполняет контейнер
                                            className="object-cover rounded-2xl"
                                            sizes="(max-width: 600px) 100px, 200px" // Оптимизация для разных устройств
                                        />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-semibold text-mint mb-2">
                                            {item.title}
                                        </h3>
                                        <p className="text-neutral-700-300 text-base line-clamp-2">
                                            {item.description}
                                        </p>
                                        <div className="text-sm text-gray-400">
                                            {formattedDates[index] || "Дата неизвестна"}
                                        </div>
                                    </div>
                                    <a
                                        href={item.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-mint font-bold hover:text-mint/80 text-sm"
                                    >
                                        {t('readMore')} →
                                    </a>
                                </article>
                            ))
                        )}
                    </div>
                </ScrollArea>
            </div>
        </section>
    );
};

export default News;
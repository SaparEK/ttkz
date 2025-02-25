import { NextResponse } from "next/server";
import Parser from "rss-parser";

const RSS_URL = "https://tengrinews.kz/news.rss";
const FILTER_KEYWORDS = [
    "авто", "машина", "автомобиль", "Tesla", "BMW", "Mercedes", "Man", "ShacMan", "дорога", "логистика",
    "склад", "поставка", "доставка", "грузоперевозки", "груз", "перевозки", "фура", "грузовик"
];

export async function GET() {
    try {
        const parser = new Parser({
            customFields: {
                item: [["media:content", "media"]],
            },
        });

        const feed = await parser.parseURL(RSS_URL);

        const filteredNews = feed.items
            .filter((item) =>
                FILTER_KEYWORDS.some((keyword) =>
                    (item.title + " " + item.contentSnippet).toLowerCase().includes(keyword.toLowerCase())
                )
            )
            .map((item) => {
                const originalImage = item.media?.$?.url || "/placeholder_1.jpg";

                // Пробуем создать `thumb_b`, если его нет — используем оригинал
                const thumbImage = originalImage.replace("/photo_", "/thumb_b/photo_");

                return {
                    title: item.title ?? "",
                    link: item.link ?? "#",
                    pubDate: item.pubDate ?? "",
                    description: item.contentSnippet ?? "",
                    image: {
                        original: originalImage,
                        thumb: thumbImage, // Миниатюра, если доступна
                    },
                };
            });

        return NextResponse.json(filteredNews.length ? filteredNews : { message: "Нет подходящих новостей" });
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
        return NextResponse.json({ error: "Ошибка загрузки новостей" }, { status: 500 });
    }
}

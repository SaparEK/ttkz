import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const hero = Inter({
    subsets: ['latin'],
    weight: '300', // Light
    variable: '--font-hero', // CSS-переменная
});



export const metadata: Metadata = {
    title: "TTKZ | tuotuokz",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={hero.variable}>
        <head>
            {/* Подключаем шрифт Julius Sans One */}
            <link href="https://fonts.googleapis.com/css2?family=Hero:wght@300&display=swap" rel="stylesheet"/>
        </head>
        <body className="font-hero antialiased">
        {children}
        </body>
        </html>
    );
}

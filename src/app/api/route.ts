import { NextResponse } from "next/server";
// import prisma from "../lib/prisma"; // Убедитесь, что Prisma клиент настроен
export async function POST(request: Request) {
    try{
        const body = await request.json();
        const {name, phone} = body;
        if (!name || !phone) {
            return NextResponse.json({ error: "Name and email are required" }, { status: 400 });
        }
        // const newUser = await prisma.user.create({
        //     data: {
        //         name,
        //         phone,
        //     },
        // });
        // Возвращаем ответ с сохранёнными данными
        await sendMessage('1022603049', 'Его номер телефона: '+phone);

        // return NextResponse.json(newUser, { status: 201 });
    } catch (error) {
        console.error("Error saving data:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}

const sendMessage = async (chatId: string, message:string) => {
    const BOT_TOKEN = ""; // Замените на токен вашего бота
    const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

    const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            chat_id: chatId,
            text: message,
        }),
    });

    if (!response.ok) {
        console.error("Failed to send message", await response.text());
    } else {
        console.log("Message sent successfully");
    }
};


import { NextResponse } from "next/server";
import { Pool } from "pg";

// Подключение к базе данных
const pool = new Pool({
    connectionString: process.env.DATABASE_URL, // Используй переменную окружения
});
export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, phone } = body;

        if (!name || !phone) {
            return NextResponse.json({ error: "Name and phone are required" }, { status: 400 });
        }

        // SQL-запрос для вставки данных
        const query = `INSERT INTO users (name, phone) VALUES ($1, $2) RETURNING *`;
        const values = [name, phone];

        // Выполняем запрос
        const { rows } = await pool.query(query, values);
        const newUser = rows[0];

        // Получаем список chat_id администраторов
        const adminQuery = `SELECT chat_id FROM admins`;
        const { rows: admins } = await pool.query(adminQuery);

        // Отправляем сообщение каждому администратору
        for (const admin of admins) {
            await sendMessage(admin.chat_id, `Новый клиент!\nИмя: ${name}\nТелефон: ${phone}`);
        }

        return NextResponse.json(newUser, { status: 201 });
    } catch (error) {
        console.error("Error saving data:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}

const sendMessage = async (chatId: string, message:string) => {
    const BOT_TOKEN = process.env.TELEGRAM_BOT_API_KEY; // Замените на токен вашего бота
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


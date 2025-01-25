'use client';
import React, { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useLanguage } from "@/contexts/LanguageContext";
import {useIsMobile} from "@/hooks/use-mobile";
import { handleOpenAIResponse } from "@/utils/openAi"; // Укажите правильный путь

interface Message {
    text: string;
    isBot: boolean;
    type?: "buttons" | "text" | "input";
    buttons?: string[];
}

const Chatbot = () => {
    const {t} = useLanguage();
    const { language } = useLanguage();
    const isMobile = useIsMobile();
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([]);
    const [isTyping, setIsTyping] = useState(false);
    const [userInput, setUserInput] = useState("");
    const [currentStep, setCurrentStep] = useState<"initial" | "name" | "phone" | "chatgpt" | "complete">("initial");
    const messagesEndRef = useRef<HTMLDivElement>(null);


    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    const saveUserData = async (name: string, phone: string) => {
        try {
            const response = await fetch("/api", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name, phone }),
            });

            if (!response.ok) {
                throw new Error("Failed to save user data");
            }

            const data = await response.json();
            console.log("User saved:", data);
        } catch (error) {
            console.error("Error saving user data:", error);
        }
    };

    useEffect(() => {
        if (isOpen) {
            setMessages([
                {
                    text: t('welcome'),
                    isBot: true,
                    type: "buttons",
                    buttons: [
                        t('chat_buttons_contactOperator'),
                        t('chat_buttons_other'),
                    ],
                },
            ]);
        }
    }, [isOpen, language, t]);

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const validatePhone = (phone: string) => {
        const phoneRegex = /^\+?[\d\s-]{10,}$/;
        return phoneRegex.test(phone);
    };

    const handleUserInput = async (input: string) => {
        if (!input.trim()) return;

        setMessages((prev) => [...prev, { text: input, isBot: false }]);
        setUserInput(""); // Очищаем строку ввода
        setIsTyping(true);
        if (currentStep === "chatgpt") {
            try {
                // Передача вопроса в OpenAI
                const botResponse = await handleOpenAIResponse(input, language);

                setTimeout(() => {
                    setIsTyping(false);
                    setMessages((prev) => [
                        ...prev,
                        { text: botResponse, isBot: true },
                    ]);
                }, 500);
            } catch {
                setTimeout(() => {
                    setIsTyping(false);
                    setMessages((prev) => [
                        ...prev,
                        { text: "Извините, произошла ошибка. Попробуйте ещё раз.", isBot: true },
                    ]);
                }, 500);
            }
            return;
        }

        if (currentStep === "name") {
            setTimeout(() => {
                setIsTyping(false);
                setMessages((prev) => [...prev, { text: t('chat_askPhone'), isBot: true }]);
                setCurrentStep("phone");
                setUserInput("");
            }, 500);
            return;
        }

        if (currentStep === "phone") {
            if (!validatePhone(input)) {
                setTimeout(() => {
                    setIsTyping(false);
                    setMessages((prev) => [...prev, { text: t('chat_invalidPhone'), isBot: true }]);
                }, 500);
                return;
            }
            setTimeout(() => {
                setIsTyping(false);
                const userName = messages.find((msg) => !msg.isBot)?.text || "Unknown";
                saveUserData(userName, input);

                setMessages((prev) => [
                    ...prev,
                    { text: t('chat_successMessage'), isBot: true },
                    {
                        text: t('welcome'),
                        isBot: true,
                        type: "buttons",
                        buttons: [
                            t('chat_buttons_contactOperator'),
                            t('chat_buttons_other'),
                        ],
                    },
                ]);
                setCurrentStep("initial");
                setUserInput("");
            }, 500);
            return;
        }

        setUserInput("");
        setIsTyping(false);
    };

    const handleButtonClick = async (buttonText: string) => {
        setMessages((prev) => [...prev, { text: buttonText, isBot: false }]);

        if (buttonText === t('chat_buttons_contactOperator')) {
            setTimeout(() => {
                setMessages((prev) => [
                    ...prev,
                    { text: t('chat_consent'), isBot: true },
                    { text: t('chat_askName'), isBot: true },
                ]);
                setCurrentStep("name");
            }, 500);
        }

        if (buttonText === t('chat_buttons_other')) {
            // Прекращение текущей логики "Связаться с оператором"
            setCurrentStep("chatgpt");

            setTimeout(() => {
                setMessages((prev) => [
                    ...prev,
                    { text: t('chat_askQuestion'), isBot: true }, // Спрашиваем: Какие у вас вопросы?
                ]);
            }, 500);
        }
    };

    return (
        <div className="fixed bottom-4 right-4 z-50">
            {isOpen && (
                <div
                    className={`
                w-[90vw] sm:w-[440px] flex flex-col border border-gray-300 shadow-lg rounded-2xl
                ${isMobile ? "h-[80vh]" : "h-[600px]"}
                bg-white
            `}
                >
                    <div className="bg-primary p-4 text-white rounded-t-2xl">
                        <h3 className="font-semibold">{t('chat_title')}</h3>
                    </div>
                    <div className="flex-1 overflow-y-auto p-4 space-y-4">
                        {messages.map((message, index) => (
                            <div
                                key={index}
                                className={`flex ${message.isBot ? "justify-start" : "justify-end"} animate-fade-in-chat`}
                            >
                                <div
                                    className={`rounded-xl p-3 max-w-[80%] ${
                                        message.isBot ? "bg-gray-100" : "bg-primary text-white"
                                    }`}
                                >
                                    <p>{message.text}</p>
                                    {message.type === "buttons" && message.buttons && (
                                        <div className="space-y-2 mt-2">
                                            {message.buttons.map((button, idx) => (
                                                <Button
                                                    key={idx}
                                                    className="w-full transition-transform hover:scale-105 bg-[#8989DE] text-[#ffffff]"
                                                    onClick={() => handleButtonClick(button)}
                                                >
                                                    {button}
                                                </Button>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                        {isTyping && (
                            <div className="flex justify-start animate-fade-in">
                                <div className="bg-gray-100 rounded-xl p-3">
                                    <p>{t('chat_typing')}</p>
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef}/>
                    </div>
                    <div className="p-4 border-t bg-gray-100 rounded-b-2xl">
                        <div className="flex space-x-2">
                            <Input
                                value={userInput}
                                onChange={(e) => setUserInput(e.target.value)}
                                onKeyPress={(e) => {
                                    if (e.key === "Enter" && userInput.trim()) {
                                        handleUserInput(userInput.trim());
                                    }
                                }}
                                placeholder={t('chat_placeholder')}
                                className="flex-1"
                            />
                            <Button
                                onClick={() => userInput.trim() && handleUserInput(userInput.trim())}
                                className="transition-transform hover:scale-105"
                            >
                                {t('chat_send')}
                            </Button>
                        </div>
                    </div>
                </div>
            )}
            <Button
                onClick={() => setIsOpen(!isOpen)}
                className="rounded-full w-12 h-12 shadow-lg transition-transform hover:scale-105"
            >
                {isOpen ? "×" : "💬"}
            </Button>
        </div>
    );
};

export default Chatbot;
'use client';
import { companyInfo, faqAnswers, faqQuestions} from "./companyInfo";
import { translations} from "./translations";
const handleOpenAIResponse = async (message: string, language: string) => {
  const apiKey = process.env.NEXT_PUBLIC_OPENAI_API_KEY;
  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          {
            role: 'system',
            content: generatePrompt(message, language)
          },
        ],
        temperature: 0.7,
        max_tokens: 150
      }),
    });

    const data = await response.json();
    return data.choices[0].message.content;
  } catch (error) {
    console.error('Error calling OpenAI:', error);
    return 'Извините, произошла ошибка. Пожалуйста, попробуйте позже.';
  }
};

const generatePrompt = (userMessage: string, language:string) => {
  const answerLanguage = language === 'ru'
      ? 'Отвечай на русском'
      : 'Отвечай на английском';
  return `
  ${translations.ru.chatgpt_start} 
  ${companyInfo.ru}. Вот популярные вопросы про компанию: ${faqQuestions.ru} и ответы на них ${faqAnswers}.
  ${translations.ru.chatgpt_answer} 
  ${userMessage} 
  ${translations.ru.chatgpt_end} 
  ${answerLanguage}`;

};

export { handleOpenAIResponse };
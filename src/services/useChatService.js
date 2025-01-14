import { useState } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';

const useChatService = () => {
  const [inputValue, setInputValue] = useState('');
  const [promptResponses, setPromptResponses] = useState([]);
  const [loading, setLoading] = useState(false);

  // Ambil keyAI dari file .env
  const keyAI = import.meta.env.VITE_KEY_AI;
  const genAI = new GoogleGenerativeAI(keyAI);

  const getResponseForGivenPrompt = async () => {
    try {
      setLoading(true);
      const model = genAI.getGenerativeModel({ model: "gemini-pro" });
      const result = await model.generateContent(inputValue);
      const response = result.response.text();
      setPromptResponses([...promptResponses, { type: 'user', text: inputValue }, { type: 'ai', text: response }]);
      setInputValue('');
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  return { inputValue, setInputValue, promptResponses, loading, getResponseForGivenPrompt };
};

export default useChatService;

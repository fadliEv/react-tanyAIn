import { useState } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';

const useChatService = () => {
    const [inputValue, setInputValue] = useState('');
    const [promptResponses, setPromptResponses] = useState([]);
    const [loading, setLoading] = useState(false);
  
    const genAI = new GoogleGenerativeAI(import.meta.env.VITE_KEY_AI);
  
    const getResponseForGivenPrompt = async () => {
      if (!inputValue.trim()) return;
  
      // Tambahkan pertanyaan pengguna ke dalam bubble chat
      setPromptResponses((prev) => [
        ...prev,
        { type: 'user', text: inputValue },
      ]);
  
      // Kosongkan input field dan aktifkan loading
      setInputValue('');
      setLoading(true);
  
      try {
        const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
        const result = await model.generateContent(inputValue);
        const response = result.response.text();
  
        // simpan respons AI ke dalam bubble chat
        setPromptResponses((prev) => [
          ...prev,
          { type: 'ai', text: response },
        ]);
      } catch (error) {
        console.error('Error:', error);
        setPromptResponses((prev) => [
          ...prev,
          { type: 'ai', text: 'Something went wrong. Please try again.' },
        ]);
      } finally {
        setLoading(false);
      }
    };
  
    return { inputValue, setInputValue, promptResponses, loading, getResponseForGivenPrompt };
  };
  
  export default useChatService;

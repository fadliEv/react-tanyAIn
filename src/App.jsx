import React from 'react';
import ChatWindow from './components/ChatWindow';
import InputText from './components/InputText';
import useChatService from './services/useChatService';
import ResponseFormatter from './components/ResponseFormatter';

function App() {
  const {
    inputValue,
    setInputValue,
    promptResponses,
    loading,
    getResponseForGivenPrompt,
  } = useChatService();

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      getResponseForGivenPrompt();
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex flex-col max-w-3xl w-full h-[600px] bg-white rounded-lg shadow-lg overflow-hidden">  
      <div className="bg-blue-500 text-white text-center p-4 font-semibold text-lg">
          Tanyain Aja
        </div>
        <ChatWindow 
          promptResponses={promptResponses.map(response => ({
            ...response,
            formattedText: <ResponseFormatter text={response.text} />
          }))} 
          loading={loading} 
        />
        <InputText
          inputValue={inputValue}
          setInputValue={setInputValue}
          getResponseForGivenPrompt={getResponseForGivenPrompt}
          handleKeyPress={handleKeyPress}
          loading={loading}
        />
      </div>
    </div>
  );
}


export default App

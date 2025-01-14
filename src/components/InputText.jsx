import React from 'react';

function InputText({ inputValue, setInputValue, getResponseForGivenPrompt, handleKeyPress }) {
  return (
    <div className="flex items-center p-4 bg-gray-100 border-t border-gray-300">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Ask me something..."
        className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        onClick={getResponseForGivenPrompt}
        className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
      >
        Send
      </button>
    </div>
  );
}

export default InputText;

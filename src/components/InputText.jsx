import React from 'react';

function InputText(
    { 
        inputValue,
        setInputValue,
        getResponseForGivenPrompt,
        handleKeyPress,
        loading,
    }) {
  return (
    <div className="p-4 bg-gray-100 border-t border-gray-300 flex items-center">
    <input
      type="text"
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      onKeyPress={handleKeyPress}
      placeholder="Type your question here..."
      className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      disabled={loading} // Nonaktifkan input saat loading
    />
    <button
      onClick={getResponseForGivenPrompt}
      className={`ml-2 px-4 py-2 rounded-lg ${
        loading
          ? 'bg-gray-400 text-white cursor-not-allowed'
          : 'bg-blue-500 text-white hover:bg-blue-600'
      }`}
      disabled={loading} // Nonaktifkan tombol saat loading
    >
      Send
    </button>
  </div>
  );
}

export default InputText;

import React from 'react';
import ResponseFormatter from './ResponseFormatter';

function ChatWindow({ promptResponses, loading }) {
  return (
    <div className="flex-1 p-4 overflow-y-auto bg-white flex flex-col">
      {promptResponses.length === 0 ? (
        <div className="flex items-center justify-center text-gray-500 text-center h-full">
          <div>
            <h1 className="text-2xl font-semibold">Welcome to the Chat!</h1>
            <p>Type a message below to start the conversation.</p>
          </div>
        </div>
      ) : (
        promptResponses.map((response, index) => (
          <div
            key={index}
            className={`p-3 rounded-lg max-w-xs mb-3 ${
              response.type === 'user'
                ? 'bg-blue-500 text-white self-end'
                : 'bg-gray-200 text-gray-800 self-start'
            }`}
          >
            <ResponseFormatter text={response.text} />
          </div>
        ))
      )}
      {loading && (
        <div className="p-3 rounded-lg max-w-xs bg-gray-200 text-gray-800 self-start">
          <div className="animate-spin h-5 w-5 border-4 border-blue-500 border-t-transparent rounded-full"></div>
        </div>
      )}
    </div>
  );
}

export default ChatWindow;
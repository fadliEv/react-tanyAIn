import React, { useEffect, useRef } from 'react';
import ResponseFormatter from './ResponseFormatter';

function ChatWindow({ promptResponses, loading }) {
  const chatContainerRef = useRef(null);

  // Scroll ke bawah otomatis ketika ada perubahan pada promptResponses atau loading
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [promptResponses, loading]);

  return (
    <div
      ref={chatContainerRef}
      className="flex-1 p-4 overflow-y-auto bg-gray-100 flex flex-col"
    >
      {promptResponses.length === 0 ? (
        // Greeting tetap ditampilkan ketika tidak ada pesan
        <div className="flex items-center justify-center text-gray-500 text-center h-full">
          <div>
            <h1 className="text-2xl font-semibold">Welcome to the Chat!</h1>
            <p>Type a message below to start the conversation.</p>
          </div>
        </div>
      ) : (
        <>
          {promptResponses.map((response, index) => (
            <div
              key={index}
              className={`relative max-w-xs p-3 mb-3 rounded-lg ${
                response.type === 'user'
                  ? 'self-end bg-blue-500 text-white rounded-bl-[20px] shadow-md'
                  : 'self-start bg-white text-gray-800 rounded-br-[20px] shadow-md'
              }`}
              style={{
                borderRadius: '20px',
                borderBottomRightRadius:
                  response.type === 'user' ? '0' : '30px',
                borderBottomLeftRadius:
                  response.type === 'ai' ? '0' : '30px',
              }}
            >
              <ResponseFormatter text={response.text} />
            </div>
          ))}
          {loading && (
            <div
              className="relative max-w-xs p-3 mb-3 bg-gray-200 text-gray-800 self-start rounded-lg"
              style={{
                borderRadius: '20px',
                borderBottomRightRadius: '0',
              }}
            >
              <div className="animate-spin h-5 w-5 border-4 border-blue-500 border-t-transparent rounded-full"></div>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default ChatWindow;

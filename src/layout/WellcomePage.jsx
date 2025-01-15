import React from 'react';
import { useNavigate } from 'react-router-dom';

function WellcomePage() {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate('/chats'); // Navigasi ke halaman /chats
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-semibold text-blue-600 mb-6">
        Selamat Datang di TanyAIn Apa Aja!
      </h1>
      <button
        onClick={handleNext}
        className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600"
      >
        Next
      </button>
    </div>
  );
}

export default WellcomePage
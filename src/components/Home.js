import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="text-center mt-10">
      <h1 className="text-3xl font-bold mb-4">Welcome to HireWithKrishna</h1>
      <button
        onClick={() => navigate("/resume-form")}
        className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
      >
        Get Started
      </button>
    </div>
  );
}

export default Home;
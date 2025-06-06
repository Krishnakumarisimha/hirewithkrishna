import React from 'react';

function Home() {
  const handleStart = () => {
    window.open(
      'https://docs.google.com/forms/d/e/1FAIpQLSd_CnORSMcmuSlh4JpKtBU7jqu7kBnuj9gybMYtjS9R4WHD6w/viewform',
      '_blank'
    );
  };

  return (
    <div className="text-center mt-10">
      <h1 className="text-3xl font-bold mb-4">Welcome to HireWithKrishna</h1>
      <button
        onClick={handleStart}
        className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
      >
        Get Started
      </button>
    </div>
  );
}

export default Home;
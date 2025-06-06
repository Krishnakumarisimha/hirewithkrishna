import React from 'react';

function Home() {
  const handleStart = () => {
    window.open(
      'https://docs.google.com/forms/d/e/1FAIpQLSd_CnORSMcmuSlh4JpKtBU7jqu7kBnuj9gybMYtjS9R4WHD6w/viewform',
      '_blank'
    );
  };

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        backgroundColor: '#f8f9fa',
        fontFamily: 'Arial, sans-serif'
      }}
    >
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Welcome to HireWithKrishna</h1>
      <button
        onClick={handleStart}
        style={{
          padding: '12px 24px',
          fontSize: '16px',
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
      >
        Get Started
      </button>
    </div>
  );
}

export default Home;
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import ResumeForm from './components/ResumeForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume-form" element={<ResumeForm />} />
      </Routes>
    </Router>
  );
}

export default App;
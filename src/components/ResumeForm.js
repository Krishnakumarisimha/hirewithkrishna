import React, { useState } from 'react';
import './ResumeForm.css'; // Make sure to create and import CSS file

function ResumeForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    resume: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted:', formData);
    alert("Resume Submitted Successfully ✅");

    // Integrate with Google Sheets / API later
  };

  return (
    <form className="resume-form" onSubmit={handleSubmit}>
      <h2 className="form-title">Resume Form</h2>
      <input
        className="form-input"
        name="name"
        type="text"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        required
      /><br />

      <input
        className="form-input"
        name="email"
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
      /><br />

      <input
        className="form-input"
        name="phone"
        type="tel"
        placeholder="Phone Number"
        value={formData.phone}
        onChange={handleChange}
        required
      /><br />

      <input
        className="form-input"
        name="resume"
        type="text"
        placeholder="Paste Resume Link"
        value={formData.resume}
        onChange={handleChange}
        required
      /><br />

      <button className="form-button" type="submit">Submit</button>
    </form>
  );
}

export default ResumeForm;
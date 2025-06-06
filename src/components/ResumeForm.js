import React, { useState } from 'react';

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
    alert("Resume submitted successfully ✅");
    console.log('Form Data:', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Resume Form</h2>
      <input name="name" placeholder="Name" value={formData.name} onChange={handleChange} required /><br />
      <input name="email" placeholder="Email" value={formData.email} onChange={handleChange} required /><br />
      <input name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} required /><br />
      <input name="resume" placeholder="Resume Link" value={formData.resume} onChange={handleChange} required /><br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default ResumeForm;
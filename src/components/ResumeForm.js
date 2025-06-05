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
    console.log('Submitted:', formData);
    alert("Resume Submitted Successfully ✅");

    // You can integrate Google Sheets API or Webhook here.
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: '0 auto' }}>
      <h2>Resume Form</h2>
      <input name="name" type="text" placeholder="Name" value={formData.name} onChange={handleChange} required /><br /><br />
      <input name="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange} required /><br /><br />
      <input name="phone" type="tel" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required /><br /><br />
      <input name="resume" type="text" placeholder="Paste Resume Link" value={formData.resume} onChange={handleChange} required /><br /><br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default ResumeForm;
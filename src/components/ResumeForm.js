import React, { useState } from 'react';

function ResumeForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    resumeLink: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Resume submitted successfully ✅");
    // Google Sheet integration or EmailJS/webhook integration cheyavachu
  };

  return (
    <div style={{ maxWidth: "500px", margin: "auto", paddingTop: "50px" }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Submit Your Resume</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          type="text"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          style={{ width: "100%", marginBottom: "10px", padding: "10px" }}
        />
        <input
          name="email"
          type="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
          style={{ width: "100%", marginBottom: "10px", padding: "10px" }}
        />
        <input
          name="phone"
          type="tel"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
          style={{ width: "100%", marginBottom: "10px", padding: "10px" }}
        />
        <input
          name="resumeLink"
          type="text"
          placeholder="Google Drive Resume Link"
          value={formData.resumeLink}
          onChange={handleChange}
          required
          style={{ width: "100%", marginBottom: "20px", padding: "10px" }}
        />
        <button
          type="submit"
          style={{
            width: "100%",
            padding: "12px",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "5px"
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default ResumeForm;
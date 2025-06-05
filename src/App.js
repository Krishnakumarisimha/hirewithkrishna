import React from "react";
import { SpeedInsights } from "@vercel/speed-insights/react";

function App() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Welcome to HireWithKrishna!</h1>
      <p>We offer resume writing services.</p>
      <button
        onClick={() => alert("Thank you for showing interest!")}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          backgroundColor: "#4CAF50",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer"
        }}
      >
        Get Started
      </button>
      <SpeedInsights />
    </div>
  );
}

export default App;
export default App;

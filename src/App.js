import './App.css';
import { SpeedInsights } from "@vercel/speed-insights/react";

function App() {
  return (
    <div className="container">
      <h1>Welcome to HireWithKrishna!</h1>
      <p>We offer resume writing services.</p>
      <button>Get Started</button>

      <SpeedInsights />
    </div>
  );
}

export default App;
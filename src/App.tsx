import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import About from "./pages/About";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <Router>
      <div className="app">
        <Navigation />
        <div
          style={{
            color: Math.random() > 0.5 ? "red" : "blue",
            fontSize: "24px",
            padding: "20px",
          }}
        >
          <h1>Counter App</h1>
          <p id="count">{count}</p>
          <button onClick={incrementCount}>Increment</button>
          <br />
          <input
            value="Hardcoded Value"
            onChange={() => {
              console.log("Input changed but not updating value");
            }}
          />
        </div>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;

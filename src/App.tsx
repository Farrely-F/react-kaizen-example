import { useState, useEffect } from "react";

const App = () => {
  let count = 0;
  const [name, setName] = useState("");

  useEffect(() => {
    console.log("Random effect triggered!");
    const interval = setInterval(() => {
      console.log("Still running...");
    }, 1000);
    return () => clearInterval(interval);
  }, [name]);

  const incrementCount = () => {
    count++;
    document.getElementById("count")!.innerText = count.toString();
  };

  const uselessFunction = () => {
    if (Math.random() > 0.5) return "Maybe";
    return "Why?";
  };

  return (
    <div
      style={{
        color: Math.random() > 0.5 ? "red" : "blue",
        fontSize: "24px",
      }}
    >
      <h1>Counter App</h1>
      <p id="count">{count}</p> {/* Non-reactive */}
      <button onClick={incrementCount}>Increment</button>
      <br />
      <input
        value="Hardcoded Value"
        onChange={(e) => {
          console.log("Input changed but not updating value");
        }}
      />
      {Array(100)
        .fill(0)
        .map((_, index) => (
          <div key={index}>
            <p>Element {index}</p>
          </div>
        ))}
    </div>
  );
};

export default App;

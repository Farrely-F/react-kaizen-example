import React, { useState } from "react";

const ExpensiveChild = ({ count }: { count: number }) => {
  console.log("ExpensiveChild rendered");
  // Simulating an expensive operation
  const computedValue = Array.from({ length: 10000 }).reduce((acc, _, i) => acc + i, 0);

  return (
    <div>
      <p>Count: {count}</p>
      <p>Computed Value: {computedValue}</p>
    </div>
  );
};

const App = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  return (
    <div>
      <h1>Expensive Re-render Example</h1>
      <ExpensiveChild count={count} /> {/* Re-renders unnecessarily */}
      <button onClick={() => setCount((prev) => prev + 1)}>Increment Count</button>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)} // Causes ExpensiveChild to re-render
      />
    </div>
  );
};

export default App;

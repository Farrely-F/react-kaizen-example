import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0); // Proper state management

  // Event handlers
  const incrementCount = () => setCount((prev) => prev + 1);
  const resetCount = () => setCount(0);

  return (
    <div className="container">
      <h1>Counter App</h1>
      <p className="count-display">{count}</p>
      <div className="button-group">
        <button onClick={incrementCount} className="button increment">
          Increment
        </button>
        <button onClick={resetCount} className="button reset">
          Reset
        </button>
      </div>
    </div>
  );
};

export default App;

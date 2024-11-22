function App() {
  let count = 0; // State not managed properly

  // Directly manipulating DOM
  const incrementCount = () => {
    const countElement = document.getElementById("count");
    countElement.innerText = parseInt(countElement.innerText) + 1;
  };

  // Inline styles and logic mixed in JSX
  return (
    <div style={{ margin: "20px", padding: "10px", backgroundColor: "lightgray" }}>
      <h1>Counter App</h1>
      <p id="count">{count}</p> {/* Not reactive */}
      <button
        onClick={incrementCount}
        style={{
          backgroundColor: "blue",
          color: "white",
          padding: "10px",
          fontSize: "16px",
          border: "none",
        }}
      >
        Increment Count
      </button>
      <button onClick={() => alert("Reset feature not implemented")}>Reset</button>
    </div>
  );
}

export default App;

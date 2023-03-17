import { useState } from "react";
import "./styles.css";

export default function App() {
  const [status, setStatus] = useState(false);

  function handleClick() {
    setStatus(!status);
    // Check that the value changes correctly.
    console.log(status);
  }

  return (
    <main>
      <div className={`box ${status ? "box--active" : ""}`} />
      <button onClick={handleClick}>
        {status ? "Activate" : "Deactivate"}
      </button>
    </main>
  );

  function Text() {
    return <h3>Deactivate</h3>;
  }
}

import React from "react";
import "./styles.css";

export default function App() {
  function handleClick(){
    alert("How sweet, you clicked me!")
  }
  return <Button text="Click Me!" color="red" onClick={handleClick} />;
}

function Button({ color, disabled, text, onClick }) {
  return (
    <button
      style={{ color, fontSize: "30px" }}
      type="button"
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

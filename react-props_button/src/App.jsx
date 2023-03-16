import React from "react";
import "./styles.css";

export default function App() {
  function handleClick(){
    alert("How sweet, you clicked me!")
  }
  return <Button text="Click Me!" color="red" disabled={false} onClick={handleClick} />;
}

function Button({ color, disabled, text, onClick }) {
  return (
    <button
      style={{ color, backgroundColor:"yellow", fontSize: "30px" }}
      type="button"
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

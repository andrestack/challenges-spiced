import React from "react";
import "./styles.css";

export default function App() {
  return (
    <main>
      <Button> Hello Friend </Button>
      <Button> Goodbye Friend</Button>
      <Button> Let&apos;s go!</Button>
    </main>
  );
}

function Button({ children }) {
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}

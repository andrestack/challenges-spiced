import React from "react";
import "./styles.css";

export default function App() {
  return <Sum valueA={5} valueB={5} />;
}

function Sum({ valueA, valueB }) {
  let result = valueA + valueB;
  return (
    <div>
      {valueA} + {valueB} = {result}
    </div>
  );
}

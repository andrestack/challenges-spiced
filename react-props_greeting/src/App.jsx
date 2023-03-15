import "./styles.css";

export default function App() {
  return <Greeting name="Gimena" />;
}

function Greeting({ name }) {
  return <div>Hello,{name === "Gimena" ? " Coach" : name}!</div>;
}

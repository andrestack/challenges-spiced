import "./styles.css";

export default function App() {
  return <Greeting name="Andreas" isCoach={["Klaus", "Marcell", "Gimena"]} />;
}

function Greeting({ name, isCoach }) {
  return <div>Hello,{isCoach.includes(name) ? " Coach" : name}!</div>;
}

import Card from "./components/Card";

export default function App() {
  const fruits = [
    {
      id: 101,
      name: "🍌 banana",
      color: "yellow",
    },
    {
      id: 102,
      name: "🍎 apple",
      color: "red",
    },
    {
      id: 103,
      name: "🍊 orange",
      color: "orange",
    },
    {
      id: 104,
      name: "🍈 melon",
      color: "lightgreen",
    },
    {
      id: 105,
      name: "🥑 avocado",
      color: "lightgreen",
    },
  ];

  return (
    <div className="app">
      {fruits.map(({ id, name, color }) => (
        <Card key={id} name={name} color={color} />
      ))}
    </div>
  );
}

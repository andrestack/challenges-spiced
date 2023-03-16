export function Header({ font, color, fontSize }) {
  return (
    <h1
      className="h1"
      style={{ color, backgroundColor: "#e4e8f0" }}
      fontSize={fontSize}
      font={font}
    >
      My Journal
    </h1>
  );
}

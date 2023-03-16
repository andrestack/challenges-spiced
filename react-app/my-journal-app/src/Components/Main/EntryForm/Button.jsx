export function EntryButton({ text, fontSize, backgroundColor, color }) {
  return (
    <button className="button"style={{ fontSize, backgroundColor, color }}>
      {text}
    </button>
  );
}

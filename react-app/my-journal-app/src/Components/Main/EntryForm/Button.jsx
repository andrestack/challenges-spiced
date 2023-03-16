export function EntryButton({ text, fontSize, backgroundColor, color }) {
  return (
    <>
    <div className="button__box">
    <button className="button"style={{ fontSize, backgroundColor, color }}>
      {text}
    </button>
    </div>
    </>
  );
}

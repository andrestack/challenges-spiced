export function Input({ width, height, font, color, fontSize }) {
  return (
    <form>
      <label htmlFor="Motto" font={font} color={color} fontSize={fontSize}>
        Motto
      </label>
      <input type="text" width={width} height={height} />
    </form>
  );
}

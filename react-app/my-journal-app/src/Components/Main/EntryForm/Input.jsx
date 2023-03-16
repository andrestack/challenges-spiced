export function Input({ width, height, font, color, fontSize }) {
  return (
    <form>
      <label htmlFor="Motto" font={font} color={color} fontSize={fontSize}>
        Motto
      </label>
      <br />
      <input type="text" cols="30" width={width} height={height} />
    </form>
  );
}

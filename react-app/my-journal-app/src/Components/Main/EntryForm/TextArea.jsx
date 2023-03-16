export function TextArea(font, color, fontSize) {
  return (
    <form action="">
      <label htmlFor="" font={font} color={color} fontSize={fontSize}>
        Notes
      </label>
      <br />
      <textarea name="textarea" id="textarea" cols="30" rows="10"></textarea>
    </form>
  );
}

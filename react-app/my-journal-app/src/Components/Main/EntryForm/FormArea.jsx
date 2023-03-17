export function FormArea({ font, color, fontSize }) {
  return (
    <form className="Form">
      <label htmlFor="Motto" font={font} color={color} fontSize={fontSize}>
        Motto
      </label>
      <br />
      <input className="input__bars" type="text" />
      <br />
      <label htmlFor="" font={font} color={color} fontSize={fontSize}>
        Notes
      </label>
      <br />
      <textarea className="TextArea" name="textarea" id="textarea" cols="30" rows="10"></textarea>
    </form>
  );
}

export function FormArea({ width, height, font, color, fontSize }) {
  return (
    <form className="">
      <label htmlFor="Motto" font={font} color={color} fontSize={fontSize}>
        Motto
      </label>
      <br />
      <input className="input__bars" type="text" width={width} height={height} />
      <br />
      <label htmlFor="" font={font} color={color} fontSize={fontSize}>
        Notes
      </label>
      <br />
      <textarea name="textarea" id="textarea" cols="30" rows="10"></textarea>
    </form>
    
  );
  
}
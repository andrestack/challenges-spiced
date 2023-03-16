
export function Header({children, logo, avatar}) {
  return (
        <>
      <header className="header">{children}
      
      
      <button
        type="button"
        onClick={() => console.log("I could toggle a profile!")}
        aria-label="toggle profile"
      >
        
      </button>
    {children}</header>
    </>
  );
}

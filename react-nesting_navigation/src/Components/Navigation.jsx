export function Navigation({children}){
    <nav>{children}
        <a className="navigation__link" href="#home">
          Home
        </a>
        <a className="navigation__link" href="#about">
          About
        </a>
        <a className="navigation__link" href="#impressum">
          Impressum
        </a>
      </nav>
}
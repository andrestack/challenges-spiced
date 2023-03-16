import "./styles.css";
import { Avatar } from "./Components/Avatar";
import { Logo } from "./Components/Logo";
import { Header } from "./Components/Header";
import { Navigation } from "./Components/Navigation";
import { Link } from "./Components/Link";

export default function App() {
  return (
    <>
      <Header>
      <Logo/>
      <Navigation>

      <Link href="#home">Home</Link>
      <Link href="#about">About</Link>
      <Link href="impressum">Impressum</Link>
      </Navigation>
      <Avatar />
    </Header>
    <main>content goes here…</main>
    </>

    );
    }

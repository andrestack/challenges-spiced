import Link from "../components/Link";
import useLightsStore from "../store/lighhtsStore";

export default function HomePage() {
  const lights = useLightsStore (state => state.lights)
  
  return (
    <div>
      <h1>Home</h1>
      <p>{lights.length} are on.</p>
      <p>
        <Link href="/lights">All lights →</Link>
      </p>
      <p>
        <Link href="/actions">Quick actions →</Link>
      </p>
    </div>
  );
}

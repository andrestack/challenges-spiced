import { Image } from "./Image"

export function Avatar(){
    return (
        <Image>
        <button
        type="button"
        onClick={() => console.log("I could toggle a profile!")}
        aria-label="toggle profile"
      >
        <img className="round-image" src="src/img/avatar.jpg" alt="avatar" />
      </button>
      </Image>
    )
}
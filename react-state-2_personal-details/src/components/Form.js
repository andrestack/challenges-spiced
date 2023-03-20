import App from "../App";

export default function Form({onCreateUser}) {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    
    //NICER CODE 
    // const form = event.target;
    // const name = form.element.name.value;
    // const email = form.element.email.value;
    // onCreateUser(name, email)
    
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    onCreateUser(data.name, data.email)

 

 event.target.reset();
  
  }

  return (
    <form
      className="form"
      aria-labelledby="user-details"
      onSubmit={handleSubmit}
    >
      <h2 id="user-details">Please enter your details here!</h2>
      <label htmlFor="name">Name: </label>
      <input id="name" name="name" type="text" placeholder="John Doe" />
      <label htmlFor="email">Email: </label>
      <input id="email" name="email" type="email" placeholder="john@doe.com" />
      <button className="form__submit-button" type="submit">
        Submit
      </button>
    </form>
  );
}

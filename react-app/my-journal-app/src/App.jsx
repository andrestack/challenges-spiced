import logo from "./logo.svg";
import { Header } from "./Components/Header";
import Footer from "./Components/Footer";
import { Main } from "./Components/Main/EntryForm/Main";
import { Input } from "./Components/Main/EntryForm/Input";

import "./App.css";
import "./colors.css";

function App() {
  return (
    <>
      <Header />
      <Main>
        New Entry
        <Input width="50px" height="50px" />
      </Main>
      <Footer color="white" />
    </>
    //   <div className="App">
    //     <header className="App-header">
    //       <img src={logo} className="App-logo" alt="logo" />
    //       <p>
    //         Edit <code>src/App.js</code> and save to reload.
    //       </p>
    //       <a
    //         className="App-link"
    //         href="https://reactjs.org"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         Learn React
    //       </a>
    //     </header>
    //   </div>
    // );
  );
}

export default App;

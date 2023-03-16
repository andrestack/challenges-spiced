import logo from "./logo.svg";
import { Header } from "./Components/Header";
import Footer from "./Components/Footer";
import { Main } from "./Components/Main/EntryForm/Main";
import { Input } from "./Components/Main/EntryForm/Input";
import { TextArea } from "./Components/Main/EntryForm/TextArea";

import "./App.css";
import "./colors.css";

function App() {
  return (
    <>
      <Header />
      <Main font="Helvetica" color="#252629" fontSize="12px">
        New Entry
        <Input width="30px"/>
        <TextArea/>
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

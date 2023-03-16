// import logo from "./logo.svg";
import { Header } from "./Components/Header";
import Footer from "./Components/Footer";
import { Main } from "./Components/Main";
import { EntryButton } from "./Components/Main/EntryForm/Button";
import { TabBars } from "./Components/Main/EntrySection/TabBar1";
import { EntryList } from "./Components/Main/EntrySection/EntryList";
import { FormArea } from "./Components/Main/EntryForm/FormArea";

import "./App.css";
import "./colors.css";

function App() {
  return (
    <>
      <Header />
      <Main font="Helvetica" color="#252629" fontSize="12px">
        <h2>New Entry</h2>

        <FormArea />
        <EntryButton
          text="Create"
          fontSize="20px"
          color="#252629"
          backgroundColor="#ff4a11"
          position="center"
        />
        <br />
        <TabBars className="Tabs"/>
        <EntryList font="Hel" color="#252629" fontSize="300px" />
        <EntryList font="Helvetica" color="#252629" fontSize="300px" />
        <EntryList font="Helvetica" color="#252629" fontSize="300px" />
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

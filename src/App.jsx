import "./App.css";

import Home from "./components/Home";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Section2 from "./components/Section2";
import Collection from "./components/Collection";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Nav />
      <Section2 />
      <Collection />
      <Contact />
    </div>
  );
}

export default App;

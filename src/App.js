import React from "react"
import { Route, Switch } from "react-router-dom"
import "./App.css";
import Nav from "./components/Nav.js";
import About from "./pages/About";
import Footer from "./pages/Footer.js";
import Main from "./pages/Main";

function App() {
  return (
    <div className="App">
      <Nav className="navRoute" />
      <Switch>
        <Route path="/About">
          <About className="aboutRoute" />
        </Route>
        <Route path="/">
          <Main className="mainRoute"/>
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;

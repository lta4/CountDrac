import React from "react"
import { Route, Switch } from "react-router-dom"
import './App.css';
import Nav from "./components/Nav.js";
import Footer from "./pages/Footer.js"
import ExtraLayer from './components/ExtraLayer';

function App() {
  return (
    <div className="App">
      <Nav className="navRoute" />
      <h1>Counts' Counter</h1>
        <div>
          <ExtraLayer />
        </div>
      <h2>Hello</h2>
      <h3>to the</h3>
      <h3>captain america</h3>
      <Footer className="foot" />
    </div>
  );
}

export default App;

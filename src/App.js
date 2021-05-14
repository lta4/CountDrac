import React from "react"
import { Route, Switch } from "react-router-dom"
import './App.css';
import Nav from "./components/Nav.js";
import Footer from "./pages/Footer.js";
import ExtraLayer from './components/ExtraLayer';

function App() {
  return (
    <div className="wrapper">
      <Nav className="navRoute" />
      <Switch>
        <Route>
      <h1>Counts' Counter</h1>
        <div>
          <ExtraLayer />
        </div>
      <h2>We do the counting for you!</h2>
      <h3>Follow the storyline</h3>
      <h3>Postgres backend with storyline!</h3>
      </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;

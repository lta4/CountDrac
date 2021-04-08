import React from "react"
import { Route, Switch } from "react-router-dom"
import './App.css';
import Nav from "./components/Nav.js";
import Footer from "./pages/Footer.js"
import ExtraLayer from './components/ExtraLayer';

function App() {
  return (
    <div className="App" style={{
      backgroundImage: 'url("https://www.google.com/url?sa=i&url=https%3A%2F%2Ftwitter.com%2Fcountvoncount&psig=AOvVaw0UPIL398wSNqwl8tJ9WMfS&ust=1617947362069000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCPjQ5_T57e8CFQAAAAAdAAAAABAL")'
    }}>
      <Nav className="navRoute" />
      <h1>Counts' Counter</h1>
        <div>
          <ExtraLayer />
        </div>
      <h2>Hello</h2>
      <Footer className="footer" />
    </div>
  );
}

export default App;

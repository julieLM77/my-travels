import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Travels from "./Travels";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Travel</h1>
        </header>
        <Travels/>
      </div>
    );
  }
}

export default App;
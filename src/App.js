import "./main.css";
import React, { Component } from "react";

import Header from "./components/Header";
import Nav from "./components/Nav";

export class App extends Component {
  render() {
    return (
      <div className="h-[200vh] m-[0.5%]">
        <Nav />
        <Header />
      </div>
    );
  }
}

export default App;

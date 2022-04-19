import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import Hospital from "./features/hospital/Hospital";

function App() {
  return (
    <div className="App">
      <Hospital />
    </div>
  );
}

export default App;

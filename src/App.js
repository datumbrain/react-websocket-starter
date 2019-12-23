import React from 'react';
import logo from './logo.svg';
import './App.css';
import A from "./components/A";
import B from "./components/B";

function App() {
  return (
    <div style={{display: "flex", flexDirection: "row"}}>

      <div style={{flex: "0 0 50%", marginLeft: "15%"}}>
        <A />

      </div>

      <div style={{flex: "1"}}>
        <B />
      </div>
    </div>
  );
}

export default App;

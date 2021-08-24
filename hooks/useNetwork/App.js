import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect, useRef} from 'react';

const App = () => {
  
  const isOnline = (status) => {
    status? console.log("ONLINE") : console.log("OFFLINE")
  }
  const currentStatus = useNetwork(isOnline);

  return(
    <div className="App">
      <h1>{currentStatus? "ONLINE CURRENT" : "OFFLINE CURRENT"}</h1>
    </div>
  )
}

export default App;

import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect, useRef} from 'react';

const App = () => {
  const triggerNotification = useNotification("Check Notification.")
  return(
    <div className="App">
      <h1>HELLO</h1>
      <button onClick={triggerNotification}></button>
    </div>
  )
}

export default App;

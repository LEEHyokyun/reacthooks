import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect, useRef} from 'react';


const App = () => {

    const {protectLeave, unprotectLeave} = usePreventLeave()
  
    return(
      <div className="App">
        <button onClick={protectLeave}>LEAVE PROTECT</button>
        <button onClick={unprotectLeave}>LEAVE UNPROTECT</button>
      </div>
    )
  }
  
  export default App;
import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect, useRef} from 'react';

const usePreventLeave = () => {

  const listener = event => {
    event.preventDefault();
    event.returnValue=""
  }

  const protectLeave = () => window.addEventListener("beforeunload", listener)
  const unprotectLeave = () => window.removeEventListener("beforeunload", listener)

  return {protectLeave, unprotectLeave}
}

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

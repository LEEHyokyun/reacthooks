import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect, useRef} from 'react';

const useBeforeLeave = (checkingfunc) => {
  useEffect(()=>{
    const listener = () => console.log("CAUTION : MOUSE LEAVED")
    document.addEventListener("mouseleave", listener)

    return () => document.removeEventListener("mouseleave", listener)
  },[])
}

const App = () => {

  const checkingfunc = () => console.log("function started")
  useBeforeLeave(checkingfunc)

  return(
    <div className="App">
      <h1>HELLO!</h1>
    </div>
  )
}

export default App;

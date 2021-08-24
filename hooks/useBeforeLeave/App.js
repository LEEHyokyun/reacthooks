import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect, useRef} from 'react';

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

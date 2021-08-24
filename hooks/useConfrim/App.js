import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect, useRef} from 'react';

const App = () => {

  const confirmedAction = () => {console.log("YES")}
  const confirmResult = useConfirm("Are you sure", confirmedAction)

  return(
    <div className="App">
      <button onClick={()=>confirmResult()}>Check what happens</button>
    </div>
  )
}

export default App;

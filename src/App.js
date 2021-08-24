import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect, useRef} from 'react';

const useConfirm = (message, confirmedAction) => {
  if(typeof confirmedAction !== 'function'){
    console.log("Callback is not a functon")
    return ; //check the validity
  }

    
  const confirmAction= () => {
    let result = window.confirm(message)
    if(result) {
      confirmedAction()
    }
  }
  return confirmAction
}

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

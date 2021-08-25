import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect, useRef} from 'react';

const App = () => {

  const {y} = useScroll()

  return(
    <div className="App" style={{height : '1000vh'}}>
      <h1 style={{position: 'fixed', color: y < 200? "red" : "yellow"}}>HELLO</h1>
    </div>
  )
}

export default App

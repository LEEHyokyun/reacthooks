import logo from './logo.svg';
import './App.css';
import React, {Component, useState} from 'react';

const App = () => {
  const [count, setCount] = useState(0)
  return(
    <>
    {count}
    <button onClick={()=>setCount(count+1)}>PLUS</button>
    </>
  )
}

export default App;

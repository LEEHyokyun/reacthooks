import logo from './logo.svg';
import './App.css';
import React, {Component, useState} from 'react';

const App = () => {
  const [count, setCount] = useState(0)
  const [email, setEmail ] = useState('')
  const updateEmail = e => {
    const { target : {value} } = e
    setEmail(value)
  }
  return(
    <>
    {count}
    <button onClick={()=>setCount(count+1)}>PLUS</button>
    <input placeholder="EMAIL" value={email} onChange={updateEmail}/>
    </>
  )
}

export default App;

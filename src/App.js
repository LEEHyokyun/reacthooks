import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect, useRef} from 'react';


const useFadeIn = (duration = 1) => {

  const element = useRef();
  useEffect(()=>{
    const {current} = element
    current.style.transition = `opacity ${duration}s`
    current.style.opacity = 1
  },[])

  return {ref:element, style:{opacity:0}}
}

const App = () => {
  const h1Element = useFadeIn(2)
  const h2Element = useFadeIn(5)

  return(
    <div className="App">
      <h1 {...h1Element}>HELLO!</h1>
      <h2 {...h2Element}>HI!</h2>
    </div>
  )
}

export default App;

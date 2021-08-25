import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect, useRef} from 'react';

const useScroll = () => {
  const [coordinate, setCoordinate] = useState({
    x:0, y:0
  })
  const handler = () => {
    console.log("x: ", window.scrollX, "y: ", window.scrollY)
    setCoordinate({x: window.scrollX, y: window.scrollY})
  }
  useEffect( ()=> {    
    window.addEventListener("scroll", handler) 
    return () => window.removeEventListener("scroll",handler)
  },[])

  return coordinate
}

export default useScroll;

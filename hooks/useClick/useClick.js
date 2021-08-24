import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect, useRef} from 'react';

const useClick = (afterClicked) => {

  const element = useRef();
  useEffect( ()=> { //after rendering, run
    if(element.current){ 
      console.log(element.current)
      //it is not log, just adding event to DOM with specific function(=onClick)
      element.current.addEventListener("click", afterClicked)
    }
      return () => {
        if(element.current){
        element.current.removeEventListener("click", afterClicked)
    }}
  }, [])
  console.log(element.current) //initially run, this would be "undefined"
  return element
}

export default useClick


import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect, useRef} from 'react';

const useFullScreen = (isFull) => {
  const element = useRef()

  const triggerFullScreen = () => {
    console.log("CLICKED")
    if(element.current){
      //Be aware of requestFullscreen function's name.
      element.current.requestFullscreen()
      isFull(true)
    }
  }

  const exitFullScreen = () => {
    console.log("EXITED")
    document.exitFullscreen()
    isFull(false)
  }
  

  return {element, triggerFullScreen, exitFullScreen}
}

export default useFullScreen;

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

const App = () => {
  const isFull = (checkFactor) => {checkFactor? console.log("FULL SCREEN") : console.log("SMALL SCREEN")}
  const {element, triggerFullScreen, exitFullScreen} = useFullScreen(isFull)
  return(
    <div className="App">
      <img ref={element} src="https://cdn.crowdpic.net/list-thumb/thumb_l_FBDF262955E7B1D3F010279AC94AF0CF.jpg"/>
      <button onClick={triggerFullScreen}>FULL SCREEN</button>
      <button onClick={exitFullScreen}>EXIT SCREEN</button>
    </div>
  )
}

export default App;

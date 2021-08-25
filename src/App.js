import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect, useRef} from 'react';

const useFullScreen = () => {
  const element = useRef()

  const triggerFullScreen = () => {
    console.log("CLICKED")
    if(element.current){
      //Be aware of requestFullscreen function's name.
      element.current.requestFullscreen()
    }
  }

  const exitFullScreen = () => {
    console.log("EXITED")
    document.exitFullscreen()
  }
  

  return {element, triggerFullScreen, exitFullScreen}
}

const App = () => {
  const {element, triggerFullScreen, exitFullScreen} = useFullScreen()
  return(
    <div className="App">
      <img ref={element} src="https://cdn.crowdpic.net/list-thumb/thumb_l_FBDF262955E7B1D3F010279AC94AF0CF.jpg"/>
      <button onClick={triggerFullScreen}>FULL SCREEN</button>
      <button onClick={exitFullScreen}>EXIT SCREEN</button>
    </div>
  )
}

export default App;

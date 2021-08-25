import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect, useRef} from 'react';

//if Notification is not supported, 
// function would not work.

const useNotification = (title, options) => {
  if(!("Notification" in window)){
    console.log("This OS does not support Notification API.")
    return ;
  }

  const triggerNotification = () => {
    if(Notification.permission !== "granted"){
      Notification.requestPermission()
      .then(permission => {
        if(permission === "granted"){
          console.log("gratned")
          new Notification(title, options)
        }else{
          console.log("denied")
          return
        }
    })}
    }

    return triggerNotification
  }

const App = () => {
  const triggerNotification = useNotification("Check Notification.")
  return(
    <div className="App">
      <h1>HELLO</h1>
      <button onClick={triggerNotification}></button>
    </div>
  )
}

export default App;

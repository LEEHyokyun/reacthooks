import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect, useRef} from 'react';

const useNetwork = (logStatus) => {
  //useNetwork recognizes the network state when changed
  //this state is initially online.
  const [status, setStatus] = useState(navigator.onLine)

  useEffect( ()=> {
    
    if(typeof logStatus === "function"){
      logStatus(navigator.onLine)
    }
    const handler = () => {
      setStatus(navigator.onLine)
      //console.log("CURRENT ONLINE? " `${status}`)
    }

    window.addEventListener("online", handler)
    window.addEventListener("offline", handler)
  },[logStatus])

  return status
}

export default useNetwork

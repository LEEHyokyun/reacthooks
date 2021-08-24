import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect, useRef} from 'react';

const useBeforeLeave = (checkingfunc) => {
  useEffect(()=>{
    const listener = (event) => {
      const {clientY} = event
      if(clientY < 0){
      console.log("CAUTION : MOUSE LEAVED")
    }}
    document.addEventListener("mouseleave", listener)

    return () => document.removeEventListener("mouseleave", listener)
  },[])
}

export default useBeforeLeave;

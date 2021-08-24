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

export default useFadeIn;

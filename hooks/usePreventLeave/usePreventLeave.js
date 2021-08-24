import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect, useRef} from 'react';

const usePreventLeave = () => {

  const listener = event => {
    event.preventDefault();
    event.returnValue=""
  }

  const protectLeave = () => window.addEventListener("beforeunload", listener)
  const unprotectLeave = () => window.removeEventListener("beforeunload", listener)

  return {protectLeave, unprotectLeave}
}

export default usePreventLeave
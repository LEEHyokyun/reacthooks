import logo from './logo.svg';
import './App.css';
import React, {Component, useState} from 'react';

const useInput = (initialValue) => {

  //console.log(initialValue)
  const [value, setValue] = useState(initialValue)
  //console.log(value)
  //console.log({value})
  //as initiValue is inputted and adapted to value as object.
  const onChange = (event) => {
    const {target : {value}} = event
    setValue(value)
  }
  
  return {value, onChange}
  //it should be return as object.
}

const App = () => {

  const name = useInput("Mr.")

  return(
    <>
    <h1>Hello</h1>
    <input placeholder="Name?" {...name}/>
    </>
  )
}

export default App;

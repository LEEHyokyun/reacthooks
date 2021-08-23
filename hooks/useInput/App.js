import './App.css';
import React, {Component, useState} from 'react';

const useInput = (initialValue, validator) => {

  //console.log(initialValue, validator)
  const [value, setValue] = useState(initialValue)
  //console.log(value)
  //console.log({value})
  //as initiValue is inputted and adapted to value as object.
  const onChange = (event) => {
    const {target : {value}} = event

    //valid is basically true.
    let isValid = true

    if(typeof validator === 'function'){
      isValid = validator(value)
    }

    if(isValid){
      setValue(value)
    }
  }

  return {value, onChange}
  //it should be return as object.
}

const App = () => {
  const maxLen = (value) => {
    return value.length < 10
  }

  const name = useInput("Mr.", maxLen)

  return(
    <>
    <h1>Hello</h1>
    <input placeholder="Name?" {...name}/>
    </>
  )
}
export default App;
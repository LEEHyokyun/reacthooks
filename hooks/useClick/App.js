import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect, useRef} from 'react';

const App = () => {
    const clicked = () => console.log("Clicked!")
    const title = useClick(clicked)
    
    return(
      <div className="App">
        <h2 ref={title}>Hello</h2>
      </div>
    )
  }
  
  export default App;
  
import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect, useRef} from 'react';
import defaultAxios from 'axios'

const App = () => {
  
  const {loading, error, data, triggerRefetch} = useAxios({url:"https://yts.mx/api/v2/list_movies.json"})
  console.log("CURRENT STATE:\n", `LOADING:${loading} `, `ERROR:${error} `, `DATA:${JSON.stringify(data)}`)

  return(
    <div className="App">
      <h1>HELLO</h1>
      <button onClick={triggerRefetch}>REFETCH!</button>
    </div>
  )
}

export default App;

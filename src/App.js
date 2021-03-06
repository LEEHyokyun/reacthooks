import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect, useRef} from 'react';
import defaultAxios from 'axios'

const useAxios = (urlobject, axiosInstance = defaultAxios) => {
  //urlObject is Obejct.
  const [state, setState] = useState({
    loading : true,
    error : null,
    data : null
  })
  //refetch logic
  const [trigger, setTrigger] = useState(0)
  const triggerRefetch = () => {
    setState({
      ...state,
      loading : true
    })
    setTrigger(Date.now())
  }
  //Effect logic
  useEffect(()=>{
    axiosInstance(urlobject).then(data=>{
      setState({
        ...state,
        loading : false,
        data:data //data : data
      })
    },)
    .catch(error=>{
      console.log("error catched")
      console.log({
        loading: false,
        error : error,
        data: null
      })
    })
  },[trigger]) //if not dependency, data will continue to get data, useEffect goes in loop.

  return {...state, triggerRefetch}
}

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

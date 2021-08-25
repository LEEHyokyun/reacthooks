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

export default useAxios;

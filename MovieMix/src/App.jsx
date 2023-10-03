import { useEffect } from 'react'
import { useState } from 'react'
import { fetchData } from './utils/api'


function App() {
 useEffect(()=>{
     fetchapitesting();
 },[])
 const fetchapitesting=()=>{
    fetchData('/movie/popular')
     .then((res)=>{
      console.log(res)
      console.log("done")
     })
 }
  return (
    <>
      
    </>
  )
}

export default App

import { useEffect } from 'react'
import { useState } from 'react'
import HomePages from './Pages/HomePages'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Navbar from './Components/Navbar'
import SearchResult from './Pages/SearchResult'
import { fetchData } from './utils/api'
import { useSelector, useDispatch } from 'react-redux'
import { getApiConfiguration } from './store/homeSlice'
function App() {
  const dispatch= useDispatch()
  const fetchAPIconfig=()=>{
     fetchData("/configuration").then((res)=>{
      console.log(res);
      const url={
        backdrop:res.images.secure_base_url+"original",
        poster:res.images.secure_base_url+"original",
        profile:res.images.secure_base_url+"original",
      }
      console.log(url)
      dispatch( getApiConfiguration(url));
     })
  }
  useEffect(()=>{
        fetchAPIconfig();
  },[])
 
  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePages/>}/>
        <Route path="/search/:query" element={<SearchResult/>}/>
      </Routes>

      </BrowserRouter>
    </>
  )
}

export default App

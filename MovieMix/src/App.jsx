import { useEffect } from 'react'
import { useState } from 'react'
import HomePages from './Pages/HomePages'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Navbar from './Components/Navbar'
import SearchResult from './Pages/SearchResult'
function App() {
 
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

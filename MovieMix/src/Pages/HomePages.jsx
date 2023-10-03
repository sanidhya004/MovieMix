import React from 'react'
import './Homepage.scss'
import HeroBanner from '../Components/HeroBanner'
import Carousel from '../Components/Carousel'

const HomePages = () => {
  return (
     <>
     <HeroBanner/>
      <div className="Trending">
        <h1>Trending</h1>
         <Carousel/>
      </div>
     </>
  )
}

export default HomePages

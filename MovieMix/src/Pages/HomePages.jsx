import React from 'react'
import './Homepage.scss'
import HeroBanner from '../Components/HeroBanner'
import Carousel from '../Components/Carousel'
import Layout from '../Components/Layout'
import useFetch from '../hooks/useFetch'
import TopRated from '../Components/TopRated'
const HomePages = () => {
  const { data, loading1 } = useFetch(`/movie/popular`);

  return (
     <>
     <HeroBanner/>
     <Layout
     >

         <Carousel title="Trending" data={data?.results}/>
        <TopRated/>
     </Layout>
      <div className="Trending">

      </div>
     </>
  )
}

export default HomePages


import React from 'react'

import HeroBanner from '../Components/HeroBanner'
import Carousel from '../Components/Carousel'
import Layout from '../Components/Layout'
import useFetch from '../hooks/useFetch'
const TopRated = () => {
    const { data, loading1 } = useFetch(`/movie/top_rated`);
  return (
    <Carousel title="Top Rated" data={data?.results}/>
  )
}

export default TopRated

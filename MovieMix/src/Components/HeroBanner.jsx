import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import { AudioOutlined } from '@ant-design/icons';
import { Image } from 'antd';
import { Input, Space } from 'antd';
import { Typography } from 'antd';
const { Title } = Typography;
import { useSelector, useDispatch } from 'react-redux'
const { Search } = Input;
import './HeroBanner.scss'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import "react-lazy-load-image-component/src/effects/blur.css";
const HeroBanner = () => {
    const navigate=useNavigate()
    const[search,setSearch]=useState("")
    const[background,setBackground]=useState("")
    const {url}=useSelector((state)=>state.home)
    const {data,loading}= useFetch("/movie/upcoming")
    
  
    const searchHandler=(e)=>{
        if(e.key=="Enter" && search.length!=0){
           navigate(`/search/${search}`)
        }
    }
    useEffect(()=>{
      console.log("the one ",data)
        const bg= url.backdrop+ data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
        setBackground(bg)
     
     
    },[data])
   
  return (
    <div className='herobanner' >
        <div className="herobanner_left">
             <div className="backdrop" >
             <LazyLoadImage
      effect='blur'
      height="100%"
      src={background} // use normal <img> attributes as props
       />
             </div>
                <div className="content" >
            <h1 className='h1'>Find Flims</h1>
                <p className='p'>Fall in Love with Cinema</p>
          <div className='search'>
        <input type="text" placeholder='Search..' onChange={(e)=>{setSearch(e.target.value)}} onKeyUp={searchHandler}/>
        <button className='button'>Search</button>
          </div>
     

            </div>
        </div>
        <div className="herobanner_right" >
        <LazyLoadImage
      effect='blur'
      height="100%"
      src={background} // use normal <img> attributes as props
       />

         
        </div>
    </div>
  )
}

export default HeroBanner

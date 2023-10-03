import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import { AudioOutlined } from '@ant-design/icons';

import { Input, Space } from 'antd';
import { Typography } from 'antd';
const { Title } = Typography;

const { Search } = Input;
import './HeroBanner.scss'
const HeroBanner = () => {
    const navigate=useNavigate()
    const[search,setSearch]=useState("")
    const[background,setBackground]=useState("")
    const {data,loading}= useFetch("/movie/upcoming")
    console.log(data)
    const searchHandler=(e)=>{
        if(event.key=="Enter" && search.length!=0){
           navigate(`/search/${search}`)
        }
    }
    useEffect(()=>{
        const bg= data?.result?.[Math.floor(Math.random*20)].backdrop_path
        setBackground(bg)
    },[data])

  return (
    <div className='herobanner'>
        <div className="herobanner_left">
            <div className="content">
            <h1 className='h1'>Find Flims</h1>
                <p className='p'>Fell in Love with Cinema</p>
          <div className='search'>
        <input type="text" placeholder='Search..' onChange={(e)=>{setSearch(e.target.value)}} onKeyUp={searchHandler}/>
        <button className='button'>Search</button>
          </div>
     

            </div>
        </div>
        <div className="herobanner_right"></div>
    </div>
  )
}

export default HeroBanner

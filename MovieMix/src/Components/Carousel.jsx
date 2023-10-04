import React from "react";
import Slider from "react-slick";
import './carousel.scss'
import { useSelector, useDispatch } from 'react-redux'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import "react-lazy-load-image-component/src/effects/blur.css";
export default function Carousel({title,data}) {
  const { url } = useSelector((state) => state.home);
  var settings = {
    
    infinite: true,
    arrows:true,
    speed: 0,
    slidesToShow: 4,
    slidesToScroll: 1,
    
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  };
  
  return (
    <>
    <h1>{title}</h1>
    <Slider {...settings}>
      {data?.map((item)=>{
        console.log("item",item)
         const posterurl=item.poster_path
         ?url.poster+item.poster_path
         :""
         return (
          <div>
            <LazyLoadImage   effect='blur' src={posterurl} className="card"/>
          </div>
         )
      })}
    </Slider>
    </>
  );
}
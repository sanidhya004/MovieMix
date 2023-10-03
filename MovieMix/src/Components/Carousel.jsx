import React from "react";
import Slider from "react-slick";
import './carousel.css'
export default function Carousel() {
  var settings = {
    
    infinite: true,
    arrows:true,
    speed: 0,
    slidesToShow: 3,
    slidesToScroll: 1
  };
  return (
    <Slider {...settings}>
      <div>
        <div className="card"></div>
      </div>
      <div>
       <div className="card">dwdw</div>
      </div>
      <div>
        <div className="card">wdwd</div>
      </div>
      <div>
        <div className="card"></div>
      </div>
      <div>
       <div className="card"></div>
      </div>
      <div>
       <div className="card"></div>
      </div>
    </Slider>
  );
}
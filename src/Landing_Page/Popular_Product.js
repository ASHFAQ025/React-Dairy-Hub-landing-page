import React from 'react'
import Slider from "react-slick";

const Popular_Product = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1
    };
  return (
    <div className='container'>
    <h2 className='popular_product'>Popular products</h2>
    <Slider {...settings} className="text-center">
          <div>
       <img src="images/Group 54.png" alt="" className='w-75' />
          </div>
          <div>
          <img src="images/Group 55.png" alt="" className='w-75' />
          </div>
          <div>
          <img src="images/Group 54.png" alt="" className='w-75' />
          </div>
         
        </Slider>
    </div>
  )
}

export default Popular_Product

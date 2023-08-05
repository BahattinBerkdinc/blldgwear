import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "./slider.scss"

const Slider = () => {
  return (
    <Swiper className='slider'
      effect="fade"
            pagination={{ clickable: true }}
            navigation={true}
            modules={[Navigation, Pagination, EffectFade, Autoplay]}
            autoplay={{
                delay: 5000,
                disableOnInteraction: false,
            }}
    >
      <SwiperSlide>
      <div className="content">
        <h2>Future Style</h2>
    </div>
        <img src="https://images.pexels.com/photos/1311589/pexels-photo-1311589.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
      </SwiperSlide>
      <SwiperSlide>
      <div className="content">
        <h2>Future Design</h2>
    </div>
        <img src="https://images.pexels.com/photos/806627/pexels-photo-806627.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
      </SwiperSlide>
      <SwiperSlide>
      <div className="content">
      <h2>Future Fashion</h2>
    </div>
        <img src="https://images.pexels.com/photos/1311590/pexels-photo-1311590.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
      </SwiperSlide>
      ...
    </Swiper>
  );
};

export default Slider
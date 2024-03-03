import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';


const Hero = () => {
    return (
        <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
        >
            <SwiperSlide><img src={require('../../assets/slide1.webp')} alt='slide1' /></SwiperSlide>
            <SwiperSlide><img src={require('../../assets/slide2.webp')} alt='slide1' /></SwiperSlide>
            <SwiperSlide><img src={require('../../assets/slide3.webp')} alt='slide1' /></SwiperSlide>
            <SwiperSlide><img src={require('../../assets/slide4.webp')} alt='slide1' /></SwiperSlide>

        </Swiper>
    )
}

export default Hero
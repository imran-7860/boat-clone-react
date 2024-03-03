import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Slider() {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={require('../../assets/slide1.webp')} alt='slide' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={require('../../assets/slide2.webp')} alt='slide' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={require('../../assets/slide3.webp')} alt='slide'  />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={require('../../assets/slide4.webp')} alt='slide'  />
                </SwiperSlide>
            </Swiper>
        </>
    );
}
